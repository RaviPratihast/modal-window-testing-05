'use strict';


const openBtn=document.querySelector('.open');

const testBtn=document.querySelector('.test-btn');
const close=document.querySelector('.close');
const childElement=document.querySelector('.child-2');

console.log(testBtn)
testBtn.addEventListener("click",function(){
    console.log('clicked');
})

close.addEventListener('click',function(){
    console.log('clicked');
})