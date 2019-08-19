module.exports = {
        create: async (req, res) => {
                const db = req.app.get('db')
                const { user_id, characterName, playerName, race, playerClass, background, alignment,
                        str, dex, wis, int, cha, con, acrobatics, arcana, animal_handling, athletics, deception,
                        history, insight, intimidation, investigation, medicine, nature, perception, performance,
                        persuassion, religion, sleight_of_hand, stealth, survival } = req.body
                let sheet_id = await db.create_sheet_userid([user_id])
                sheet_id = parseInt(sheet_id[0].sheet_id)
                const userSheets = await db.create_sheet_info({
                        user_id, sheet_id, characterName, playerName, race, playerClass, background, alignment,
                        str, dex, wis, int, cha, con, acrobatics, arcana, animal_handling, athletics, deception,
                        history, insight, intimidation, investigation, medicine, nature, perception, performance,
                        persuassion, religion, sleight_of_hand, stealth, survival
                })
                res.status(200).send(userSheets)
        },
        getAllSheets: async (req, res) => {
                const db = req.app.get('db')
                const sheets = await db.get.get_latest_20_sheets()
                res.status(200).send(sheets)
        },
        getByUserid: async (req, res) => {
                const db = req.app.get('db')
                const userId = req.params.userid
                const usersSheets = await db.get.get_sheets_by_user_id(userId)
                res.status(200).send(usersSheets)
        },
        getClassSkills: async (req, res) => {
                const db = req.app.get('db')
                const playerClass = req.params.playerclass
                const skills = await db.query(`select skill from class_race_skills
            where ${playerClass} = true`)
                res.status(200).send(skills)
        },
        getBackgroundSkills: async (req, res) => {
                const db = req.app.get('db')
                const background = req.params.background
                const skills = await db.query(`select skill from background_skills
        where ${background} = true`)
                res.status(200).send(skills)
        },
        deleteBySheetId: (req, res) => {
                const db = req.app.get('db')
                let sheet_id = req.params.sheetid
                db.delete.delete_by_sheet_id([sheet_id])
                res.status(200).send({ message: `character sheet ${sheet_id} was deleted` })
        }
}