import * as data from "./data.js";

export function tahi() {
  main_text_box.innerHTML = "たし算のひっ算";
  //初期設定------------------------------------
  let hikasu = 123;
  let kasu = 456;
  let max_keta = 4;
  let wa;
  let kuriagari;
  let hikasu_arr = [];
  let kasu_arr = [];
  let wa_arr = [];
  let hikasu_keta;
  let kasu_keta;
  let wa_keta;
  
  document.getElementById("sub").innerHTML = `
  <select id="tasu_type" style="font-size:16px">
  <option value="1">(２けた)+(２けた)</option>
  <option value="2">(３けた)+(２けた)</option>
  <option value="3">(２けた)+(３けた)</option>
  <option value="4">(３けた)+(３けた)</option>
  </select>
  <input type="button" value="クリア" id="clear" class="btn btn-primary"/>    
  <input type="button" value="もんだい" id="mondai" class="btn btn-success"/>    
  <input type="button" value="セット" id="set" class="btn btn-info"/>    
  <input type="button" value="こたえ" id="kotae" class="btn btn-danger"/>    
  `;

  document.getElementById("content").innerHTML = `
  <div id="shiki" style="display:flex; margin:10px;">
    <input id="box1" type="number" max=999 min=10 class="keisan_shiki"/>
    <div   id="box2" type="number" style="width:50px;text-align:center;font-size:36px;" class="kigo">+</div>
    <input id="box3" type="number" max=999 min=10 class="keisan_shiki"/>
    <div   id="box4" type="number" style="width:50px;text-align:center;font-size:36px;" class="kigo">=</div>
    <input id="box5" type="number" class="keisan_shiki"/>
  </div>
  <div  style="display:flex;margin:10px;">
    <table>
    <tbody id="TBL">
    </tbodey>
    </table>
    <div id="field">
    </div>
  </div>
  `;
  //--各ボタンの設定-------------------------------------

  document.getElementById("clear").addEventListener("click", () => masu_clear());
  document.getElementById("mondai").addEventListener("click", () => shutudai());
  document.getElementById("set").addEventListener("click", () => mondai_set());
  document.getElementById("kotae").addEventListener("click", () => show_answer());

  //式ボックスの設定------------------------------------
  box1.value = hikasu;
  box3.value = kasu;

  box5.addEventListener("change", () => {
    if (box5.value == wa) {
      box5.style.color = "red";
      data.seikai1.currentTime = 0;
      data.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  });

  //筆算マスの定義------------------------------------
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    tr.style.maxHeight = "60px";
    for (let j = 0; j < max_keta; j++) {
      const td = document.createElement("td");
      td.style.border = "1px solid #333";
      td.style.width = "60px";
      td.style.maxWidth = "60px";
      td.style.height = "60px";
      td.style.maxHeight = "60px";
      td.style.fontSize = "30px";
      td.style.textAlign = "center";
      // td.style.backgroundColor = "white";
      tr.appendChild(td);
      if (i == 0 || i == 3) {
        td.setAttribute("class", "droppable-elem");
        td.style.backgroundColor = "#4dc4ff";
      }
    }
    TBL.appendChild(tr);
    TBL.style.height = "240px";
  }

  //お金パレットの設置--------------------------------
  const TBL_2 = document.createElement("table");
  field.appendChild(TBL_2);
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    tr.style.maxHeight = "60px";
    for (let j = 0; j < max_keta; j++) {
      const td = document.createElement("td");
      td.style.fontSize = "36px";
      td.style.lineHeight = "24px";
      td.style.border = "1px solid #333";
      td.style.width = "150px";
      td.style.maxWidth = "150px";
      td.style.height = "60px";
      td.style.maxHeight = "60px";
      if (j == 0) {
        td.style.width = "60px";
        td.style.maxWidth = "60px";
      }
      td.style.backgroundColor = "white";
      td.style.flexDirection = "column";
      tr.appendChild(td);
      td.setAttribute("class", "droppable-elem-2");
      if (i == 0 || i == 3) {
        td.style.backgroundColor = "#4dc4ff";
      }
    }
    TBL_2.appendChild(tr);
    TBL_2.style.height = "240px";
    TBL_2.style.marginLeft = "10px";
  }

  //数字パレットの設置
  const num_pallet = document.createElement("div");
  num_pallet.style.display = "flex";
  num_pallet.style.margin = "10px";
  num_pallet.setAttribute("id", "num_pallet");
  num_pallet.setAttribute("class", "droppable-elem");
  content.appendChild(num_pallet);

  hissan_set(hikasu, kasu);
  num_set();

  //ここから関数-----------------------------------------------------
  //関数　マス内の数字をクリア
  function masu_clear() {
    data.reset.currentTime = 0;
    data.reset.play();
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }
    TBL.rows[2].cells[0].innerHTML = "+";
    TBL.rows[2].cells[0].textAlign = "center";
    box1.value = "";
    box3.value = "";
    box5.value = "";
  }

  // 関数　問題をランダムに出す
  function shutudai() {
    switch (tasu_type.value) {
      case "1":
        hikasu = Math.floor(Math.random() * 90 + 10);
        kasu = Math.floor(Math.random() * 90 + 10);
        break;
      case "2":
        hikasu = Math.floor(Math.random() * 900 + 100);
        kasu = Math.floor(Math.random() * 90 + 10);
        break;
      case "3":
        hikasu = Math.floor(Math.random() * 90 + 10);
        kasu = Math.floor(Math.random() * 900 + 10);
        break;
      case "4":
        hikasu = Math.floor(Math.random() * 900 + 100);
        kasu = Math.floor(Math.random() * 900 + 100);
        break;
    }
    box1.value = hikasu;
    box3.value = kasu;
    hissan_set(hikasu, kasu);
    data.set.currentTime = 0;
    data.set.play();
  }

  // 関数　問題をセットする
  function mondai_set() {
    hikasu = box1.value;
    kasu = box3.value;
    hissan_set(hikasu, kasu);
    data.set.currentTime = 0;
    data.set.play();
  }

  // 関数　答えの表示
  function show_answer() {
    box5.value = wa;
    box5.style.color = "blue";
    data.seikai2.currentTime = 0;
    data.seikai2.play();
    //くり上がりの表示
    for (let col = 0; col < Math.min(hikasu_keta, kasu_keta); col++) {
      if (Math.floor(hikasu_arr[col] + kasu_arr[col] + kuriagari) > 9) {
        TBL.rows[0].cells[max_keta - col - 2].innerHTML = "1";
        kuriagari = 1;
        TBL.rows[0].cells[max_keta - col - 2].style.fontSize = "20px";
        TBL.rows[0].cells[max_keta - col - 2].style.color = "red";
        TBL.rows[0].cells[max_keta - col - 2].style.verticalAlign = "bottom";
      } else {
        kuriagari = 0;
      }
    }
    //筆算の答え表示
    for (let col = 0; col < wa_keta; col++) {
      TBL.rows[3].cells[max_keta - col - 1].innerHTML = wa_arr[col];
    }
    //答えの表示の時，お金を並べ直すかは要検討
  }

  // 関数　答えの入力---------------
  function kotae_input() {
    hikasu = Math.floor(box1.value);
    kasu = Math.floor(box3.value);
    wa = Math.floor(hikasu + kasu);
    box5.value =
      Number(TBL.rows[3].cells[0].innerText) * 1000 + Number(TBL.rows[3].cells[1].innerText) * 100 + Number(TBL.rows[3].cells[2].innerText) * 10 + Number(TBL.rows[3].cells[3].innerText) * 1;
    if (box5.value == wa) {
      box5.style.color = "red";
      data.seikai1.currentTime = 0;
      data.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  }

  //関数　筆算の描画---------------------
  function hissan_set(hikasu, kasu) {
    if (hikasu > 999 || kasu > 999 || hikasu < 0 || kasu < 0) {
      data.alert.play();
      alert("数字は1～999までにしてください。");
      box1.value = "";
      box3.value = "";
      return;
    }
    box5.style.color = "black";
    hikasu = Math.floor(hikasu);
    kasu = Math.floor(kasu);
    wa = Math.floor(hikasu + kasu);
    box1.value = hikasu;
    box3.value = kasu;
    box5.value = "";

    //数字を配列として代入
    hikasu_keta = String(hikasu).length;
    kasu_keta = String(kasu).length;
    wa_keta = String(wa).length;

    for (let i = 0; i < hikasu_keta; i++) {
      hikasu_arr[i] = Number(String(hikasu).charAt(hikasu_keta - i - 1));
    }
    for (let i = 0; i < kasu_keta; i++) {
      kasu_arr[i] = Number(String(kasu).charAt(kasu_keta - i - 1));
    }
    for (let i = 0; i < wa_keta; i++) {
      wa_arr[i] = Number(String(wa).charAt(wa_keta - i - 1));
    }

    suuji_set();
    okane_set();
  }

  //マス内にお金を並べる-----------------------
  function okane_set() {
    //一度　マス内のお金をクリア
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        TBL_2.rows[row].cells[col].innerHTML = "";
      }
    }

    const img_arr = ["ichien", "juuen", "hyakuen"];
    for (let col = 0; col < hikasu_keta; col++) {
      for (let i = 0; i < hikasu_arr[col]; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", "./image/" + img_arr[col] + ".png");
        img.setAttribute("class", img_arr[col]);
        img.setAttribute("draggable", "true");
        img.style.width = "25px";
        img.style.height = "25px";
        img.style.cursor = "pointer";
        img.addEventListener("touchstart", touchStartEvent, false);
        img.addEventListener("touchmove", touchMoveEvent, false);
        img.addEventListener("touchend", touchEndEvent_2, false);
        TBL_2.rows[1].cells[max_keta - col - 1].appendChild(img);
      }
    }
    for (let col = 0; col < kasu_keta; col++) {
      for (let i = 0; i < kasu_arr[col]; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", "./image/" + img_arr[col] + ".png");
        img.setAttribute("class", img_arr[col]);
        img.setAttribute("draggable", "true");
        img.style.width = "25px";
        img.style.cursor = "pointer";
        img.style.height = "25px";
        img.addEventListener("touchstart", touchStartEvent, false);
        img.addEventListener("touchmove", touchMoveEvent, false);
        img.addEventListener("touchend", touchEndEvent_2, false);
        TBL_2.rows[2].cells[max_keta - col - 1].appendChild(img);
      }
    }
    if ((hikasu < 100) & (kasu < 100)) {
      TBL_2.rows[2].cells[1].innerHTML = `<span style="text-align:right;">+</span>`;
    } else {
      TBL_2.rows[2].cells[0].innerHTML = `<span style="text-align:right;">+</span>`;
    }
  }

  //マス内に数字を書き込む-------------------
  function suuji_set() {
    //一度　マス内の数字をクリア
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }
    //マス内に数字を代入
    for (let col = 0; col < hikasu_keta; col++) {
      TBL.rows[1].cells[max_keta - col - 1].innerHTML = hikasu_arr[col];
    }
    for (let col = 0; col < kasu_keta; col++) {
      TBL.rows[2].cells[max_keta - col - 1].innerHTML = kasu_arr[col];
    }
    if ((hikasu < 100) & (kasu < 100)) {
      TBL.rows[2].cells[1].innerHTML = "+";
    } else {
      TBL.rows[2].cells[0].innerHTML = "+";
    }
  }

  //関数　数字のセット
  function num_set() {
    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.innerHTML = i;
      div.setAttribute("class", "draggable-elem");
      div.setAttribute("draggable", "true");
      div.style.width = "50px";
      div.style.height = "50px";
      div.style.lineHeight = "50px";
      div.style.color = "#333";
      div.style.backgroundColor = "white";
      div.style.fontSize = "30px";
      div.style.textAlign = "center";
      div.style.borderRadius = "10%";
      div.style.border = "1px solid #333";
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

  //ドラッグ終了後の操作2
  function touchEndEvent_2(event) {
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
    if (newParentElem.className == "droppable-elem-2") {
      newParentElem.appendChild(droppedElem);
    }
    data.pi.currentTime = 0;
    data.pi.play();
    img_kuriagari();
  }

  //くり上がりの操作
  function img_kuriagari() {
    const img_arr = ["ichien", "juuen", "hyakuen", "senen"];
    for (let j = 0; j < 3; j++) {
      var count = TBL_2.rows[3].cells[3 - j].getElementsByClassName(img_arr[j]).length;
      if (count > 9) {
        data.reset.currentTime = 0;
        data.reset.play();
        for (let i = 0; i < 10; i++) {
          TBL_2.rows[3].cells[3 - j].getElementsByClassName(img_arr[j])[0].remove();
        }
        img_style(j);
      }
    }
    function img_style(j) {
      const img = document.createElement("img");
      img.setAttribute("src", "./image/" + img_arr[j + 1] + ".png");
      img.setAttribute("class", img_arr[j + 1]);
      img.style.width = "25px";
      if (j == 2) {
        img.style.width = "60px";
      }
      img.style.height = "25px";
      img.addEventListener("touchstart", touchStartEvent, false);
      img.addEventListener("touchmove", touchMoveEvent, false);
      img.addEventListener("touchend", touchEndEvent_2, false);
      TBL_2.rows[0].cells[2 - j].appendChild(img);
    }
  }
}
