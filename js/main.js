const nav=document.querySelector('.nav-links');
const menu=document.querySelector('.menu');
const bar=document.querySelector('.navbar');

function closeMenu(){
  nav?.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
  if(menu) menu.innerHTML='<i class="fa-solid fa-bars"></i>';
  document.querySelectorAll('.drop.open').forEach(d=>d.classList.remove('open'));
  document.querySelectorAll('.drop>button').forEach(b=>b.setAttribute('aria-expanded','false'));
}
menu?.addEventListener('click',()=>{
  const open=nav?.classList.toggle('open');
  menu.setAttribute('aria-expanded',open?'true':'false');
  menu.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll('.drop>button').forEach(button=>button.addEventListener('click',e=>{
  if(window.innerWidth<=950){
    e.preventDefault();
    const parent=button.parentElement;
    const isOpen=parent.classList.toggle('open');
    document.querySelectorAll('.drop').forEach(d=>{if(d!==parent)d.classList.remove('open')});
    document.querySelectorAll('.drop>button').forEach(b=>b.setAttribute('aria-expanded','false'));
    button.setAttribute('aria-expanded',isOpen?'true':'false');
  }
}));

document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
  if(window.innerWidth<=950 && !a.closest('.drop')) closeMenu();
}));
window.addEventListener('resize',()=>{if(window.innerWidth>950)closeMenu()});
window.addEventListener('scroll',()=>bar?.classList.toggle('scrolled',scrollY>20));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));

document.querySelectorAll('.counter').forEach(el=>{const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){let t=+el.dataset.target,n=0,s=Math.max(1,Math.ceil(t/45));const f=()=>{n=Math.min(t,n+s);el.textContent=n+(t>=100?'+':'');if(n<t)requestAnimationFrame(f)};f();ob.disconnect()}}));ob.observe(el)});

document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Thank you for your enquiry. Please contact S SOFTTECH by phone, WhatsApp or email.');f.reset()}));
