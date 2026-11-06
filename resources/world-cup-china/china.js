const root=document.getElementById('china-explorer');
try {
 const {mountChart}=await import("https://persistent.oaistatic.com/plugins/visualize/charts/data-analytics-plugin/1.2.1/charts/element.js");
 const response=await fetch(new URL('../../data/world-cup-china/chart-data.json',import.meta.url));
 if(!response.ok)throw new Error('China chart data unavailable');
 const payload=await response.json();
 const windowControl=document.getElementById('china-window'), roleControl=document.getElementById('china-role');
 let city,network;
 function render(){
  const state=payload[windowControl.value].roles[roleControl.value];
  document.getElementById('china-caption').textContent=state.caption;
  document.getElementById('china-overlap').textContent='Normalized city-distribution overlap: '+(100*state.overlap).toFixed(1)+'%.';
  if(city){city.config=state.city;network.config=state.network;}
  else{city=mountChart(document.getElementById('china-city-chart'),state.city);network=mountChart(document.getElementById('china-network-chart'),state.network);}
  const table=document.createElement('table');
  const head=table.createTHead().insertRow();
  for(const text of ['Network flag','Collection','Positive memberships','Share of China memberships']){const cell=document.createElement('th');cell.scope='col';cell.textContent=text;head.append(cell);}
  const body=table.createTBody();
  for(const row of state.network.rows){const tr=body.insertRow();for(const value of [row.label,row.collection,row.memberships.toLocaleString('en-US'),(100*row.share).toFixed(3)+'%'])tr.insertCell().textContent=value;}
  document.getElementById('china-network-values').replaceChildren(table);
  root.dataset.state=windowControl.value+':'+roleControl.value;
 }
 windowControl.addEventListener('change',render);roleControl.addEventListener('change',render);
 document.getElementById('china-reset').addEventListener('click',()=>{windowControl.value='first14';roleControl.value='downloaders';render();});
 render();
} catch(error){document.getElementById('china-chart-error').hidden=false;console.error(error);}
