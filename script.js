
let DATA=[];
fetch('./data.json').then(r=>r.json()).then(d=>{DATA=d;draw(d);});
function draw(arr){
const g=document.getElementById('gallery');
g.innerHTML='';
arr.forEach(x=>{
g.innerHTML+=`
<div class="card">
<img src="${x.image}" loading="lazy">
<div class="info">
<div class="title">${x.title}</div>
<div class="meta">Shop: ${x.shop}<br>TM: ${x.tm_count}</div>
<div class="btns">
<button onclick='navigator.clipboard.writeText(`+JSON.stringify(x.title)+`)'>Copy Title</button>
<a href="${x.etsy_url}" target="_blank">Open Etsy</a>
</div>
</div>
</div>`;
});
}
document.getElementById('search').oninput=e=>{
const q=e.target.value.toLowerCase();
draw(DATA.filter(v=>(v.title||'').toLowerCase().includes(q)));
}
