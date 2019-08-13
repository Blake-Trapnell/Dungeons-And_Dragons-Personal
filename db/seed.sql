DROP TABLE atks_spells;
DROP TABLE character_info;
DROP TABLE cha_profs;
DROP TABLE int_profs;
DROP TABLE wis_profs;
DROP TABLE str_profs;
DROP TABLE dex_profs;
DROP TABLE additional_info;
DROP TABLE class_race;
DROP TABLE ability_points;
DROP TABLE character_sheets;
DROP TABLE users;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(25),
email VARCHAR(100),
Hash TEXT
);

CREATE TABLE character_sheets (
character_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
sheet_id INT UNIQUE
);

CREATE TABLE ability_points (
ap_id SERIAL PRIMARY KEY,
strength INT,
dexterity INT,
constitution INT,
wisdom INT,
charisma INT,
intelligence INT,
passive_perception INT,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE class_race (
class_race_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
character_name VARCHAR(255),
class VARCHAR(50),
level INT,
background VARCHAR(50),
playername VARCHAR(100),
race VARCHAR(50),
alignment VARCHAR(50),
sheet_id INT REFERENCES character_sheets(sheet_id));

CREATE TABLE additional_info (
info_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
armor_class INT,
initiative INT,
speed INT,
hitdice INT,
equipment TEXT,
sheet_id INT REFERENCES character_sheets(sheet_id));

CREATE TABLE dex_profs (
dex_prof_id SERIAL PRIMARY KEY,
acrobatics BOOLEAN,
sleight_of_hand BOOLEAN,
stealth BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE str_profs (
str_prof_id SERIAL PRIMARY KEY,
athletics BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE wis_profs (
wis_prof_id SERIAL PRIMARY KEY,
animal_handling BOOLEAN,
insight BOOLEAN,
medicine BOOLEAN,
perception BOOLEAN,
survival BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE int_profs (
int_prof_id SERIAL PRIMARY KEY,
arcana BOOLEAN,
history BOOLEAN,
investigation BOOLEAN,
nature BOOLEAN,
religion BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE cha_profs (
cha_prof_id SERIAL PRIMARY KEY,
deception BOOLEAN,
intimidation BOOLEAN,
performance BOOLEAN,
persuassion BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE character_info (
character_id SERIAL PRIMARY KEY,
person_traits TEXT,
ideals TEXT,
bonds TEXT,
flaws TEXT,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE atks_spells (
attacks_id SERIAL PRIMARY KEY,
attacks TEXT,
spells TEXT,
feats TEXT,
traits TEXT,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

INSERT INTO users (username, email, hash)
VALUES ('Aceassin', 'Blake.Trapnell103@gmail.com', '$2a$10$tBoYVjxZvEnMI6Lzpp/LQefE5RNrh9IZc4w7WOXgOOrvsuj6cWSka');


INSERT INTO character_sheets (user_id, sheet_id)
VALUES ( 1, 1);


INSERT INTO ability_points(strength, dexterity, wisdom, intelligence, charisma, constitution, user_id, sheet_id)
VALUES ( 14, 11, 9, 13, 16, 15, 1, 1);


INSERT INTO class_race (user_id, character_name, class, level, background, playername, race, alignment)
VALUES (1, 'Ion Steel', 'Cleric', 1, 'Knight', 'Blake Trapnell', 'Human', 'Chaotic Evil' );


INSERT INTO dex_profs (user_id, acrobatics, sleight_of_hand, stealth)
VALUES (1, false, false, false);


INSERT INTO str_profs (user_id, athletics)
VALUES (1, false);


INSERT INTO wis_profs (user_id, animal_handling, insight, medicine, perception, survival)
VALUES (1, false, false, true, false, false);


INSERT INTO int_profs (user_id, arcana, history, investigation, nature, religion, sheet_id)
VALUES (1, true, true, false, false, false, 1);


INSERT INTO cha_profs (user_id, deception, intimidation, performance, persuassion, sheet_id)
VALUES (1, false, false, false, true, 1);


INSERT INTO character_info (user_id, person_traits, Ideals, bonds, flaws, sheet_id)
VALUES (1, 'Personality Traits', 'Ideals', 'Bonds', 'Flaws', 1);