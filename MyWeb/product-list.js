const pageNumberBtn = document.querySelectorAll('.page-number-btn');

pageNumberBtn.forEach((pageBtn1) => {
    pageBtn1.addEventListener('click', () => {
        pageNumberBtn.forEach((pageBtn2) => {
            pageBtn2.classList.remove('btn-active');
        })
        pageBtn1.classList.add('btn-active');
    })
});
