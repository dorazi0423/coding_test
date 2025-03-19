select p1.product_id, p1.product_name, p1.price*p2.sum as TOTAL_SALES
from food_product p1 join (
    SELECT product_id, sum(AMOUNT) as sum
    from food_order f1 join (
       select order_id
        from food_order
        where to_char(PRODUCE_DATE, 'YYYY-MM') = '2022-05'
    ) f2
    on f1.order_id = f2.order_id
    group by product_id
)p2
on p1.product_id = p2.product_id
order by TOTAL_SALES desc, p1.product_id;
