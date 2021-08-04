let saludo = `Hi, i'm David and i'm a junior developer, this website is made by html,css,bootstrap and javascript. Thanks for your attention`
console.log(saludo)


//Contador
addEventListener('DOMContentLoaded',()=>{
    const contadores = document.querySelectorAll('.contador-cantidad')
    const velocidad = 1000

    const animarContadores = ()=>{
        for (const contador of contadores) {
            const actualizarContador = ()=>{
                let cantidadMaxima = +contador.dataset.cantidadTotal,
                    valorActual = +contador.innerText,
                    incremento = cantidadMaxima / velocidad

                if (valorActual < cantidadMaxima) {
                    contador.innerText = Math.ceil(valorActual + incremento)
                    setInterval(actualizarContador,5)
                } else {
                    contador.innerText = cantidadMaxima
                }
            }
            actualizarContador() 
        }
    }

    const mostrarContadores = (elementos)=>{
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                elemento.target.classList.add('on')
                elemento.target.classList.remove('off')
                setTimeout(animarContadores,300)
            }
        });
    }

    //IntersectionObserver
    const observer = new IntersectionObserver(mostrarContadores,{
        threshold: 0.75
    })

    const elementosHTML = document.querySelectorAll('.count-item')
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML)
    })
    
})

//scroll reveal
let reveals = document.querySelectorAll('.reveal')
for (let i = 0; i <reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top
    let revealPoint = 150
    
    if(revealPoint < windowHeight - revealPoint){
        reveals[i].classList.add('active')

    }
    else{
        reveals[i].classList.remove('active')
    }
}


//btn scroll

const btnScroll = document.querySelector('.btn-scroll')
const menu = document.querySelector('#menu')
window.addEventListener('scroll',()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScroll.style.display = 'flex';
        
    } else {
        btnScroll.style.display = 'none'
    }
})

btnScroll.addEventListener('click',()=>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})
