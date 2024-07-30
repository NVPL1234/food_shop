select order_id, product_id, unit_price_product, quantity, 
	sum(unit_price_option) as total_unit_price_option, 
	unit_price_product + sum(unit_price_option) as total_unit_price,
	(unit_price_product + sum(unit_price_option)) * quantity as amount
from order_details
group by order_id, product_id, unit_price_product, quantity

select * from order_details