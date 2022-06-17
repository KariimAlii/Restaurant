document.querySelector('.menu').addEventListener('click' , () => {
    document.querySelectorAll('.nav').forEach( (el) => {
        el.classList.toggle('change');
    })
})
let i = 0 ;
const icons = document.querySelectorAll('.section-1 .icons i');
setInterval ( () => {
        icons[i].classList.remove('icon');
        
        if (i < icons.length - 1) {
            i++ ;
            icons[i].classList.add('icon')
        }
        else {
            i = 0 ;
            icons[i].classList.add('icon')
        }
    },4000
)