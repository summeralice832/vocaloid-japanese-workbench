async function getPitchAccent(word){
  try{
    const res = await fetch(`https://ojad.jp/api/v1/accent?word=${encodeURIComponent(word)}`);
    const data = await res.json();
    return data;
  }catch(e){
    return null;
  }
}
window.getPitchAccent = getPitchAccent;
