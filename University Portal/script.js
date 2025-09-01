
document.addEventListener('submit',(e)=>{if(e.target.matches('form')){e.preventDefault();alert('Form submitted (demo).')}});
document.addEventListener('click',(e)=>{
if(e.target.matches('[data-toggle]')){const id=e.target.getAttribute('data-toggle');const el=document.getElementById(id);if(el)el.style.display=el.style.display==='none'?'block':'none';}
if(e.target.matches('[data-open-dialog]')){const d=document.getElementById(e.target.getAttribute('data-open-dialog'));if(d&&d.showModal)d.showModal();}
if(e.target.matches('[data-close-dialog]')){const d=document.getElementById(e.target.getAttribute('data-close-dialog'));if(d&&d.close)d.close();}
});
