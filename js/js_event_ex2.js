"use strict";

//배열 이용해서 .gallery>ul>li에 배경 이미지 

const gallery = document.querySelector('.gallery');
const galleryUl = document.querySelector('.gallery>ul');
const galleryLi = document.querySelectorAll('.gallery>ul>li');

const items =document.querySelector('.items');
const itemsUl =items.querySelector('ul');
const itemsLi =document.querySelectorAll('.items>ul>li');

const arrBg=[];

for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/a${i}.jpg) no-repeat 50%/ cover`);
    galleryLi[i].style.background = arrBg[i];
}
// 반복 되는 것 모듈화 하기 각 조각 내서 import css 하는것 쳐럼
// bCon클릭시 gallery가 이동

    //클릭한 li가 itemLi의 몇번째 index인가를 콘솔에 출력

/*
    itemsLi.forEach((el,idx)=>{
        el.addEventListener('click',(e)=>{
            const eTarget=e.target
            const eCTarget=e.currentTarget

            itemsLi.forEach((el2,idx2)=>{
                if(eTarget===el2){
                    console.log(`idx=${idx2}`)
                    el2.classList.add('on')
                }else{
                    el2.classList.remove('on')
                }
            });
        });
    });

*/
itemsUl.addEventListener('click',e=>{
    const eTarget=e.target


    
    itemsLi.forEach((el,idx)=>{
        if(eTarget===el){
             console.log(eTarget,"<--li")
            el.classList.add('on');


            const gap = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft
            const goto = (-gap*key)+'px'

            gallery.style.left=goto;
            gallery.style.transition='all 0.3s ease-in'


        }else{
            el.classList.remove('on')
        }
    });
})


const centerBtn = document.querySelector('.center-btn');
const arrows = centerBtn.querySelectorAll('span.arrow');

let key=0;

centerBtn.addEventListener('click',e=>{

    const eTarget = e.target;

    arrows.forEach((el,idx)=>{

        if(eTarget===el){
            console.log(el,idx)


            if(idx===0){
                //왼쪽으로 -- 

                if(key<=0) key=galleryLi.length-3;

                key--;
                console.log(`key -> ${key}`)

            const gap = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft
            const goto = (-gap*idx*key)+'px'
            gallery.style.left=goto;
            gallery.style.transition='all 0.3s ease-in'
  

                
            } else if(idx==1){
                //오른쪽 ++
                if(key>=galleryLi.length-3) key=-1;

                key++;
                console.log(`key -> ${key}`) 
                const gap = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft
                const goto = (-gap*key)+'px'
                gallery.style.left=goto;
                gallery.style.transition='all 0.3s ease-in'
            }
        }
    })
});