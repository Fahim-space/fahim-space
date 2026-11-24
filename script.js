const menu=document.querySelector('.menu');
const nav=document.querySelector('.topbar nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));}
const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:0.12});revealItems.forEach(item=>observer.observe(item));}else{revealItems.forEach(item=>item.classList.add('visible'));}
