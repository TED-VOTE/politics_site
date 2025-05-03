
// 可変スコアに合わせて針を動かすサンプル（ここでは静的に角度を固定）
const score = 72;
document.getElementById('score').innerText = score;
document.getElementById('needle').style.transform = 'rotate(' + (score * 1.8) + 'deg)';
