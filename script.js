const iconoBurger = document.querySelector('#icono');

iconoBurger.addEventListener('click', () =>{
    const iconoClose = document.querySelector('#icono-close')
    const menu = document.querySelector('#menu');
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        iconoBurger.src = "./images/burger.png";
    }else{
        iconoBurger.src = "./images/x.png";

    }
    
})