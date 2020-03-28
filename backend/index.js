const express = require('express');

const app = express();

app.get('/', (resquest, response) => {
    return response.json({
        evento:'Semana OminiStack 11.0',
        aluno:'Michael Farias'
    });
});

app.listen(3333)