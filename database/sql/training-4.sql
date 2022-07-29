/*
Örnek Veri Tabanı: https://www.postgresqltutorial.com/wp-content/uploads/2019/05/dvdrental.zip

Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.
*/

-- 1. film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
SELECT DISTINCT replacement_cost FROM film;
-- Total rows: 21

-- 2. film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
SELECT COUNT (DISTINCT replacement_cost) FROM film;
-- Count:21

-- 3. film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
SELECT COUNT(title) FROM film
WHERE title ~~ 'T%'
AND rating = 'G';
-- Count: 9

-- 4. country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
SELECT COUNT(country) FROM country
WHERE country ~~ '_____';
-- Count: 5

-- 5. city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?
SELECT COUNT(city) FROM city
WHERE city ~~* '%r';
-- Count: 33