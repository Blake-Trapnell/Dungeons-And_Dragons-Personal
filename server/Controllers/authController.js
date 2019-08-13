const bcrypt = require('bcryptjs')
module.exports = {
    register: async (req,res) => {
        const db = req.app.get('db')
        const {username, password, email} = req.body
        console.log('hit')
        const user = await db.find_username_and_email([username, email])
        if (user.length > 0) {
            return res.status(400).send({message: 'username & or email is in use'})
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.insert_user_info({username, email, hash})
        .then(()=>{
            req.session.user = newUser[0]
            console.log(req.session.user)
            res.status(200).send({
                message: 'logged in',
                user: req.session.user,
                loggedIn: true
            })
        }).catch(err => {
            res.status(500).send({message: 'Failed to register'})
        })
    },
}