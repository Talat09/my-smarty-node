const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello my over alga firit smarty node ki obostha!!")
})
app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
const users = [
    {
        id: 1,
        name: "Talat Mahmud",
        email: "mdtalat09@gmai.com",
        phone: "01784404687"
    },
    {
        id: 2,
        name: "Tawfik Reza Rafy",
        email: "Rafy@gmai.com",
        phone: "01784404687"
    },
    { id: 3, name: "Jaifan Bin jakariya", email: "jakariya@gmai.com", phone: "01784404687" },
    { id: 4, name: "Sanjida Mahmud Ria", email: "Sanjida@gmai.com", phone: "01784404687" },
    { id: 5, name: "Naznin huda Susmi", email: "Naznin@gmai.com", phone: "01784404687" },
    { id: 6, name: "Sarin Snigdha sigu", email: "Snigdha@gmai.com", phone: "01784404687" },
    { id: 7, name: "Salma faria juhi", email: "Salma@gmai.com", phone: "01784404687" }
]

app.get('/users', (req, res) => {
    //filter by query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    const id = req.params.id;

    //const user = users[id] eivhabe othoba nicer line a jvhabe korse oivhabe
    const user = users.find(u => u.id == id);

    res.send(user)
})
app.listen(port, () => {
    console.log('listing', port)
})