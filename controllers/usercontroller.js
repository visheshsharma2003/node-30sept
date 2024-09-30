const bcrypt = require('bcrypt');
const User = require('../models/newUser');
const saltRounds = 10;
async function signup(req, res) {
    try {

        let password = bcrypt.hashSync(req.body.password, saltRounds);


        let user = new User(req.body);
        user.password = password;
        await user.save();

        res.redirect('/')

    } catch (err) {
        console.log(err.message, 'msg')

    }
    
}
async function doLogin(req, res) {
    try {
        console.log(req.body, 'req.body')
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.end('<h1> No such user exist...</h1>')

        } else {
            let ismatch = await bcrypt.compare(req.body.password, user.password)
            if (ismatch) {
                res.end("<h1>Login successfully</h1>");
            } else {
                res.end("<h1> incorrect password</h1>");
            }
        }

    } catch (err) {
        console.log(err)

    }
}
module.exports = {
    signup,
    doLogin
}