//Show phần tử khi cuộn trang
function showItem() {
    var elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => {
        var windowHeight = window.innerHeight;
        var elementToTop = element.getBoundingClientRect().top;

        if(elementToTop < windowHeight) {
            element.classList.add('show');
        }
        else {
            element.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', showItem);

//Show hình ảnh khi cuộn trang
function showImg() {
    const img1 = document.querySelector('.rtx30s_img1');
    var windowHeight = window.innerHeight;
    var img1ToTop = img1.getBoundingClientRect().top;

    if(img1ToTop < windowHeight / 10) {
        img1.classList.add('hiddenImg');
    }
    else {
        img1.classList.remove('hiddenImg');
    }
}

window.addEventListener('scroll', showImg);

//------------------------------------------------------
