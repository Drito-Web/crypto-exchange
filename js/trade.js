import { updateBalanceUI, addToHistory } from './dom.js';
import { getBalances, updateBalance } from '../data/state.js';

const prices = {
  BTC: 67000,
  ETH: 3500
};

export function initTradeForm() {
  document.getElementById("trade-form").addEventListener("submit", e => {
    e.preventDefault();
    const action = document.getElementById("action").value;
    const coin = document.getElementById("coin").value;
    const usdAmount = parseFloat(document.getElementById("amount").value);
    const price = prices[coin];
    const coinAmount = usdAmount / price;
    const b = getBalances();

    if (action === "buy") {
      if (usdAmount > b.USD) return alert("Fondos insuficientes");
      updateBalance("USD", -usdAmount);
      updateBalance(coin, coinAmount);
    } else {
      if (coinAmount > b[coin]) return alert(`No tienes suficiente ${coin}`);
      updateBalance("USD", usdAmount);
      updateBalance(coin, -coinAmount);
    }

    updateBalanceUI();
    addToHistory(action, coin, usdAmount, price);
    document.getElementById("amount").value = "";
  });
}
