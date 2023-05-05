//Tự động thêm số thứ tự
function updateSTT() {
    const stt = document.querySelectorAll('.stt');
    let index = 1;
    stt.forEach(function(stt_1) {
        stt_1.textContent = index;
        index++;
    });
};
    
updateSTT();
//Xóa sản phẩm trong giỏ hàng
const remove_btn = document.querySelectorAll('.remove .fa-trash');

remove_btn.forEach(function(rmv) {
    rmv.addEventListener('click', function() {
        var row = rmv.parentNode.parentNode;
        row.remove();

        updateSTT();

        checkTable();

        calculateTotalMoney();
    });
});

//Kiểm tra số dòng trong table, ẩn table khi chỉ còn 1 dòng đầu
function checkTable() {
    const table = document.querySelector('.cart table');
    const pay = document.querySelector('.cart .pay');
    const nothing_here = document.querySelector('.cart .nothing-here');

    if(table.rows.length <= 1) {
        table.style.display = 'none';
        pay.style.display = 'none';
        nothing_here.style.display = 'flex';
    }
};

//Cập nhật tổng giá tiền
function calculateTotalMoney() {
    const totalMoney = document.querySelector('.total-payment-money');
    const row_cart = document.querySelectorAll('.cart table tr:not(:first-child)');
    
    let total = 0;
    row_cart.forEach(function(rw_cart) { 
        const row_money = parseInt(rw_cart.querySelector('.price').textContent.replace(/\./g, ''));
        // console.log(row_money);
        const row_input = rw_cart.querySelector('.quantity input').value;
        // console.log(row_input);

        let row_total = row_money * row_input;
        total += row_total;
        // console.log(total);
    });
    
    totalMoney.textContent = total.toLocaleString('vi-VN') + 'đ';
}


calculateTotalMoney();

const quantityInput = document.querySelectorAll('.quantity input');

quantityInput.forEach(function(quantity_Input) {
    quantity_Input.addEventListener('change', calculateTotalMoney);
});