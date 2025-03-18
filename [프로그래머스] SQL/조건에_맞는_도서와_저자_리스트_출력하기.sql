//https://school.programmers.co.kr/learn/courses/30/lessons/144854

SELECT b.book_id, a.author_name, to_char(b.published_date, 'YYYY-MM-DD')
from book b inner join author a
on b.author_id = a.author_id
where b.category = '경제'
order by to_char(b.published_date, 'YYYY-MM-DD');
