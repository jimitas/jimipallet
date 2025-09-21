import * as data from "./data.js";

export function kuku() {
  document.getElementById("sub").innerHTML = `
  <select id="dan_menu" class="form-select" style="font-size:16px;"></select>  
  <select id="dan_type" class="form-select" style="font-size:16px;"></select> 
  <input type="button" value="セット" class="btn btn-primary" id="set" style="margin-top:10px;">
  <input type="button" value="つぎ" class="btn btn-success" id="next" style="margin-top:10px;">
  `;
  document.getElementById("content").innerHTML = `
    <div class="YOMI">
      <div id="yomi"></div>
      <div id="yomi_kotae"></div>
    </div>
    <div class="SHIKI">
      <div id="kuku_shiki"></div>
      <div id="kuku_shiki_kotae"></div>
    </div>
    <div style="position:abslute;margin:0 0 10px 10px;height:30px;">
      <select id="color_val"></select>  
      <input type="button" value="リセット" id="reset_btn" class="btn btn-danger"  style="height:30px;">
      <span>ヒント「×」をおすとぜんぶの数字が出るよ</span> 
    </div>
    <table style="margin-left:10px;">
      <tbody id="kuku_hyou" >
      </tbody>
    </table>
  `;

  const type_data = ["上がり九九", "下がり九九", "ばらばら"];
  const dan_menu = document.getElementById("dan_menu");
  const set = document.getElementById("set");
  const next = document.getElementById("next");
  const yomi = document.getElementById("yomi");
  const yomi_kotae = document.getElementById("yomi_kotae");
  const shiki = document.getElementById("kuku_shiki");
  const shiki_kotae = document.getElementById("kuku_shiki_kotae");

  for (let i = 1; i <= 9; i++) {
    const dan = document.createElement("option");
    dan.value = i;
    dan.textContent = i + "のだん";
    dan_menu.appendChild(dan);
  }

  for (let i = 1; i <= 3; i++) {
    const type = document.createElement("option");
    type.value = i;
    type.textContent = type_data[i - 1];
    dan_type.appendChild(type);
  }

  set.addEventListener("click", () => {
    data.set.currentTime = 0;
    data.set.play();
    var num = 0;
    //テキストクリア
    yomi.innerHTML = dan_menu.value + "のだんの";
    yomi_kotae.innerHTML = "れんしゅう";
    shiki.innerHTML = "";
    shiki_kotae.innerHTML = "";

    // かけられる数のセット
    var hijousu = dan_menu.value;
    // かける数のセット
    var jousu = [];
    switch (dan_type.value) {
      case "1":
        jousu = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        break;
      case "2":
        jousu = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        break;
      case "3":
        const bara = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let index = 0; index < 9; index++) {
          jousu.push(...bara.splice(Math.floor(Math.random() * bara.length), 1));
        }
        break;
    }

    next.addEventListener("click", () => {
      num++;
      data.pi.currentTime = 0;
      data.pi.play();
      switch (num % 2) {
        case 1:
          yomi.innerHTML = data.kukua[(hijousu - 1) * 9 + jousu[parseInt(num / 2)] - 1] + "　　";
          yomi_kotae.innerHTML = "";
          shiki.innerHTML = hijousu + "×" + jousu[parseInt(num / 2)] + "＝";
          shiki_kotae.innerHTML = "？";
          break;
        case 0:
          yomi.innerHTML = data.kukua[(hijousu - 1) * 9 + jousu[parseInt(num / 2 - 1)] - 1] + "　　";
          yomi_kotae.innerHTML = data.kukub[(hijousu - 1) * 9 + jousu[parseInt(num / 2 - 1)] - 1];
          shiki.innerHTML = hijousu + "×" + jousu[parseInt(num / 2 - 1)] + "＝";
          shiki_kotae.innerHTML = hijousu * jousu[parseInt(num / 2 - 1)];
          break;
      }
      if (num > 17) num = 0;
    });
  });

  data.move1.load();
  const Colors = ["white", "しろ", "pink", "ピンク", "yellow", "きいろ", "lightgreen", "みどり", "lightblue", "あお", "orange", "オレンジ", "lightpurple", "むらさき", "lightbrown", "ちゃいろ"];
  let div_color = "white";

  const TBL = document.getElementById("kuku_hyou")

  for (let i = 1; i <= 8; i++) {
    const Color = document.createElement("option");
    Color.value = i;
    Color.textContent = Colors[i * 2 - 1];
    color_val.appendChild(Color);
  }

  document.getElementById("color_val").addEventListener("change", () => {
    div_color = Colors[color_val.value * 2 - 2];
    data.set.currentTime = 0;
    data.set.play();
  });

  var flag, flag_col, flag_row, flag_ALL;

  document.getElementById("reset_btn").addEventListener("click", () => {
    data.set.currentTime = 0;
    data.set.play();
    var result = window.confirm("ぬった　いろを　もとに　もどしますか？");
    if (result === true) {
      data.reset.currentTime = 0;
      data.reset.play();
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
          if (row == 0 && col != 0) {
            flag_col = false;
          }
          if (col == 0 && row != 0) {
            TBL.rows[row].cells[col].innerHTML = row;
            flag_row = false;
          }
          if (row == 0 && col == 0) {
            flag_ALL = false;
          }
          if (row != 0 && col != 0) {
            flag = false;
            TBL.rows[row].cells[col].innerHTML = "";
            TBL.rows[row].cells[col].style.backgroundColor = "white";
          }
        }
      }
    }
  });

  for (let row = 0; row < 10; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 10; col++) {
      const td = document.createElement("td");
      td.setAttribute("class", "hyou");

      tr.appendChild(td);
      if (row == 0 && col != 0) {
        td.innerHTML = col;
        flag_col = false;
        td.addEventListener("click", () => {
          data.move1.currentTime = 0;
          data.move1.play();
          console.log(flag_col);
          if (flag_col == false) {
            for (let k = 1; k < 10; k++) {
              TBL.rows[k].cells[col].innerHTML = k * col;
            }
            flag_col = true;
          } else if (flag_col == true) {
            for (let k = 1; k < 10; k++) {
              TBL.rows[k].cells[col].innerHTML = "";
            }
            flag_col = false;
          }
        });
      }
      if (col == 0 && row != 0) {
        td.innerHTML = row;
        flag_row = false;
        td.addEventListener("click", () => {
          data.move1.currentTime = 0;
          data.move1.play();
          console.log(flag_row);
          if (flag_row == false) {
            for (let k = 1; k < 10; k++) {
              TBL.rows[row].cells[k].innerHTML = row * k;
            }
            flag_row = true;
          } else if (flag_row == true) {
            for (let k = 1; k < 10; k++) {
              TBL.rows[row].cells[k].innerHTML = "";
            }
            flag_row = false;
          }
        });
      } else if (row == 0 && col == 0) {
        td.innerHTML = "×";
        flag_ALL = false;
        td.addEventListener("click", () => {
          data.move1.currentTime = 0;
          data.move1.play();
          if (flag_ALL == false) {
            for (let k = 1; k < 10; k++) {
              for (let l = 1; l < 10; l++) {
                TBL.rows[k].cells[l].innerHTML = k * l;
              }
            }
            flag_ALL = true;
          } else if (flag_ALL == true) {
            for (let k = 1; k < 10; k++) {
              for (let l = 1; l < 10; l++) {
                TBL.rows[k].cells[l].innerHTML = "";
              }
            }
            flag_ALL = false;
          }
        });
      }
      if (row != 0 && col != 0) {
        flag = false;
        td.style.color = "red";
        td.addEventListener("click", () => {
          data.move1.currentTime = 0;
          data.move1.play();
          if (flag == false) {
            td.innerHTML = row * col;
            td.style.backgroundColor = div_color;
            flag = true;
          } else if (flag == true) {
            td.innerHTML = "";
            flag = false;
          }
        });
      }
    }
    TBL.appendChild(tr);
  }
}
