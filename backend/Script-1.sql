
CREATE TABLE stationsJSONB (
  id TEXT NOT NULL PRIMARY KEY,
  data JSONB NOT NULL
);


/*
create table Bookstemp(values text);                    

copy Bookstemp from '\Users\Public\fakeData.json';

create table books(valjson json);

Insert into books
select values
from   (
           select json_array_elements(replace(values,'\','\\')::json) as values 
           from   Bookstemp
       ) a;
 */


-- \copy t from '\Users\omistaja\Documents\bootcamp-demo\backend\fakeData.json';

/*
 create table t (
	operatorUICCode serial not null primary key,
	info jsonb not null
	); 
 */


/* CREATE TABLE stations (

	"operatorUICCode" serial primary key,
	"trainNumber" integer not null,
	"trainType" varchar not null,
	"departureDate" DATE not null,
	"trainCategory" varchar not null,
	"runningCurrently" bool not null,
	"cancelled" bool not null
);

*/




-- insert into fruits (type, name) values ('pear', 'McIntoshNot');

-- select * from fruits where type = 'apple' order by name;

-- delete from fruits where id = 2;