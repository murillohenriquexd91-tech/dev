# Projeto de Tela de Login Animada

Este projeto implementa uma tela de login animada com SVG e GSAP, incluindo criação de conta e validação local.

## Arquivos

- `index.html` — tela de login principal com animações SVG
- `styles.css` — estilos para o layout das páginas
- `script.js` — animações e lógica de login
- `register.html` — formulário de criação de conta
- `register.js` — lógica para salvar nova conta
- `apps.html` — página de aplicativos após login
- `json-converter.html` — aplicativo conversor de JSON
- `flight-search.html` — aplicativo de consulta de passagens aéreas
- `flight-search.js` — lógica para busca simulada de voos
- `welcome.html` — página de boas-vindas (mantida para compatibilidade)

## Como rodar

1. Abra `index.html` no navegador ou use um servidor local (ex: `python3 -m http.server 8000`).
2. Use a conta de teste: `test@example.com` / `123456`
3. Ou clique em "Criar conta" para registrar uma nova conta.

## Funcionalidades

- **Animações SVG**: O rosto do personagem reage aos inputs (olhos seguem o cursor, boca muda com e-mail, braços cobrem olhos na senha).
- **Validação de login local**: Verifica credenciais salvas no localStorage do navegador.
- **Criação de conta**: Formulário separado para registrar nome completo, e-mail, localidade e senha.
- **Página de aplicativos**: Dashboard com acesso a ferramentas após login.
- **Conversor JSON**: Ferramenta para converter JSON para padrão da API (camelCase, conversão de valores).
- **Consulta de Passagens**: Ferramenta para buscar passagens aéreas simuladas, com filtros de origem, destino, datas e quantidade de pessoas.

## Como usar

### Login
- Digite e-mail e senha.
- Clique em "Log in" para validar.
- Conta de teste: `test@example.com` / `123456`.

### Criar conta
- Clique em "Criar conta" na tela de login.
- Preencha nome completo, e-mail, localidade e senha.
- Clique em "Criar Conta" para salvar e voltar ao login.

### Aplicativos
- Após login autorizado, redireciona para `apps.html` com dashboard de aplicativos.
- Clique no cartão "Conversor JSON" para abrir a ferramenta.
- Clique no cartão "Consultar Passagem" para abrir a busca de voos.

### Conversor JSON
- Cole ou digite JSON no campo de entrada.
- Clique em "Converter" para transformar para camelCase e ajustar valores.
- Use "Baixar JSON" para salvar o resultado como arquivo.
- Use "Copiar JSON" para copiar para a área de transferência.

### Consulta de Passagens
- Preencha os campos: Origem, Destino, Data de Ida, Data de Volta (opcional) e Quantidade de Pessoas.
- Clique em "Buscar Passagens" para simular a busca.
- Visualize os resultados com opções de voos, horários, durações e preços.
- Clique em "Selecionar" para escolher uma passagem (funcionalidade mockada).
