import * as data from "./data.js";
import { drag } from "./drag.js";
export function hyaku() {
  main_text_box.innerHTML = "100までのかずのけいさん";
  //初期設定------------------------------------

  document.getElementById("sub").innerHTML = `
  <select id="tasu_type" style="margin:10px;font-size:16px">
  <option value="1">(□十) ＋ (□十)</option>
  <option value="2">(□十) － (□十)</option>
  <option value="3">(２けた) ＋ (１けた)</option>
  <option value="4">(２けた) － (１けた)</option>
  </select>
  <input type="button" value="もんだい" id="mondai" class="btn btn-primary"/>    
  <input type="button" value="たしかめ" id="check" class="btn btn-danger"/>    
  <input type="button" value="ヒント" id="hint" class="btn btn-secondary"/>    
  <input type="button" value="こたえをみる" id="kotae" style="width:100px;" class="btn btn-info"/>    
  `;

  document.getElementById("content").innerHTML = `
  <div id="shiki" style="display:flex; margin:10px;">
    <input id="box1" type="number" max=999 min=10 class="keisan_shiki"/>
    <div   id="box2" type="number" style="width:50px;text-align:center;font-size:36px;" class="kigo">+</div>
    <input id="box3" type="number" max=999 min=10 class="keisan_shiki"/>
    <div   id="box4" type="number" style="width:50px;text-align:center;font-size:36px;" class="kigo">=</div>
    <input id="box5" type="number" class="keisan_shiki"/>
  </div>
  <div  style="font-size:20px;display:flex;margin:10px;">
    <table style="width:600px;text-align:center;">
      <tbody id="TBL" >
      <tr style="height:50px;font-size:28px;">
        <td>十のくらい</td>
        <td>一のくらい</td>
      </tr>
      <tr style="height:50px;">
      <td>十が　こ</td>
      <td>一が　こ</td>
      </tr>
      <tr style="height:300px;">
      <td style="text-align:left;vertical-align:top;padding:10px;width:300px;"class="droppable-elem"></td>
      <td style="text-align:left;vertical-align:top;padding:10px;width:140px;"class="droppable-elem"></td>
      </tr>
      </tbodey>
      </table>
      <div style="width:10px"></div>
      <div id="box_2" style="background-color:lightgray;margin-top:100px;width:320px;height:320px;padding:10px;" class="droppable-elem"></div>
      </div>
      <div id="score"></div>
      `;
  //--各ボタンの設定-------------------------------------
  var val_1;
  var val_2;
  var val_3;
  var juu_no_kurai;
  var ichi_no_kurai;
  var hoka_no_box;
  var flag = false;
  box1.value = "";
  box3.value = "";

  document.getElementById("tasu_type").addEventListener("change", () => {
    data.set.currentTime = 0;
    data.set.play();
    switch (tasu_type.value) {
      case "1":
      case "3":
        box2.innerHTML = "+";
        break;
      case "2":
      case "4":
        box2.innerHTML = "-";
        break;
    }
  });
  document.getElementById("mondai").addEventListener("click", () => shutudai());
  document.getElementById("check").addEventListener("click", () => {
    check_answer();
  });
  document.getElementById("hint").addEventListener("click", () => show_hint());
  document.getElementById("kotae").addEventListener("click", () => show_answer());

  //関数　マス内の数字をクリア
  function masu_clear() {
    TBL.rows[1].cells[0].innerHTML = "十が　こ";
    TBL.rows[1].cells[1].innerHTML = "一が　こ";
    TBL.rows[2].cells[0].innerHTML = "";
    TBL.rows[2].cells[1].innerHTML = "";
    box_2.innerHTML = "";
    box1.value = "";
    box3.value = "";
    box5.value = "";
    box5.style.color = "black";
  }

  // 関数　問題をランダムに出す
  function shutudai() {
    masu_clear();
    flag = true;
    switch (tasu_type.value) {
      case "1":
        val_3 = Math.floor(Math.random() * 9 + 2) * 10;
        val_2 = Math.floor(Math.random() * (val_3 / 10 - 1) + 1) * 10;
        val_1 = val_3 - val_2;
        juu_no_kurai = Math.floor(val_1 / 10);
        ichi_no_kurai = 0;
        hoka_no_box = Math.floor(val_2 / 10);
        break;
      case "2":
        val_1 = Math.floor(Math.random() * 9 + 2) * 10;
        val_2 = Math.floor(Math.random() * (val_1 / 10 - 1) + 1) * 10;
        val_3 = val_1 - val_2;
        juu_no_kurai = Math.floor(val_1 / 10);
        ichi_no_kurai = 0;
        hoka_no_box = 0;
        break;
      case "3":
        val_3 = Math.floor(Math.random() * 90 + 10);
        val_2 = Math.floor(Math.random() * ((val_3 % 10) - 1) + 1);
        val_1 = val_3 - val_2;
        juu_no_kurai = Math.floor(val_1 / 10);
        ichi_no_kurai = Math.floor(val_1 % 10);
        hoka_no_box = val_2;
        break;
      case "4":
        val_1 = Math.floor(Math.random() * 90 + 10);
        val_2 = Math.floor(Math.random() * ((val_1 % 10) - 1) + 1);
        val_3 = val_1 - val_2;
        juu_no_kurai = Math.floor(val_1 / 10);
        ichi_no_kurai = Math.floor(val_1 % 10);
        hoka_no_box = 0;
        break;
    }
    box1.value = val_1;
    box3.value = val_2;
    box5.value = "";
    data.set.currentTime = 0;
    data.set.play();
    img_set();
  }

  function img_set() {
    for (let i = 0; i < juu_no_kurai; i++) {
      const img = document.createElement("img");
      img.style.cursor = "pointer";
      img.style.height = "100px";
      img.style.marginBottom = "5px";
      img.style.mixBlendMode = "multiply";
      img.src = "./image/juu.png";
      img.classList.add("Juu");
      TBL.rows[2].cells[0].appendChild(img);
      drag(img);
    }
    for (let i = 0; i < ichi_no_kurai; i++) {
      const img = document.createElement("img");
      img.style.cursor = "pointer";
      img.style.mixBlendMode = "multiply";
      img.style.height = "100px";
      img.style.marginBottom = "5px";
      img.src = "./image/ichi.png";
      img.style.marginRight = "10px";
      img.classList.add("Ichi");
      TBL.rows[2].cells[1].appendChild(img);
      drag(img);
    }
    for (let i = 0; i < hoka_no_box; i++) {
      const img = document.createElement("img");
      img.style.marginBottom = "5px";
      img.style.cursor = "pointer";
      img.style.mixBlendMode = "multiply";
      img.style.height = "100px";
      if (tasu_type.value == "1") {
        img.src = "./image/juu.png";
        img.classList.add("Juu");
      } else if (tasu_type.value == "3") {
        img.src = "./image/ichi.png";
        img.style.marginRight = "10px";
        img.classList.add("Ichi");
      }
      box_2.appendChild(img);
      drag(img);
    }
  }

  // 関数　答えの表示
  function show_answer() {
    box5.value = val_3;
    box5.style.color = "blue";
    data.seikai2.currentTime = 0;
    data.seikai2.play();
  }

  function show_hint() {
    var cell1 = TBL.rows[2].cells[0];
    var cell2 = TBL.rows[2].cells[1];
    TBL.rows[1].cells[0].innerHTML = `十が　<span style="font-size:32px;color:red;">${cell1.getElementsByClassName("Juu").length}</span>こ`;
    TBL.rows[1].cells[1].innerHTML = `一が　<span style="font-size:32px;color:red;">${cell2.getElementsByClassName("Ichi").length}</span>こ`;
    data.seikai2.currentTime = 0;
    data.seikai2.play();
  }

  function check_answer() {
    if (box5.value == val_3) {
      box5.style.color = "red";
      score_up();
    } else {
      box5.style.color = "gray";
      data.alert.currentTime = 0;
      data.alert.play();
    }
  }

  function score_up() {
    if (flag == true) {
      const img = document.createElement("img");
      switch (tasu_type.value) {
        case "1":
          img.src = "./image/balloon.png";
          break;
        case "2":
          img.src = "./image/cookie.png";
          break;
        case "3":
          img.src = "./image/hana.png";
          break;
        case "4":
          img.src = "./image/robot.png";
          break;
      }
      img.style.width = "50px";
      img.style.height = "50px";
      flag = false;
      data.seikai1.currentTime = 0;
      data.seikai1.play();
      score.appendChild(img);
    }
  }
}
