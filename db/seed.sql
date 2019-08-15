DROP TABLE atks_spells;
DROP TABLE character_info;
DROP TABLE cha_skills;
DROP TABLE int_skills;
DROP TABLE wis_skills;
DROP TABLE str_skills;
DROP TABLE dex_skills;
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
sheet_id SERIAL
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
archetype VARCHAR(50),
armor_class INT,
initiative INT,
speed INT,
hitdice INT,
equipment TEXT,
sheet_id INT REFERENCES character_sheets(sheet_id));

CREATE TABLE dex_skills (
dex_skills_id SERIAL PRIMARY KEY,
acrobatics BOOLEAN,
sleight_of_hand BOOLEAN,
stealth BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE str_skills (
str_skills_id SERIAL PRIMARY KEY,
athletics BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE wis_skills (
wis_skills_id SERIAL PRIMARY KEY,
animal_handling BOOLEAN,
insight BOOLEAN,
medicine BOOLEAN,
perception BOOLEAN,
survival BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE int_skills (
int_skills_id SERIAL PRIMARY KEY,
arcana BOOLEAN,
history BOOLEAN,
investigation BOOLEAN,
nature BOOLEAN,
religion BOOLEAN,
user_id INT REFERENCES users(user_id),
sheet_id INT REFERENCES character_sheets(sheet_id)
);

CREATE TABLE cha_skills (
cha_skills_id SERIAL PRIMARY KEY,
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


INSERT INTO class_race (user_id, character_name, class, level, background, playername, race, alignment, sheet_id)
VALUES (1, 'Ion Steel', 'Cleric', 1, 'Knight', 'Blake Trapnell', 'Human', 'Chaotic Evil', 1 );


INSERT INTO dex_skills (acrobatics, sleight_of_hand, stealth, user_id, sheet_id)
VALUES ( false, false, false, 1, 1);


INSERT INTO str_skills (athletics, user_id, sheet_id)
VALUES (false, 1 , 1);


INSERT INTO wis_skills (animal_handling, insight, medicine, perception, survival, user_id, sheet_id)
VALUES (false, false, true, false, false, 1, 1);


INSERT INTO int_skills (user_id, arcana, history, investigation, nature, religion, sheet_id)
VALUES (1, true, true, false, false, false, 1);


INSERT INTO cha_skills (user_id, deception, intimidation, performance, persuassion, sheet_id)
VALUES (1, false, false, false, true, 1);


INSERT INTO character_info (user_id, person_traits, Ideals, bonds, flaws, sheet_id)
VALUES (1, 'Personality Traits', 'Ideals', 'Bonds', 'Flaws', 1);

INSERT INTO atks_spells (user_id, sheet_id, attacks, spells, feats, traits)
VALUES (1, 1, 'attack', 'spell', 'feats', 'traits')

INSERT INTO additional_info (user_id, sheet_id, armor_class, initiative, speed, hitdice, equipment, archetype)
VALUES (1, 1, 18, 0, 30, 8, 'equipment, "Life")