--https://school.programmers.co.kr/learn/courses/30/lessons/133027
select f.flavor
from FIRST_HALF f full outer join (
    SELECT flavor, sum(total_order) sum
    from july
    group by flavor
) j
on f.flavor = j.flavor
order by f.total_order + j.sum desc
fetch FIRST 3 ROWS ONLY;
