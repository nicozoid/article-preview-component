const shareBtn = document.getElementById('share-button');
const closeBtn = document.getElementById('close-button-mobile');
const modalMobile = document.getElementById('share-menu-mobile');
const modalDesktop = document.getElementById('share-menu-desktop');
// const button = document.getElementById('close-button');

// shareBtn.addEventListener('click', function () {
//     modalMobile.style.display = 'flex';
//     modalDesktop.style.display = 'flex';
// }

shareBtn.addEventListener('click', function () {
    if (modalMobile.style.display === 'none' && window.innerWidth < 650) {
        modalMobile.style.display = 'flex';
    }
    else if (modalDesktop.style.display === 'none' && window.innerWidth >= 650) {
        modalDesktop.style.display = 'flex';
    } else {
        modalDesktop.style.display = 'none';
        modalMobile.style.display = 'none';
    }
})

closeBtn.addEventListener('click', function() {
     modalMobile.style.display = 'none';
})