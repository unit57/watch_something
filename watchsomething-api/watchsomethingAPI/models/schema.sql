DROP DATABASE IF EXISTS watchsomething_db;
CREATE DATABASE watchsomething_db;

\c watchsomething_db;

CREATE TABLE IF NOT EXISTS movies(
	id BIGSERIAL PRIMARY KEY,
	title TEXT,
	posterpath TEXT,
	overview TEXT,
	year INTEGER,
	genre_id_1 INTEGER,
	genre_id_2 INTEGER,
	genre_id_3 INTEGER
);

CREATE TABLE IF NOT EXISTS genres(
	id BIGSERIAL PRIMARY KEY,
	genre_id INTEGER,
	name TEXT
);

INSERT INTO movies (title, posterpath, overview, year, genre_id_1, genre_id_2, genre_id_3)
	VALUES
	('stuff', 'this/is/path', 'when stuff happens, things happen too', 1999, 2, 3, 4),
	('Things (stuff 2)', 'this/is/path', 'when stuff happens again, things are back', 2014, 2, 3, 4);


	


