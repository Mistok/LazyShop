document.querySelector('#lazy-shop-order-submit').addEventListener('click', onOrderSubmit);

function onOrderSubmit(event) {
    event.preventDefault(); // остановка перезагрузки страницы по нажатию сабмит
    console.log('ss');
    let username = document.querySelector('#username').value.trim();
    let phone = document.querySelector('#phone').value.trim();
    let address = document.querySelector('#address').value.trim();
    let email = document.querySelector('#email').value.trim();
    if (!document.querySelector('#rule').checked){
       // с правилами не согласен
        Swal.fire({
            title: 'Warning',
            text: 'Read and accept the rules',
            type: 'info',
            confirmButtonText: 'Ok'
        });
        return false;
    }
    // Валидация полей формы
    if(username === '' || phone === '' || email=== '' || address === ''){
        // не заполнены поля
        Swal.fire({
            title: 'Warning',
            text: 'Please fill all marked fields',
            type: 'error',
            confirmButtonText: 'Ok'
        });
        return false;
    }
    fetch('/finish-order',{
        method: 'POST',
        body: JSON.stringify({
            'username': username,
            'phone': phone,
            'address': address,
            'email': email,
            'key': JSON.parse(localStorage.getItem('cart')) //товары из корзины
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        }
    })
    .then(function (response) {
        return response.text() // преобразуем ответ в нужную нам форму
    })
    .then(function (body) {
        if(body == '1'){
            Swal.fire({
                title: 'Success',
                text: 'Your order has been send',
                type: 'info',
                confirmButtonText: 'Ok'
            });
        } else {
            Swal.fire({
                title: 'Warning',
                text: 'Problem with mail',
                type: 'error',
                confirmButtonText: 'Ok'
            });
        }
    })
};