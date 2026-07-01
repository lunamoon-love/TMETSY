let all=[];
fetch('data.json').then(r=>r.json()).then(d=>{all=d;render(d);});
function render(items){
const g=document.getElementById('gallery');
g.innerHTML='';
items.forEach(x=>{
g.innerHTML+=`<div class="card">
<img src="${x.image}" loading="lazy">
<h3>${x.title}</h3>
<a href="${x.url}" target="_blank">Open Etsy</a>
</div>`;
});
}
document.getElementById('search').addEventListener('input',e=>{
const q=e.target.value.toLowerCase();
render(all.filter(x=>x.title.toLowerCase().includes(q)));
});
