import { initUserUI, attachLogout } from './dom.js';
import { initTradeForm } from './trade.js';
import { getUser } from '../data/state.js';

document.addEventListener("DOMContentLoaded", () => {
  const user = getUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  initUserUI(user);
  initTradeForm();
  attachLogout();
});
