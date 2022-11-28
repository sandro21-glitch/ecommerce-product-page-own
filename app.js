'use strict';

const slideImages = document.querySelectorAll('.slide img');
const mainImage = document.querySelector('.main-img img');
const cartAdd = document.querySelector('.cart img');
const emptyCart = document.querySelector('.empty-cart');
const minus = document.getElementById('minus');
const amount = document.getElementById('amount');
const plus = document.getElementById('plus');
const addBtn = document.getElementById('addToCart');
const totalAmount = document.querySelector('.amount');
const totalPrice = document.querySelector('.total');
const emptyPara = document.querySelector('.empty-para');
const addedItems = document.querySelector('.added-items');
const removeBtn = document.querySelector('.remove-icon');
const countIcon = document.querySelector('.count-icon');
const mainImages = document.querySelector('.main-img');

let counter = 0
let counterValue = 0

addBtn.addEventListener('click', addToCart)

function addToCart(){
    emptyPara.classList.add('hidden')
    addedItems.classList.remove('hidden')

    counterValue = +amount.innerText
    if(counterValue < 1){
        alert('The count must be 1 or more')
        emptyPara.classList.remove('hidden')
        addedItems.classList.add('hidden')
        countIcon.classList.add('hidden')
    }else if(counterValue >= 1){
        totalAmount.innerHTML = counterValue;
        countIcon.innerText = counterValue
        countIcon.classList.remove('hidden')
        totalPrice.innerHTML = `$${counterValue * 125}.00`
    }
}

removeBtn.addEventListener('click', removeAllItem)

function removeAllItem(){
    countIcon.classList.add('hidden')
    emptyPara.classList.remove('hidden')
    addedItems.classList.add('hidden')
    counter = 0
    amount.innerText = 0
}


// Amount counter
minus.addEventListener('click', minusCounter)
plus.addEventListener('click', plusCounter)

function plusCounter(){
    counter++
    amount.innerText = counter
}
function minusCounter(){
    counter--
    if(counter < 0){
        counter++
    }else {
        amount.innerText = counter
    }   
}


//Empty Cart toggle active on click
cartAdd.addEventListener('click', () => {
    emptyCart.classList.toggle('hidden')
})

// Change image on click
slideImages.forEach(image => {
    image.addEventListener('click', (e) => {
        mainImage.src = e.target.src
        classlistRemove()
        image.classList.add('active')
    })
})

function classlistRemove(){
    slideImages.forEach(image => image.classList.remove('active'))
}


//Mobile navbar
const openNav = document.getElementById('open-nav')
const closeNav = document.getElementById('close-nav')
const unlistedNav = document.querySelector('.nav ul')

openNav.addEventListener("click", () => {
    unlistedNav.style.transform = 'translateX(0)'
})
closeNav.addEventListener("click", () => {
    unlistedNav.style.transform = 'translateX(-200%)'
})