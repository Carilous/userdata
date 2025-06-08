const express= require('express');
const app = express();
const port = process.env.port || 3085;
require('./config/db');
app.use(express.json());
const cors = require('cors');
app.use(cors());

const userRouter = require('./router/user.router');


app.get('/',(req, res) => {
res.status(200).json(
    {message: "server running sucessfully"}
)
});
 app.use('/user', userRouter); 

 app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen (port, ()=>{
    console.log(`Server is running on port ${port}`);
})