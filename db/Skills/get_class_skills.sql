select * from class_race_skills
where $1 = TRUE
RETURNING skill;