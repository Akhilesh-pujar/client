

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require("dotenv");
const { Schema } = mongoose;
dotenv.config();

const app = express();

// Enable CORS if your frontend is on a different domain
app.use(cors());
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
  password: String

}));

app.use(express.json());

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username,email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username,email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An unexpected error occurred' });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


