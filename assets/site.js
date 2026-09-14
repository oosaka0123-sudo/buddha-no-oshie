(()=>{
const d=document,b=d.body,btn=d.querySelector('.menu-btn'),menu=d.querySelector('.menu');
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(btn&&menu){
  const setOpen=open=>{btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');menu.classList.toggle('open',open);menu.setAttribute('aria-hidden',String(!open));menu.toggleAttribute('inert',!open);b.style.overflow=open?'hidden':''};
  btn.addEventListener('click',()=>setOpen(btn.getAttribute('aria-expanded')!=='true'));
  d.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
}
if(!reduce){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
  d.querySelectorAll('.reveal').forEach(e=>io.observe(e));
}else d.querySelectorAll('.reveal').forEach(e=>e.classList.add('in'));
if(b.dataset.kicker==='HOME'&&!reduce&&innerWidth>760&&!sessionStorage.getItem('buddha-opened')){
  const l=d.createElement('link');l.rel='stylesheet';l.href='assets/opening.css';d.head.append(l);
  const o=d.createElement('div');o.className='opening';o.innerHTML='<button type="button" aria-label="オープニングをスキップ">SKIP</button><p>なぜ、人は苦しむのか。</p><span>2500 YEARS / ONE QUESTION</span>';b.append(o);b.style.overflow='hidden';
  const close=()=>{o.classList.add('leave');b.style.overflow='';sessionStorage.setItem('buddha-opened','1');setTimeout(()=>o.remove(),900)};
  o.querySelector('button').addEventListener('click',close);setTimeout(()=>o.classList.add('phase2'),700);setTimeout(close,2000);
}
})();
