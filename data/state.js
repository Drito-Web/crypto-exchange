let balances = {
  USD: 10000,
  BTC: 0,
  ETH: 0
};

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getBalances() {
  return balances;
}

export function updateBalance(coin, amount) {
  balances[coin] += amount;
}
