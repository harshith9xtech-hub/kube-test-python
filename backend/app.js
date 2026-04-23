const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// security fix (Sonar warning)
app.disable('x-powered-by');
app.use(helmet());

app.use(cors({
  origin: "http://localhost:8081"
}));

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

// IMPORTANT FOR TESTS
module.exports = app;

// only run server when not imported
if (require.main === module) {
  app.listen(3000, () => console.log("Server running on 3000"));
}
