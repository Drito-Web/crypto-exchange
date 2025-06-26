import { getBalances } from '../data/state.js';

export function initUserUI(user) {
  document.getElementById("user-name").textContent = user.name;
  const container = document.getElementById("exchange-container");

  container.innerHTML = `
    <section class="exchange-panel">
      <h2>Simulador</h2>
      <form id="trade-form">
        <select id="action">
          <option value="buy">Comprar</option>
          <option value="sell">Vender</option>
        </select>
        <select id="coin">
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </select>
        <input type="number" id="amount" placeholder="Cantidad USD" required>
        <button type="submit">Ejecutar</button>
      </form>

      <h3>Balance</h3>
      <ul id="balances">
        <li>USD: $<span id="usd"></span></li>
        <li>BTC: <span id="btc"></span></li>
        <li>ETH: <span id="eth"></span></li>
      </ul>

      <h3>Historial</h3>
      <table id="history">
        <thead>
          <tr><th>Tipo</th><th>Moneda</th><th>Monto</th><th>Precio</th><th>Fecha</th></tr>
        </thead>
        <tbody></tbody>
      </table>
    </section>
  `;

  updateBalanceUI();
}

export function updateBalanceUI() {
  const b = getBalances();
  document.getElementById("usd").textContent = b.USD.toFixed(2);
  document.getElementById("btc").textContent = b.BTC.toFixed(6);
  document.getElementById("eth").textContent = b.ETH.toFixed(6);
}

export function addToHistory(action, coin, usdAmount, price) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${action === 'buy' ? 'Compra' : 'Venta'}</td>
    <td>${coin}</td>
    <td>$${usdAmount.toFixed(2)}</td>
    <td>$${price.toFixed(2)}</td>
    <td>${new Date().toLocaleString()}</td>
  `;
  document.querySelector("#history tbody").prepend(row);
}

export function attachLogout() {
  document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("user");
    location.href = "login.html";
  });
}
