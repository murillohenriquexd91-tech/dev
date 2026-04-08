document.addEventListener('DOMContentLoaded', () => {
  const fullNameInput = document.querySelector('#fullName');
  const emailInput = document.querySelector('#email');
  const locationInput = document.querySelector('#location');
  const passwordInput = document.querySelector('#password');
  const registerButton = document.querySelector('#register');
  const backButton = document.querySelector('#back');
  const messageEl = document.querySelector('#message');

  function showMessage(text, type = 'info') {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
  }

  function saveAccount(account) {
    localStorage.setItem('demoLoginAccount', JSON.stringify(account));
  }

  function handleRegister() {
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const location = locationInput.value.trim();
    const password = passwordInput.value.trim();

    if (!fullName || !email || !location || !password) {
      showMessage('Preencha todos os campos para criar a conta.', 'error');
      return;
    }

    if (!email.includes('@')) {
      showMessage('Digite um e-mail válido.', 'error');
      return;
    }

    const account = { fullName, email, location, password };
    saveAccount(account);
    showMessage('Conta criada com sucesso! Redirecionando...', 'success');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  }

  function handleBack() {
    window.location.href = 'index.html';
  }

  registerButton.addEventListener('click', handleRegister);
  backButton.addEventListener('click', handleBack);
});