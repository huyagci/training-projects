/*
Örnek Veri Tabanı: https://www.postgresqltutorial.com/wp-content/uploads/2019/05/dvdrental.zip

Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.
*/

-- 1. country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.
SELECT country FROM country
WHERE country ~~ 'A%a';
-- Total rows: 8

-- 2. country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.
SELECT country FROM country
WHERE country ~~ '_____n';
-- Total rows: 3

-- 3. film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.
SELECT title FROM film
WHERE title ~~* '%t%%t%%t%%t%';
-- Total rows: 9

-- 4. film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.
SELECT * FROM film
WHERE title ~~ 'C%'
AND length > 90
AND rental_rate = 2.99;
-- Total rows: 20