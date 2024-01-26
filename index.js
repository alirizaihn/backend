const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/auth.js');
const rolesRoutes = require('./routes/roles.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use('/auth', authRoutes);
app.use('/roles', rolesRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});