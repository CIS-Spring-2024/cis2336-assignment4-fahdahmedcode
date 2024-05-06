const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));


app.post('/submit-order', (req, res) => {
    const items = req.body.items;
    const total = items.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2);
    res.json({ success: true, total });
});


app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'checkout.html'));
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
