/* SELECT */
SELECT title FROM film;

SELECT first_name, last_name FROM actor;

/* WHERE */
SELECT * from film WHERE replacement_cost = 14.99;

SELECT * from film
WHERE rental_rate = 0.99;

SELECT title, length
FROM film
WHERE rental_rate = 0.99;

/* Comparision Operators(>, >=, <, <=, =, <>) */

-- Greater Than
SELECT * FROM film
WHERE length > 90;

-- Equal or lesser than
SELECT * FROM film
WHERE rental_rate <= 1;

-- Not Equal
SELECT * FROM film
WHERE rental_rate <> 0.99;

/* Logical Operators (AND, OR, NOT) */

-- AND
SELECT first_name, last_name FROM actor
WHERE first_name = 'Penelope' AND last_name = 'Monroe';

SELECT * FROM film
WHERE rental_rate = 4.99 AND length > 90;

SELECT * FROM film
WHERE rental_rate = 4.99 AND rental_duration = 3;

SELECT * FROM film
WHERE rental_rate = 4.99 AND rental_duration = 3 AND replacement_cost > 20;

-- OR
SELECT first_name, last_name FROM actor
WHERE first_name = 'Penelope' OR first_name = 'Bob';

SELECT * FROM film
WHERE rental_rate = 4.99 OR rental_rate = 2.99;

SELECT * FROM film
WHERE replacement_cost < 17 OR replacement_cost > 20;

SELECT * FROM actor
WHERE first_name = 'Penelope' AND last_name = 'Monroe' OR first_name = 'Joe' AND last_name = 'Swank';

-- NOT
-- ! SAME AS NOT
SELECT * FROM film
WHERE NOT rental_rate = 4.99;

SELECT * FROM film
WHERE NOT rental_rate = 4.99 AND replacement_cost = 20.99;

SELECT * FROM film
WHERE NOT (rental_rate = 4.99 AND replacement_cost = 20.99);

SELECT * FROM film
WHERE NOT (NOT (rental_rate = 4.99 AND replacement_cost = 20.99));

/* BETWEEN */
SELECT title length FROM film
WHERE length >= 90 AND length <= 120;
-- SAME QUERIES
SELECT title length FROM film
WHERE length BETWEEN 90 AND 120;

SELECT rental_rate, replacement_cost FROM film
WHERE (rental_rate BETWEEN 2 AND 4) AND (replacement_cost BETWEEN 10 AND 20);

/* IN*/
SELECT * FROM film
WHERE length IN (50);

SELECT * FROM film
WHERE length IN (40, 50, 60); -- WHERE length = 40 OR length = 50 OR length = 60

SELECT * FROM film
WHERE replacement_cost IN (10.99, 12.99, 16.99)

SELECT * FROM film
WHERE replacement_cost NOT IN (10.99, 12.99, 16.99)

/* LIKE (Case Sensitive) */
-- Percent: Wildcard for multiple characters
SELECT * FROM customer
WHERE first_name LIKE 'M%';

SELECT * FROM customer
WHERE first_name LIKE 'A%y';

-- ~~ SAME AS LIKE
SELECT * FROM actor
WHERE first_name ~~ 'A%';

-- Underscore: Wildcard for one character
SELECT * FROM customer
WHERE first_name LIKE 'J_an'; -- Jean, Joan, Juan

SELECT * FROM customer
WHERE first_name LIKE 'J__n'; -- Jean, Joan, Juan, John

/* ILIKE (Case Insensitive) */
SELECT * FROM customer
WHERE first_name ILIKE 'd%';

-- ~~* SAME AS ILIKE
SELECT * FROM actor
WHERE first_name ~~* 'b%';

/* DISTINCT */
SELECT DISTINCT rental_rate FROM film;

SELECT DISTINCT replacement_cost FROM film;

SELECT DISTINCT City, Country FROM [Customers]; -- from W3Schools table

SELECT DISTINCT first_name FROM actor;

SELECT DISTINCT length FROM film;

/* COUNT */
SELECT COUNT(*) FROM actor
WHERE first_name = 'Penelope';
-- Count: 4

SELECT COUNT(*) FROM actor
WHERE first_name LIKE 'A%';
-- Count: 13

SELECT COUNT(*) FROM actor;
-- Count: 200

SELECT COUNT (DISTINCT first_name) FROM actor;
-- Count: 128

SELECT COUNT (DISTINCT length) FROM film;
-- Count: 140