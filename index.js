const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Bismillah, Aplikasi Masjid Nurul Ihsan Berhasil Online!');
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
