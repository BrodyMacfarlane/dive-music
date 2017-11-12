select * from users inner join songs
on users.auth_id = songs.creator_id
order by songs.id desc limit 10;