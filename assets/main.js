function toggleMob(){
  var m=document.getElementById('mobMenu'), b=document.getElementById('mobBackdrop');
  if(!m)return;
  var open=m.classList.toggle('open');
  if(b)b.classList.toggle('open', open);
  document.body.style.overflow=open?'hidden':'';
}
// Highlight the current page in the mobile drawer
(function(){
  var page=(location.pathname.split('/').pop()||'index.html')||'index.html';
  document.querySelectorAll('.mob-nav a').forEach(function(a){
    if((a.getAttribute('href')||'')===page) a.classList.add('active');
  });
})();

// Resources dropdown (click/tap; hover handled by CSS)
document.addEventListener('click',function(e){
  var dd=document.querySelector('.nav-dropdown');if(!dd)return;
  var menu=dd.querySelector('.dd-menu');
  if(dd.contains(e.target)&&e.target.closest('.dd-toggle')){menu.classList.toggle('open');}
  else if(!dd.contains(e.target)){menu.classList.remove('open');}
});

/* FORM BACKEND — Google Apps Script web app: appends to the Virtual Ivy Leads Sheet + emails.
   Setup/script: docs/CONTACT-FORM-SETUP.md */
var FORM_ENDPOINT="https://script.google.com/macros/s/AKfycbwYC5ZMu4xK__-xsDNQYVa6Ax7xePX91hmkiVu2-OLKh163UEKNgTUzfhAo4FeZ5gzshg/exec";
function formParams(form){
  /* URL-encoded, NOT multipart: Apps Script only fills e.parameter for x-www-form-urlencoded. */
  var fd=new FormData(form),p=new URLSearchParams();
  fd.forEach(function(v,k){p.append(k,v);});
  p.append('source_page',location.pathname||'/');
  return p;
}
function postForm(form){
  return fetch(FORM_ENDPOINT,{method:'POST',body:formParams(form)}).then(function(r){return r.ok;}).catch(function(){return false;});
}
function submitForm(e){
  e.preventDefault();var form=e.target;
  var ok=document.getElementById('successMsg'),err=document.getElementById('errorMsg');
  if(ok)ok.style.display='none';if(err)err.style.display='none';
  postForm(form).then(function(s){
    if(s){if(ok)ok.style.display='block';form.reset();setTimeout(function(){if(ok)ok.style.display='none';},6000);}
    else if(err){err.style.display='block';}
  });
}
function submitLead(e){
  e.preventDefault();var form=e.target;
  postForm(form).then(function(){
    var ls=document.getElementById('leadSuccess');if(ls)ls.style.display='block';form.reset();
    setTimeout(function(){window.open('assets/kenya-hr-compliance-checklist.html','_blank','noopener');},400);
  });
}

// Auto-update copyright year
(function(){var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();})();

// Sticky consultation bar
var stickyDismissed=false;
function closeSticky(){stickyDismissed=true;var b=document.getElementById('stickyCta');if(b)b.classList.remove('show');}
var onContactPage=/contact\.html$/.test(location.pathname);
window.addEventListener('scroll',function(){
  var bar=document.getElementById('stickyCta');if(!bar||stickyDismissed||onContactPage)return;
  if(window.scrollY>650){bar.classList.add('show');}else{bar.classList.remove('show');}
});

// Lucide line icons
if(window.lucide)lucide.createIcons({attrs:{'aria-hidden':'true',focusable:'false'}});

// THEME (light/dark)
function applyThemeIcon(t){
  document.querySelectorAll('.theme-toggle i').forEach(function(ic){ic.setAttribute('data-lucide', t==='dark'?'sun':'moon');});
  if(window.lucide)lucide.createIcons({attrs:{'aria-hidden':'true',focusable:'false'}});
}
function setTheme(t){
  document.documentElement.classList.toggle('dark', t==='dark');
  try{localStorage.setItem('theme', t);}catch(e){}
  applyThemeIcon(t);
}
function toggleTheme(){
  setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
}
applyThemeIcon(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

// Scroll-reveal (progressive enhancement; respects reduced-motion)
(function(){
  if(!('IntersectionObserver' in window))return;
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var els=document.querySelectorAll('.h-head,.h-card,.h-chal-item,.h-step,.h-tcard,.h-benefit,.h-trust-inner,.h-trustedby');
  if(!els.length)return;
  els.forEach(function(el){
    el.classList.add('reveal');
    // Stagger siblings within the same container for a premium cascade
    try{
      var sibs=Array.prototype.filter.call(el.parentNode.children,function(c){return c.classList&&c.classList.contains('reveal');});
      var i=sibs.indexOf(el);
      if(i>0)el.style.transitionDelay=Math.min(i*90,450)+'ms';
    }catch(e){}
  });
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){io.observe(el);});
})();

// Animated count-up on stat numbers (respects reduced-motion)
(function(){
  if(!('IntersectionObserver' in window))return;
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var nums=document.querySelectorAll('.h-stat .num');
  if(!nums.length)return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting)return;
      var el=e.target, tn=el.firstChild;
      var target=parseInt(((tn&&tn.textContent)||'').replace(/\D/g,''),10);
      if(isNaN(target)){io.unobserve(el);return;}
      var dur=1100,start=null;
      function step(ts){
        if(start===null)start=ts;
        var p=Math.min((ts-start)/dur,1);
        tn.textContent=Math.round((1-Math.pow(1-p,3))*target);
        if(p<1){requestAnimationFrame(step);}else{tn.textContent=target;}
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  },{threshold:0.5});
  nums.forEach(function(n){io.observe(n);});
})();

/* ===== GA4 conversion events (fire only when gtag is present) ===== */
(function(){
  function track(name,params){ if(typeof window.gtag==='function'){ window.gtag('event',name,params||{}); } }
  document.addEventListener('click',function(e){
    var el=e.target.closest?e.target.closest('a,button'):null; if(!el)return;
    var href=(el.getAttribute&&el.getAttribute('href'))||'';
    var cls=((el.className||'')+'');
    if(href.indexOf('tel:')===0){ track('contact_phone',{method:'phone'}); }
    else if(href.indexOf('wa.me')>-1||href.toLowerCase().indexOf('whatsapp')>-1){ track('contact_whatsapp',{method:'whatsapp'}); }
    else if(href.indexOf('mailto:')===0){ track('contact_email',{method:'email'}); }
    else if(/contact(\.html)?($|[#?])/.test(href) && /h-btn|nav-cta|btn-primary|btn-white|mob-cta|sc-btn/i.test(cls)){
      track('book_call',{cta:(el.textContent||'').trim().slice(0,40)});
    }
  },true);
  document.addEventListener('submit',function(e){
    var f=e.target; if(!f||!f.id)return;
    if(f.id==='contactForm'){ track('generate_lead',{form:'contact'}); }
    else if(f.id==='leadForm'){ track('generate_lead',{form:'lead_magnet'}); }
  },true);
})();
