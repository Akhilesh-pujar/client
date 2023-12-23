

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require("dotenv");
const { Schema } = mongoose;
dotenv.config();

const app = express();

// Enable CORS if your frontend is on a different domain
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
const uri = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose.connect(uri);

// Define a MongoDB User model
const User = mongoose.model('User',new Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  role: String

}));
const Admin = mongoose.model('Admin',new Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  role: String

}));

app.use(express.json());

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username,email, password,role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    if(role === 'Admin' && role ==='admin'){
      const admin = new Admin ({username,email,password:hashedPassword,role})
      await admin.save();
    }
    else{
      const user = new User({ username,email, password: hashedPassword,role })
      await user.save();

    }
    
   
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    let userModel, roleModel;

    if (role === 'Admin') {
      userModel = Admin;
      roleModel = 'Admin';
    } else {
      userModel = User;
      roleModel = 'User';
    }

    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: `${roleModel} Not Found` });
    }
    const passwordMatch = await bcrypt.compare(password, user.password,);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    return res.status(200).json({ message: `${roleModel} Login successful` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An unexpected error occurred' });
  }
});
// app.get("api/forgotpassword",async(req,res)=>{
//     const { password} = req.body;

// })

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


