const express = require('express');
const app = express();
const port = 3000;

//Simulate a long-running synchronous task
function slowTask(){
    let sum = 0;
    for(let i = 0; i < 1000000000; i++) sum += i;
    return sum;
}

app.get('/', (req, res) => {
    //The problem is here.  This blocks event loop
    // const result = slowTask();
    // res.send(`Hello World! Result: ${result}`);
    setTimeout(()=>{
        res.send('Hello World!');
    },1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});