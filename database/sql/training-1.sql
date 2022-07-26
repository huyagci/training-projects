/*
Örnek Veri Tabanı: https://www.postgresqltutorial.com/wp-content/uploads/2019/05/dvdrental.zip

Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.
*/

-- 1. film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.

SELECT title, description from film;
-- Total rows: 1000

-- 2. film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.

SELECT * from film
WHERE length BETWEEN 60 AND 75;
-- Total rows: 122

-- 3. film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.

SELECT * from film
WHERE rental_rate = 0.99 AND replacement_cost IN (12.99, 28.99);
-- Total rows: 37

-- 4. customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?

SELECT last_name from customer
WHERE first_name = 'Mary';
-- last_name = 'Smith'

-- 5. film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.
SELECT * FROM film
WHERE length < 50 AND rental_rate NOT IN (2.99, 4.99);
-- Total rows: 10