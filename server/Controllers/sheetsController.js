module.exports = {
    getAllSheets: async (req,res) => {
            const db = req.app.get('db')
            const sheets = await db.get.get_latest_20_sheets()
            res.status(200).send(sheets)
    },
    getByUserid: async (req,res) => {
            const db = req.app.get('db')
            const userId = req.params.userid
            const usersSheets = await db.get.get_sheets_by_user_id(userId)
            res.status(200).send(usersSheets)
    },
    getClassSkills: async (req,res) => {
            const db = req.app.get('db')
            const playerClass = req.params.playerclass
            console.log(playerClass)
            const skills = await db.query(`select skill from class_race_skills
            where ${playerClass} = true`)
            res.status(200).send(skills)
    }
}