const root=document.getElementById('china-explorer');
try {
 const response=await fetch(new URL('../../data/world-cup-china/chart-data.json',import.meta.url));
 if(!response.ok)throw new Error('China chart data unavailable');
 const payload=await response.json();
 const windowControl=document.getElementById('china-window'), roleControl=document.getElementById('china-role');
 const cache=new Map();let generation=0;
 async function svg(name){
  if(!cache.has(name))cache.set(name,(async()=>{
   const response=await fetch(new URL('../'+name,import.meta.url));
   if(!response.ok)throw new Error('Native chart unavailable: '+name);
   const xml=new DOMParser().parseFromString(await response.text(),'image/svg+xml');
   if(xml.querySelector('parsererror')||xml.documentElement.tagName!=='svg')throw new Error('Invalid native chart');
   return xml.documentElement;
  })());
  try{return (await cache.get(name)).cloneNode(true);}catch(error){cache.delete(name);throw error;}
 }
 async function render(){
  const current=++generation,key=windowControl.value+':'+roleControl.value;
  const state=payload[windowControl.value].roles[roleControl.value];
  root.setAttribute('aria-busy','true');
  try{
   const charts=await Promise.all(['city','network'].map(kind=>svg(state[kind].svg)));
   if(current!==generation)return;
   for(const [i,kind] of ['city','network'].entries()){
    document.getElementById('china-'+kind+'-chart').replaceChildren(charts[i]);
    document.getElementById('china-'+kind+'-svg').href='../resources/'+state[kind].svg;
    document.getElementById('china-'+kind+'-spec').href='../data/world-cup-izzi/'+state[kind].specification;
   }
  document.getElementById('china-caption').textContent=state.caption;
  document.getElementById('china-overlap').textContent='Normalized city-distribution overlap: '+(100*state.overlap).toFixed(1)+'%.';
  const table=document.createElement('table');
  const head=table.createTHead().insertRow();
  for(const text of ['Network flag','Collection','Positive memberships','Share of China memberships']){const cell=document.createElement('th');cell.scope='col';cell.textContent=text;head.append(cell);}
  const body=table.createTBody();
  for(const row of state.network.rows){const tr=body.insertRow();for(const value of [row.label,row.collection,row.memberships.toLocaleString('en-US'),(100*row.share).toFixed(3)+'%'])tr.insertCell().textContent=value;}
  document.getElementById('china-network-values').replaceChildren(table);
   root.dataset.state=key;
   document.getElementById('china-chart-error').hidden=true;
  }catch(error){if(current===generation){document.getElementById('china-chart-error').hidden=false;console.error(error);}}
  finally{if(current===generation)root.setAttribute('aria-busy','false');}
 }
 windowControl.addEventListener('change',render);roleControl.addEventListener('change',render);
 document.getElementById('china-reset').addEventListener('click',()=>{windowControl.value='first14';roleControl.value='downloaders';render();});
 render();
} catch(error){document.getElementById('china-chart-error').hidden=false;console.error(error);}
