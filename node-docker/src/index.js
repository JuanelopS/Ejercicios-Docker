// ? Aquí arrancaremos el servidor

const app = require('./app.js');


app.use(express.static(join(__dirname, 'public')));

app.all('*', )

app.listen(4000, () => console.log('Server running...'));

