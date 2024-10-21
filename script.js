// アプリケーションを開く
function openApp(appId) {
  document.getElementById(appId).classList.remove('hidden');
}

// アプリケーションを閉じる
function closeApp(appId) {
  document.getElementById(appId).classList.add('hidden');
}

// スタートメニューの表示/非表示を切り替える
function toggleStartMenu() {
  const startMenu = document.getElementById('start-menu');
  startMenu.classList.toggle('hidden');
}

// 時刻を表示する
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeString = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
  document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);

// 電卓アプリのロジック
let calcInput = '';

function addToCalc(value) {
  calcInput += value;
  document.getElementById('calcDisplay').value = calcInput;
}

function clearCalc() {
 
