// ウィンドウを開く
function openWindow() {
  document.getElementById('window').classList.remove('hidden');
}

// ウィンドウを閉じる
function closeWindow() {
  document.getElementById('window').classList.add('hidden');
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
  document.getElementById('clock').innerText = timeString;
}

// 時刻を1秒ごとに更新
setInterval(updateClock, 1000);
updateClock();  // ページ読み込み時に時刻を即時表示
