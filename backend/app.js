const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: "http://localhost:8081"
}));

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000);
}
