const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const unitRoutes = require('./routers/unitRouter');
app.use('/api/units', unitRoutes);
app.use('/api/unit', unitRoutes);

app.listen(port, () => {
    console.log("App listening to: " + port);
});
