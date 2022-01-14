const express = require('express');
const festivalRoutes = require('./src/festival/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome in my API rest for the Festival App");
})

app.use("/api/v1", festivalRoutes);

app.listen(port, () => console.log(`serveur en cours d\'exécution sur le port ${port}`));