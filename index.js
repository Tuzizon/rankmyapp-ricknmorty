const express = require('express')
const char = require('./api/char.routes')

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(char);
app.listen(PORT, () => {
    console.log(`app listen at ${PORT}`)
})