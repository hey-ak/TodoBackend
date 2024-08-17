const User = require("../models/user")
const bcrypt = require("bcryptjs")
const register = async (req,res)=>{
     try {
        const {email,username,password} = req.body
        const hashpassword = bcrypt.hashSync(password)
        const user = await User.findOne({
            email
        })

        if(user){
           return res.send("User Already Exist");
        }

        const newUser = new User({email,username,password:hashpassword});
        await newUser.save();
        return res.json({
            msg:"User Created Successfully",
            user:newUser,
            error:false
        })



        

     } catch (error) {
        console.log(error);
        return res.send("end ho gya yaar")
        
     }


}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                msg: "User Not Found",
                error: true // Changed to true as this is an error condition
            });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (isPasswordCorrect) {
            // Exclude the password field from the user object
            const { password, ...userWithoutPassword } = user.toObject();
            return res.json({
                msg: "Login Successful",
                error: false,
                user: userWithoutPassword
            });
        } else {
            return res.json({
                msg: "Invalid Password",
                error: true
            });
        }
    } catch (error) {
        return res.status(500).json({
            msg: "Internal Server Error",
            error: true
        });
    }
};


module.exports = {register,login}


