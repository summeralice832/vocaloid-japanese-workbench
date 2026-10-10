# 个人生词本
> 说明：生词保存在当前浏览器，本地存储，无需手动存档

<div id="vocab-container"></div>

<script>
// 判断：只有浏览器环境才运行生词本逻辑，打包Node环境直接跳过
if (typeof window !== 'undefined') {

function loadVocab(){
  const list = JSON.parse(localStorage.getItem('vocaloid-vocab')) || [];
  const container = document.getElementById('vocab-container');
  if(list.length ===0){
    container.innerHTML = "<p>暂无生词，前往歌曲笔记添加</p>";
    return;
  }
  let html = `<ul style="line-height:2;">`;
  list.forEach(item=>{
    html += `<li>${item.word} — ${item.meaning}</li>`
  })
  html += `</ul><button onclick="clearVocab()" style="padding:6px 12px;">清空生词本</button>`;
  container.innerHTML = html;
}

function addVocab(word, meaning){
  const arr = JSON.parse(localStorage.getItem('vocaloid-vocab')) || [];
  arr.push({word,meaning});
  localStorage.setItem('vocaloid-vocab',JSON.stringify(arr));
  alert("✅ 已存入生词本");
}

function clearVocab(){
  localStorage.removeItem('vocaloid-vocab');
  loadVocab();
}

// 挂载到window，给页面html onclick调用
window.addVocab = addVocab;
window.clearVocab = clearVocab;

document.addEventListener('DOMContentLoaded',loadVocab);

} // ← 注意！这个大括号是if的闭合，不要删掉！
</script>

