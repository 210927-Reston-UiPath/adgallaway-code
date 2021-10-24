-- associates per state
select count(id) as "Associate Count", associateLocale as "Associate Locale"
from associates
group by associateLocale
order by count(id) desc;

-- select statement examples
select * from batch;

select * from associates full join batch
on associates.id = batch.associateID;
select trainerName, count(associateID) from trainers
full join batch on batch.trainerID = trainers.id
group by trainerName
order by count(associateID) desc;

-- cross join
select associateName, trainerName from associates cross join trainers;

--getting trainers not in batch
select trainerName from trainers full join batch
on batch.trainerID = trainers.id
where trainerID is null;

select trainerName from trainers
except
select trainerName from trainers inner join batch on
batch.trainerID = trainers.id;

select trainerName from trainers
where id not in (select trainerID from batch);

-- getting associates not in batch
select associateName from associates full join batch
on batch.associateID = associates.id
where associateID is null;

select associateName from associates
except
select associateName from associates inner join batch on
batch.associateID = associates.id;

select associateName from associates
where id not in (select associateID from batch);

select count(id) as "No. of trainers", campus from
trainers
group by campus
order by count(id) desc;

-- all assoc mapped to trainer
--join

select associateName, trainerName from associates inner join batch
on batch.associateID = associates.id
inner join trainers
on trainers.id = batch.trainerID;

-- set operation
select associateName from associates
intersect
select associateName from associates inner join batch
on batch.associateID = associates.id;

-- subquery
select associateName from associates where id
in (select associateID from batch);

-- getting trainers from a certain state
select trainerName from trainers where campus = "USF";
