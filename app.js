const express = require('express');
const app = express();
const port = process.env.PORT||3000;
app.get('/api', (req, res) => {
    const data = {
        name: 'Bing',
        age: 3,
        gender: 'unknown'
    }
    res.json(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
