const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');

const AppRouter = require('./routes/AppRouter');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'The Server Works! Lets Go!' }));
app.use('/api', AppRouter);
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
