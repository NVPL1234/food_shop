--1	đã đặt
--2	đã thanh toán
--3	đã huỷ
--4	đã nhận 
-- new
SELECT OD.order_details_id, P.product_name, OD.quantity, unit_price_product, note, option_name, O.unit_price FROM order_details OD LEFT JOIN customs C ON OD.order_id = C.order_id AND OD.order_details_id = C.order_details_id AND OD.product_id = C.product_id JOIN products P ON OD.product_id = P.product_id LEFT JOIN options O ON C.option_id = O.option_id WHERE OD.order_id = '241103_0' ORDER BY OD.order_details_id

SELECT * FROM customers WHERE create_date = CAST(GETDATE() AS DATE)

SELECT order_date, SUM(quantity * (unit_price_product + ISNULL(total_option, 0))) AS revenue
FROM (
	SELECT O.order_id, order_date, OD.product_id, quantity, unit_price_product, SUM(unit_price) AS total_option 
	FROM orders O JOIN order_details OD
	ON O.order_id = OD.order_id LEFT JOIN customs C
	ON OD.order_id = C.order_id AND OD.order_details_id = C.order_details_id AND OD.product_id = C.product_id
	WHERE order_date <= CAST(GETDATE() AS DATE)
	GROUP BY O.order_id, order_date, OD.product_id, quantity, unit_price_product, OD.order_details_id
) O
GROUP BY order_date
ORDER BY order_date

SELECT *
FROM orders O JOIN order_details OD
ON O.order_id = OD.order_id LEFT JOIN customs C
ON OD.order_id = C.order_id AND OD.order_details_id = C.order_details_id AND OD.product_id = C.product_id