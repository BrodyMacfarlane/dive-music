select * from users inner join songs
on users.auth_id = $1 and songs.creator_id = $1