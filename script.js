const text = document.querySelector('p');
const body = document.querySelector('body');
var btn = document.querySelector('input');
var d = new Date ;
var h = d.getHours();


//  Declenchement du mode sombre avec le click 
btn.addEventListener('click',()=>{
    
    text.classList.toggle('darkp');
    body.classList.toggle('darkbody')
})
// Passage automatique vers le mode sombre entre 18 P.M et 6 A.M
if (h > 18 || h < 6) {
    
    text.classList.toggle('darkp');
    body.classList.toggle('darkbody')
}