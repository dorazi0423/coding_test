-- https://school.programmers.co.kr/learn/courses/30/lessons/144853?language=oracle
SELECT book_id, to_char(PUBLISHED_DATE, 'YYYY-MM-DD')
from book 
where to_char(PUBLISHED_DATE, 'YYYY') = '2021' and category = '인문'
order by PUBLISHED_DATE;
