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
       // console.log(item);
        item.classList.contains(tabName) ? item.classList.add('catalog__content_active') : item.classList.remove('catalog__content_active');
    })
}

document.querySelector('.catalog__tab').click();

//catalog-item


const catalogItemContent = document.querySelectorAll('.catalog-item__content');

catalogItemContent.forEach(function(elem) {
    elem.classList.add('catalog-item__content_active');
})



//const catalogItem = document.querySelectorAll('.catalog-item');

// catalogItem.forEach(function(elem) {
//     let itemContent = elem.querySelector('.catalog-item__content_active');
//     let itemLink = elem.querySelector('.catalog-item__link');
//     let itemList = elem.querySelector('.catalog-item__list');
//     let itemBack = elem.querySelector('.catalog-item__back');

//     // itemLink.addEventListener('click', activeItemList(itemContent, itemList, itemBack));
//     // itemBack.addEventListener('click', activeItemContent(itemContent, itemList, itemBack));
// })

function activeItemList(catalogItem) {
    
    itemContent.classList.remove('catalog-item__content_active');
    itemList.classList.add('catalog-item__list_active');
    itemBack.classList.add('catalog-item__back_active');
}

function activeItemContent(itemContent, itemList, itemBack) {
    itemContent.classList.add('catalog-item__content_active');
    itemList.classList.remove('catalog-item__list_active');
    itemBack.classList.remove('catalog-item__back_active');
}