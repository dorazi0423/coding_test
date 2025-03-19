-- https://school.programmers.co.kr/learn/courses/30/lessons/164673
SELECT b.title, b.board_id, y.reply_id, y.writer_id, y.contents, to_char(y.created_date, 'YYYY-MM-DD')
from USED_GOODS_BOARD b join USED_GOODS_REPLY y
on b.board_id = y.board_id
where to_char(b.CREATED_DATE, 'YYYY-MM') = '2022-10'
order by y.created_date, b.title;
