const express = require('express');

let app = express();

app.use(express.static('public')); //public - имя папки, где хранится статика

app.set('view engine', 'pug'); // переключаемся на ПАГ

const  mysql = require('mysql');// подключаем sql модуль

app.use(express.json());

// настраиваем модуль
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'market',
    password: 'root'
});

app.listen(3000, ()=>{
    //console.log('node Express works on 3000');
});


// Главная страница
app.get('/', (req, res)=>{
    //Описание товаров
    let cat = new Promise(function (resolve, reject) {
        con.query(
            'SELECT id, name, cost, image, category FROM (select id, name, cost, image, category, if(if(@curr_category != category, @curr_category := category, "") != "", @k := 0, @k := @k + 1 ) as ind from goods, ( select @curr_category := "" ) v )  goods where ind < 3 ' ,

            function (error, result, fields) {
                if(error){
                    return reject(error)
                }
                resolve(result);
            }
        )
    });
    // Описание категорий
    let catDescription = new Promise(function (resolve, reject) {
        con.query(
            'SELECT * FROM  category' ,

            function (error, result, fields) {
                resolve(result);
            }
        )
    });
    Promise.all([cat, catDescription]).then( function ( value ) {
        console.log(value[0]);
        res.render('index',{
            cat: JSON.parse(JSON.stringify(value[1])),
            goods: JSON.parse(JSON.stringify(value[0]))
        })
    } )

});

// Страница с товарами по категориям
app.get('/cat', (req, res)=>{
   let catId = req.query.id;
   let cat = new Promise(function (resolve, reject){
       con.query(
           'SELECT * FROM category WHERE id =' + catId,
           function (error, result) {
               if(error) reject(error);
               resolve(result)
           }
       )
   });
    let goods = new Promise(function (resolve, reject){
       con.query(
           'SELECT * FROM goods WHERE category=' + catId,
           function (error, result) {
               if(error) reject(error);
               resolve(result)
           }
       )
    });

    Promise.all([cat, goods]).then(function (value) {
        res.render('cat', {
            cat: JSON.parse(JSON.stringify(value[0])),
            goods: JSON.parse(JSON.stringify(value[1]))
        })
    })


});

app.get('/goods', function (req,res) {

   con.query(
       'SELECT * FROM goods WHERE id=' + req.query.id,
       function (error, result, fields) {
           if(error) throw  error;
           res.render('goods', {goods: JSON.parse(JSON.stringify(result))});
       }

   )
});
// Страница оформления заказа
app.get('/order', function (req,res) {

    res.render('order');

});
// Ответ на запрос из панели навигации
app.post('/get-category-list', function (req, res) {

    con.query(
        'SELECT id, category FROM category',
        function (error, result, fields) {
            if(error) throw  error;
            res.json(result); // парсим результат
        }

    )
});

// Обработка запроса на взаимодействие с корзиной
app.post('/get-goods-info', function ( req,res ) {
    if ( req.body.key.length !== 0 ){
        con.query('SELECT id, name, cost FROM goods WHERE id IN ('+req.body.key.join(',')+')', function (error, result, fields) {
            if(error) throw error;
            let goods = {};
            for( let i = 0; i < result.length ; i++ ){
                goods[result[i]['id']] = result[i];
            }
            res.json(goods)
        })
    } else {
        res.send('0')
    }

});