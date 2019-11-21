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

app.get('/', (req, res)=>{
    con.query(
      'SELECT * FROM goods',
      function (error, result) {
         if (error){
             throw error
         }

         let goods = {};
         // перепаковка массива. Для удобства последующей индексации
         for( let i = 0 ; i < result.length ; i++ ){
             goods[result[i]['id']] = result[i];
         };
         console.log(`goods = ${JSON.parse(JSON.stringify(goods))}`);
         res.render('main',{
           foo: 4,
           bar: 7,
           goods: JSON.parse(JSON.stringify(goods))
         })
      }

    );

});
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
app.post('/get-goods-info', function (req,res) {

    con.query('SELECT id, name, cost FROM goods WHERE id IN ('+req.body.key.join(',')+')', function (error, result, fields) {
        if(error) throw error;
        let goods = {};
        for( let i = 0; i < result.length ; i++ ){
            goods[result[i]['id']] = result[i];
        }
        res.json(goods)
    })
});