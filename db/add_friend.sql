insert into friends (
  name,
  age,
  hobby
) values (
  $1,
  $2,
  $3
)
returning *;