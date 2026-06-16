import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('wellcome to express');
});

app.get('/hello', (req, res) => {
    res.send('Hello from the /hello route!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});