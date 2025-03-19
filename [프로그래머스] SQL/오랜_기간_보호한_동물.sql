-- fetch를 이용해서 상위 n개의 결과값을 가져옴

SELECT name, datetime
from ANIMAL_INS 
where animal_id not in (
    select animal_id
    from ANIMAL_OUTS
)
order by datetime
FETCH FIRST 3 ROWS ONLY;
