const express = require ('express')

const app = express()

const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('About API');
  });
  
app.get('/contact', (req, res) => {
    res.send('Contact API');
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})