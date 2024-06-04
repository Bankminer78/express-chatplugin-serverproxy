const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
`;

app.use(express.json());

app.post('/api/proxy', async (req, res) => {
  try {
    const response = {data: 'it works!'};
    /*const response = await axios.post('https://api.example.com/data', req.body, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });*/
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

