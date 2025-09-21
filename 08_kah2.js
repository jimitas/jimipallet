import * as data from "./data.js";
import { move } from "./move.js";

export function kah2() {
  main_text_box.innerHTML = "かけ算の筆算(2)";
  //初期設定------------------------------------
  let hijousu = 123;
  let jousu = 45;
  let max_keta = 5;
  let seki;
  let bubun_seki1;
  let bubun_seki2;
  let kuriagari;
  var flag_hint1 = 0;
  var flag_hint2 = 0;
  let hijousu_arr = [];
  let jousu_arr = [];
  let seki_arr = [];
  let bubun_seki1_arr = [];
  let bubun_seki2_arr = [];
  let hijousu_keta;
  let jousu_keta;
  let seki_keta;
  let bubun_seki1_keta;
  let bubun_seki2_keta;

  document.getElementById("sub").innerHTML = `
  <select id="tasu_type" style="margin:10px;font-size:16px">
  <option value="1">(２けた)×(２けた)</option>
  <option value="2">(３けた)×(２けた)</option>
  </select>
  <input type="button" value="クリア" id="clear" class="btn btn-primary"/>    
  <input type="button" value="もんだい" id="mondai" class="btn btn-success"/>    
  <input type="button" value="セット" id="set" class="btn btn-info"/>    
  <input type="button" value="こたえ" id="kotae" class="btn btn-danger"/>    
  `;

  document.getElementById("content").innerHTML = `
  <div style="display:flex; margin:10px;">
  <div id="shiki" style="display:flex; margin:10px;">
  <input id="box1" type="number" max=999 min=10 class="keisan_shiki"/>
  <div   id="box2" type="number" style="width:50px;text-align:center;font-size:36px;" class="kigo">×</div>
  <input id="box3" type="number" max=999 min=10 class="keisan_shiki"/>
  <div   id="box4" type="number" style="width:50px;text-align:center;font-size:36px;" class="kigo">=</div>
  <input id="box5" type="number" class="keisan_shiki"/>
  </div>
  <input type="button" value="ヒント１" id="hint_1" class="btn btn-secondary" style="width:100px;margin:5px;"/>    
  <input type="button" value="ヒント２" id="hint_2" class="btn btn-secondary" style="width:100px;margin:5px;"/>
  <input type="button" value="ヒント３" id="hint_3" class="btn btn-secondary" style="width:100px;margin:5px;"/>    
  </div>
  <div  style="display:flex;margin:10px;">
    <div>
      <table>
      <tbody id="TBL">
      </tbodey>
      </table>
    </div>
    <div style="margin-left:10px;">
      <div id="text_box_1" style="width:350px;height:40px;font-size:30px;text-align:center;color:blue;position:absolute;left:350px;top:270px;background-color:#ffcabf;">
      </div>
      <div id="text_box_2" style="width:350px;height:40px;font-size:30px;text-align:center;color:blue;position:absolute;left:350px;top:350px;background-color:#ffff80;">
      </div>
      <div id="kuku_hyou">
      </div>
    </div>
  </div>
  `;
  //--各ボタンの設定-------------------------------------

  document.getElementById("clear").addEventListener("click", () => masu_clear());
  document.getElementById("mondai").addEventListener("click", () => shutudai());
  document.getElementById("set").addEventListener("click", () => mondai_set());
  document.getElementById("kotae").addEventListener("click", () => show_answer());

  //式ボックスの設定------------------------------------
  box1.value = hijousu;
  box3.value = jousu;
  box5.addEventListener("change", () => {
    if (box5.value == seki) {
      box5.style.color = "red";
      data.seikai1.currentTime = 0;
      data.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  });

  const hint_1 = document.getElementById("hint_1");
  hint_1.addEventListener("click", () => {
    data.reset.currentTime = 0;
    data.reset.play();
    bubun1();
  });
  const hint_2 = document.getElementById("hint_2");
  hint_2.addEventListener("click", () => {
    data.reset.currentTime = 0;
    data.reset.play();
    bubun2();
  });
  const kuku_hyou = document.getElementById("kuku_hyou");
  const hint_3 = document.getElementById("hint_3");
  hint_3.addEventListener("click", () => {
    data.reset.currentTime = 0;
    data.reset.play();
    kuku();
  });

  //筆算マスの定義------------------------------------
  const TBL = document.getElementById("TBL");
  for (let i = 0; i < 8; i++) {
    const tr = document.createElement("tr");
    tr.style.maxHeight = "60px";
    if (i == 1 || i == 5) {
      tr.style.borderBottom = "3px solid black";
    }
    if (i == 3 || i == 5) {
      tr.setAttribute("class", "seki_tochu");
    }
    if (i == 2) {
      tr.style.maxHeight = "20px";
      tr.setAttribute("class", "seki_kuriagari1");
    }
    if (i == 4) {
      tr.style.maxHeight = "20px";
      tr.setAttribute("class", "seki_kuriagari2");
    }
    if (i == 6) {
      tr.style.maxHeight = "20px";
      tr.setAttribute("class", "seki_kuriagari3");
    }
    if (i == 7) {
      tr.setAttribute("class", "seki_kotae");
    }
    for (let j = 0; j < max_keta; j++) {
      const td = document.createElement("td");
      td.style.border = "1px solid #333";
      td.style.width = "60px";
      td.style.maxWidth = "60px";
      td.style.height = "60px";
      td.style.maxHeight = "60px";
      td.style.fontSize = "30px";
      td.style.textAlign = "center";
      tr.appendChild(td);
      if (i > 1) {
        td.setAttribute("class", "droppable-elem");
      }
      if (i == 2 || i == 4 || i == 6) {
        td.style.height = "20px";
      }
      if (i == 2) {
        td.style.backgroundColor = "#ffcabf";
      } else if (i == 4) {
        td.style.backgroundColor = "#ffff80";
      } else if (i == 6) {
        td.style.backgroundColor = "lightblue";
      }
    }
    TBL.appendChild(tr);
    TBL.style.height = "360px";
  }

  const text_box_1 = document.getElementById("text_box_1");
  const text_box_2 = document.getElementById("text_box_2");

  //数字パレットの設置
  const num_pallet = document.createElement("div");
  num_pallet.setAttribute("id", "num_pallet");
  num_pallet.setAttribute("class", "droppable-elem");
  num_pallet.style.marginLeft="10px";
  content.appendChild(num_pallet);

  hissan_set();
  num_set();

  //ここから関数-----------------------------------------------------
  //関数　マス内の数字をクリア
  function masu_clear() {
    data.reset.currentTime = 0;
    data.reset.play();
    hint_clear();
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 5; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }
    TBL.rows[1].cells[1].innerHTML = "×";
    box1.value = "";
    box3.value = "";
    box5.value = "";
  }

  function hint_clear() {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 5; col++) {
        TBL.rows[row].cells[col].style.backgroundColor = "white";
        TBL.rows[row].cells[col].style.color = "black";
      }
    }
    text_box_1.innerHTML = "";
    text_box_2.innerHTML = "";
    TBL.rows[5].cells[4].innerHTML = "";
  }

  // 関数　問題をランダムに出す
  function shutudai() {
    switch (tasu_type.value) {
      case "1":
        hijousu = Math.floor(Math.random() * 90 + 10);
        jousu = Math.floor(Math.random() * 90 + 10);
        break;
      case "2":
        hijousu = Math.floor(Math.random() * 900 + 100);
        jousu = Math.floor(Math.random() * 90 + 10);
        break;
    }
    box1.value = hijousu;
    box3.value = jousu;
    hissan_set();
    data.set.currentTime = 0;
    data.set.play();
  }

  // 関数　問題をセットする
  function mondai_set() {
    hijousu = box1.value;
    jousu = box3.value;
    hissan_set();
    data.set.currentTime = 0;
    data.set.play();
  }

  // 関数　答えの表示
  function show_answer() {
    box5.value = seki;
    box5.style.color = "blue";
    data.seikai2.currentTime = 0;
    data.seikai2.play();
    kuriagari = 0;
    //くり上がり１の表示
    for (let col = 0; col < hijousu_keta; col++) {
      if (Math.floor(hijousu_arr[col] * jousu_arr[0] + kuriagari) > 9) {
        kuriagari = Math.floor((hijousu_arr[col] * jousu_arr[0] + kuriagari) / 10);
        TBL.rows[2].cells[max_keta - col - 2].innerHTML = kuriagari;
        TBL.rows[2].cells[max_keta - col - 2].style.fontSize = "12px";
        TBL.rows[2].cells[max_keta - col - 2].style.color = "gray";
        TBL.rows[2].cells[max_keta - col - 2].style.verticalAlign = "bottom";
        TBL.rows[2].cells[max_keta - col - 2].style.textAlign = "right";
      } else {
        kuriagari = 0;
      }
    }
    kuriagari = 0;
    //くり上がりの表示
    for (let col = 0; col < hijousu_keta; col++) {
      if (Math.floor(hijousu_arr[col] * jousu_arr[1] + kuriagari) > 9) {
        kuriagari = Math.floor((hijousu_arr[col] * jousu_arr[1] + kuriagari) / 10);
        TBL.rows[4].cells[max_keta - col - 3].innerHTML = kuriagari;
        TBL.rows[4].cells[max_keta - col - 3].style.fontSize = "12px";
        TBL.rows[4].cells[max_keta - col - 3].style.color = "gray";
        TBL.rows[4].cells[max_keta - col - 3].style.verticalAlign = "bottom";
        TBL.rows[4].cells[max_keta - col - 3].style.textAlign = "right";
      } else {
        kuriagari = 0;
      }
    }
    kuriagari = 0;

    //部分積１の表示
    for (let col = 0; col < bubun_seki1_keta; col++) {
      TBL.rows[3].cells[max_keta - col - 1].innerHTML = bubun_seki1_arr[col];
    }
    //部分積２の表示
    for (let col = 0; col < bubun_seki2_keta; col++) {
      TBL.rows[5].cells[max_keta - col - 2].innerHTML = bubun_seki2_arr[col];
    }
    //くり上がり答えの表示
    for (let col = 0; col < seki_keta; col++) {
      let sum = 0;
      sum = Math.floor(Number(TBL.rows[3].cells[max_keta - col - 1].innerText) + Number(TBL.rows[5].cells[max_keta - col - 1].innerText) + Number(TBL.rows[6].cells[max_keta - col - 1].innerText));
      if (sum > 9) {
        kuriagari = 1;
        TBL.rows[6].cells[max_keta - col - 2].innerHTML = kuriagari;
        TBL.rows[6].cells[max_keta - col - 2].style.fontSize = "20px";
        TBL.rows[6].cells[max_keta - col - 2].style.color = "red";
        TBL.rows[6].cells[max_keta - col - 2].style.verticalAlign = "bottom";
      } else {
        kuriagari = 0;
      }
    }
    //筆算の答え表示
    for (let col = 0; col < seki_keta; col++) {
      TBL.rows[7].cells[max_keta - col - 1].innerHTML = seki_arr[col];
    }
    //答えの表示の時，お金を並べ直すかは要検討
  }

  // 関数　答えの入力---------------
  function kotae_input() {
    hijousu = Math.floor(box1.value);
    jousu = Math.floor(box3.value);
    seki = Math.floor(hijousu * jousu);
    box5.value =
      Number(TBL.rows[7].cells[0].innerText) * 10000 +
      Number(TBL.rows[7].cells[1].innerText) * 1000 +
      Number(TBL.rows[7].cells[2].innerText) * 100 +
      Number(TBL.rows[7].cells[3].innerText) * 10 +
      Number(TBL.rows[7].cells[4].innerText) * 1;
    if (box5.value == seki) {
      box5.style.color = "red";
      data.seikai1.currentTime = 0;
      data.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  }
  function bubun1() {
    hint_clear();
    let data = [0, 2, 0, 3, 0, 4, 1, 4, 3, 1, 3, 2, 3, 3, 3, 4];
    if (flag_hint1 == 0) {
      for (let i = 0; i < data.length / 2; i++) {
        TBL.rows[data[i * 2]].cells[data[Math.floor(i * 2 + 1)]].style.backgroundColor = "#ffcabf";
      }
      text_box_1.innerHTML = `${hijousu}　×　${jousu_arr[0]}`;
      flag_hint1 = 1;
    } else if (flag_hint1 == 1) {
      for (let i = 0; i < data.length / 2; i++) {
        TBL.rows[data[i * 2]].cells[data[Math.floor(i * 2 + 1)]].style.backgroundColor = "#ffcabf";
      }
      text_box_1.innerHTML = `${hijousu}　×　${jousu_arr[0]}　＝　${hijousu * jousu_arr[0]}`;
      flag_hint1 = 2;
    } else if (flag_hint1 == 2) {
      flag_hint1 = 0;
    }
  }

  function bubun2() {
    hint_clear();
    let data = [0, 2, 0, 3, 0, 4, 1, 3, 5, 0, 5, 1, 5, 2, 5, 3];
    if (flag_hint2 == 0) {
      for (let i = 0; i < data.length / 2; i++) {
        TBL.rows[data[i * 2]].cells[data[Math.floor(i * 2 + 1)]].style.backgroundColor = "#ffff80";
      }
      TBL.rows[5].cells[4].innerHTML = `<span style="color:gray">0</span>`;
      text_box_2.innerHTML = `${hijousu}　×　${jousu_arr[1]}<span style="color:gray">0</span>`;
      flag_hint2 = 1;
    } else if (flag_hint2 == 1) {
      for (let i = 0; i < data.length / 2; i++) {
        TBL.rows[data[i * 2]].cells[data[Math.floor(i * 2 + 1)]].style.backgroundColor = "#ffff80";
        TBL.rows[5].cells[4].innerHTML = `<span style="color:gray">0</span>`;
        text_box_2.innerHTML = `${hijousu}　×　${jousu_arr[1]}<span style="color:gray">0</span>　＝　${hijousu * jousu_arr[1]}<span style="color:gray">0</span>`;
      }
      flag_hint2 = 2;
    } else if (flag_hint2 == 2) {
      flag_hint2 = 0;
    }
  }

  //関数　筆算の描画---------------------
  function hissan_set() {
    if (hijousu > 999 || jousu > 99 || hijousu < 0 || jousu < 0) {
      data.alert.play();
      alert("かけられる数は1～999，かける数は1～99までにしてください。");
      box1.value = "";
      box3.value = "";
      return;
    }
    hint_clear();
    flag_hint1 = 0;
    flag_hint2 = 0;
    box5.style.color = "black";
    hijousu = Math.floor(hijousu);
    jousu = Math.floor(jousu);
    seki = Math.floor(hijousu * jousu);
    box1.value = hijousu;
    box3.value = jousu;
    box5.value = "";

    //数字を配列として代入
    hijousu_keta = String(hijousu).length;
    jousu_keta = String(jousu).length;
    seki_keta = String(seki).length;

    hijousu_arr[2] = 0;

    for (let i = 0; i < hijousu_keta; i++) {
      hijousu_arr[i] = Number(String(hijousu).charAt(hijousu_keta - i - 1));
    }
    for (let i = 0; i < jousu_keta; i++) {
      jousu_arr[i] = Number(String(jousu).charAt(jousu_keta - i - 1));
    }
    for (let i = 0; i < seki_keta; i++) {
      seki_arr[i] = Number(String(seki).charAt(seki_keta - i - 1));
    }

    bubun_seki1 = Math.floor(hijousu * jousu_arr[0]);
    bubun_seki2 = Math.floor(hijousu * jousu_arr[1]);
    bubun_seki1_keta = String(bubun_seki1).length;
    bubun_seki2_keta = String(bubun_seki2).length;
    for (let i = 0; i < bubun_seki1_keta; i++) {
      bubun_seki1_arr[i] = Number(String(bubun_seki1).charAt(bubun_seki1_keta - i - 1));
    }
    for (let i = 0; i < bubun_seki2_keta; i++) {
      bubun_seki2_arr[i] = Number(String(bubun_seki2).charAt(bubun_seki2_keta - i - 1));
    }
    suuji_set();
  }

  //マス内に数字を書き込む-------------------
  function suuji_set() {
    //一度　マス内の数字をクリア
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 5; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }
    //マス内に数字を代入
    for (let col = 0; col < hijousu_keta; col++) {
      TBL.rows[0].cells[max_keta - col - 1].innerHTML = hijousu_arr[col];
    }
    for (let col = 0; col < jousu_keta; col++) {
      TBL.rows[1].cells[max_keta - col - 1].innerHTML = jousu_arr[col];
    }
    if ((hijousu < 100) & (jousu < 100)) {
      TBL.rows[1].cells[2].innerHTML = "×";
    } else {
      TBL.rows[1].cells[1].innerHTML = "×";
    }
  }

  //関数　数字のセット
  function num_set() {
    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.innerHTML = i;
      div.setAttribute("class", "draggable-elem");
      div.setAttribute("draggable", "true");

      div.addEventListener("touchstart", touchStartEvent, false);
      div.addEventListener("touchmove", touchMoveEvent, false);
      div.addEventListener("touchend", touchEndEvent, false);
      document.getElementById("num_pallet").appendChild(div);
    }
  }

  //マウスでのドラッグを可能にする。
  var dragged;

  document.addEventListener(
    "dragstart",
    function (event) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
    },
    false
  );

  /* events fired on the drop targets */
  document.addEventListener(
    "dragover",
    function (event) {
      // prevent default to allow drop
      event.preventDefault();
    },
    false
  );

  document.addEventListener(
    "drop",
    function (event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if (event.target.className == "droppable-elem") {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        //数パレット内の数字を一旦消去
        var ele = document.getElementById("num_pallet");
        while (ele.firstChild) {
          ele.removeChild(ele.firstChild);
        }
        num_set();
        kotae_input();
      } else if (event.target.className == "droppable-elem-2" && dragged.tagName == "IMG") {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        img_kuriagari();
      }
      data.pi.currentTime = 0;
      data.pi.play();
    },
    false
  );

  //ドラッグ開始の操作
  function touchStartEvent(event) {
    //タッチによる画面スクロールを止める
    event.preventDefault();
  }

  //ドラッグ中の操作
  function touchMoveEvent(event) {
    event.preventDefault();
    //ドラッグ中のアイテムをカーソルの位置に追従
    var draggedElem = event.target;
    var touch = event.changedTouches[0];
    event.target.style.position = "fixed";
    event.target.style.top = touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2 + "px";
    event.target.style.left = touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2 + "px";
  }

  //ドラッグ終了後の操作
  function touchEndEvent(event) {
    event.preventDefault();
    //ドラッグ中の操作のために変更していたスタイルを元に戻す
    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = "";
    //ドロップした位置にあるドロップ可能なエレメントに親子付けする
    var touch = event.changedTouches[0];
    //スクロール分を加味した座標に存在するエレメントを新しい親とする
    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);
    if (newParentElem.className == "droppable-elem") {
      newParentElem.appendChild(droppedElem);
      //数パレット内の数字を一旦消去
      var ele = document.getElementById("num_pallet");
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }
      num_set();
      kotae_input();
    }
    data.pi.currentTime = 0;
    data.pi.play();
  }

  function kuku() {
    const TBL_kuku = document.createElement("table");
    TBL_kuku.setAttribute("id", "kuku_hyou");
    TBL_kuku.style.textAlign = "center";
    TBL_kuku.style.position = "fixed";
    TBL_kuku.style.left = "100px";
    TBL_kuku.style.top = "130px";
    TBL_kuku.style.zIndex = 100;

    for (let i = 0; i < 10; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < 10; j++) {
        const td = document.createElement("td");
        td.style.height = "20px";
        td.style.width = "20px";
        td.style.fontSize = "12px";
        td.style.color = "black";

        if (i != 0 && j !== 0) {
          td.innerText = Math.floor(i * j);
          td.style.backgroundColor = "#ffff80";
        }
        if (i == 0) {
          td.innerText = j;
          td.style.backgroundColor = "#ffcabf";
        }
        if (j == 0) {
          td.innerText = i;
          td.style.backgroundColor = "lightblue";
        }
        if (i == 0 && j == 0) {
          td.innerText = "x";
        }
        tr.appendChild(td);
      }
      TBL_kuku.appendChild(tr);
    }
    kuku_hyou.appendChild(TBL_kuku);
    move(TBL_kuku);
  }
}
