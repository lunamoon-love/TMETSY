let DATA = [];

fetch("data.json")
  .then(r => r.json())
  .then(d => {
    DATA = d;
    draw(DATA);
  })
  .catch(err => {
    console.error(err);
  });

function draw(arr) {

    const g = document.getElementById("gallery");

    g.innerHTML = "";

    arr.forEach(item => {

        g.innerHTML += `

        <div class="card">

            <img src="${item.image}" loading="lazy">

            <div class="info">

                <div class="title">
                    ${item.title}
                </div>

                <div class="meta">

                    Shop : ${item.shop}<br>

                    TM : ${item.tm_count}

                </div>

                <div class="btns">

                    <button class="copy"
                        data-title="${item.title.replace(/"/g,'&quot;')}">
                        Copy Title
                    </button>

                    <a href="${item.etsy_url}"
                       target="_blank">
                       Open Etsy
                    </a>

                </div>

            </div>

        </div>

        `;

    });

    document.querySelectorAll(".copy").forEach(btn=>{

        btn.onclick=()=>{

            navigator.clipboard.writeText(btn.dataset.title);

            btn.innerText="Copied!";

            setTimeout(()=>{

                btn.innerText="Copy Title";

            },1000);

        }

    });

}

document.getElementById("search").addEventListener("input",e=>{

    const q=e.target.value.toLowerCase();

    draw(

        DATA.filter(x=>

            x.title.toLowerCase().includes(q)

        )

    );

});
