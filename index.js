const express= require('express');
const app = express();
const port = 3085;
require('./config/db');
app.use(express.json());
const userRouter = require('./router/user.router');


app.get('/',(req, res) => {
res.status(200).json(
    {message: "server running sucessfully"}
)
});
 app.use('user', userRouter);

app.listen (port, ()=>{
    console.log(`Server is running on port ${port}`);
})