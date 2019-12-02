document.querySelector('#lite-shop-order').onsubmit = function (event) {
    event.preventDefault(); // остановка перезагрузки страницы по нажатию сабмит
    let username = document.querySelector('#username').value.trim();
    let phone = document.querySelector('#phone').value.trim();
    let address = document.querySelector('#address').value.trim();
    let email = document.querySelector('#email').value.trim();
    if (!document.querySelector('#rule').checked){
       // с правилами не согласен
    }
    // Валидация полей формы
    if(username === '' || phone === '' || email=== '' || address === ''){
        // не заполнены поля
    }
    fetch('/finish-order',{
        method: 'POST',
        body: JSON.stringify({
            'username': username,
            'phone': phone,
            'address': address,
            'email': email,
            'key': JSON.stringify(JSON.parse(localStorage.getItem(kart))) //товары из корзины
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        }
    })
        .then(function (response) {
            return response.text()
        })
};