//Filter
const filterItem = document.querySelectorAll('.filter-item');
const productListOverLay = document.querySelector('.product-list-overlay');

filterItem.forEach((filterI) => {
    const filterBtn = filterI.querySelector('.filter-btn');
    const filterOption = filterI.querySelector('.filter-option');
    const closeFilterOption = filterI.querySelector('.close-filter-option-btn');

    filterBtn.addEventListener('click', () => {
        filterOption.classList.toggle('show-filter-option');
        filterI.classList.toggle('filter-item-zIndex');

        closeFilterOption.addEventListener('click', () => {
            filterOption.classList.remove('show-filter-option');
            filterI.classList.remove('filter-item-zIndex');
            productListOverLay.classList.remove('show-product-list-overlay');
        })

        productListOverLay.classList.toggle('show-product-list-overlay');
    });

    productListOverLay.addEventListener('click', () => {
        filterOption.classList.remove('show-filter-option');
        filterI.classList.remove('filter-item-zIndex');
        productListOverLay.classList.remove('show-product-list-overlay');
    })

})

//Page number ------------------------------------------
const pageNumberBtn = document.querySelectorAll('.page-number-btn');

pageNumberBtn.forEach((pageBtn1) => {
    pageBtn1.addEventListener('click', () => {
        pageNumberBtn.forEach((pageBtn1) => {
            pageBtn1.classList.remove('btn-active');
        })
        pageBtn1.classList.add('btn-active');
    })
})