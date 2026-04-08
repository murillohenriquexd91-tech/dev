document.addEventListener('DOMContentLoaded', () => {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const mySVG = document.querySelector('.svgContainer');
  const armL = document.querySelector('.armL');
  const armR = document.querySelector('.armR');
  const eyeL = document.querySelector('.eyeL');
  const eyeR = document.querySelector('.eyeR');
  const nose = document.querySelector('.nose');
  const mouth = document.querySelector('.mouth');
  const mouthBG = document.querySelector('.mouthBG');
  const mouthOutline = document.querySelector('.mouthOutline');
  const mouthSmallBG = document.querySelector('.mouthSmallBG');
  const mouthMediumBG = document.querySelector('.mouthMediumBG');
  const mouthLargeBG = document.querySelector('.mouthLargeBG');
  const tooth = document.querySelector('.tooth');
  const tongue = document.querySelector('.tongue');
  const chin = document.querySelector('.chin');
  const face = document.querySelector('.face');
  const eyebrow = document.querySelector('.eyebrow');
  const outerEarL = document.querySelector('.earL .outerEar');
  const outerEarR = document.querySelector('.earR .outerEar');
  const earHairL = document.querySelector('.earL .earHair');
  const earHairR = document.querySelector('.earR .earHair');
  const hair = document.querySelector('.hair');
  const createAccountButton = document.querySelector('#create-account');
  const messageEl = document.querySelector('#message');

  let mouthStatus = 'small';
  const eyeMaxHorizD = 20;
  const eyeMaxVertD = 10;
  const noseMaxHorizD = 23;
  const noseMaxVertD = 10;

  const mouthShapes = {
    small: mouthSmallBG.getAttribute('d'),
    medium: mouthMediumBG.getAttribute('d'),
    large: mouthLargeBG.getAttribute('d')
  };

  function setMouthShape(status) {
    const d = mouthShapes[status] || mouthShapes.small;
    mouthBG.setAttribute('d', d);
    mouthOutline.setAttribute('d', d);

    if (status === 'large') {
      mouthBG.setAttribute('fill', '#617E92');
    } else {
      mouthBG.setAttribute('fill', '#617E92');
    }
  }

  function getAngle(x1, y1, x2, y2) {
    return Math.atan2(y1 - y2, x1 - x2);
  }

  function getPosition(el) {
    let xPos = 0;
    let yPos = 0;

    while (el) {
      if (el.tagName === 'BODY') {
        const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        const yScroll = el.scrollTop || document.documentElement.scrollTop;
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
      el = el.offsetParent;
    }

    return { x: xPos, y: yPos };
  }

  function getCoord() {
    const carPos = email.selectionEnd;
    const div = document.createElement('div');
    const span = document.createElement('span');
    const copyStyle = getComputedStyle(email);

    Array.from(copyStyle).forEach((prop) => {
      div.style[prop] = copyStyle[prop];
    });

    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.whiteSpace = 'pre-wrap';
    div.style.width = `${email.offsetWidth}px`;
    document.body.appendChild(div);

    div.textContent = email.value.substr(0, carPos);
    span.textContent = email.value.substr(carPos) || '.';
    div.appendChild(span);

    const emailCoords = getPosition(email);
    const caretCoords = getPosition(span);
    const centerCoords = getPosition(mySVG);
    const screenCenter = centerCoords.x + (mySVG.offsetWidth / 2);
    const caretPos = caretCoords.x + emailCoords.x;
    const dFromC = screenCenter - caretPos;

    const eyeLCoords = { x: centerCoords.x + 84, y: centerCoords.y + 76 };
    const eyeRCoords = { x: centerCoords.x + 113, y: centerCoords.y + 76 };
    const noseCoords = { x: centerCoords.x + 97, y: centerCoords.y + 81 };
    const mouthCoords = { x: centerCoords.x + 100, y: centerCoords.y + 100 };
    const targetX = emailCoords.x + caretCoords.x;
    const targetY = emailCoords.y + 25;

    const eyeLAngle = getAngle(eyeLCoords.x, eyeLCoords.y, targetX, targetY);
    const eyeLX = Math.cos(eyeLAngle) * eyeMaxHorizD;
    const eyeLY = Math.sin(eyeLAngle) * eyeMaxVertD;
    const eyeRAngle = getAngle(eyeRCoords.x, eyeRCoords.y, targetX, targetY);
    const eyeRX = Math.cos(eyeRAngle) * eyeMaxHorizD;
    const eyeRY = Math.sin(eyeRAngle) * eyeMaxVertD;
    const noseAngle = getAngle(noseCoords.x, noseCoords.y, targetX, targetY);
    const noseX = Math.cos(noseAngle) * noseMaxHorizD;
    const noseY = Math.sin(noseAngle) * noseMaxVertD;
    const mouthAngle = getAngle(mouthCoords.x, mouthCoords.y, targetX, targetY);
    const mouthX = Math.cos(mouthAngle) * noseMaxHorizD;
    const mouthY = Math.sin(mouthAngle) * noseMaxVertD;
    const mouthR = Math.cos(mouthAngle) * 6;
    const chinX = mouthX * 0.8;
    const chinY = mouthY * 0.5;
    let chinS = 1 - ((dFromC * 0.15) / 100);
    if (chinS > 1) chinS = 2 - chinS;
    const faceX = mouthX * 0.3;
    const faceY = mouthY * 0.4;
    const faceSkew = Math.cos(mouthAngle) * 5;
    const eyebrowSkew = Math.cos(mouthAngle) * 25;
    const outerEarX = Math.cos(mouthAngle) * 4;
    const outerEarY = Math.cos(mouthAngle) * 5;
    const hairX = Math.cos(mouthAngle) * 6;
    const hairS = 1.2;

    gsap.to(eyeL, { duration: 1, x: -eyeLX, y: -eyeLY, ease: 'expo.out' });
    gsap.to(eyeR, { duration: 1, x: -eyeRX, y: -eyeRY, ease: 'expo.out' });
    gsap.to(nose, { duration: 1, x: -noseX, y: -noseY, rotation: mouthR, transformOrigin: 'center center', ease: 'expo.out' });
    gsap.to(mouth, { duration: 1, x: -mouthX, y: -mouthY, rotation: mouthR, transformOrigin: 'center center', ease: 'expo.out' });
    gsap.to(chin, { duration: 1, x: -chinX, y: -chinY, scaleY: chinS, ease: 'expo.out' });
    gsap.to(face, { duration: 1, x: -faceX, y: -faceY, skewX: -faceSkew, transformOrigin: 'center top', ease: 'expo.out' });
    gsap.to(eyebrow, { duration: 1, x: -faceX, y: -faceY, skewX: -eyebrowSkew, transformOrigin: 'center top', ease: 'expo.out' });
    gsap.to(outerEarL, { duration: 1, x: outerEarX, y: -outerEarY, ease: 'expo.out' });
    gsap.to(outerEarR, { duration: 1, x: outerEarX, y: outerEarY, ease: 'expo.out' });
    gsap.to(earHairL, { duration: 1, x: -outerEarX, y: -outerEarY, ease: 'expo.out' });
    gsap.to(earHairR, { duration: 1, x: -outerEarX, y: outerEarY, ease: 'expo.out' });
    gsap.to(hair, { duration: 1, x: hairX, scaleY: hairS, transformOrigin: 'center bottom', ease: 'expo.out' });

    document.body.removeChild(div);
  }

  function updateFaceFromEmail(value) {
    if (value.length === 0) {
      mouthStatus = 'small';
      setMouthShape('small');
      gsap.to(tooth, { duration: 1, x: 0, y: 0, ease: 'expo.out' });
      gsap.to(tongue, { duration: 1, y: 0, ease: 'expo.out' });
      gsap.to([eyeL, eyeR], { duration: 1, scaleX: 1, scaleY: 1, ease: 'expo.out' });
      return;
    }

    if (value.includes('@')) {
      mouthStatus = 'large';
      setMouthShape('large');
      gsap.to(tooth, { duration: 1, x: 3, y: -2, ease: 'expo.out' });
      gsap.to(tongue, { duration: 1, y: 2, ease: 'expo.out' });
      gsap.to([eyeL, eyeR], { duration: 1, scaleX: 0.65, scaleY: 0.65, transformOrigin: 'center center', ease: 'expo.out' });
      return;
    }

    mouthStatus = 'medium';
    setMouthShape('medium');
    gsap.to(tooth, { duration: 1, x: 0, y: 0, ease: 'expo.out' });
    gsap.to(tongue, { duration: 1, x: 0, y: 1, ease: 'expo.out' });
    gsap.to([eyeL, eyeR], { duration: 1, scaleX: 0.85, scaleY: 0.85, ease: 'expo.out' });
  }

  function resetFace() {
    gsap.to([eyeL, eyeR], { duration: 1, x: 0, y: 0, ease: 'expo.out' });
    gsap.to(nose, { duration: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, ease: 'expo.out' });
    gsap.to(mouth, { duration: 1, x: 0, y: 0, rotation: 0, ease: 'expo.out' });
    gsap.to(chin, { duration: 1, x: 0, y: 0, scaleY: 1, ease: 'expo.out' });
    gsap.to([face, eyebrow], { duration: 1, x: 0, y: 0, skewX: 0, ease: 'expo.out' });
    gsap.to([outerEarL, outerEarR, earHairL, earHairR, hair], { duration: 1, x: 0, y: 0, scaleY: 1, ease: 'expo.out' });
  }

  function showMessage(text, type = 'info') {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;
  }

  function getStoredAccount() {
    const saved = localStorage.getItem('demoLoginAccount');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  function saveAccount(account) {
    localStorage.setItem('demoLoginAccount', JSON.stringify(account));
  }

  function getDefaultAccount() {
    return { email: 'test@example.com', password: '123456' };
  }

  function getCurrentAccount() {
    return getStoredAccount() || getDefaultAccount();
  }

  function handleLogin() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (!emailValue || !passwordValue) {
      showMessage('Preencha email e senha para entrar.', 'error');
      return;
    }

    const account = getCurrentAccount();
    if (emailValue === account.email && passwordValue === account.password) {
      window.location.href = `apps.html?email=${encodeURIComponent(emailValue)}`;
      return;
    }

    showMessage('Login não autorizado. E-mail ou senha incorretos.', 'error');
  }

  function handleCreateAccount() {
    window.location.href = 'register.html';
  }

  function coverEyes() {
    gsap.to(armL, { duration: 0.45, x: -93, y: 2, rotation: 0, ease: 'quad.out' });
    gsap.to(armR, { duration: 0.45, x: -93, y: 2, rotation: 0, ease: 'quad.out', delay: 0.1 });
  }

  function uncoverEyes() {
    gsap.to(armL, { duration: 1.35, y: 220, ease: 'quad.out' });
    gsap.to(armL, { duration: 1.35, rotation: 105, ease: 'quad.out', delay: 0.1 });
    gsap.to(armR, { duration: 1.35, y: 220, ease: 'quad.out' });
    gsap.to(armR, { duration: 1.35, rotation: -105, ease: 'quad.out', delay: 0.1 });
  }

  function onEmailInput(e) {
    getCoord();
    updateFaceFromEmail(e.target.value);
  }

  function onEmailFocus() {
    email.parentElement.classList.add('focusWithText');
    getCoord();
  }

  function onEmailBlur() {
    if (email.value === '') {
      email.parentElement.classList.remove('focusWithText');
    }
    resetFace();
  }

  function onPasswordFocus() {
    coverEyes();
  }

  function onPasswordBlur() {
    uncoverEyes();
  }

  gsap.set(armL, { x: -93, y: 220, rotation: 105, transformOrigin: 'top left' });
  gsap.set(armR, { x: -93, y: 220, rotation: -105, transformOrigin: 'top right' });
  setMouthShape('small');

  email.addEventListener('focus', onEmailFocus);
  email.addEventListener('blur', onEmailBlur);
  email.addEventListener('input', onEmailInput);
  password.addEventListener('focus', onPasswordFocus);
  password.addEventListener('blur', onPasswordBlur);
  document.querySelector('#login').addEventListener('click', handleLogin);
  createAccountButton.addEventListener('click', handleCreateAccount);

  const currentAccount = getCurrentAccount();
  if (currentAccount.email === getDefaultAccount().email) {
    showMessage('Conta de teste disponível: test@example.com / 123456', 'info');
  } else {
    showMessage('Conta local salva. Use suas credenciais para entrar.', 'info');
  }
});
