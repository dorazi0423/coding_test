SELECT o.animal_id as id, o.name as name
from ANIMAL_INS i right outer join ANIMAL_OUTS o
on i.animal_id = o.animal_id
where i.animal_id is null
order by id;
