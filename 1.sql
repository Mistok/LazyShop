DROP TABLE IF EXISTS 'category';


/* !40101 SET @saved_cs_client = @@character_set_client */;


SET character_set_client = utf8mb4;

CREATE TABLE `category`(

	`id` int(11) NOT NULL AUTO_INCREMENT,

    `category` varchar(250) DEFAULT NULL,

    `description` text,
    `image` varchar(500) DEFAULT NULL,

    PRIMARY KEY (`id`)

) engine=InnoDB DEFAULT CHARSET=utf8;



insert into `category` values (1, 'Ноутбуки', 'Так же как и гаджеты ноутбуки стали частью жизни человека. Это ПК переносного формата в корпусе у него имеются элементы компьютера и аккумуляторная батарея. Они бывают большими и маленькими, с разным весом. Время их автономной работы колеблится от 2 до 15 часов, в зависимости от внутренностей аппарата. В англоязывчном мире изестен под названием "лептоп", время от времени на просторах бывшего СРСР это название также встречается.', '1144.120x150.jpg'),(2, 'Телефоны', 'Разнообразные смартфоны прочно вошли в повседневную жизнь человека. За короткое время появилось около тридцати фирм с широким ассортиментом мобильных устройств. Трудно представить выполнение ежедневных дел без мобильного устройства. Смартфон - с английского переводится как "умный телефон". Каждый год модельные ряды пополняются всё более интелектуально развитыми устройствами. Самыми популярными производителями являются Samsung, Apple, Xiaomi, Huawei, Sony, Meizu.','75093x120x150.jpg');


CREATE TABLE 'goods' (
	'id' int(10) unsigned NOT NULL AUTO_INCREMENT,
	'name' varchar(255) DEFAULT NULL,
	'description' text,
	'cost' double DEFAULT NULL,
	'image' varchar(500) DEFAULT NULL,
	'category' int(5) DEFAULT NULL,
	PRIMARY KEY('id') 
)

insert into `goods` values(1,'Asus ROG Stix G3', 'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i7-9750H (2.6 - 4.5 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.35 кг / черный', 27999, 'asus_90nr0223_m01780_images_12942850722.jpg', 1), (2,'Ноутбук HP Omen 15-dc0028ur', 'Экран 15.6" IPS (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i7-8750H (2.2 - 4.1 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 128 ГБ / nVidia GeForce GTX 1050 Ti , 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 Home 64bit / 2.38 кг / черный', 26999,'hp_4pr16ea_images_11834807913.jpg',  1), (3, 'Ноутбук HP Pavilion Gaming 15-cx0027ua', 'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-8300H (2.3 - 4.0 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth 4.2 / веб-камера / DOS / 2.22 кг / серый
' ,19999, 'hp_pavilion_15_8kq92ea_images_14633000948.jpg', 1), (4, 'Ноутбук MSI PS42 Modern 8MO (PS428MO-454XUA)', 'Экран 14" IPS (1920x1080) Full HD, матовый / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics 620 / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / 1.18 кг / серебристый / подсветка клавиатуры / сканер отпечатков пальцев / металлический корпус', 23999,'copy_msi_ps42_modern_8rc_098ua_5d554e849c928_images_13441620692.jpg', 1 ), (5, 'Ноутбук Lenovo IdeaPad 330-15AST (81D600M0RA) Onyx Black', 5999, 'copy_lenovo_81d600jyra_5c45dea900d73_images_10442310482.jpg', 1), (6, 'Ноутбук Acer Aspire 3 A315-55G (NX.HEDEU.022) Black', 'Экран 15.6" (1920x1080) Full HD, матовый / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce MX230, 2 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.9 кг / черный', 14999, 'copy_acer_nx_hedeu_006_5d52bb1bbc113_images_13397378870.png',  1), (7, 'Ноутбук Lenovo Yoga Book C930 4/256GB Wi-Fi Windows 10 Home Iron Gray (ZA3S0044UA)', 'Экран 10.8" IPS (2560x1600) MultiTouch / Intel Core i5-7Y54 (1.2 - 3.2 ГГц) / RAM 4 ГБ / 256 ГБ встроенной памяти + microSD / Wi-Fi / Bluetooth 4.2 / фронтальная камера 2 Мп / Windows 10 Home / 775 г / стальной серый', 29999, 'lenovo_yoga_book_za3s0044ua_images_8877634820.jpg',  1), (8, 'Ноутбук Acer Aspire 5 A517-51G (NX.H9GEU.019) Obsidian Black', 'Экран 17.3" IPS (1920x1080) Full HD, матовый / Intel Core i3-7020U (2.3 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce MX130, 2 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 3 кг / черный', 13999, 'copy_acer_nx_gvqeu_034_5d40111a4b7af_images_13135913874', 1), (9, 'Ноутбук Dell Vostro 15 3580 (N2072VN3580EMEA01_2001_Rail) Black', 'Экран 15.6" (1920x1080) Full HD, матовый / Intel Core i5-8265U (1.6 - 3.9 ГГц) / RAM 8 ГБ / SSD 256 ГБ / AMD Radeon 520, 2 ГБ / DVD+/-RW / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 Pro 64bit / 2.28 кг / черный', 20499, 'dell_n2072vn3580emea01_2001_rail_images_12362636054.jpg', 1), (10, 'Мобильный телефон Samsung Galaxy Note 10+ 12/256GB Black (SM-N975FZKDSEK)', 'Экран (6.8", Dynamic AMOLED, 3040x1440)/ Samsung Exynos 9825 (2 x 2.7 ГГц + 2 x 2.4 ГГц + 4 x 1.9 ГГц)/ основная квадро камера: 12 Мп + 12 Мп + 16 Мп + 3D модуль/ фронтальная: 10 Мп / RAM 12 ГБ/ 256 ГБ встроенной памяти + microSD (до 1 ТБ)/ 3G/ LTE/ GPS/ A-GPS/ ГЛОНАСС/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie) / 4300 мА*ч', 35999, 'samsung_galaxy_note_10_plus_12_256_gb_black_sm_n975fzkdsek_images_13272061006.jpg', 2 ), (11, 'Мобильный телефон Asus ZenFone 5Z 8/256GB (ZS620KL-2A052WW) DualSim Midnight Blue', 'Экран (6.2", IPS, 2246x1080)/ Qualcomm Snapdragon 845 (2.7 ГГц + 1.7 ГГц)/ двойная основная камера: 12 Мп + 8 Мп, фронтальная камера: 8 Мп/ RAM 8 ГБ/ 256 ГБ встроенной памяти + microSD (до 2 ТБ)/ 3G/ LTE/ GPS/ A-GPS/ ГЛОНАСС/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie) / 3300 мА*ч', 14777, 'asus_zenfone_90az01r1_m00730_images_5104254160.jpg',  2), (12, 'Мобильный телефон Honor 8X 4/64GB Red', 'Экран (6.5, LTPS, 2340x1080)/ HiSilikon Kirin 710 (2.2 ГГц + 1.7 ГГц)/ двойная основная камера: 20 Мп + 2 Мп, фронтальная камера: 16 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 400 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.0 (Oreo)/ 3750 мА*ч', 5499, 'honor_51093bsy_images_12467592140.jpg', 2), (13, 'Мобильный телефон Xiaomi Mi 9 Lite 6/128GB', 'Экран (6.39", AMOLED, 2340x1080)/ Qualcomm Snapdragon 710 (2.2 ГГц)/ тройная основная камера: 48 Мп + 8 Мп + 2 Мп, фронтальная камера: 32 Мп/ RAM 6 ГБ/ 128 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie) / 4030 мА*ч', 8199, 'xiaomi_mi_9_lite_6_128gb_white_images_14575399752.jpg', 2), (14, 'Мобильный телефон Huawei P30 Lite 4/128GB Peacock Blue', 'Экран (6.15", LTPS, 2312x1080)/ HiSilicon Kirin 710 (4 x 2.2 ГГц + 4 x 1.7 ГГц)/ тройная основная камера: 48 Мп + 8 Мп + 2 Мп, фронтальная камера: 24 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ GLONASS/ BDS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (EMUI 9.0.1)/ 3340 мА*ч', 7999, 'huawei_p30_lite_4_128gb_iris_purple_images_12177868624.jpg', 2), (15, 'Мобильный телефон Samsung Galaxy A70 6/128GB Blue', 'Экран (6.7", Super AMOLED, 2400x1080)/ Qualcomm Snapdragon 675 (2x2.0 ГГц + 6x1.7 ГГц)/ тройная основная камера: 32 Mп + 5 Mп + 8 Mп, фронтальная камера: 32 Мп/ RAM 6 ГБ/ 128 ГБ встроенной памяти + microSD (до 512 ГБ)/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie)/ 4500 мА*ч', 11999, 'samsung_sm_a705fzbusek_images_12174782368.jpg', 2), (16, 'Мобильный телефон Xiaomi Redmi Note 8 Pro 6/128GB White', 'Экран (6.53", IPS, 2340x1080)/ MediaTek Helio G90T (2 x 2.05 ГГц + 6 x 2.0 ГГц)/ квадро основная камера: 64 Мп + 8 Мп + 2 Мп + 2 Мп, фронтальная камера: 20 Мп/ RAM 6 ГБ/ 128 ГБ встроенной памяти + microSD (до 256 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 9.0 (Pie) / 4500 мА*ч', 6333, 'copy_xiaomi_redmi_note_8_pro_4_64gb_black_5da5bc6517c24_images_14512508840.jpg', 2)