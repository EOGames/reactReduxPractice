const User = require("../models/User");

module.exports.registerUser = async (req, res) => {
    const { email, name, lname, password } = req.body;

    const foundUser =  await User.findOne({ email: email });

    try {
        if (foundUser)
        {
            return res.status(409).json({status:409, message: "User Already Registred Please Login !" });
        }
        else
        {
            let user = new User(
                {
                    email: email,
                    name: name,
                    lname: lname,
                    password: password
                }
            )
            let response = await user.save();
            console.log('New User Registred', response);
            return res.status(200).json({status:200, message: 'Registration Successfull Please Login To Continue' });
        }
    }
    catch (error) {
        console.log(error);
    }

}