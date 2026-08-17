
const nav=document.querySelector('.nav-links'),menu=document.querySelector('.menu'),bar=document.querySelector('.navbar');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.innerHTML=nav.classList.contains('open')?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>'});
document.querySelectorAll('.drop>button').forEach(b=>b.addEventListener('click',e=>{if(innerWidth<721)e.currentTarget.parentElement.classList.toggle('open')}));
addEventListener('scroll',()=>bar?.classList.toggle('scrolled',scrollY>20));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
document.querySelectorAll('.counter').forEach(el=>{const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){let t=+el.dataset.target,n=0,s=Math.max(1,Math.ceil(t/45));const f=()=>{n=Math.min(t,n+s);el.textContent=n+(t>=100?'+':'');if(n<t)requestAnimationFrame(f)};f();ob.disconnect()}}));ob.observe(el)});
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Thank you! Connect this form to your email, WhatsApp or backend before launch.');f.reset()}));

const mobileMenu=document.querySelector('.menu');
const navLinks=document.querySelector('.nav-links');
mobileMenu?.addEventListener('click',()=>navLinks?.classList.toggle('open'));
document.querySelectorAll('.drop > button').forEach(btn=>btn.addEventListener('click',e=>{if(innerWidth<=720){e.preventDefault();const d=btn.parentElement;document.querySelectorAll('.drop.open').forEach(x=>{if(x!==d)x.classList.remove('open')});d.classList.toggle('open')}}));
window.addEventListener('resize',()=>{if(innerWidth>720){navLinks?.classList.remove('open');document.querySelectorAll('.drop.open').forEach(x=>x.classList.remove('open'))}});
