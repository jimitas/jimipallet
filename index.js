import * as data from "./data.js";
import { draw } from "./draw.js";
import { drag } from "./drag.js";
import { move } from "./move.js";
import { grid } from "./00_grid.js";
import { subl } from "./01_suuzu_block.js";
import { tokei } from "./02_tokei.js";
import { kazu } from "./03_kazu.js";
import { tahi } from "./04_ta_hissan.js";
import { hihi } from "./05_hi_hissan.js";
import { kuku } from "./06_kuku.js";
import { kah1 } from "./07_kah1.js";
import { kah2 } from "./08_kah2.js";
import { hyaku } from "./09_hyaku.js";

//先頭までスクロールする。
function noScroll(event) {
  event.preventDefault();
}
// スクロール禁止(SP)
document.addEventListener("touchmove", noScroll, { passive: false });
// スクロール禁止(PC)
document.addEventListener("mousewheel", noScroll, { passive: false });

var grid_int = 80;
var b_color = "white";
var color = "black";
var ironuri = false;
var Target;
var Focus = footer_area;
const masu_check = document.getElementById("masu_check");
menu_change(); //メニューセット
calc_set(); //計算機
img_set(); //画像セット
draw(); //手書き入力の導入
move(gomibako); //ごみ箱の設定

//コンテンツメニュー
menu_box.addEventListener("change", () => {
  menu_change();
});
//マスの大きさ
note_range.addEventListener("change", () => {
  range_change();
});
//マスの表示・非表示
masu_check.addEventListener("click", () => {
  masu_change();
});
//-----グリッドに図形を吸着するのは,moveable.jsの中で設定---
//図形描画
figure_box.addEventListener("click", () => {
  figure_box.selectedIndex = 0;
});
figure_box.addEventListener("change", (event) => {
  figure_draw();
});
//スクリーンキャプチャ
camera_img.addEventListener("click", () => {
  img_capture();
});
//白黒反転
UD.addEventListener("click", () => {
  reverse();
});
//手書き入力
tegaki_canvas.style.pointerEvents = "none";
tegaki_img.addEventListener("click", () => {
  tegaki();
});
//文字の色
color_box.addEventListener("change", (event) => {
  color_change(event);
});
//色塗り作成画面の設定
penki.addEventListener("click", () => {
  Ironuri();
});
//下地色
b_color_box.addEventListener("change", (event) => {
  b_color_change(event);
});
//入力文字送信
submit.addEventListener("click", () => {
  text_area_set();
});

//コンテンツメニューの切り替え--------------------------------
function menu_change() {
  data.set.currentTime = 0;
  data.set.play();
  content.innerHTML = "";
  note_masu.innerHTML = "";
  switch (menu_box.selectedIndex) {
    case 0:
      main_text_box.innerHTML = "さんすうノート";
      masu_check.checked = true;
      var grid_int = 80;
      document.getElementById("sub").innerHTML = "";
      note_range.value = 0;
      grid(grid_int);
      break;
    case 1:
      main_text_box.innerHTML = "すうずぶろっく";
      masu_check.checked = true;
      note_range.value = 0;
      grid();
      subl(Focus);
      break;
    case 2:
      main_text_box.innerHTML = "とけい";
      masu_check.checked = false;
      tokei();
      break;
    case 3:
      main_text_box.innerHTML = "100までのかずのけいさん";
      masu_check.checked = false;
      hyaku();
      break;
    case 4:
      main_text_box.innerHTML = "大きなかず";
      masu_check.checked = false;
      kazu();
      break;
    case 5:
      main_text_box.innerHTML = "たし算のひっ算";
      masu_check.checked = false;
      tahi();
      break;
    case 6:
      main_text_box.innerHTML = "ひき算のひっ算";
      masu_check.checked = false;
      hihi();
      break;
    case 7:
      main_text_box.innerHTML = "九九のれんしゅう";
      masu_check.checked = false;
      kuku();
      break;
    case 8:
      main_text_box.innerHTML = "かけ算の筆算(1)";
      masu_check.checked = false;
      kah1();
      break;
    case 9:
      main_text_box.innerHTML = "かけ算の筆算(2)";
      masu_check.checked = false;
      kah2();
      break;
  }
}
//マスの大きさ
function range_change() {
  document.getElementById("masu_check").checked = true;
  data.kako.currentTime = 0;
  data.kako.play();
  const range = [80, 60, 40, 20];
  grid_int = range[note_range.value];
  note_masu.innerHTML = "";
  grid(grid_int);
}
//マスの表示・非表示
function masu_change() {
  if (masu_check.checked == true) {
    grid(grid_int, ironuri, Target);
    data.set.currentTime = 0;
    data.set.play();
  } else {
    data.cancel2.currentTime = 0;
    data.cancel2.play();
    note_masu.innerHTML = "";
  }
}
//-----グリッドに図形を吸着するのは,moveable.jsの中で設定---
//図形描画選択メニューの作成
function figure_draw() {
  const figure_data = ["line", "line", "square", "triangle", "triangle", "triangle", "triangle", "triangle", "dia", "dia", "circle"];
  const img_data = ["", "", "", "triangle", "triangle2", "triangle3", "triangle4", "triangle", "dia1", "dia2", "circle"];
  data.move1.currentTime = 0;
  data.move1.play();
  figure_box.selectedIndex = Number(figure_box.value);
  if (Number(figure_box.value) > 2) {
    var figure = document.createElement("img");
    figure.src = "./image/" + img_data[Number(figure_box.value)] + ".png";
  } else {
    var figure = document.createElement("div");
    figure.style.backgroundColor = "#d8f255";
  }
  figure.classList.add("figure", "droppable-elem", figure_data[figure_box.value]);
  figure.style.zIndex++;
  figure_pallet.appendChild(figure);
  move(figure);
  figure.style.pointerEvents = "all";
}
//スクリーンキャプチャ
function img_capture() {
  img_capture.backgroundColor = "#fff100";
  data.shot.currentTime = 0;
  data.shot.play();
  html2canvas(document.body).then(function (canvas) {
    //. Canvas の内容を PNG 画像として取得
    var png = canvas.toDataURL("image/png");
    var png = canvas.toDataURL("image/png");
    png = png.replace(/^.*,/, "");

    //. バイナリ変換
    var bin = atob(png);
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    var blob = new Blob([buffer], { type: "image/png" });

    try {
      navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
      data.seikai1.currentTime = 0;
      data.seikai1.play();
      // img_capture.backgroundColor = "#c8c8cb";
      alert("がめんは，クリップボードにコピーされました。(ctrl+Vキーなどではりつけができます。)");
    } catch (err) {
      console.log(err);
      alert("クリップボードにコピーされませんでした。");
    }
  });
}
//白黒反転
function reverse() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
    text_input_box.style.backgroundColor = "black";
    text_input_box.style.color = "white";
    b_color = "black";
  } else {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
    text_input_box.style.backgroundColor = "white";
    text_input_box.style.color = "black";
    b_color = "white";
  }
  data.reset.currentTime = 0;
  data.reset.play();
}
//手書き入力
function tegaki() {
  if (document.body.style.backgroundColor == "black") {
    color_box[2].selected = true;
  }
  if (tegaki_canvas.style.pointerEvents == "none") {
    tegaki_canvas.style.pointerEvents = "all";
    tegaki_img.style.backgroundColor = "#fff100";
    tegaki_canvas.style.background = "rgba(255, 255, 205, 0.5)";
    tegaki_canvas.style.border = "border: solid 1px #333;";
    main_text_box.innerHTML = `てがきにゅうりょくができます。`;
    switch_on(tegaki);
  } else {
    if (document.body.style.backgroundColor == "black") {
      color_box[0].selected = true;
    }
    tegaki_canvas.style.pointerEvents = "none";
    tegaki_img.style.backgroundColor = "#c8c8cb";
    tegaki_canvas.style.background = "rgba(255, 255, 205, 0)";
    tegaki_canvas.style.border = "border: none;";
    main_text_box.innerHTML = `じみパレ。<span style="font-size: 12px;">(地味に助かる算数パレット)</span>`;
    main_text_box.color = "white";
    switch_off(tegaki);
  }
}
// 文字の色
function color_change() {
  //フォントの選択
  const font_data = ["UD Digi Kyokasho N-B", "ヒラギノ明朝 ProN W6, HiraMinProN-W6, HG明朝E, ＭＳ Ｐ明朝,MS PMincho, MS 明朝, serif", "メイリオ,ヒラギノ角ゴ ProN,sans-serif"];
  font_select.addEventListener("change", (event) => {
    data.move1.currentTime = 0;
    data.move1.play();
    document.body.style.fontFamily = font_data[Number(event.target.value)];
    document.body.style.fontWeight = 900;
  });
  //メイン画面のカラー選択メニュー作成
  color_box.addEventListener("change", (event) => {
    data.move1.currentTime = 0;
    data.move1.play();
    event.target.style.color = data.color_data[Number(event.target.value)];
    text_input_box.style.color = color;
    document.getElementById("LED").style.color = color;
    if (event.target.value == "1") {
      event.target.style.color = "black";
      text_input_box.style.backgroundColor = "black";
    } else {
      text_input_box.style.backgroundColor = "white";
    }
  });
}
//色塗り
function Ironuri() {
  if (ironuri == false) {
    ironuri = true;
    note_masu.pointerEvents = "all";
    b_color_box.style.backgroundColor = "#fff100";
    b_color_box.style.color = "red";
    b_color_box[2].selected = true;
    switch_on(penki);
    main_text_box.innerHTML = `マスの いろぬりができます。`;
    main_text_box.style.color = "white";
  } else {
    ironuri = false;
    note_masu.pointerEvents = "none";
    b_color_box.style.backgroundColor = "white";
    b_color_box[0].selected = true;
    switch_off(penki);
    main_text_box.innerHTML = `じみぱれ。(地味に助かる算数パレット)`;
    return;
  }
}
//下地色
function b_color_change(event) {
  data.move1.currentTime = 0;
  data.move1.play();
  b_color = data.color_data[Number(event.target.value)];
  text_input_box.style.backgroundColor = b_color;
  // document.body.style.backgroundColor = b_color;
  event.target.style.color = data.color_data[Number(event.target.value)];
  if (event.target.value == "13") event.target.style.color = "black";
}
//入力文字送信
function text_area_set() {
  const div = document.createElement("div");
  div.innerHTML = text_input_box.value;
  div.classList.add("text_box");
  div.style.color = data.color_data[color_box.value];
  div.style.backgroundColor = b_color;
  div.style.zIndex = 100;

  if (document.getElementById("color_box").value == "1") div.style.backgroundColor = "#333";
  div.style.width = div.innerText.length * 16 + "px";
  document.getElementById("content").appendChild(div);
  move(div);
  data.move2.currentTime = 0;
  data.move2.play();
}
//その他
function switch_on(event) {
  event.style.backgroundColor = "#fff100";
  data.set.currentTime = 0;
  data.set.play();
}
function switch_off(event) {
  event.style.backgroundColor = "#c8c8cb";
  data.cancel2.currentTime = 0;
  data.cancel2.play();
}
//計算機
function calc_set() {
  //電卓の画面作成
  const TBL_CALC = document.createElement("table");
  const TBL_CALC_data = ["", "%", "(", ")", "÷", "←", 7, 8, 9, "×", "C", 4, 5, 6, "-", "ON/OFF", 1, 2, 3, "+", "00", 0, ".", "=", "↩"];
  let SHIKI = "";
  let calc_swith = false;
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      let num = Math.floor(i * 5 + j);
      if (num == 0) {
        var btn = document.createElement("img");
        btn.src = "./image/dentaku.png";
        btn.style.width = "38px";
        btn.style.height = "38px";
        btn.style.cursor = "pointer";
      } else {
        var btn = document.createElement("button");
        btn.classList.add("num");
      }
      btn.innerText = TBL_CALC_data[i * 5 + j];
      tr.appendChild(btn);
      if (num == 15) {
        btn.style.fontSize = "8px";
        btn.style.overflowWrap = "break-word";
        btn.setAttribute("id", "masu_check");
      }
      if (num == 20) {
        btn.style.fontSize = "18px";
        btn.style.padding = "4px 0 0 0";
      }
      if (num == 10 || num == 15) {
        btn.style.color = "white";
        btn.style.backgroundColor = "#ff4b00";
      }
      if (num == 5) {
        btn.style.color = "white";
        btn.style.backgroundColor = "#03af7a";
      }
      if (num > 22) {
        btn.style.color = "white";
        btn.style.backgroundColor = "#005aff";
      }

      btn.addEventListener("click", () => {
        if (calc_swith === true) {
          switch (num) {
            case 0:
            case 15:
              LED.style.border = "none";
              TBL_CALC.style.backgroundColor = "white";
              data.cancel2.currentTime = 0;
              data.cancel2.play();
              calc_swith = false;
              return;
            case 10:
              LED.innerText = ""; //クリア
              SHIKI = ""; //クリア
              data.cancel3.currentTime = 0;
              data.cancel3.play();
              break;
            case 1:
              LED.innerText += "%";
              SHIKI += "*0.01";
              data.move1.currentTime = 0;
              data.move1.play();
              break;
            case 4:
              LED.innerText += "÷";
              SHIKI += "/";
              data.move1.currentTime = 0;
              data.move1.play();
              break;
            case 5:
              LED.innerText = LED.innerText.slice(0, LED.innerText.length - 1);
              SHIKI = SHIKI.slice(0, LED.innerText.length - 1);
              data.cancel3.currentTime = 0;
              data.cancel3.play();
              break;
            case 9:
              LED.innerText += "×";
              SHIKI += "*";
              data.move1.currentTime = 0;
              data.move1.play();
            case 23:
              LED.innerText += "=" + eval(SHIKI);
              data.right.currentTime = 0;
              data.right.play();
              break;
            case 24:
              text_input_box.value = LED.innerText;
              data.right.currentTime = 0;
              data.right.play();
              break;
            default:
              LED.innerText += TBL_CALC_data[num];
              SHIKI += TBL_CALC_data[num];
              data.move1.currentTime = 0;
              data.move1.play();
              break;
          }
        } else if (calc_swith === false) {
          if (num == 0 || num == 10 || num == 15) {
            LED.style.border = "solid 5px #fff100";
            TBL_CALC.style.backgroundColor = "#fff100";
            data.open1.play();
            main_text_box.innerText = "でんたくで　けいさんが　できます。";
            calc_swith = true;
            return;
          } else {
            //ブロックの登録機能
            const div = document.createElement("div");
            div.classList.add("num", "art_num");
            div.setAttribute("draggable", "true");
            div.innerText = TBL_CALC_data[num];
            div.style.width = grid_int - 4 + "px";
            div.style.height = grid_int - 4 + "px";
            div.style.lineHeight = grid_int - 4 + "px";
            div.style.fontSize = grid_int / 2 - 2 + "px";
            footer_area.appendChild(div);
            data.pi.currentTime = 0;
            data.pi.play();
            drag(div);
          }
        }
      });
      tr.appendChild(btn);
    }
    TBL_CALC.appendChild(tr);
  }
  calc_pallet.appendChild(TBL_CALC);
}
//画像配置
function img_set() {
  //画像データの登録
  const img_data = ["pink_block", "blue_block", "ohajiki_B", "ohajiki_P", "ichien", "go", "juuen", "gojuu", "hyakuen", "gohyaku", "ichi", "juu", "hyaku", "sen", "gosen", "ichiman"];
  var ele = document.getElementById("img_pallet");
  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }
  for (let i = 0; i < img_data.length; i++) {
    const img = document.createElement("img");
    //画像をセット
    img.classList.add("img", img_data[i]);
    img.src = "./image/" + img_data[i] + ".png";
    img_pallet.appendChild(img);
    img.addEventListener("click", () => {
      if (i == 10) {
        img.style.width = grid_int / 3 - 4 + "px";
      } else if (i == 11) {
        img.style.width = grid_int / 2 - 4 + "px";
      } else if (i > 12) {
        img.style.width = grid_int * 2 - 4 + "px";
      } else {
        img.style.width = grid_int - 4 + "px";
      }
      img.style.height = grid_int - 4 + "px";
      img.style.lineHeight = grid_int - 4 + "px";
      footer_area.appendChild(img);
      data.pi.currentTime = 0;
      data.pi.play();
      drag(img);
      img_set();
    });
  }
}
