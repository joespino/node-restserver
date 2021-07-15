require('dotenv').config();

app.listen(process.env.PORT, () => {
    console.log('Servidor correr', process.env.PORT);
});