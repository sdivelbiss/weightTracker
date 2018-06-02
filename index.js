let express = require('express');
let weightController = require('./Controller/weightSchema');
let app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

weightController(app);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
