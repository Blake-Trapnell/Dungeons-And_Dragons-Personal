CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(25),
email VARCHAR(100),
Hash TEXT,
character_sheets INT
);
