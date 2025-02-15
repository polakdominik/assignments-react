const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }
    next();
});

/*
* custom endpoint
 */
server.patch('/items/:id/mark-done', (req, res) => {
    // most challenging so far, digging trough json-server docs and source to figure custom usage
    const item = router.db.get('items')
        .find({ id: +req.params.id });

    if (!item.value()) {
        res.status(404).json({ message: 'not found', code: 'NOT_FOUND' });
    }

    const isDone = Boolean(req.body.isDone);

    item
        .assign({ isDone, finishedAt: isDone ? Date.now() : undefined })
        .write()

    res.json(item)
});

// Use default router
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});
