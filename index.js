






//turn pages when click on next or prev button

const pageTurnBtn= document.querySelectorAll(".next_prev_button");

pageTurnBtn.forEach((el, index)=>{
    el.onclick=()=>{
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn')
            setTimeout(() => {
                pageTurn.style.zIndex= 20 - index;
            }, 500);
        }else{
            pageTurn.classList.add('turn')
            setTimeout(() => {
                pageTurn.style.zIndex= 20 + index;
            }, 500);
        }
    }
})



//----------->>>>>>>>>>>>>>>  go to last page after clicking on contact me

const pages = document.querySelectorAll('.book_page.page_right');
const contactMeBtn = document.querySelector('.btn.contact_me');

contactMeBtn.onclick = () =>{
    pages.forEach((page,index)=>{
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex= 20 + index;
            }, 500);
        },(index + 1) * 200 + 100);
    })
}







//----------->>>>>>>>>>>>>>>  back to first page after clicking on profile icon


//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
    
}


const backProfileBtn = document.querySelector('.back_profile');
backProfileBtn.onclick = ()=>{
    pages.forEach((_,index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
              setTimeout(() => {
                reverseIndex()
                pages[pageNumber].style.zIndex= 10 + index;
              },500);
        },(index + 1) * 200 + 100);
    })
}




//opening animation ------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const coverRight = document.querySelector(".cover.cover_right");
const pageLeft = document.querySelector(".book.page_left");

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn')
}, 2100);
setTimeout(() => {
    coverRight.style.zIndex= -1;
}, 2800);
//opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex= 20;
}, 3200);



//opening animation (all page right animation)
pages.forEach((_,index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
          setTimeout(() => {
            reverseIndex()
            pages[pageNumber].style.zIndex= 10 + index;
          },500);
    },(index + 1) * 200 + 2100);
})