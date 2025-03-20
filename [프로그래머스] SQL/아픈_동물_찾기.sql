--https://school.programmers.co.kr/learn/courses/30/lessons/59036?language=oracle
SELECT animal_id, name
from animal_ins
where intake_condition = 'Sick'
order by animal_id
