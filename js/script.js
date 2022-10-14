const btnAbrirMenu = document.querySelector('.btn-abrir-menu');
const btnFecharMenu = document.querySelector('.fa-solid');
const Menu = document.querySelector('.lista-menu');

// MUDAR TAMANHO DE TELA

// ABRIR MENU 
btnAbrirMenu.addEventListener('click', () => {
    Menu.classList.toggle('active');
    btnFecharMenu.classList.toggle('active');
})

// FECHAR MENU
function fecharMenu() {
    if (Menu.classList.contains('active'), btnFecharMenu.classList.contains('active')) {
        Menu.classList.remove('active');
        btnFecharMenu.classList.remove('active');
    }
}