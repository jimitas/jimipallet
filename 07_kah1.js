import * as data from "./data.js";

export function kah1() {
  main_text_box.innerHTML = "かけ算の筆算(1)";
  //初期設定------------------------------------
  let hijousu = 123;
  let jousu = 4;
  let max_keta = 4;
  let seki;
  let kuriagari;
  let hijousu_arr = [];
  let jousu_arr = [];
  let seki_arr = [];
  let hijousu_keta;
  let jousu_keta;
  let seki_keta;

  document.getElementById("sub").innerHTML = `
  <select id="tasu_type" style="margin:10px;font-size:16px">
  <option value="1">(２けた)×(１けた)</option>
  <option value="2">(３けた)×(１けた)</option>
  </select>
  <input type="button" value="クリア" id="clear" class="btn btn-primary"/>    
  <input type="button" value="もんだい" id="mondai" class="btn btn-success"/>    
  <input type="button" value="セット" id="set" class="btn btn-info"/>    
  <input type="button" value="こたえ" id="kotae" class="btn btn-danger"/>    
  <input type="button" value="ヒント" id="hint" class="btn btn-secondary"/>    
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
  <input type="button" value="1000くり上がり" id="kuriagari_1000" class="btn btn-secondary" style="width:100px;margin:5px;"/>    
  <input type="button" value="100くり上がり" id="kuriagari_100" class="btn btn-secondary" style="width:100px;margin:5px;"/>
  <input type="button" value="10くり上がり" id="kuriagari_10" class="btn btn-secondary" style="width:100px;margin:5px;"/>    
  </div>
  <div  style="display:flex;margin:10px;">
  <div>
    <table>
    <tbody id="TBL">
    </tbodey>
    </table>
    </div>
    <div>
    <table style="margin-left:10px;">
    <tbody id="TBL_2">
    </tbodey>
    </table>
    </div>
  </div>
  <div id="kuku_hyou">
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

  const kuriagari_1000 = document.getElementById("kuriagari_1000");
  kuriagari_1000.addEventListener("click", () => Kuriagari_1000());
  const kuriagari_100 = document.getElementById("kuriagari_100");
  kuriagari_100.addEventListener("click", () => Kuriagari_100());
  const kuriagari_10 = document.getElementById("kuriagari_10");
  kuriagari_10.addEventListener("click", () => Kuriagari_10());
  const kuku_hyou = document.getElementById("kuku_hyou");
  const hint = document.getElementById("hint");
  hint.addEventListener("click", () => {
    data.reset.currentTime = 0;
    data.reset.play();
    kuku();
  });

  //筆算マスの定義------------------------------------
  const TBL = document.getElementById("TBL");
  for (let i = 0; i < 4; i++) {
    const tr = document.createElement("tr");
    tr.style.maxHeight = "40px";
    if (i == 2) {
      tr.style.maxHeight = "20px";
      tr.setAttribute("class", "seki_kuriagari");
    }
    if (i == 3) {
      tr.setAttribute("class", "seki_kotae");
    }
    for (let j = 0; j < max_keta; j++) {
      const td = document.createElement("td");
      td.style.border = "1px solid #333";
      td.style.width = "40px";
      td.style.height = "40px";
      td.style.fontSize = "36px";
      td.style.textAlign = "center";
      tr.appendChild(td);
      if (i == 2 || i == 3) {
        td.setAttribute("class", "droppable-elem");
        td.style.backgroundColor = "#4dc4ff";
      }
      if (i == 2) {
        td.style.backgroundColor = "#fff100";
        td.style.height = "20px";
      }
    }
    TBL.appendChild(tr);
    TBL.style.height = "240px";
  }

  //お金パレットの設置--------------------------------
  //こたえ　セット

  const TBL_2 = document.getElementById("TBL_2");
  for (let i = 0; i < 12; i++) {
    const tr = document.createElement("tr");
    tr.style.maxHeight = "25px";
    for (let j = 0; j < max_keta; j++) {
      const td = document.createElement("td");
      if (j == 0) {
        td.style.border = "none";
        td.style.width = "60px";
      } else {
        td.style.border = "1px dotted #333";
        td.style.width = "200px";
      }
      td.style.height = "28px";
      td.style.backgroundColor = "white";

      td.style.flexDirection = "column";
      tr.appendChild(td);
      td.setAttribute("class", "droppable-elem-2");
      if (i == 0 || i == 11) {
        td.style.backgroundColor = "#4dc4ff";
      } else if (i == 10) {
        td.style.backgroundColor = "#fff100";
        td.style.height = "56px";
      }
    }
    TBL_2.appendChild(tr);
    TBL_2.style.border = "solid 1px #333";
    TBL_2.style.marginLeft = "10px";
    TBL_2.style.marginRight = "10px";
  }

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
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }
    TBL.rows[1].cells[0].innerHTML = "×";
    box1.value = "";
    box3.value = "";
    box5.value = "";
  }

  // 関数　問題をランダムに出す
  function shutudai() {
    switch (tasu_type.value) {
      case "1":
        hijousu = Math.floor(Math.random() * 90 + 10);
        jousu = Math.floor(Math.random() * 9 + 1);
        break;
      case "2":
        hijousu = Math.floor(Math.random() * 900 + 100);
        jousu = Math.floor(Math.random() * 9 + 1);
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
    //くり上がりの表示
    for (let col = 0; col < hijousu_keta; col++) {
      if (Math.floor(hijousu_arr[col] * jousu + kuriagari) > 9) {
        kuriagari = Math.floor((hijousu_arr[col] * jousu + kuriagari) / 10);
        TBL.rows[2].cells[max_keta - col - 2].innerHTML = kuriagari;
        TBL.rows[2].cells[max_keta - col - 2].style.fontSize = "20px";
        TBL.rows[2].cells[max_keta - col - 2].style.color = "red";
        TBL.rows[2].cells[max_keta - col - 2].style.verticalAlign = "bottom";
      } else {
        kuriagari = 0;
      }
    }
    //筆算の答え表示
    for (let col = 0; col < seki_keta; col++) {
      TBL.rows[3].cells[max_keta - col - 1].innerHTML = seki_arr[col];
    }
    //答えの表示の時，お金を並べ直すかは要検討
  }

  // 関数　答えの入力---------------
  function kotae_input() {
    hijousu = Math.floor(box1.value);
    jousu = Math.floor(box3.value);
    seki = Math.floor(hijousu * jousu);
    box5.value =
      Number(TBL.rows[3].cells[0].innerText) * 1000 + Number(TBL.rows[3].cells[1].innerText) * 100 + Number(TBL.rows[3].cells[2].innerText) * 10 + Number(TBL.rows[3].cells[3].innerText) * 1;
    if (box5.value == seki) {
      box5.style.color = "red";
      data.seikai1.currentTime = 0;
      data.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  }

  //関数　筆算の描画---------------------
  function hissan_set() {
    if (hijousu > 999 || jousu > 9 || hijousu < 0 || jousu < 0) {
      data.alert.play();
      alert("かけられる数は1～999，かける数は1～9までにしてください。");
      box1.value = "";
      box3.value = "";
      return;
    }
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

    suuji_set();
    okane_set();
  }

  //マス内にお金を並べる-----------------------
  function okane_set() {
    //一度　マス内のお金をクリア
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 4; col++) {
        TBL_2.rows[row].cells[col].innerHTML = "";
      }
    }

    const img_arr = ["ichien", "juuen", "hyakuen"];
    for (let col = 0; col < hijousu_keta; col++) {
      TBL_2.rows[0].cells[3].innerHTML = `<img style="width:20px;height:20px;" src="./image/ichien.png" />` + "　が　(" + hijousu_arr[0] + "　×　" + jousu + ")　こ";
      TBL_2.rows[0].cells[2].innerHTML = `<img style="width:20px;height:20px;" src="./image/juuen.png" />` + "　が　(" + hijousu_arr[1] + "　×　" + jousu + ")　こ";
      TBL_2.rows[0].cells[1].innerHTML = `<img style="width:20px;height:20px;" src="./image/hyakuen.png" />` + "　が　(" + hijousu_arr[2] + "　×　" + jousu + ")　こ";
      for (let i = 1; i < jousu + 1; i++) {
        for (let j = 0; j < hijousu_arr[col]; j++) {
          const img = document.createElement("img");
          img.setAttribute("src", "./image/" + img_arr[col] + ".png");
          img.setAttribute("class", img_arr[col]);
          img.style.width = "20px";
          img.style.height = "20px";
          img.style.cursor = "pointer";
          img.addEventListener("touchstart", touchStartEvent, false);
          img.addEventListener("touchmove", touchMoveEvent, false);
          img.addEventListener("touchend", touchEndEvent_2, false);
          TBL_2.rows[i].cells[max_keta - col - 1].appendChild(img);
        }
      }
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
    for (let col = 0; col < hijousu_keta; col++) {
      TBL.rows[0].cells[max_keta - col - 1].innerHTML = hijousu_arr[col];
    }
    for (let col = 0; col < jousu_keta; col++) {
      TBL.rows[1].cells[max_keta - col - 1].innerHTML = jousu_arr[col];
    }
    if ((hijousu < 100) & (jousu < 100)) {
      TBL.rows[1].cells[1].innerHTML = "×";
    } else {
      TBL.rows[1].cells[0].innerHTML = "×";
    }
  }

  //関数　数字のセット
  function num_set() {
    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.innerHTML = i;
      div.style.width = "40px";
      div.style.height = "40px";
      div.setAttribute("class", "draggable-elem");
      div.setAttribute("draggable", "true");

      div.addEventListener("touchstart", touchStartEvent, false);
      div.addEventListener("touchmove", touchMoveEvent, false);
      div.addEventListener("touchend", touchEndEvent, false);
      document.getElementById("num_pallet").appendChild(div);
      document.getElementById("num_pallet").style.width = "400px";
      document.getElementById("num_pallet").style.height = "42px";
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
  function Kuriagari_10() {
    var count = TBL_2.getElementsByClassName("ichien").length;
    if (count > 9) {
      data.reset.currentTime = 0;
      data.reset.play();
    }
    while (count > 9) {
      for (let i = 0; i < 10; i++) {
        TBL_2.getElementsByClassName("ichien")[0].remove();
      }
      let j = 0;
      img_style(j);
      count = count - 10;
    }
  }

  function Kuriagari_100() {
    var count = TBL_2.getElementsByClassName("juuen").length;
    if (count > 9) {
      data.reset.currentTime = 0;
      data.reset.play();
    }
    while (count > 9) {
      for (let i = 0; i < 10; i++) {
        TBL_2.getElementsByClassName("juuen")[0].remove();
      }
      let j = 1;
      img_style(j);
      count = count - 10;
    }
  }
  function Kuriagari_1000() {
    var count = TBL_2.getElementsByClassName("hyakuen").length;
    if (count > 9) {
      data.reset.currentTime = 0;
      data.reset.play();
    }
    while (count > 9) {
      for (let i = 0; i < 10; i++) {
        TBL_2.getElementsByClassName("hyakuen")[0].remove();
      }
      let j = 2;
      img_style(j);
      count = count - 10;
    }
  }

  function img_kuriagari() {
    const img_arr = ["ichien", "juuen", "hyakuen", "senen"];
    for (let j = 0; j < 3; j++) {
      var count = TBL_2.rows[10].cells[3 - j].getElementsByClassName(img_arr[j]).length;
      if (count > 9) {
        data.reset.currentTime = 0;
        data.reset.play();
        for (let i = 0; i < 10; i++) {
          TBL_2.rows[10].cells[3 - j].getElementsByClassName(img_arr[j])[0].remove();
        }
        img_style(j);
      }
    }
  }

  function img_style(j) {
    const img_arr = ["ichien", "juuen", "hyakuen", "senen"];
    const img = document.createElement("img");
    img.setAttribute("src", "./image/" + img_arr[j + 1] + ".png");
    img.setAttribute("class", img_arr[j + 1]);
    img.style.width = "20px";
    if (j == 2) {
      img.style.width = "45px";
    }
    img.style.height = "20px";
    img.addEventListener("touchstart", touchStartEvent, false);
    img.addEventListener("touchmove", touchMoveEvent, false);
    img.addEventListener("touchend", touchEndEvent_2, false);
    TBL_2.rows[10].cells[2 - j].appendChild(img);
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
          td.style.backgroundColor = "lightyellow";
        }
        if (i == 0) {
          td.innerText = j;
          td.style.backgroundColor = "lightpink";
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
