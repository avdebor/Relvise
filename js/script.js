//scroll animation
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
}
  
let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
  
for (let elm of elements) {
    observer.observe(elm);
}

//cookie alert code 
let cookieBtn =  document.querySelector('.cookie-btn');
let cookieAlertBlock = document.querySelector('.cookie_alert');

cookieBtn.addEventListener('click', ()=>{
  localStorage.setItem('AlertShowStatus',1)
  cookieAlertBlock.remove();  
});

if(localStorage.getItem('AlertShowStatus') == 1){
  cookieAlertBlock.remove();  
}