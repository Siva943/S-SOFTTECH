(function(){
  const menu=document.querySelector('.menu');
  const nav=document.querySelector('.nav-links');
  const navbar=document.querySelector('.navbar');
  if(menu && nav){
    menu.addEventListener('click',function(e){
      e.preventDefault();
      e.stopPropagation();
      nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
      menu.innerHTML=nav.classList.contains('open') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
  }
  document.querySelectorAll('.drop > button').forEach(function(btn){
    btn.addEventListener('click',function(e){
      if(window.innerWidth <= 720){
        e.preventDefault(); e.stopPropagation();
        const parent=btn.closest('.drop');
        document.querySelectorAll('.drop.open').forEach(function(x){if(x!==parent)x.classList.remove('open')});
        parent.classList.toggle('open');
      }
    });
  });
  document.querySelectorAll('.nav-links > a').forEach(function(link){
    link.addEventListener('click',function(){
      if(window.innerWidth <= 720 && nav) nav.classList.remove('open');
    });
  });
  window.addEventListener('resize',function(){
    if(window.innerWidth > 720){
      nav?.classList.remove('open');
      document.querySelectorAll('.drop.open').forEach(x=>x.classList.remove('open'));
    }
  });
  window.addEventListener('scroll',()=>navbar?.classList.toggle('scrolled',window.scrollY>20));
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');io.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
  document.querySelectorAll('.counter').forEach(el=>{
    const ob=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){
      const target=Number(el.dataset.target||0);let n=0;const step=Math.max(1,Math.ceil(target/45));
      const run=()=>{n=Math.min(target,n+step);el.textContent=n+(target>=100?'+':'');if(n<target)requestAnimationFrame(run)};run();ob.disconnect();
    }}));ob.observe(el);
  });
  document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',function(e){e.preventDefault();alert('Thank you! Please contact S SOFTTECH by phone, WhatsApp or email to continue.');form.reset()}));
})();
