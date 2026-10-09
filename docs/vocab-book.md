# 个人生词本
> 说明：生词保存在当前浏览器，本地存储，无需手动存档

<div id="vocab-container"></div>

<script>
function loadVocab(){
  const list = JSON.parse(localStorage.getItem('vocaloid-vocab') || '[]');
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
  const arr = JSON.parse(localStorage.getItem('vocaloid-vocab') || '[]');
  arr.push({word,meaning});
  localStorage.setItem('vocaloid-vocab',JSON.stringify(arr));
  alert("✅ 已存入生词本");
}

function clearVocab(){
  localStorage.removeItem('vocaloid-vocab');
  loadVocab();
}

window.addVocab = addVocab;
window.clearVocab = clearVocab;
document.addEventListener('DOMContentLoaded',loadVocab);
</script>
