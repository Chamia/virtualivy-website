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

/* FORM BACKEND (Formspree) — set your form ID below, replacing YOUR_FORM_ID. */
var FORMSPREE_ENDPOINT="https://formspree.io/f/YOUR_FORM_ID";
function postToFormspree(form){
  if(FORMSPREE_ENDPOINT.indexOf('YOUR_FORM_ID')>-1){console.warn('[Virtual Ivy] Formspree not configured yet.');return Promise.resolve(true);}
  return fetch(FORMSPREE_ENDPOINT,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}}).then(function(r){return r.ok;}).catch(function(){return false;});
}
function submitForm(e){
  e.preventDefault();var form=e.target;
  var ok=document.getElementById('successMsg'),err=document.getElementById('errorMsg');
  if(ok)ok.style.display='none';if(err)err.style.display='none';
  postToFormspree(form).then(function(s){
    if(s){if(ok)ok.style.display='block';form.reset();setTimeout(function(){if(ok)ok.style.display='none';},6000);}
    else if(err){err.style.display='block';}
  });
}
function submitLead(e){
  e.preventDefault();var form=e.target;
  postToFormspree(form).then(function(){
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
  var els=document.querySelectorAll('.h-head,.h-card,.h-chal-item,.h-step,.h-tcard,.h-benefit,.h-trust-inner');
  if(!els.length)return;
  els.forEach(function(el){el.classList.add('reveal');});
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){io.observe(el);});
})();
