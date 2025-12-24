const express = require("express");
const app = express();

app.use(express.json());

const posts = [];


app.post("/posts", (req, res) => {
    const newId = posts.length + 1;

    const post = {
        id: newId,
        title: req.body["title"],
        content: req.body["content"]
    };

    console.log(`Adding this new post: ${JSON.stringify(post)}`);
    posts.push(post);

    console.log(`All Posts: ${JSON.stringify(posts)}`);

    res.status(201).json(post);
});


app.get("/posts", (req, res) => {
    res.json(posts);
});


app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    res.json(post);
});

app.put("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;

    console.log(`Updated post ${id}: ${JSON.stringify(post)}`);
    res.json(post);
});


app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).send("Post not found");
    }

    posts.splice(index, 1);

    console.log(`Deleted post with id ${id}`);
    res.status(204).send();
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000"); 
});
