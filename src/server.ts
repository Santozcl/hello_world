import * as exprees from  'express';

const port = 3000;
const app = exprees();

app.get('/', (request, response) => {
response.send('Hello world')
 });

app.get('/bsm', (request, response) => {
response.send('Orientação ao futuro, trabalho em equipe, proatividade')
});

app.get('/aprendizados', (request, response) => {
response.send('Aprender novos conehcimentos sobre programação')
 });

app.get('/participantes', (request, response) => {
response.send('Hello participator')
});

app.listen(port, () => {
console.log(`Server is running atg port ${port}!`)
});




