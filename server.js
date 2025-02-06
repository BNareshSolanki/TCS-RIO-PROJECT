// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// Calculator route
app.post('/calculate', (req, res) => {
    const { expression } = req.body;
    try {
        // Using Function instead of eval for safer evaluation
        const result = new Function('return ' + expression)();
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: 'Invalid expression' });
    }
});

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});
