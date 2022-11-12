const products = document.getElementById('products')
const container = document.getElementById('subnav-container')
let bool = true

products.addEventListener('click',()=>{
    console.log('hello')
    if(bool){
        container.classList.add('visible');
        bool = false;
    }
    else{
        container.classList.remove('visible');
        bool=true;
    }

})

products.addEventListener('mouseover',()=>{
    container.classList.add('visible');
})
products.addEventListener('mouseout',()=>{
    container.classList.remove('visible');
})