update friends
set name = $2, age = $3, hobby = $4
where id = $1
returning *;