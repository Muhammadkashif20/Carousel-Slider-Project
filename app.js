// Crousel Slider Project:-

// Get ID:-
let next=document.getElementById('nextArrow')
let previous=document.getElementById('prevArrow')
let img1=document.getElementById('img1')
let count=0
let imgArr=['img/hero-bg.jpg','img/img 14','img/img 15']
next.addEventListener('click',function() {
        count++ 
        if(count>=imgArr.length){
            count=0
        }
        img1.src=imgArr[count]
})
let imgArr2=['img/img 15','img/img 14','img/hero-bg.jpg']
let coun1=0
previous.addEventListener('click',function() {
coun1++;
if(coun1>=imgArr2.length){
    coun1=0
}
img1.src=imgArr2[coun1]
})