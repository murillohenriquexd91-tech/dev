# Projeto de Tela de Login Animada

Este projeto implementa uma tela de login animada com SVG e GSAP, incluindo criação de conta e validação local.

## Arquivos

- `index.html` — tela de login principal com animações SVG
- `styles.css` — estilos para o layout das páginas
- `script.js` — animações e lógica de login
- `register.html` — formulário de criação de conta
- `register.js` — lógica para salvar nova conta
- `welcome.html` — página de boas-vindas após login

## Como rodar

1. Abra `index.html` no navegador ou use um servidor local (ex: `python3 -m http.server 8000`).
2. Use a conta de teste: `test@example.com` / `123456`
3. Ou clique em "Criar conta" para registrar uma nova conta.

## Funcionalidades

- **Animações SVG**: O rosto do personagem reage aos inputs (olhos seguem o cursor, boca muda com e-mail, braços cobrem olhos na senha).
- **Validação de login local**: Verifica credenciais salvas no localStorage do navegador.
- **Criação de conta**: Formulário separado para registrar nome completo, e-mail, localidade e senha.
- **Página de boas-vindas**: Mostra mensagem personalizada com nome e localidade após login.

## Como usar

### Login
- Digite e-mail e senha.
- Clique em "Log in" para validar.
- Conta de teste: `test@example.com` / `123456`.

### Criar conta
- Clique em "Criar conta" na tela de login.
- Preencha nome completo, e-mail, localidade e senha.
- Clique em "Criar Conta" para salvar e voltar ao login.

### Boas-vindas
- Após login autorizado, redireciona para `welcome.html` com mensagem personalizada.
