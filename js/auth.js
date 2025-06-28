export function handleGoogleLogin(response) {
  const data = parseJwt(response.credential);
  console.log("Usuario autenticado:", data);

  localStorage.setItem("user", JSON.stringify(data));
  window.location.href = "exchange.html"; // Redirige al Exchange
}
export function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join('')
  );
  return JSON.parse(jsonPayload);
}
