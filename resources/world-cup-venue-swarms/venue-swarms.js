/* Update only the venue comparison; preserve the surrounding report and maps. */
(async()=>{
  const host=document.getElementById('venue-swarm-explorer');if(!host)return;
  const status=document.getElementById('venue-swarm-status');
  const role=document.getElementById('venue-swarm-role');
  const network=document.getElementById('venue-swarm-network');
  const chart=document.getElementById('venue-swarm-chart');
  const format=(v,d=0)=>v.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});
  const modeNames={all:'all retained memberships','exclude-hosting':'hosting flags excluded','exclude-vpn':'VPN flags excluded'};
  let request=0;
  try{
    const response=await fetch(host.dataset.analysis);if(!response.ok)throw Error('Analysis download failed');
    const data=await response.json();
    const metros=[...data.metros].sort((a,b)=>['CAN','MEX','USA'].indexOf(a.country)-['CAN','MEX','USA'].indexOf(b.country)||a.host_city.localeCompare(b.host_city));
    function textCell(row,value){const td=document.createElement('td');td.textContent=value;row.append(td);return td;}
    async function update(){
      const current=++request,r=role.value,mode=network.value;
      const url=host.dataset.assets+r+'-'+mode+'.svg';
      status.textContent='Loading '+r+' · '+modeNames[mode]+'…';
      try{
        const response=await fetch(url);if(!response.ok)throw Error('Chart download failed');
        const svg=await response.text();if(current!==request)return;
        const parsed=new DOMParser().parseFromString(svg,'image/svg+xml');
        if(parsed.querySelector('parsererror')||parsed.documentElement.localName!=='svg')throw Error('Invalid chart');
        chart.replaceChildren(document.importNode(parsed.documentElement,true));
        document.getElementById('venue-swarm-svg').href=url;
        const tbody=document.getElementById('venue-swarm-table').tBodies[0];tbody.replaceChildren();
        for(const metro of metros){
          const row=document.createElement('tr'),v=metro.modes[mode];
          row.dataset.venue=metro.venue_id;
          textCell(row,metro.country);
          textCell(row,metro.host_city+(metro.venue_id==='san-francisco'?' (San Jose metro)':''));
          textCell(row,format(metro.population));
          textCell(row,format(v.downloaders.memberships));textCell(row,format(v.uploaders.memberships));
          textCell(row,format(v[r].per_100k,1));textCell(row,format(v[r].relative_to_country,2)+'×');
          tbody.append(row);
        }
        const title=r==='downloaders'?'Downloaders':'Uploaders';
        host.querySelector('[data-venue-rate-heading]').textContent=title+' per 100,000';
        host.querySelector('[data-venue-index-heading]').textContent=title+' rate / country';
        document.querySelector('#venue-swarm-table caption').textContent='Venue metros · '+modeNames[mode]+' · June 29–November 3, 2026';
        const national=document.getElementById('venue-national-table');national.tBodies[0].replaceChildren();
        for(const country of ['CAN','MEX','USA']){
          const n=data.national[country];const counts={};
          for(const key of ['downloaders','uploaders'])counts[key]=n.counts[key].size-(mode==='all'?0:n.counts[key][mode.replace('exclude-','')]);
          const row=document.createElement('tr');
          for(const val of [country,n.population_date,format(n.population),format(counts.downloaders),format(counts.uploaders),format(100000*counts.downloaders/n.population,1),format(100000*counts.uploaders/n.population,1)])textCell(row,val);
          national.tBodies[0].append(row);
        }
        national.caption.textContent='National baselines · '+modeNames[mode]+' · same retained geography as the venue counts';
        status.textContent=title+' · '+modeNames[mode]+'. The same network selection applies to the metro and its country.';
        host.dataset.role=r;host.dataset.network=mode;host.dataset.state='ready';
      }catch(error){status.textContent='This selection could not load. The last complete view remains available; use the CSV downloads for all comparisons.';host.dataset.state='error';}
    }
    role.addEventListener('change',update);network.addEventListener('change',update);
    host.querySelector('.wc-venue-controls').hidden=false;
    host.dataset.role='downloaders';host.dataset.network='all';host.dataset.state='ready';
  }catch(error){status.textContent='The interactive controls could not load. The default downloader chart and all-network table remain available; use the downloads for uploader and network comparisons.';}
})();
