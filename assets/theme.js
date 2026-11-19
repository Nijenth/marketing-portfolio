(function(){
  var root=document.documentElement, btn=document.getElementById('themeBtn'), key='portfolio-theme';
  try{var t=localStorage.getItem(key); if(t) root.setAttribute('data-theme',t);}catch(e){}
  if(!btn) return;
  btn.addEventListener('click',function(){
    var cur=root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var next=cur==='dark'?'light':'dark'; root.setAttribute('data-theme',next);
    try{localStorage.setItem(key,next);}catch(e){}
  });
})();
