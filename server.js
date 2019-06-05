const express = require ('express');
const connectDB = require ('./config/db')

const app = express();

// connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// test script for postman
//app.get('/', (req, res) => res.send('API Running'));

// define routes
app.use('/api/users', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, () => console.log(`Server satrted on port ${PORT}`));