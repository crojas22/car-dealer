const express = require('express');
const config = require('./config');

const app = express();

app.listen(config.port, config.host, () => console.info(`Express is listening on port ${config.port}`));



