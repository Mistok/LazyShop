let cart = {};
document.querySelectorAll('.add-to-cart').forEach(function (element) {
    element.onclick = addToCart
});
// Проверяем, есть ли уже что-то добавленое в корзину
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    ajaxGetGoodsInfo();
}

// Добавляем товар в козину
function addToCart() {
    console.log(this);
    let goodsId = this.dataset.goods_id;
    if( cart[goodsId] ){
        cart[goodsId]++
    }   else {
        cart[goodsId] = 1;
    }
    ajaxGetGoodsInfo();
}
// Берем из БД информацию о товаре, добавленом в корзину /
function ajaxGetGoodsInfo() {
    updateLocalStorageCart();
    fetch('/get-goods-info',{
        method: 'POST',
        body: JSON.stringify({
            key: Object.keys(cart)
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        }
    }).then(function (response) {
        return response.text();
    }).then(function (body) {
        showCart(JSON.parse(body))
    })
}

// Функция формирующая и отобращающая корзину
function showCart(data) {
    let out = '<table class="table table-striped table-cart"><tbody>';
    let total = 0;
    console.log(cart);
    console.log(data);
    //первая строка занята ссылкой
    for( let key in cart ){
        out += `<tr><td colspan="4"><a href="/goods?id=${key}">${data[key]['name']}</a> </td></tr>`;
        out += `<tr><td><i class="far fa-minus-square cart-minus" data-goods_id="${key}"></i></td>`;
        out += `<td>${cart[key]}</td>`;
        out += `<td><i class="far fa-plus-square cart-plus" data-goods_id="${key}"></i></td>`;
        out += `<td>${data[key]['cost'] * cart[key]} uah </td>`;
        out += `</tr>`;
        total += cart[key] * data[key]['cost'];
    }
    out +=  `<tr><td colspan="3">Total: </td><td>${formatPrice(total)} uah </td></tr>`;
    out += '</tbody></table>';
    document.querySelector('#cart-nav').innerHTML = out;
    document.querySelectorAll('.cart-minus').forEach(function (element) {
        element.onclick = cartMinus;
    });
    document.querySelectorAll('.cart-plus').forEach(function (element) {
        element.onclick = cartPlus;
    })

}
// Отвечает за кнопку минус
function  cartMinus() {
    let goodsId = this.dataset.goods_id; // получаем айди товара
    if(cart[goodsId] - 1 > 0) { // если кол-во товара больше единицы, то уменьшаем
        cart[goodsId]--;
    } else{
        delete cart[goodsId]; // если товар 1, то удаляем его из корзины
    }
    ajaxGetGoodsInfo(); // обновляем состояние таблицы
}
// Отвечает за кнопку плюс
function cartPlus(){
    let goodsId = this.dataset.goods_id;
    console.log(goodsId);
    cart[goodsId]++;
    ajaxGetGoodsInfo();
}

// Сохраняем состояние таблицы на стороне клиента
function updateLocalStorageCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function formatPrice(price) {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')
}