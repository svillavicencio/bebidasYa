import singleVault from "./scripts/class/Vault.js";

const main = document.getElementById('main');
const intro = document.getElementById('intro');
const error = document.getElementById('error');
const confirmAge = document.getElementById('button-confirm-age');
const errorAge = document.getElementById('button-error-age');
const confirmDirection = document.getElementById('button-confirm-direction');
const formDirection = document.getElementById('form-direction')
const directionTitle = document.getElementById('direction-title');

$('#direction').hide();

confirmAge.addEventListener('click', () => {
    localStorage.setItem('age', 'true');
    $('#question').fadeOut(750, ()=>{
        $('#direction').fadeIn(750);
    });
    console.log(localStorage.getItem('age'))
});

errorAge.addEventListener('click', () => {
    $('#question').fadeOut(750, ()=>{
        $('#error').fadeIn();
    })
});

confirmDirection.addEventListener('click', () => {
    $('#intro').fadeOut('slow', ()=>{
        main.classList.remove('hidden');
    })
    
    localStorage.setItem('direction', formDirection.value || "Sin direccion ingresada");
    directionTitle.innerHTML = localStorage.getItem('direction')
})

$('#carrito').click(()=>{$('#checkout').removeClass('translate-x-full')})
$('#close-checkout').click(()=>{$('#checkout').addClass('translate-x-full')})
$('#search').on('input', function(event){singleVault.filteredList(event.target.value)});
$('#buy').click(()=>{singleVault.confirmBuy()
    $.notify('Compra Realizada',
    {position: 'bottom center',
    className: 'success'})
});
