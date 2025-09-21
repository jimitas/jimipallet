import * as data from "./data.js";
import { drag } from "./drag.js";

export function subl(Focus) {
  //初期設定
  document.getElementById("sub").innerHTML = `
  <div id="buttons">
  <input id="clear" type="button" value="りせっと" class="btn btn-danger" />
  <input id="check" type="button" value="たしかめ" class="btn btn-primary" />
  </div>
  <div id="shiki">ならべた　かず　<div id="count"/></div>こ
  </div>
  `;

  var grid_int = 80;
  const suuzu_block = document.createElement("div");
  suuzu_block.setAttribute("id", "suuzu_block");
  suuzu_block.style.pointerEvents = "all";
  suuzu_block.style.width = grid_int * 10 + "px";
  suuzu_block.style.height = grid_int * 5 + "px";
  suuzu_block.style.position = "fixed";
  suuzu_block.style.left = "10px";
  suuzu_block.style.top = "180px";
  content.appendChild(suuzu_block);
  create_blk();
  put_blk();

  document.getElementById("clear").addEventListener("click", () => {
    data.reset.currentTime = 0;
    data.reset.play();
    document.getElementById("count").innerText = "";
    put_blk();
  });
  document.getElementById("check").addEventListener("click", () => {
    data.open1.currentTime = 0;
    data.open1.play();
    const img = document.querySelectorAll("#section_1 .blk_img");
    document.getElementById("count").innerText = Number(img.length);
  });

  //数図ブロック枠の描画
  function create_blk() {
    const section_1 = document.createElement("section");
    section_1.setAttribute("id", "section_1");
    section_1.style.display = "flex";
    section_1.style.backgroundColor = "#f6f0cc";
    const section_2 = document.createElement("section");
    section_2.style.height = "80px";
    section_2.innerHTML = `<span style="text-align:center;font-size:50px;line-height:80px">↑</span>`;
    const section_3 = document.createElement("section");
    section_3.setAttribute("id", "section_3");
    section_3.style.display = "flex";
    section_3.style.opacity = 0.7;

    for (let i = 0; i < 4; i++) {
      const TBL = document.createElement("table");
      TBL.setAttribute("id", "TBL_" + i);
      for (let row = 0; row < 2; row++) {
        const tr = document.createElement("tr");
        for (let col = 0; col < 5; col++) {
          const td = document.createElement("td");
          td.classList.add("blk_td", "droppable-elem");
          tr.appendChild(td);
        }
        TBL.appendChild(tr);
      }
      if (i < 2) section_1.appendChild(TBL);
      if (i >= 2) section_3.appendChild(TBL);
      suuzu_block.appendChild(section_1);
      suuzu_block.appendChild(section_2);
      suuzu_block.appendChild(section_3);
    }
  }

  //数図ブロックの配置
  function put_blk() {
    while (document.getElementsByClassName("blk_img").length > 0) {
      document.getElementsByClassName("blk_img")[0].remove();
    }
    const TBL_2 = document.getElementById("TBL_2");
    const TBL_3 = document.getElementById("TBL_3");
    for (let i = 0; i < 20; i++) {
      const img = document.createElement("img");
      img.classList.add("blk_img");
      drag(img);
      if (i < 10) {
        img.src = "./image/pink_block.png";
        TBL_2.rows[Math.floor(i / 5)].cells[i % 5].appendChild(img);
      } else if (i >= 10) {
        img.src = "./image/blue_block.png";
        TBL_3.rows[Math.floor((i - 10) / 5)].cells[i % 5].appendChild(img);
      }
    }
  }
}
