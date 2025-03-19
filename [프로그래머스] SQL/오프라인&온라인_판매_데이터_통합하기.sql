-- https://school.programmers.co.kr/learn/courses/30/lessons/131537
SELECT to_char(SALES_DATE, 'YYYY-MM-DD') as day, PRODUCT_ID, USER_ID, SALES_AMOUNT
from ONLINE_SALE 
where  to_char(SALES_DATE, 'YYYY-MM') = '2022-03'
union
select to_char(SALES_DATE, 'YYYY-MM-DD') as day, PRODUCT_ID, null,  SALES_AMOUNT
from OFFLINE_SALE
where  to_char(SALES_DATE, 'YYYY-MM') = '2022-03'
order by day, PRODUCT_ID, USER_ID;
