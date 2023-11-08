//carousel

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})


//tabs

const tabNavItem = document.querySelectorAll('.catalog__tab');
const tabContentItem = document.querySelectorAll('.catalog__content');

tabNavItem.forEach(function(elem) {
    elem.addEventListener('click', activeTab);
})

function activeTab() {
    tabNavItem.forEach(function(elem) {
        elem.classList.remove('catalog__tab_active');
    })
    this.classList.add('catalog__tab_active');
    let tabName = this.getAttribute('data-tab');
    
    activeTabContent(tabName);
}

function activeTabContent(tabName) {
    
    tabContentItem.forEach(function(item) {
        item.classList.contains(tabName) ? item.classList.add('catalog__content_active') : item.classList.remove('catalog__content_active');
    })
}

document.querySelector('.catalog__tab').click();

//catalog-item


const catalogItemContent = document.querySelectorAll('.catalog-item__content');
const catalogItemLink = document.querySelectorAll('.catalog-item__link');
const catalogItemBack = document.querySelectorAll('.catalog-item__back');

catalogItemContent.forEach(function(elem) {
    elem.classList.add('catalog-item__content_active');
});

catalogItemLink.forEach(function(elem) {
    elem.addEventListener('click', function() {
        let parentBlock = elem.closest('.catalog-item__wrapper');
        let itemContent = parentBlock.childNodes[1];
        let itemList = parentBlock.childNodes[3];
        let itemBack = parentBlock.childNodes[5];

        activeItemList(itemContent, itemList, itemBack);
    })
})
 
catalogItemBack.forEach(function(elem) {
    elem.addEventListener('click', function() {
        let parentBlock = elem.closest('.catalog-item__wrapper');
        let itemContent = parentBlock.childNodes[1];
        let itemList = parentBlock.childNodes[3];
        let itemBack = parentBlock.childNodes[5];

        activeItemContent(itemContent, itemList, itemBack);
    })
})

function activeItemList(itemContent, itemList, itemBack) {
    itemContent.classList.remove('catalog-item__content_active');
    itemList.classList.add('catalog-item__list_active');
    itemBack.classList.add('catalog-item__back_active');
}

function activeItemContent(itemContent, itemList, itemBack) {
    itemContent.classList.add('catalog-item__content_active');
    itemList.classList.remove('catalog-item__list_active');
    itemBack.classList.remove('catalog-item__back_active');
}

//modal

const modal = document.querySelector('.modal');
const modalClose = document.querySelectorAll('.modal__close');
const buttonSubmit = document.querySelectorAll('.button_submit');

// buttonSubmit.forEach(function(elem) {
//     elem.addEventListener('click', function() {
//         let close = elem.closest('.modal__wrapper').childNodes[1];
//         activeModalClose(close);
//         activeModalFhanks();
//     })
// })

modalClose.forEach(function(elem) {
    elem.addEventListener('click', function() {
        activeModalClose(elem);
    });
})

function activeModalClose(elem) {
    let parentWrapper = elem.closest('.modal__wrapper');
    let parentModal = elem.closest('.modal');
    parentWrapper.classList.remove('modal__wrapper_active');
    parentModal.classList.remove('modal_active');
}

function activeModal(elem) {
    let wrapper = elem.childNodes[1];
    wrapper.classList.add('modal__wrapper_active');
    modal.classList.add('modal_active');
}

function activeModalRequest() {
    const modalRequest = document.querySelector('.modal__request');
    activeModal(modalRequest);
}

function activeModalOrder() {
    const modalOrder = document.querySelector('.modal__order');
    activeModal(modalOrder);
}

function activeModalFhanks() {
    const modalFhanks = document.querySelector('.modal__fhanks');
    activeModal(modalFhanks);
}