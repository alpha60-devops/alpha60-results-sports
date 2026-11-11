/* Delegated exact-value access works with static and replaced native SVGs. */
const tip=document.createElement('div');
tip.className='wc-izzi-tip';tip.hidden=true;tip.setAttribute('role','status');document.body.append(tip);
let dismissed=null;
function hide(){tip.hidden=true;}
function show(target,x,y){
 dismissed=null;
 tip.textContent=target.dataset.tooltip;tip.hidden=false;
 const box=tip.getBoundingClientRect();
 tip.style.left=Math.max(12,Math.min(innerWidth-box.width-12,x+12))+'px';
 tip.style.top=Math.max(12,Math.min(innerHeight-box.height-12,y+12))+'px';
}
function showFocus(){
 const el=document.activeElement?.closest('.wc-izzi-scroll [data-tooltip]');
 if(!el)return false;
 if(el===dismissed){hide();return true;}
 const r=el.getBoundingClientRect();
 if(r.bottom>0&&r.top<innerHeight&&r.right>0&&r.left<innerWidth)show(el,r.left,r.top);else hide();
 return true;
}
document.addEventListener('pointerover',e=>{const el=e.target.closest('.wc-izzi-scroll [data-tooltip]');if(el)show(el,e.clientX,e.clientY);});
document.addEventListener('pointerout',e=>{if(e.target.closest('.wc-izzi-scroll [data-tooltip]')&&!showFocus())hide();});
document.addEventListener('click',e=>{const el=e.target.closest('.wc-izzi-scroll [data-tooltip]');if(el){const r=el.getBoundingClientRect();show(el,r.left,r.top);}});
document.addEventListener('focusin',e=>{const el=e.target.closest('.wc-izzi-scroll [data-tooltip]');if(el){const r=el.getBoundingClientRect();show(el,r.left,r.top);}});
document.addEventListener('focusout',hide);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){
 dismissed=document.activeElement?.closest('.wc-izzi-scroll [data-tooltip]');hide();
}});
document.addEventListener('change',hide);
document.addEventListener('scroll',()=>{if(!showFocus())hide();},true);
