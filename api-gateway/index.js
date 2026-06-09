const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/users', async (req, res) => {
  const response = await fetch('http://user-service:3001/users');
  const users = await response.json();
  res.json(users);
});

app.get('/orders', async (req, res) => {
  const response = await fetch('http://order-service:3002/orders');
  const orders = await response.json();
  res.json(orders);
});

app.listen(8080, () => {
  console.log('API Gateway running on port 8080');
});
