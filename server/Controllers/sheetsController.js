module.exports = {
    getAllSheets: async (req,res) => {
            const db = req.app.get('db')
            const sheets = await db.get_all_sheets()
            res.status(200).send(sheets)
    },
    getByUserid: async (req,res) => {
            const db = req.app.get('db')
            const userId = req.params.userid
            const usersSheets = await db.get_sheets_by_user_id(userId)
            res.status(200).send(usersSheets)
    }
}