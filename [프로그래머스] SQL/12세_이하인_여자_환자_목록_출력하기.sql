--https://school.programmers.co.kr/learn/courses/30/lessons/132201

SELECT pt_name, pt_no, gend_cd, age, decode(tlno, '', 'NONE', 
                                      tlno)
from patient
where age <= 12 
and gend_cd = 'W'
order by age desc, pt_name;
