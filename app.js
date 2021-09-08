
// toggling mobile menu

let hamburger = document.getElementById('hamburger')


hamburger.addEventListener('click', () => {
    let mobileMenu = document.querySelector('.mobileNav')
    mobileMenu.classList.toggle('toggle');
    if(mobileMenu.classList.contains('toggle')) {
        let icon = document.getElementById('icon')
        mobileMenu.style.display = 'block'
        icon.src = './images/icon-close.svg'
    } else {
        mobileMenu.style.display = 'none'
        icon.src = './images/icon-hamburger.svg'
    }
})

// carousel functions

let img = document.querySelectorAll('.carousel__photo')
let content = document.querySelectorAll('.description')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')



const nextSlide = () => {
  console.log(`test`)
  const currentImg = document.querySelector('.active');
  const contentActive = document.querySelector('.content-active')

  contentActive.classList.remove('content-active')
  currentImg.classList.remove('active')
  
  if(currentImg.nextElementSibling && currentImg.nextElementSibling.classList.contains('carousel__photo')) {
    currentImg.nextElementSibling.classList.add('active')
    contentActive.nextElementSibling.classList.add('content-active')
    console.log(`nfiweo`)
  } else {
    img[0].classList.add('active');
    content[0].classList.add('content-active')
  }
};

const prevSlide = () => {
  const currentImg = document.querySelector('.active');
  const contentActive = document.querySelector('.content-active')

  contentActive.classList.remove('content-active')
  currentImg.classList.remove('active')

  if(currentImg.previousElementSibling && currentImg.previousElementSibling.classList.contains('carousel__photo')) {
    currentImg.previousElementSibling.classList.add('active')
    contentActive.previousElementSibling.classList.add('content-active')
    console.log(`ndmreko`)
  } else {
    img[img.length - 1].classList.add('active');
    content[content.length - 1].classList.add('content-active')
  }
};

prev.addEventListener('click',prevSlide);
next.addEventListener('click',nextSlide);