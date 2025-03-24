document.getElementById('submitOrder').addEventListener('click', async () => {
  const apiKey = document.getElementById('apiKey').value;
  const apiSecret = document.getElementById('apiSecret').value;
  const symbol = document.getElementById('symbol').value;
  const side = document.getElementById('side').value;
  const quantity = document.getElementById('quantity').value;

  const res = await fetch('/api/placeOrder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apiKey, apiSecret, symbol, side, quantity })
  });

  const data = await res.json();
  document.getElementById('result').textContent = JSON.stringify(data, null, 2);
});