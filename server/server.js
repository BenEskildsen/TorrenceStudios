
const express = require('express');
const path = require('path');
// const cors = require('cors');

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../www')));
// app.use(cors());

// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions))

console.log("server listening on port", port);

app.listen(port);
