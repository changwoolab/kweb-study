-- 1
select users.id, 'name', seat_number 
    from users join tickets on users.id=tickets.user join trains on train=trains.id where trains.id=11
    order by seat_number;

-- 2
select users.id, users.name, count(tickets.id) as trains_count, sum(distance)/10 as total_distance
    from users join tickets on users.id=tickets.user join trains on train=trains.id
    group by users.id
    order by total_distance desc limit 0, 6;

-- 3
select trains.id, types.name, src_station.name as src_stn, des_station.name as dst_stn, timediff(arrival, departure) as travel_time
    from trains join types on trains.type = types.id 
         join stations as src_station on source=src_station.id join stations as des_station on destination=des_station.id
    order by travel_time desc limit 0, 6;

-- 4
select types.name, src_station.name as src_stn, des_station.name as dst_stn, departure, arrival, round(distance*fare_rate/1000, -2) as fare
    from trains join types on trains.type = types.id  
         join stations as src_station on source=src_station.id join stations as des_station on destination=des_station.id
    order by departure;

-- 5
select trains.id, types.name, src_station.name as src_stn, des_station.name as dst_stn, count(tickets.id) as occupied, max_seats as maximum
    from trains join types on trains.type = types.id
         join stations as src_station on source=src_station.id join stations as des_station on destination=des_station.id
         join tickets on tickets.train = trains.id
    group by trains.id;

-- 6
select trains.id, types.name, src_station.name as src_stn, des_station.name as dst_stn, count(tickets.id) as occupied, max_seats as maximum
    from trains left outer join types on trains.type = types.id
         left outer join stations as src_station on source=src_station.id left outer join stations as des_station on destination=des_station.id
         left outer join tickets on tickets.train = trains.id
    group by trains.id;