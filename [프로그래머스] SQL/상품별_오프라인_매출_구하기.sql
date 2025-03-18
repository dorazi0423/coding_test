SELECT p.product_code, p.price*o.amount
from product p inner join (
    select product_id, sum(sales_amount) as amount
    from offline_sale
    group by product_id
) o
on p.product_id = o.product_id
order by p.price*o.amount desc, p.product_code;
