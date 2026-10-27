// Keep original application state and handlers; move only navigation DOM into the reference-style shell.
(function(){
  function apply(){
    const workspace=document.querySelector('.workspace'),editor=document.querySelector('.editor');
    if(!workspace||!editor||document.getElementById('flora-global-ribbon'))return;
    const bar=document.createElement('div');bar.id='flora-global-ribbon';
    const ribbon=editor.querySelector('.ribbon');if(ribbon)bar.appendChild(ribbon);
    [...editor.querySelectorAll(':scope > .toolstrip')].forEach(el=>bar.appendChild(el));
    workspace.parentNode.insertBefore(bar,workspace);
    const heading=document.querySelector('.slides-panel .panel-head strong');if(heading)heading.textContent='Folien';
    const add=document.getElementById('addSlideVisualBtn');if(add){const b=add.querySelector('b');if(b)b.textContent='Folie hinzufügen';}
    document.title='Flora Deck v6.9.31';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
})();
