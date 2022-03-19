const text = document.querySelector('p');
const body = document.querySelector('body');
var btn = document.querySelector('input');
var switchBtn = document.querySelector('.switch');
var d = new Date ;
var h = d.getHours();
// fonction qui switch vers mode sombre 
function darkModeToggler(){
    text.classList.toggle('darkp');
    body.classList.toggle('darkbody');
    switchBtn.classList.toggle('switch_bg');
    
}
//  Declenchement du mode sombre avec le click 
btn.addEventListener('click',darkModeToggler);

// Passage automatique vers le mode sombre entre 18 P.M et 6 A.M
if (h > 18 || h < 6) {
    darkModeToggler();
     
}
