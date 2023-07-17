// Create web server application that will render comments from the comments.json file
// When the user goes to the path /comments, the server should return the comments.json file
// When the user goes to the path /users, the server should return the users.json file
// When the user goes to the path /posts, the server should return the posts.json file
// When the user goes to the path /todos, the server should return the todos.json file

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.sendFile(__dirname + '/comments.json');
});

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/users.json');
});

app.get('/posts', (req, res) => {
    res.sendFile(__dirname + '/posts.json');
});

app.get('/todos', (req, res) => {
    res.sendFile(__dirname + '/todos.json');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});