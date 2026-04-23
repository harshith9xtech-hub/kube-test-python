const express = require('express');
const cors = require('cors');

const app = express();

app.disable('x-powered-by'); // 🔥 fixes fingerprinting warning

app.use(cors({
  origin: "http://localhost:8081"
}));

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
