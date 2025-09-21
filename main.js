/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/00_grid.js":
/*!************************!*\
  !*** ./src/00_grid.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grid": () => (/* binding */ grid)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");

function grid(grid_int) {
  var TBL = document.createElement("table");
  TBL.setAttribute("id", "Masu");
  TBL.style.position = "fixed";
  var Width = document.documentElement.clientWidth - 220;
  var Height = document.documentElement.clientHeight - 140;

  for (var i = 0; i < Math.floor(Height / grid_int); i++) {
    var tr = document.createElement("tr");

    var _loop = function _loop(j) {
      var td = document.createElement("td");
      td.style.width = grid_int + "px";
      td.style.height = grid_int + "px";

      if (i == 0) {
        td.innerText = j + 1;
        td.style.textAlign = "center";
        td.style.fontSize = grid_int / 2 + "px";
        td.style.color = "#4dc4ff";
      }

      td.style.border = "dashed #4dc4ff 1px";
      td.classList.add("droppable-elem");
      td.addEventListener("click", function () {
        if (note_masu.pointerEvents == "all") {
          td.style.backgroundColor = _data_js__WEBPACK_IMPORTED_MODULE_0__.color_data[b_color_box.value];
          _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.currentTime = 0;
          _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.play();
        } else {
          if (footer_area.firstChild != null) {
            td.appendChild(footer_area.firstChild);
          }

          _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
          _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
        }
      });
      tr.appendChild(td);
    };

    for (var j = 0; j < Math.floor(Width / grid_int); j++) {
      _loop(j);
    }

    TBL.appendChild(tr);
  }

  document.getElementById("note_masu").appendChild(TBL);
}

/***/ }),

/***/ "./src/01_suuzu_block.js":
/*!*******************************!*\
  !*** ./src/01_suuzu_block.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subl": () => (/* binding */ subl)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");


function subl(Focus) {
  //初期設定
  document.getElementById("sub").innerHTML = "\n  <div id=\"buttons\">\n  <input id=\"clear\" type=\"button\" value=\"\u308A\u305B\u3063\u3068\" class=\"btn btn-danger\" />\n  <input id=\"check\" type=\"button\" value=\"\u305F\u3057\u304B\u3081\" class=\"btn btn-primary\" />\n  </div>\n  <div id=\"shiki\">\u306A\u3089\u3079\u305F\u3000\u304B\u305A\u3000<div id=\"count\"/></div>\u3053\n  </div>\n  ";
  var grid_int = 80;
  var suuzu_block = document.createElement("div");
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
  document.getElementById("clear").addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currenttime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    document.getElementById("count").innerText = "";
    put_blk();
  });
  document.getElementById("check").addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.open1.currenttime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.open1.play();
    var img = document.querySelectorAll("#section_1 .blk_img");
    document.getElementById("count").innerText = Number(img.length);
  }); //数図ブロック枠の描画

  function create_blk() {
    var section_1 = document.createElement("section");
    section_1.setAttribute("id", "section_1");
    section_1.style.display = "flex";
    section_1.style.backgroundColor = "#f6f0cc";
    var section_2 = document.createElement("section");
    section_2.style.height = "80px";
    section_2.innerHTML = "<span style=\"text-align:center;font-size:50px;line-height:80px\">\u2191</span>";
    var section_3 = document.createElement("section");
    section_3.setAttribute("id", "section_3");
    section_3.style.display = "flex";
    section_3.style.opacity = 0.7;

    for (var i = 0; i < 4; i++) {
      var TBL = document.createElement("table");
      TBL.setAttribute("id", "TBL_" + i);

      for (var row = 0; row < 2; row++) {
        var tr = document.createElement("tr");

        for (var col = 0; col < 5; col++) {
          var td = document.createElement("td");
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
  } //数図ブロックの配置


  function put_blk() {
    while (document.getElementsByClassName("blk_img").length > 0) {
      document.getElementsByClassName("blk_img")[0].remove();
    }

    var TBL_2 = document.getElementById("TBL_2");
    var TBL_3 = document.getElementById("TBL_3");

    for (var i = 0; i < 20; i++) {
      var img = document.createElement("img");
      img.classList.add("blk_img");
      (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.drag)(img);

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

/***/ }),

/***/ "./src/02_tokei.js":
/*!*************************!*\
  !*** ./src/02_tokei.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokei": () => (/* binding */ tokei)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");

function tokei() {
  main_text_box.innerHTML = "\u3068\u3051\u3044\u3000<span style=\"font-size:12px;\">\u3068\u3051\u3044\u306E\u306F\u308A\u306F\u3000\u30B9\u30E9\u30A4\u30C0\u30FC\u3067\u3046\u3054\u304B\u305B\u308B\u3088\u3002</span>"; //初期設定

  document.getElementById("sub").innerHTML = "";
  var tokei_board = document.createElement("div");
  document.getElementById("content").appendChild(tokei_board);
  tokei_board.setAttribute("id", "tokei_board");
  tokei_board.innerHTML = "\n  <h3 id=\"clock_text\" style=\"width: 600px; height: 20px;  font-size: 16px text-align:left;\"></h3>\n  <input id=\"tokei_range\" type=\"range\" class=\"custom-range\" min=0 max=720 step=15 style=\"height:50px; cursor:pointer;\"/>\n  <div style=\"display:flex;justify-content:space-between;width:600px;\">\n    <button id=\"Minus\">-</button>\n    <button id=\"Plus\">+</button>\n  </div>\n  <div style=\"display: flex;flex-wrap:wrap;\">\n  <canvas width=\"400\" height=\"400\" id=\"clock\" class=\"target\"></canvas>\n  <div>\n  <select name=\"type\" id=\"type\" style=\"width:150px;margin-left:0px;\">\n  <option value=\"nanji\">\u306A\u3093\u3058\u306A\u3093\u3075\u3093\uFF1F</option>\n  <option value=\"ugokasu\">\u306F\u308A\u3092\u3046\u3054\u304B\u305D\u3046</option>\n  </select>\n  <select name=\"mode\" id=\"mode\" style=\"width:150px;margin-left:0px;\">\n  <option value=\"easy\">\u3084\u3055\u3057\u3044</option>\n  <option value=\"normal\">\u3075\u3064\u3046</option>\n  <option value=\"difficult\">\u3080\u305A\u304B\u3057\u3044</option>\n  </select>\n  <br />\n  <h4 id=\"score\" style=\"text-align:left;font-family:\"BIZ UDGothic\";\"></h4>\n  <input style=\"  font-size: 12px;\nwidth:80px;margin:2px;;margin-left:0px;\" class=\"btn btn-primary\" id=\"question\" value=\"\u3082\u3093\u3060\u3044\">\n  <input style=\"  font-size: 12px;\nwidth:80px;margin:2px;;\" class=\"btn btn-success\" id=\"check\" value=\"\u3053\u305F\u3048\u3042\u308F\u305B\">\n  <input style=\"  font-size: 12px;\nwidth:80px;margin:2px;;\" class=\"btn btn-danger\" id=\"ans\" value=\"\u3053\u305F\u3048\u3092\u307F\u308B\">\n  <br />\n  <input style=\"  font-size: 12px;\nwidth:80px;margin:2px;;margin-left:0px;\" class=\"btn btn-secondary\" id=\"hint1\" value=\"\u30D2\u30F3\u30C8\uFF11\"/>\n  <input style=\"  font-size: 12px;\nwidth:80px;margin:2px;;\" class=\"btn btn-secondary\" id=\"hint2\" value=\"\u30D2\u30F3\u30C8\uFF12\"/>\n  <br/>\n  <input\n  id=\"input_hours\"\n  class=\"input-box\"\n  style=\"margin: 20px\"\n  type=\"number\"\n  max=\"12\"\n  min=\"1\"\n  />\u3058\n  <input\n  id=\"input_minutes\"\n  class=\"input-box\"\n  style=\"margin: 20px\"\n  type=\"number\"\n  max=\"59\"\n      min=\"0\"\n      />\u3075\u3093\n  </div>\n";
  var canvas = document.getElementById("clock");
  var ctx = canvas.getContext("2d");
  var hours = 6;
  var minutes = 0;
  var score_easy = 0;
  var score_normal = 0;
  var score_difficult = 0;
  var flag = true;
  var hari_hours;
  var hari_minutes;
  var Hint = "";
  var type = document.getElementById("type");
  var mode = document.getElementById("mode");
  var text = document.getElementById("clock_text"); // const t_range = new KeenSlider(t_range);

  var tokei_range = document.getElementById("tokei_range");
  tokei_range.step = 15;
  tokei_range.value = 360;
  var plus = document.getElementById("Plus");
  var minus = document.getElementById("Minus");
  var question = document.getElementById("question");
  var score = document.getElementById("score");
  var check = document.getElementById("check");
  var ans = document.getElementById("ans");
  var hint1 = document.getElementById("hint1");
  var hint2 = document.getElementById("hint2");
  var input_hours = document.getElementById("input_hours");
  var input_minutes = document.getElementById("input_minutes"); //時計の針を動かす。

  tokei_range.addEventListener("input", function () {
    hours = Math.floor(tokei_range.value / 60);
    minutes = Math.floor(tokei_range.value % 60);
    _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.play();
    draw();
  }); //プラスボタンを押したとき

  plus.addEventListener("click", function () {
    tokei_range.value = Math.floor(Number(tokei_range.value) + Number(tokei_range.step));
    hours = Math.floor(tokei_range.value / 60);
    minutes = Math.floor(tokei_range.value % 60);
    _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.play();
    draw();
  }); //マイナスボタンを押したとき

  minus.addEventListener("click", function () {
    tokei_range.value = tokei_range.value - tokei_range.step;
    hours = Math.floor(tokei_range.value / 60);
    minutes = Math.floor(tokei_range.value % 60);
    _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.play();
    draw();
  });
  score.innerHTML = "\u304B\u3093\u305F\u3093\u3000\u2026".concat(score_easy, "\u3082\u3093\u3000\u305B\u3044\u304B\u3044<br>\u3075\u3064\u3046\u3000\u3000\u2026").concat(score_normal, "\u3082\u3093\u3000\u305B\u3044\u304B\u3044<br>\u3080\u305A\u304B\u3057\u3044\u2026").concat(score_difficult, "\u3082\u3093\u3000\u305B\u3044\u304B\u3044");
  question.addEventListener("click", function () {
    input_hours.value = "";
    input_minutes.value = "";
    text.style.color = "black";
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
    flag = true;
    hours = Math.floor(Math.random() * 12 + 1);

    switch (mode.value) {
      case "easy":
        minutes = Math.floor(Math.random() * 4) * 15;
        break;

      case "normal":
        minutes = Math.floor(Math.random() * 12) * 5;
        break;

      case "difficult":
        minutes = Math.floor(Math.random() * 60);
        break;
    }

    if (type.value == "nanji") {
      text.innerHTML = "なんじ　なんふん？";
      draw();
    } else if (type.value == "ugokasu") {
      hari_hours = hours;
      hari_minutes = minutes;
      text.innerHTML = "".concat(hari_hours, "\u3058\u3000").concat(hari_minutes, "\u3075\u3093\u306B\u3000\u306F\u308A\u3092\u3000\u3046\u3054\u304B\u305D\u3046");
      hours = 6;
      minutes = 0;
      tokei_range.value = 360;
      draw();
    }
  });
  type.addEventListener("change", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  });
  mode.addEventListener("change", function () {
    switch (mode.value) {
      case "easy":
        tokei_range.step = 15;
        break;

      case "normal":
        tokei_range.step = 5;
        break;

      case "difficult":
        tokei_range.step = 1;
        break;
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  });
  hint1.addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();

    if (Hint == "hint1") {
      Hint = "";
    } else {
      Hint = "hint1";
    }

    draw();
  });
  hint2.addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();

    if (Hint == "hint2") {
      Hint = "";
    } else {
      Hint = "hint2";
    }

    draw();
  });
  input_hours.addEventListener("change", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  });
  input_minutes.addEventListener("change", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  });
  check.addEventListener("click", function () {
    if (hours == 0) hours = 12;

    if (type.value == "nanji") {
      var answer_hours = input_hours.value;
      if (input_hours.value == 0) input_hours.value = 12;
      var answer_minutes = input_minutes.value;
    } else if (type.value == "ugokasu") {
      hours = hari_hours;
      minutes = hari_minutes;
      var answer_hours = Math.floor(tokei_range.value / 60);
      if (answer_hours == 0) answer_hours = 12;
      var answer_minutes = Math.floor(tokei_range.value % 60);
    }

    if (hours == answer_hours && minutes == answer_minutes && flag == true) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
      text.innerHTML = "せいかい！";
      text.style.color = "red";

      switch (mode.value) {
        case "easy":
          score_easy++;
          break;

        case "normal":
          minutes = Math.floor(Math.random() * 12) * 5;
          score_normal++;
          break;

        case "difficult":
          minutes = Math.floor(Math.random() * 60);
          score_difficult++;
          break;
      }

      score.innerHTML = "\u3000\u304B\u3093\u305F\u3093\u3000\u2026".concat(score_easy, "\u3082\u3093\u3000\u305B\u3044\u304B\u3044<br>\u3000\u3075\u3064\u3046\u3000\u3000\u2026").concat(score_normal, "\u3082\u3093\u3000\u305B\u3044\u304B\u3044<br>\u3000\u3080\u305A\u304B\u3057\u3044\u2026").concat(score_difficult, "\u3082\u3093\u3000\u305B\u3044\u304B\u3044");
      flag = false;
    } else if ((hours != answer_hours || minutes != answer_minutes) && flag == true) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
    }
  });
  ans.addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.play();
    if (hours == 0) hours = 12;

    if (type.value == "nanji") {
      text.style.color = "red";
      text.innerHTML = "\u3053\u305F\u3048\u306F\u3000".concat(hours, "\u3058\u3000").concat(minutes, "\u3075\u3093\u3000\u3067\u3059\u3002");
    } else if (type.value == "ugokasu") {
      hours = hari_hours;
      minutes = hari_minutes;
      draw();
    }
  });

  function mRotate() {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineWidth = 3.0;
    ctx.lineTo(200 + 130 * Math.cos(Math.PI / 180 * (270 + 6 * minutes)), 200 + 130 * Math.sin(Math.PI / 180 * (270 + 6 * minutes)));
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }

  function hRotate() {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineWidth = 6.0;
    ctx.lineTo(200 + 100 * Math.cos(Math.PI / 180 * (270 + 30 * (hours + minutes / 60))), 200 + 100 * Math.sin(Math.PI / 180 * (270 + 30 * (hours + minutes / 60))));
    ctx.strokeStyle = "red";
    ctx.stroke();
  }

  function rotate() {
    mRotate();
    hRotate();
  }

  function drawText() {
    ctx.font = "30px 'ＭＳ ゴシック'";
    ctx.textAlign = "center";
    var textArrX = [260, 305, 325, 310, 265, 200, 140, 95, 75, 95, 135, 200];
    var textArrY = [105, 150, 210, 275, 320, 335, 320, 270, 210, 150, 105, 85];
    var textArrX2 = [200, 280, 340, 360, 340, 280, 200, 120, 60, 40, 60, 120];
    var textArrY2 = [45, 65, 125, 205, 285, 345, 365, 345, 285, 205, 125, 65];

    for (var i = 0; i <= 11; i++) {
      ctx.fillText(i + 1, textArrX[i], textArrY[i]);
    }

    ctx.font = "15px 'ＭＳ ゴシック'";

    if (Hint == "hint1") {
      for (var _i = 0; _i <= 11; _i++) {
        ctx.fillText(_i * 5, textArrX2[_i], textArrY2[_i]);
      }
    } else if (Hint == "hint2") {
      for (var _i2 = 0; _i2 < 60; _i2++) {
        ctx.fillText(_i2, 200 + 160 * Math.cos(Math.PI / 180 * (270 + _i2 * 6)), 205 + 160 * Math.sin(Math.PI / 180 * (270 + _i2 * 6)));
      }
    }

    ctx.font = "10px 'ＭＳ ゴシック'";
  }

  function drawScale() {
    for (var l = 0; l < 60; l++) {
      ctx.beginPath();
      ctx.moveTo(200 + 150 * Math.cos(Math.PI / 180 * (270 + l * 6)), 200 + 150 * Math.sin(Math.PI / 180 * (270 + l * 6)));
      ctx.lineTo(200 + 145 * Math.cos(Math.PI / 180 * (270 + l * 6)), 200 + 145 * Math.sin(Math.PI / 180 * (270 + l * 6)));
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "black";
      ctx.stroke();
    }

    for (var m = 0; m < 12; m++) {
      ctx.beginPath();
      ctx.moveTo(200 + 150 * Math.cos(Math.PI / 180 * (270 + m * 30)), 200 + 150 * Math.sin(Math.PI / 180 * (270 + m * 30)));
      ctx.lineTo(200 + 140 * Math.cos(Math.PI / 180 * (270 + m * 30)), 200 + 140 * Math.sin(Math.PI / 180 * (270 + m * 30)));
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  }

  function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2);
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  function draw() {
    drawBoard();
    drawScale();
    drawText();
    rotate();
  }

  draw();
}

/***/ }),

/***/ "./src/03_kazu.js":
/*!************************!*\
  !*** ./src/03_kazu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kazu": () => (/* binding */ kazu)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");


function kazu() {
  //初期設定
  var kurai = ["一", "十", "百", "千", "一万", "十万", "百万", "千万", "一億", "十億", "百億", "千億", "一兆"];
  var kurai_yomi = ["", "十", "百", "千", "万", "十", "百", "千", "億", "十", "百", "千", "兆"];
  var yomi = ["", "", "二", "三", "四", "五", "六", "七", "八", "九"];
  var color_data = ["rgb(255, 202, 191, 0.7)", "rgb(255, 255, 128, 0.7)", "rgb(77, 196, 255, 0.7)", "rgb(216, 242, 85, 0.7)", "rgb(255, 202, 128, 0.7)", "rgb(255, 202, 128, 0.7)", "rgb(255, 202, 128, 0.7)", "rgb(255, 202, 128, 0.7)", "rgb(201, 172, 230, 0.7)", "rgb(201, 172, 230, 0.7)", "rgb(201, 172, 230, 0.7)", "rgb(201, 172, 230, 0.7)", "rgb(255, 241, 0, 0.7)"]; //初期設定

  document.getElementById("sub").innerHTML = "\n  <div style=\"margin-left:10px;line-height:60px;display:flex;\">\n  <select id=\"select\" style=\"margin-left:10px\">\n  <option value=0>100\u307E\u3067\u306E\u304B\u305A</option>\n  <option value=1>1000\u307E\u3067\u306E\u6570</option>\n  <option value=2>\uFF11\u4E07\u307E\u3067\u306E\u6570</option>\n  <option value=3>\uFF11\u5104\u307E\u3067\u306E\u6570</option>\n  <option value=4>\uFF11\u5104\u3092\u3053\u3048\u308B\u6570</option>\n  </select>\n  <input type=\"number\" id=\"number_1\" style=\"margin-left:20px;width:100px;font-size:24px;\"/>\u3092\n  <input type=\"button\" value=\"\u30BB\u30C3\u30C8\" id=\"set\" style=\"height:40px;\" class=\"btn btn-primary\">\n  </div>\n  \n  ";
  document.getElementById("content").innerHTML = "\n \n  <table style=\"margin-left:10px\">\n    <tbody id=\"TBL\">\n    </tbody>\n  </table>\n  <hr>\n  <div style=\"display:flex;line-height:50px;\">\n  <select id=\"select_3\" style=\"margin-left:10px;text-align:right;width:100px;height:40px;\">\n  <option value=0>1\u3092</option>\n  <option value=1>10\u3092</option>\n  <option value=2>100\u3092</option>\n  <option value=3>1000\u3092</option>\n  <option value=4>\uFF11\u4E07\u3092</option>\n  </select>\n  <input type=\"number\" id=\"number_3\" max=\"100\" style=\"text-align:right;margin-left:20px;width:100px;height:40px;font-size:24px;\"/>\u3053,\n  <input type=\"button\" value=\"\u306A\u3089\u3079\u308B\" id=\"check_2\" style=\"margin:5px;width:80px;height:30px;\" class=\"btn btn-info\">\u3000\n  </div>\n  <hr>\n  <div style=\"display:flex;line-height:50px;\">\n    <select id=\"select_2\" style=\"margin-left:10px;width:100px;height:40px;text-align:right;\">\n      <option value=0>1\u3092</option>\n      <option value=1>10\u3092</option>\n      <option value=2>100\u3092</option>\n      <option value=3>1000\u3092</option>\n      <option value=4>\uFF11\u4E07\u3092</option>\n      <option value=5>10\u4E07\u3092</option>\n      <option value=6>100\u4E07\u3092</option>\n      <option value=7>1000\u4E07\u3092</option>\n      <option value=8>\uFF11\u5104\u3092</option>\n    </select>\n    <input type=\"number\" id=\"number_2\" max=\"999\" style=\"text-align:right;margin-left:20px;width:120px;height:40px;font-size:24px;\"/>\u3053\u3042\u3064\u3081\u305F\u304B\u305A\u306F,\n    <input type=\"button\" value=\"\u3057\u3089\u3079\u308B\" id=\"check\" style=\"margin:5px;width:80px;height:30px;\" class=\"btn btn-success\">\u3000\n    <div id=\"answer_1\" style=\"text-align:right;font-size:24px;min-width:40px\"></div>\u3000\u3067\u3059\u3002\n  </div>\n  <hr>\n  \n  ";
  var max_keta = 2;
  var num_arr = [];
  var num_length;
  var num;
  create_TBL(); //桁数の設定変更メニュー

  document.getElementById("select").addEventListener("change", function () {
    keta_change();
  }); //桁数の設定変更メニュー

  function keta_change() {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currenttime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
    var keta_data = [2, 3, 4, 8, 13];
    max_keta = keta_data[select.value];
    number_1.style.width = Math.floor(40 + 30 * max_keta) + "px";
    number_1.max = Math.pow(10, max_keta) - 1;
    create_TBL();
  }

  document.getElementById("set").addEventListener("click", function () {
    num = Number(number_1.value);

    if (num > 99999999) {
      select.selectedIndex = 4;
    } else if (num > 9999 && num <= 99999999) {
      select.selectedIndex = 3;
    } else if (num > 999 && num <= 9999) {
      select.selectedIndex = 2;
    } else if (num > 99 && num <= 999) {
      select.selectedIndex = 1;
    } else {
      select.selectedIndex = 0;
    }

    if (num > 9999999999999) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.currenttime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
      alert("数が大きすぎます！");
      number_1.value = "";
      return;
    }

    select.value = select.selectedIndex;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currenttime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
    keta_change();
    console.log(max_keta);
    write_TBL();
  });
  document.getElementById("check").addEventListener("click", function () {
    var bekijo = Number(select_2.value);
    var num_2 = Number(number_2.value);
    num = num_2 * Math.pow(10, bekijo);

    if (num > 99999999) {
      select.selectedIndex = 4;
    } else if (num > 9999 && num <= 99999999) {
      select.selectedIndex = 3;
    } else if (num > 999 && num <= 9999) {
      select.selectedIndex = 2;
    } else if (num > 99 && num <= 999) {
      select.selectedIndex = 1;
    } else {
      select.selectedIndex = 0;
    }

    keta_change();
    write_TBL();
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currenttime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    answer_1.innerHTML = String(num).replace(/(\d)(?=(\d\d\d\d)+(?!\d))/g, "$1,");
  });
  document.getElementById("check_2").addEventListener("click", function () {
    var bekijo = Number(select_3.value);
    var num_3 = Number(number_3.value);

    if (bekijo > 8) {
      select.selectedIndex = 4;
    } else if (bekijo > 4 && bekijo <= 8) {
      select.selectedIndex = 3;
    } else select.selectedIndex = bekijo;

    num = num_3 * Math.pow(10, bekijo);
    keta_change();

    if (num_3 > 100) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.currenttime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
      alert("ならべる数は，100こまでにしてください！");
      number_3.value = "";
      return;
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currenttime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
    write_TBL();
    put_TBL(num_3, bekijo);
  });

  function create_TBL() {
    TBL.innerHTML = "";

    for (var i = 0; i < 4; i++) {
      var tr = document.createElement("tr");

      for (var j = 0; j < max_keta; j++) {
        var index = max_keta - j - 1;
        var td = document.createElement("td");
        td.style.width = 72 / max_keta + "vw";
        td.style.height = "40px";
        td.style.textAlign = "center";

        switch (i) {
          case 0:
            td.style.fontSize = "18px";
            if (max_keta == 2) td.innerHTML = kurai[index] + "のくらい";else td.innerHTML = kurai[index] + "の位";
            break;

          case 1:
            td.style.height = "60px";
            td.style.fontSize = "36px";
            break;

          case 2:
            break;

          case 3:
            td.style.height = 72 / max_keta + "vh";
            td.classList.add("droppable-elem");
            td.setAttribute("droppable", "true");
            td.style.textAlign = "left";
            td.style.verticalAlign = "top";
            break;
        }

        td.style.backgroundColor = color_data[index];
        tr.appendChild(td);
      }

      TBL.appendChild(tr);
    }
  }

  function write_TBL() {
    for (var j = 0; j < max_keta; j++) {
      var index = max_keta - j - 1;
      if (max_keta == 2) TBL.rows[0].cells[j].innerHTML = kurai[index] + "のくらい";else TBL.rows[0].cells[j].innerHTML = kurai[index] + "の位";
      TBL.rows[1].cells[j].innerHTML = "";
      TBL.rows[2].cells[j].innerHTML = "";
      TBL.rows[3].cells[j].innerHTML = "";
      TBL.rows[3].cells[j].style.width = 72 / max_keta + "vw";
    }

    num_length = String(num).length;

    for (var i = 0; i < num_length; i++) {
      num_arr[num_length - i - 1] = Number(String(num).substr(i, 1)); //一の位から順に数字を挿入
    }

    for (var _j = 0; _j < num_length; _j++) {
      var index = max_keta - _j - 1;
      TBL.rows[1].cells[index].innerHTML = num_arr[_j];
      TBL.rows[2].cells[index].innerHTML = yomi[num_arr[_j]] + kurai_yomi[_j];

      if (_j == 0) {
        if (num_arr[_j] == 1) TBL.rows[2].cells[index].innerHTML = "一";
      } else if (_j == 4) {
        if (num_arr[_j] == 1) TBL.rows[2].cells[index].innerHTML = "一万";else if (num_arr[_j] == 0 && num_arr[_j + 1] == 0 && num_arr[_j + 2] == 0 && num_arr[_j + 3] == 0) TBL.rows[2].cells[index].innerHTML = "";else if (num_arr[_j] == 0) TBL.rows[2].cells[index].innerHTML = "万";
      } else if (_j == 8) {
        if (num_arr[_j] == 1) TBL.rows[2].cells[index].innerHTML = "一億";else if (num_arr[_j] == 0 && num_arr[_j + 1] == 0 && num_arr[_j + 2] == 0 && num_arr[_j + 3] == 0) TBL.rows[2].cells[index].innerHTML = "";else if (num_arr[_j] == 0) TBL.rows[2].cells[index].innerHTML = "億";
      } else if (_j == 12) {
        if (num_arr[_j] == 1) TBL.rows[2].cells[index].innerHTML = "一兆";
      } else {
        if (num_arr[_j] == 0) TBL.rows[2].cells[index].innerHTML = "";
      }
    }
  }

  function put_TBL(num_3, bekijo) {
    var img_data = ["ichi", "juu", "hyaku", "sen", "ichiman"];

    for (var j = 0; j < max_keta; j++) {
      var index = max_keta - j - 1;
      TBL.rows[0].cells[j].innerHTML = kurai[index];
    }

    if (num_3 > 9) {
      for (var i = 0; i < num_3; i++) {
        var img = document.createElement("img");
        (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.drag)(img);
        img.src = "./image/" + img_data[bekijo] + ".png";
        img.classList.add("m_" + img_data[bekijo], "img");
        img.style.margin = "2px";
        img.style.cursor = "pointer";
        TBL.rows[3].cells[max_keta - bekijo - 1].appendChild(img);
        TBL.rows[3].cells[max_keta - bekijo - 1].style.width = "50%";
      }
    } else {
      for (var _i = 0; _i < num_3; _i++) {
        var _img = document.createElement("img", "img");

        (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.drag)(_img);
        _img.src = "./image/" + img_data[bekijo] + ".png";

        _img.classList.add(img_data[bekijo]);

        _img.style.margin = "5px";
        _img.style.cursor = "pointer";
        TBL.rows[3].cells[max_keta - bekijo - 1].appendChild(_img);
      }
    }
  }
}

/***/ }),

/***/ "./src/04_ta_hissan.js":
/*!*****************************!*\
  !*** ./src/04_ta_hissan.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tahi": () => (/* binding */ tahi)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");

function tahi() {
  main_text_box.innerHTML = "たし算のひっ算"; //初期設定------------------------------------

  var hikasu = 123;
  var kasu = 456;
  var max_keta = 4;
  var wa;
  var kuriagari;
  var hikasu_arr = [];
  var kasu_arr = [];
  var wa_arr = [];
  var hikasu_keta;
  var kasu_keta;
  var wa_keta;
  document.getElementById("sub").innerHTML = "\n  <select id=\"tasu_type\" style=\"font-size:16px\">\n  <option value=\"1\">(\uFF12\u3051\u305F)+(\uFF12\u3051\u305F)</option>\n  <option value=\"2\">(\uFF13\u3051\u305F)+(\uFF12\u3051\u305F)</option>\n  <option value=\"3\">(\uFF12\u3051\u305F)+(\uFF13\u3051\u305F)</option>\n  <option value=\"4\">(\uFF13\u3051\u305F)+(\uFF13\u3051\u305F)</option>\n  </select>\n  <input type=\"button\" value=\"\u30AF\u30EA\u30A2\" id=\"clear\" class=\"btn btn-primary\"/>    \n  <input type=\"button\" value=\"\u3082\u3093\u3060\u3044\" id=\"mondai\" class=\"btn btn-success\"/>    \n  <input type=\"button\" value=\"\u30BB\u30C3\u30C8\" id=\"set\" class=\"btn btn-info\"/>    \n  <input type=\"button\" value=\"\u3053\u305F\u3048\" id=\"kotae\" class=\"btn btn-danger\"/>    \n  ";
  document.getElementById("content").innerHTML = "\n  <div id=\"shiki\" style=\"display:flex; margin:10px;\">\n    <input id=\"box1\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n    <div   id=\"box2\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">+</div>\n    <input id=\"box3\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n    <div   id=\"box4\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">=</div>\n    <input id=\"box5\" type=\"number\" class=\"keisan_shiki\"/>\n  </div>\n  <div  style=\"display:flex;margin:10px;\">\n    <table>\n    <tbody id=\"TBL\">\n    </tbodey>\n    </table>\n    <div id=\"field\">\n    </div>\n  </div>\n  "; //--各ボタンの設定-------------------------------------

  document.getElementById("clear").addEventListener("click", function () {
    return masu_clear();
  });
  document.getElementById("mondai").addEventListener("click", function () {
    return shutudai();
  });
  document.getElementById("set").addEventListener("click", function () {
    return mondai_set();
  });
  document.getElementById("kotae").addEventListener("click", function () {
    return show_answer();
  }); //式ボックスの設定------------------------------------

  box1.value = hikasu;
  box3.value = kasu;
  box5.addEventListener("change", function () {
    if (box5.value == wa) {
      box5.style.color = "red";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  }); //筆算マスの定義------------------------------------

  for (var i = 0; i < 4; i++) {
    var tr = document.createElement("tr");
    tr.style.maxHeight = "60px";

    for (var j = 0; j < max_keta; j++) {
      var td = document.createElement("td");
      td.style.border = "1px solid #333";
      td.style.width = "60px";
      td.style.maxWidth = "60px";
      td.style.height = "60px";
      td.style.maxHeight = "60px";
      td.style.fontSize = "30px";
      td.style.textAlign = "center"; // td.style.backgroundColor = "white";

      tr.appendChild(td);

      if (i == 0 || i == 3) {
        td.setAttribute("class", "droppable-elem");
        td.style.backgroundColor = "#4dc4ff";
      }
    }

    TBL.appendChild(tr);
    TBL.style.height = "240px";
  } //お金パレットの設置--------------------------------


  var TBL_2 = document.createElement("table");
  field.appendChild(TBL_2);

  for (var _i = 0; _i < 4; _i++) {
    var _tr = document.createElement("tr");

    _tr.style.maxHeight = "60px";

    for (var _j = 0; _j < max_keta; _j++) {
      var _td = document.createElement("td");

      _td.style.fontSize = "36px";
      _td.style.lineHeight = "24px";
      _td.style.border = "1px solid #333";
      _td.style.width = "150px";
      _td.style.maxWidth = "150px";
      _td.style.height = "60px";
      _td.style.maxHeight = "60px";

      if (_j == 0) {
        _td.style.width = "60px";
        _td.style.maxWidth = "60px";
      }

      _td.style.backgroundColor = "white";
      _td.style.flexDirection = "column";

      _tr.appendChild(_td);

      _td.setAttribute("class", "droppable-elem-2");

      if (_i == 0 || _i == 3) {
        _td.style.backgroundColor = "#4dc4ff";
      }
    }

    TBL_2.appendChild(_tr);
    TBL_2.style.height = "240px";
    TBL_2.style.marginLeft = "10px";
  } //数字パレットの設置


  var num_pallet = document.createElement("div");
  num_pallet.style.display = "flex";
  num_pallet.style.margin = "10px";
  num_pallet.setAttribute("id", "num_pallet");
  num_pallet.setAttribute("class", "droppable-elem");
  content.appendChild(num_pallet);
  hissan_set(hikasu, kasu);
  num_set(); //ここから関数-----------------------------------------------------
  //関数　マス内の数字をクリア

  function masu_clear() {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();

    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }

    TBL.rows[2].cells[0].innerHTML = "+";
    TBL.rows[2].cells[0].textAlign = "center";
    box1.value = "";
    box3.value = "";
    box5.value = "";
  } // 関数　問題をランダムに出す


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
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } // 関数　問題をセットする


  function mondai_set() {
    hikasu = box1.value;
    kasu = box3.value;
    hissan_set(hikasu, kasu);
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } // 関数　答えの表示


  function show_answer() {
    box5.value = wa;
    box5.style.color = "blue";
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.play(); //くり上がりの表示

    for (var col = 0; col < Math.min(hikasu_keta, kasu_keta); col++) {
      if (Math.floor(hikasu_arr[col] + kasu_arr[col] + kuriagari) > 9) {
        TBL.rows[0].cells[max_keta - col - 2].innerHTML = "1";
        kuriagari = 1;
        TBL.rows[0].cells[max_keta - col - 2].style.fontSize = "20px";
        TBL.rows[0].cells[max_keta - col - 2].style.color = "red";
        TBL.rows[0].cells[max_keta - col - 2].style.verticalAlign = "bottom";
      } else {
        kuriagari = 0;
      }
    } //筆算の答え表示


    for (var _col = 0; _col < wa_keta; _col++) {
      TBL.rows[3].cells[max_keta - _col - 1].innerHTML = wa_arr[_col];
    } //答えの表示の時，お金を並べ直すかは要検討

  } // 関数　答えの入力---------------


  function kotae_input() {
    hikasu = Math.floor(box1.value);
    kasu = Math.floor(box3.value);
    wa = Math.floor(hikasu + kasu);
    box5.value = Number(TBL.rows[3].cells[0].innerText) * 1000 + Number(TBL.rows[3].cells[1].innerText) * 100 + Number(TBL.rows[3].cells[2].innerText) * 10 + Number(TBL.rows[3].cells[3].innerText) * 1;

    if (box5.value == wa) {
      box5.style.color = "red";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  } //関数　筆算の描画---------------------


  function hissan_set(hikasu, kasu) {
    if (hikasu > 999 || kasu > 999 || hikasu < 0 || kasu < 0) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
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
    box5.value = ""; //数字を配列として代入

    hikasu_keta = String(hikasu).length;
    kasu_keta = String(kasu).length;
    wa_keta = String(wa).length;

    for (var _i2 = 0; _i2 < hikasu_keta; _i2++) {
      hikasu_arr[_i2] = Number(String(hikasu).charAt(hikasu_keta - _i2 - 1));
    }

    for (var _i3 = 0; _i3 < kasu_keta; _i3++) {
      kasu_arr[_i3] = Number(String(kasu).charAt(kasu_keta - _i3 - 1));
    }

    for (var _i4 = 0; _i4 < wa_keta; _i4++) {
      wa_arr[_i4] = Number(String(wa).charAt(wa_keta - _i4 - 1));
    }

    suuji_set();
    okane_set();
  } //マス内にお金を並べる-----------------------


  function okane_set() {
    //一度　マス内のお金をクリア
    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        TBL_2.rows[row].cells[col].innerHTML = "";
      }
    }

    var img_arr = ["ichien", "juuen", "hyakuen"];

    for (var _col2 = 0; _col2 < hikasu_keta; _col2++) {
      for (var _i5 = 0; _i5 < hikasu_arr[_col2]; _i5++) {
        var img = document.createElement("img");
        img.setAttribute("src", "./image/" + img_arr[_col2] + ".png");
        img.setAttribute("class", img_arr[_col2]);
        img.setAttribute("draggable", "true");
        img.style.width = "25px";
        img.style.height = "25px";
        img.style.cursor = "pointer";
        img.addEventListener("touchstart", touchStartEvent, false);
        img.addEventListener("touchmove", touchMoveEvent, false);
        img.addEventListener("touchend", touchEndEvent_2, false);
        TBL_2.rows[1].cells[max_keta - _col2 - 1].appendChild(img);
      }
    }

    for (var _col3 = 0; _col3 < kasu_keta; _col3++) {
      for (var _i6 = 0; _i6 < kasu_arr[_col3]; _i6++) {
        var _img = document.createElement("img");

        _img.setAttribute("src", "./image/" + img_arr[_col3] + ".png");

        _img.setAttribute("class", img_arr[_col3]);

        _img.setAttribute("draggable", "true");

        _img.style.width = "25px";
        _img.style.cursor = "pointer";
        _img.style.height = "25px";

        _img.addEventListener("touchstart", touchStartEvent, false);

        _img.addEventListener("touchmove", touchMoveEvent, false);

        _img.addEventListener("touchend", touchEndEvent_2, false);

        TBL_2.rows[2].cells[max_keta - _col3 - 1].appendChild(_img);
      }
    }

    if (hikasu < 100 & kasu < 100) {
      TBL_2.rows[2].cells[1].innerHTML = "<span style=\"text-align:right;\">+</span>";
    } else {
      TBL_2.rows[2].cells[0].innerHTML = "<span style=\"text-align:right;\">+</span>";
    }
  } //マス内に数字を書き込む-------------------


  function suuji_set() {
    //一度　マス内の数字をクリア
    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    } //マス内に数字を代入


    for (var _col4 = 0; _col4 < hikasu_keta; _col4++) {
      TBL.rows[1].cells[max_keta - _col4 - 1].innerHTML = hikasu_arr[_col4];
    }

    for (var _col5 = 0; _col5 < kasu_keta; _col5++) {
      TBL.rows[2].cells[max_keta - _col5 - 1].innerHTML = kasu_arr[_col5];
    }

    if (hikasu < 100 & kasu < 100) {
      TBL.rows[2].cells[1].innerHTML = "+";
    } else {
      TBL.rows[2].cells[0].innerHTML = "+";
    }
  } //関数　数字のセット


  function num_set() {
    for (var _i7 = 0; _i7 < 10; _i7++) {
      var div = document.createElement("div");
      div.innerHTML = _i7;
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
  } //マウスでのドラッグを可能にする。


  var dragged;
  document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target; // make it half transparent
  }, false);
  /* events fired on the drop targets */

  document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault(); // move dragged elem to the selected drop target

    if (event.target.className == "droppable-elem") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged); //数パレット内の数字を一旦消去

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

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  }, false); //ドラッグ開始の操作

  function touchStartEvent(event) {
    //タッチによる画面スクロールを止める
    event.preventDefault();
  } //ドラッグ中の操作


  function touchMoveEvent(event) {
    event.preventDefault(); //ドラッグ中のアイテムをカーソルの位置に追従

    var draggedElem = event.target;
    var touch = event.changedTouches[0];
    event.target.style.position = "fixed";
    event.target.style.top = touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2 + "px";
    event.target.style.left = touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2 + "px";
  } //ドラッグ終了後の操作


  function touchEndEvent(event) {
    event.preventDefault(); //ドラッグ中の操作のために変更していたスタイルを元に戻す

    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = ""; //ドロップした位置にあるドロップ可能なエレメントに親子付けする

    var touch = event.changedTouches[0]; //スクロール分を加味した座標に存在するエレメントを新しい親とする

    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className == "droppable-elem") {
      newParentElem.appendChild(droppedElem); //数パレット内の数字を一旦消去

      var ele = document.getElementById("num_pallet");

      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      num_set();
      kotae_input();
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  } //ドラッグ終了後の操作2


  function touchEndEvent_2(event) {
    event.preventDefault(); //ドラッグ中の操作のために変更していたスタイルを元に戻す

    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = ""; //ドロップした位置にあるドロップ可能なエレメントに親子付けする

    var touch = event.changedTouches[0]; //スクロール分を加味した座標に存在するエレメントを新しい親とする

    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className == "droppable-elem-2") {
      newParentElem.appendChild(droppedElem);
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
    img_kuriagari();
  } //くり上がりの操作


  function img_kuriagari() {
    var img_arr = ["ichien", "juuen", "hyakuen", "senen"];

    for (var _j2 = 0; _j2 < 3; _j2++) {
      var count = TBL_2.rows[3].cells[3 - _j2].getElementsByClassName(img_arr[_j2]).length;

      if (count > 9) {
        _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
        _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();

        for (var _i8 = 0; _i8 < 10; _i8++) {
          TBL_2.rows[3].cells[3 - _j2].getElementsByClassName(img_arr[_j2])[0].remove();
        }

        img_style(_j2);
      }
    }

    function img_style(j) {
      var img = document.createElement("img");
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

/***/ }),

/***/ "./src/05_hi_hissan.js":
/*!*****************************!*\
  !*** ./src/05_hi_hissan.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hihi": () => (/* binding */ hihi)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");

function hihi() {
  main_text_box.innerHTML = "ひき算のひっ算"; //初期設定------------------------------------

  var higensu = 456;
  var gensu = 123;
  var max_keta = 4;
  var sa;
  var kurisagari = 0;
  var higensu_arr = [];
  var gensu_arr = [];
  var sa_arr = [];
  var higensu_keta;
  var gensu_keta;
  var sa_keta;
  document.getElementById("sub").innerHTML = "\n  <select id=\"hiku_type\" style=\"font-size:16px\">\n  <option value=\"1\">(\uFF12\u3051\u305F)-(\uFF12\u3051\u305F)</option>\n  <option value=\"2\">(\uFF13\u3051\u305F)-(\uFF12\u3051\u305F)</option>\n  <option value=\"3\">(\uFF12\u3051\u305F)-(\uFF13\u3051\u305F)</option>\n  <option value=\"4\">(\uFF13\u3051\u305F)-(\uFF13\u3051\u305F)</option>\n  </select>\n  <input type=\"button\" value=\"\u30AF\u30EA\u30A2\" id=\"clear\" class=\"btn btn-primary\"/>    \n  <input type=\"button\" value=\"\u3082\u3093\u3060\u3044\" id=\"mondai\" class=\"btn btn-success\"/>    \n  <input type=\"button\" value=\"\u30BB\u30C3\u30C8\" id=\"set\" class=\"btn btn-info\"/>    \n  <input type=\"button\" value=\"\u3053\u305F\u3048\" id=\"kotae\" class=\"btn btn-danger\"/>    \n  ";
  document.getElementById("content").innerHTML = "\n  <div id=\"shiki\" style=\"display:flex; margin:10px;\">\n    <input id=\"box1\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n    <div   id=\"box2\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">-</div>\n    <input id=\"box3\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n    <div   id=\"box4\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">=</div>\n    <input id=\"box5\" type=\"number\" class=\"keisan_shiki\"/>\n  </div>\n  <div  style=\"display:flex;margin:10px;\">\n    <table>\n    <tbody id=\"TBL\">\n    </tbodey>\n    </table>\n    <div id=\"field\">\n    </div>\n  </div>\n  "; //--各ボタンの設定-------------------------------------

  document.getElementById("clear").addEventListener("click", function () {
    return masu_clear();
  });
  document.getElementById("mondai").addEventListener("click", function () {
    return shutudai();
  });
  document.getElementById("set").addEventListener("click", function () {
    return mondai_set();
  });
  document.getElementById("kotae").addEventListener("click", function () {
    return show_answer();
  }); //式ボックスの設定------------------------------------

  box1.value = higensu;
  box3.value = gensu;
  box5.addEventListener("change", function () {
    if (box5.value == wa) {
      box5.style.color = "red";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  }); //筆算マスの定義------------------------------------

  for (var i = 0; i < 4; i++) {
    var tr = document.createElement("tr");
    tr.style.maxHeight = "60px";

    for (var j = 0; j < max_keta; j++) {
      var td = document.createElement("td");
      td.style.border = "1px solid #333";
      td.style.width = "60px";
      td.style.maxWidth = "60px";
      td.style.height = "60px";
      td.style.maxHeight = "60px";
      td.style.fontSize = "30px";
      td.style.textAlign = "center"; // td.style.backgroundColor = "white";

      tr.appendChild(td);

      if (i == 0 || i == 3) {
        td.setAttribute("class", "droppable-elem");
        td.style.backgroundColor = "#4dc4ff";
      }
    }

    TBL.appendChild(tr);
    TBL.style.height = "240px";
  } //お金パレットの設置--------------------------------


  var TBL_2 = document.createElement("table");
  field.appendChild(TBL_2);

  for (var _i = 0; _i < 4; _i++) {
    var _tr = document.createElement("tr");

    _tr.style.maxHeight = "60px";

    for (var _j = 0; _j < max_keta; _j++) {
      var _td = document.createElement("td");

      _td.style.fontSize = "36px";
      _td.style.lineHeight = "24px";
      _td.style.border = "1px solid #333";
      _td.style.width = "150px";
      _td.style.maxWidth = "150px";
      _td.style.height = "60px";
      _td.style.maxHeight = "60px";

      if (_j == 0) {
        _td.style.width = "60px";
        _td.style.maxWidth = "60px";
      }

      _td.style.backgroundColor = "white";
      _td.style.flexDirection = "column";

      _tr.appendChild(_td);

      _td.setAttribute("class", "droppable-elem-2");

      if (_i == 0 || _i == 3) {
        _td.style.backgroundColor = "#4dc4ff";
      }
    }

    TBL_2.appendChild(_tr);
    TBL_2.style.height = "240px";
    TBL_2.style.marginLeft = "10px";
  } //数字パレットの設置


  var num_pallet = document.createElement("div");
  num_pallet.style.display = "flex";
  num_pallet.style.margin = "10px";
  num_pallet.setAttribute("id", "num_pallet");
  num_pallet.setAttribute("class", "droppable-elem");
  content.appendChild(num_pallet);
  hissan_set();
  num_set(); //ここから関数-----------------------------------------------------
  //関数　マス内の数字をクリア

  function masu_clear() {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();

    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }

    TBL.rows[2].cells[0].innerHTML = "-";
    box1.value = "";
    box3.value = "";
    box5.value = "";
  } // 関数　問題をランダムに出す


  function shutudai() {
    switch (hiku_type.value) {
      case "1":
        higensu = Math.floor(Math.random() * 90 + 10);
        gensu = Math.floor(Math.random() * (higensu - 10) + 10);
        break;

      case "2":
        higensu = Math.floor(Math.random() * 900 + 100);
        gensu = Math.floor(Math.random() * 90 + 10);
        break;

      case "3":
        higensu = Math.floor(Math.random() * 900 + 100);
        gensu = Math.floor(Math.random() * (higensu - 100) + 100);
        break;
    }

    box1.value = higensu;
    box3.value = gensu;
    hissan_set();
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } // 関数　問題をセットする


  function mondai_set() {
    hissan_set();
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } // 関数　答えの表示


  function show_answer() {
    box5.value = sa;
    box5.style.color = "blue";
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.play(); //くり下がりの表示

    for (var col = 0; col < Math.max(higensu_keta, gensu_keta) - 1; col++) {
      if (Math.floor(higensu_arr[col] - gensu_arr[col] - kurisagari) < 0) {
        TBL.rows[0].cells[max_keta - col - 1].innerHTML = "<span style='color:red;font-size:20px;vertical-align:bottom;'>" + "10" + "</span>";
        TBL.rows[1].cells[max_keta - col - 2].innerHTML = "<span class='naname1'>" + higensu_arr[col + 1] + "</span>" + "<span style='color:red;font-size:20px;vertical-align:top;'>" + Math.floor(higensu_arr[col + 1] - 1) + "</span>";
        kurisagari = 1;
      } else kurisagari = 0; //２回繰り下がり　かつ　被減数の10の位が0の時


      if (Math.floor(higensu_arr[0] - gensu_arr[0]) < 0 && higensu_arr[1] == 0) {
        TBL.rows[0].cells[2].innerHTML = "<span style='color:red;font-size:20px;vertical-align:bottom;'>" + "9" + "</span>";
        TBL.rows[1].cells[2].innerHTML = "0";
      }
    } //筆算の答え表示


    for (var _col = 0; _col < sa_keta; _col++) {
      TBL.rows[3].cells[max_keta - _col - 1].innerHTML = sa_arr[_col];
    } //答えの表示の時，お金を並べ直すかは要検討

  } // 関数　答えの入力---------------


  function kotae_input() {
    higensu = Math.floor(box1.value);
    gensu = Math.floor(box3.value);
    sa = Math.floor(higensu - gensu);
    box5.value = Number(TBL.rows[3].cells[0].innerText) * 1000 + Number(TBL.rows[3].cells[1].innerText) * 100 + Number(TBL.rows[3].cells[2].innerText) * 10 + Number(TBL.rows[3].cells[3].innerText) * 1;

    if (box5.value == sa) {
      box5.style.color = "red";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  } //関数　筆算の描画---------------------


  function hissan_set() {
    higensu = Math.floor(box1.value);
    gensu = Math.floor(box3.value);

    if (higensu > 999 || gensu > 999 || higensu < 0 || gensu < 0) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
      alert("数字は1～999までにしてください。");
      box1.value = "";
      box3.value = "";
      return;
    }

    if (higensu < gensu) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
      alert("引かれる数は，引く数よりも大きくしてください。");
      box1.value = "";
      box3.value = "";
      return;
    }

    box5.style.color = "black";
    sa = Math.floor(higensu - gensu);
    box1.value = higensu;
    box3.value = gensu;
    box5.value = ""; //数字を配列として代入

    higensu_keta = String(higensu).length;
    gensu_keta = String(gensu).length;
    sa_keta = String(sa).length;

    for (var _i2 = 0; _i2 < higensu_keta; _i2++) {
      higensu_arr[_i2] = Number(String(higensu).charAt(higensu_keta - _i2 - 1));
    }

    for (var _i3 = 0; _i3 < gensu_keta; _i3++) {
      gensu_arr[_i3] = Number(String(gensu).charAt(gensu_keta - _i3 - 1));
    }

    for (var _i4 = 0; _i4 < sa_keta; _i4++) {
      sa_arr[_i4] = Number(String(sa).charAt(sa_keta - _i4 - 1));
    }

    suuji_set();
    okane_set();
  } //マス内にお金を並べる-----------------------


  function okane_set() {
    //一度　マス内のお金をクリア
    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        TBL_2.rows[row].cells[col].innerHTML = "";
      }
    }

    var img_arr = ["ichien", "juuen", "hyakuen"];

    for (var _col2 = 0; _col2 < higensu_keta; _col2++) {
      for (var _i5 = 0; _i5 < higensu_arr[_col2]; _i5++) {
        var img = document.createElement("img");
        img.setAttribute("src", "./image/" + img_arr[_col2] + ".png");
        img.setAttribute("class", img_arr[_col2]);
        img.style.width = "25px";
        img.style.height = "25px";
        img.style.cursor = "pointer";
        img.addEventListener("touchstart", touchStartEvent, false);
        img.addEventListener("touchmove", touchMoveEvent, false);
        img.addEventListener("touchend", touchEndEvent_2, false);
        TBL_2.rows[1].cells[max_keta - _col2 - 1].appendChild(img);
      }
    }

    if (higensu < 100 & gensu < 100) {
      TBL_2.rows[2].cells[1].innerHTML = "-";
    } else {
      TBL_2.rows[2].cells[0].innerHTML = "-";
    }
  } //マス内に数字を書き込む-------------------


  function suuji_set() {
    //一度　マス内の数字をクリア
    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    } //マス内に数字を代入


    for (var _col3 = 0; _col3 < higensu_keta; _col3++) {
      TBL.rows[1].cells[max_keta - _col3 - 1].innerHTML = higensu_arr[_col3];
    }

    for (var _col4 = 0; _col4 < gensu_keta; _col4++) {
      TBL.rows[2].cells[max_keta - _col4 - 1].innerHTML = gensu_arr[_col4];
    }

    if (higensu < 100 & gensu < 100) {
      TBL.rows[2].cells[1].innerHTML = "-";
    } else {
      TBL.rows[2].cells[0].innerHTML = "-";
    }
  } //関数　数字のセット


  function num_set() {
    for (var _i6 = 0; _i6 < 11; _i6++) {
      var div = document.createElement("div");
      div.innerHTML = _i6;
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
  } //マウスでのドラッグを可能にする。


  var dragged;
  document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target; // make it half transparent
  }, false);
  /* events fired on the drop targets */

  document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault(); // move dragged elem to the selected drop target

    if (event.target.className == "droppable-elem") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged); //数パレット内の数字を一旦消去

      var ele = document.getElementById("num_pallet");

      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      num_set();
      kotae_input();
    } else if (event.target.className == "droppable-elem-2" && dragged.tagName == "IMG") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
      img_kurisagari();
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  }, false); //ドラッグ開始の操作

  function touchStartEvent(event) {
    //タッチによる画面スクロールを止める
    event.preventDefault();
  } //ドラッグ中の操作


  function touchMoveEvent(event) {
    event.preventDefault(); //ドラッグ中のアイテムをカーソルの位置に追従

    var draggedElem = event.target;
    var touch = event.changedTouches[0];
    event.target.style.position = "fixed";
    event.target.style.top = touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2 + "px";
    event.target.style.left = touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2 + "px";
  } //ドラッグ終了後の操作


  function touchEndEvent(event) {
    event.preventDefault(); //ドラッグ中の操作のために変更していたスタイルを元に戻す

    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = ""; //ドロップした位置にあるドロップ可能なエレメントに親子付けする

    var touch = event.changedTouches[0]; //スクロール分を加味した座標に存在するエレメントを新しい親とする

    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className == "droppable-elem") {
      newParentElem.appendChild(droppedElem); //数パレット内の数字を一旦消去

      var ele = document.getElementById("num_pallet");

      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      num_set();
      kotae_input();
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  } //ドラッグ終了後の操作2


  function touchEndEvent_2(event) {
    event.preventDefault(); //ドラッグ中の操作のために変更していたスタイルを元に戻す

    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = ""; //ドロップした位置にあるドロップ可能なエレメントに親子付けする

    var touch = event.changedTouches[0]; //スクロール分を加味した座標に存在するエレメントを新しい親とする

    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className == "droppable-elem-2") {
      newParentElem.appendChild(droppedElem);
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
    img_kurisagari();
  } //くり上がりの操作


  function img_kurisagari() {
    var img_arr = ["ichien", "juuen", "hyakuen"];

    for (var _j2 = 0; _j2 < 3; _j2++) {
      var count = TBL_2.rows[0].cells[3 - _j2].getElementsByClassName(img_arr[_j2 + 1]).length;

      if (count == 1) {
        _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
        _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();

        TBL_2.rows[0].cells[3 - _j2].getElementsByClassName(img_arr[_j2 + 1])[0].remove();

        img_style(_j2);
      }
    }

    function img_style(j) {
      for (var _i7 = 0; _i7 < 10; _i7++) {
        var img = document.createElement("img");
        img.setAttribute("src", "./image/" + img_arr[j] + ".png");
        img.setAttribute("class", img_arr[j]);
        img.style.width = "25px";
        img.style.height = "25px";
        img.addEventListener("touchstart", touchStartEvent, false);
        img.addEventListener("touchmove", touchMoveEvent, false);
        img.addEventListener("touchend", touchEndEvent_2, false);
        TBL_2.rows[0].cells[3 - j].appendChild(img);
      }
    }
  }
}

/***/ }),

/***/ "./src/06_kuku.js":
/*!************************!*\
  !*** ./src/06_kuku.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kuku": () => (/* binding */ kuku)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function kuku() {
  document.getElementById("sub").innerHTML = "\n  <select id=\"dan_menu\" class=\"form-select\" style=\"font-size:16px;\"></select>  \n  <select id=\"dan_type\" class=\"form-select\" style=\"font-size:16px;\"></select> \n  <input type=\"button\" value=\"\u30BB\u30C3\u30C8\" class=\"btn btn-primary\" id=\"set\" style=\"margin-top:10px;\">\n  <input type=\"button\" value=\"\u3064\u304E\" class=\"btn btn-success\" id=\"next\" style=\"margin-top:10px;\">\n  ";
  document.getElementById("content").innerHTML = "\n    <div class=\"YOMI\">\n      <div id=\"yomi\"></div>\n      <div id=\"yomi_kotae\"></div>\n    </div>\n    <div class=\"SHIKI\">\n      <div id=\"kuku_shiki\"></div>\n      <div id=\"kuku_shiki_kotae\"></div>\n    </div>\n    <div style=\"position:abslute;margin:0 0 10px 10px;height:30px;\">\n      <select id=\"color_val\"></select>  \n      <input type=\"button\" value=\"\u30EA\u30BB\u30C3\u30C8\" id=\"reset_btn\" class=\"btn btn-danger\"  style=\"height:30px;\">\n      <span>\u30D2\u30F3\u30C8\u300C\xD7\u300D\u3092\u304A\u3059\u3068\u305C\u3093\u3076\u306E\u6570\u5B57\u304C\u51FA\u308B\u3088</span> \n    </div>\n    <table style=\"margin-left:10px;\">\n      <tbody id=\"kuku_hyou\" >\n      </tbody>\n    </table>\n  ";
  var type_data = ["上がり九九", "下がり九九", "ばらばら"];
  var dan_menu = document.getElementById("dan_menu");
  var set = document.getElementById("set");
  var next = document.getElementById("next");
  var yomi = document.getElementById("yomi");
  var yomi_kotae = document.getElementById("yomi_kotae");
  var shiki = document.getElementById("kuku_shiki");
  var shiki_kotae = document.getElementById("kuku_shiki_kotae");

  for (var i = 1; i <= 9; i++) {
    var dan = document.createElement("option");
    dan.value = i;
    dan.textContent = i + "のだん";
    dan_menu.appendChild(dan);
  }

  for (var _i = 1; _i <= 3; _i++) {
    var type = document.createElement("option");
    type.value = _i;
    type.textContent = type_data[_i - 1];
    dan_type.appendChild(type);
  }

  set.addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
    var num = 0; //テキストクリア

    yomi.innerHTML = dan_menu.value + "のだんの";
    yomi_kotae.innerHTML = "れんしゅう";
    shiki.innerHTML = "";
    shiki_kotae.innerHTML = ""; // かけられる数のセット

    var hijousu = dan_menu.value; // かける数のセット

    var jousu = [];

    switch (dan_type.value) {
      case "1":
        jousu = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        break;

      case "2":
        jousu = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        break;

      case "3":
        var bara = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (var index = 0; index < 9; index++) {
          var _jousu;

          (_jousu = jousu).push.apply(_jousu, _toConsumableArray(bara.splice(Math.floor(Math.random() * bara.length), 1)));
        }

        break;
    }

    next.addEventListener("click", function () {
      num++;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();

      switch (num % 2) {
        case 1:
          yomi.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__.kukua[(hijousu - 1) * 9 + jousu[parseInt(num / 2)] - 1] + "　　";
          yomi_kotae.innerHTML = "";
          shiki.innerHTML = hijousu + "×" + jousu[parseInt(num / 2)] + "＝";
          shiki_kotae.innerHTML = "？";
          break;

        case 0:
          yomi.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__.kukua[(hijousu - 1) * 9 + jousu[parseInt(num / 2 - 1)] - 1] + "　　";
          yomi_kotae.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__.kukub[(hijousu - 1) * 9 + jousu[parseInt(num / 2 - 1)] - 1];
          shiki.innerHTML = hijousu + "×" + jousu[parseInt(num / 2 - 1)] + "＝";
          shiki_kotae.innerHTML = hijousu * jousu[parseInt(num / 2 - 1)];
          break;
      }

      if (num > 17) num = 0;
    });
  });
  _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.load();
  var Colors = ["white", "しろ", "pink", "ピンク", "yellow", "きいろ", "lightgreen", "みどり", "lightblue", "あお", "orange", "オレンジ", "lightpurple", "むらさき", "lightbrown", "ちゃいろ"];
  var div_color = "white";
  var TBL = document.getElementById("kuku_hyou");

  for (var _i2 = 1; _i2 <= 8; _i2++) {
    var Color = document.createElement("option");
    Color.value = _i2;
    Color.textContent = Colors[_i2 * 2 - 1];
    color_val.appendChild(Color);
  }

  document.getElementById("color_val").addEventListener("change", function () {
    div_color = Colors[color_val.value * 2 - 2];
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  });
  var flag, flag_col, flag_row, flag_ALL;
  document.getElementById("reset_btn").addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
    var result = window.confirm("ぬった　いろを　もとに　もどしますか？");

    if (result === true) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();

      for (var row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
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

  var _loop = function _loop(row) {
    var tr = document.createElement("tr");

    var _loop2 = function _loop2(col) {
      var td = document.createElement("td");
      td.setAttribute("class", "hyou");
      tr.appendChild(td);

      if (row == 0 && col != 0) {
        td.innerHTML = col;
        flag_col = false;
        td.addEventListener("click", function () {
          _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
          _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
          console.log(flag_col);

          if (flag_col == false) {
            for (var k = 1; k < 10; k++) {
              TBL.rows[k].cells[col].innerHTML = k * col;
            }

            flag_col = true;
          } else if (flag_col == true) {
            for (var _k = 1; _k < 10; _k++) {
              TBL.rows[_k].cells[col].innerHTML = "";
            }

            flag_col = false;
          }
        });
      }

      if (col == 0 && row != 0) {
        td.innerHTML = row;
        flag_row = false;
        td.addEventListener("click", function () {
          _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
          _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
          console.log(flag_row);

          if (flag_row == false) {
            for (var k = 1; k < 10; k++) {
              TBL.rows[row].cells[k].innerHTML = row * k;
            }

            flag_row = true;
          } else if (flag_row == true) {
            for (var _k2 = 1; _k2 < 10; _k2++) {
              TBL.rows[row].cells[_k2].innerHTML = "";
            }

            flag_row = false;
          }
        });
      } else if (row == 0 && col == 0) {
        td.innerHTML = "×";
        flag_ALL = false;
        td.addEventListener("click", function () {
          _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
          _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();

          if (flag_ALL == false) {
            for (var k = 1; k < 10; k++) {
              for (var l = 1; l < 10; l++) {
                TBL.rows[k].cells[l].innerHTML = k * l;
              }
            }

            flag_ALL = true;
          } else if (flag_ALL == true) {
            for (var _k3 = 1; _k3 < 10; _k3++) {
              for (var _l = 1; _l < 10; _l++) {
                TBL.rows[_k3].cells[_l].innerHTML = "";
              }
            }

            flag_ALL = false;
          }
        });
      }

      if (row != 0 && col != 0) {
        flag = false;
        td.style.color = "red";
        td.addEventListener("click", function () {
          _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
          _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();

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
    };

    for (var col = 0; col < 10; col++) {
      _loop2(col);
    }

    TBL.appendChild(tr);
  };

  for (var row = 0; row < 10; row++) {
    _loop(row);
  }
}

/***/ }),

/***/ "./src/07_kah1.js":
/*!************************!*\
  !*** ./src/07_kah1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kah1": () => (/* binding */ kah1)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");

function kah1() {
  main_text_box.innerHTML = "かけ算の筆算(1)"; //初期設定------------------------------------

  var hijousu = 123;
  var jousu = 4;
  var max_keta = 4;
  var seki;
  var kuriagari;
  var hijousu_arr = [];
  var jousu_arr = [];
  var seki_arr = [];
  var hijousu_keta;
  var jousu_keta;
  var seki_keta;
  document.getElementById("sub").innerHTML = "\n  <select id=\"tasu_type\" style=\"margin:10px;font-size:16px\">\n  <option value=\"1\">(\uFF12\u3051\u305F)\xD7(\uFF11\u3051\u305F)</option>\n  <option value=\"2\">(\uFF13\u3051\u305F)\xD7(\uFF11\u3051\u305F)</option>\n  </select>\n  <input type=\"button\" value=\"\u30AF\u30EA\u30A2\" id=\"clear\" class=\"btn btn-primary\"/>    \n  <input type=\"button\" value=\"\u3082\u3093\u3060\u3044\" id=\"mondai\" class=\"btn btn-success\"/>    \n  <input type=\"button\" value=\"\u30BB\u30C3\u30C8\" id=\"set\" class=\"btn btn-info\"/>    \n  <input type=\"button\" value=\"\u3053\u305F\u3048\" id=\"kotae\" class=\"btn btn-danger\"/>    \n  <input type=\"button\" value=\"\u30D2\u30F3\u30C8\" id=\"hint\" class=\"btn btn-secondary\"/>    \n  ";
  document.getElementById("content").innerHTML = "\n  <div style=\"display:flex; margin:10px;\">\n  <div id=\"shiki\" style=\"display:flex; margin:10px;\">\n  <input id=\"box1\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n  <div   id=\"box2\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">\xD7</div>\n  <input id=\"box3\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n  <div   id=\"box4\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">=</div>\n  <input id=\"box5\" type=\"number\" class=\"keisan_shiki\"/>\n  </div>\n  <input type=\"button\" value=\"1000\u304F\u308A\u4E0A\u304C\u308A\" id=\"kuriagari_1000\" class=\"btn btn-secondary\" style=\"width:100px;margin:5px;\"/>    \n  <input type=\"button\" value=\"100\u304F\u308A\u4E0A\u304C\u308A\" id=\"kuriagari_100\" class=\"btn btn-secondary\" style=\"width:100px;margin:5px;\"/>\n  <input type=\"button\" value=\"10\u304F\u308A\u4E0A\u304C\u308A\" id=\"kuriagari_10\" class=\"btn btn-secondary\" style=\"width:100px;margin:5px;\"/>    \n  </div>\n  <div  style=\"display:flex;margin:10px;\">\n  <div>\n    <table>\n    <tbody id=\"TBL\">\n    </tbodey>\n    </table>\n    </div>\n    <div>\n    <table style=\"margin-left:10px;\">\n    <tbody id=\"TBL_2\">\n    </tbodey>\n    </table>\n    </div>\n  </div>\n  <div id=\"kuku_hyou\">\n  </div>\n  "; //--各ボタンの設定-------------------------------------

  document.getElementById("clear").addEventListener("click", function () {
    return masu_clear();
  });
  document.getElementById("mondai").addEventListener("click", function () {
    return shutudai();
  });
  document.getElementById("set").addEventListener("click", function () {
    return mondai_set();
  });
  document.getElementById("kotae").addEventListener("click", function () {
    return show_answer();
  }); //式ボックスの設定------------------------------------

  box1.value = hijousu;
  box3.value = jousu;
  box5.addEventListener("change", function () {
    if (box5.value == seki) {
      box5.style.color = "red";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  });
  var kuriagari_1000 = document.getElementById("kuriagari_1000");
  kuriagari_1000.addEventListener("click", function () {
    return Kuriagari_1000();
  });
  var kuriagari_100 = document.getElementById("kuriagari_100");
  kuriagari_100.addEventListener("click", function () {
    return Kuriagari_100();
  });
  var kuriagari_10 = document.getElementById("kuriagari_10");
  kuriagari_10.addEventListener("click", function () {
    return Kuriagari_10();
  });
  var kuku_hyou = document.getElementById("kuku_hyou");
  var hint = document.getElementById("hint");
  hint.addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    kuku();
  }); //筆算マスの定義------------------------------------

  var TBL = document.getElementById("TBL");

  for (var i = 0; i < 4; i++) {
    var tr = document.createElement("tr");
    tr.style.maxHeight = "40px";

    if (i == 2) {
      tr.style.maxHeight = "20px";
      tr.setAttribute("class", "seki_kuriagari");
    }

    if (i == 3) {
      tr.setAttribute("class", "seki_kotae");
    }

    for (var j = 0; j < max_keta; j++) {
      var td = document.createElement("td");
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
  } //お金パレットの設置--------------------------------
  //こたえ　セット


  var TBL_2 = document.getElementById("TBL_2");

  for (var _i = 0; _i < 12; _i++) {
    var _tr = document.createElement("tr");

    _tr.style.maxHeight = "25px";

    for (var _j = 0; _j < max_keta; _j++) {
      var _td = document.createElement("td");

      if (_j == 0) {
        _td.style.border = "none";
        _td.style.width = "60px";
      } else {
        _td.style.border = "1px dotted #333";
        _td.style.width = "200px";
      }

      _td.style.height = "28px";
      _td.style.backgroundColor = "white";
      _td.style.flexDirection = "column";

      _tr.appendChild(_td);

      _td.setAttribute("class", "droppable-elem-2");

      if (_i == 0 || _i == 11) {
        _td.style.backgroundColor = "#4dc4ff";
      } else if (_i == 10) {
        _td.style.backgroundColor = "#fff100";
        _td.style.height = "56px";
      }
    }

    TBL_2.appendChild(_tr);
    TBL_2.style.border = "solid 1px #333";
    TBL_2.style.marginLeft = "10px";
    TBL_2.style.marginRight = "10px";
  } //数字パレットの設置


  var num_pallet = document.createElement("div");
  num_pallet.setAttribute("id", "num_pallet");
  num_pallet.setAttribute("class", "droppable-elem");
  num_pallet.style.marginLeft = "10px";
  content.appendChild(num_pallet);
  hissan_set();
  num_set(); //ここから関数-----------------------------------------------------
  //関数　マス内の数字をクリア

  function masu_clear() {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();

    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }

    TBL.rows[1].cells[0].innerHTML = "×";
    box1.value = "";
    box3.value = "";
    box5.value = "";
  } // 関数　問題をランダムに出す


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
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } // 関数　問題をセットする


  function mondai_set() {
    hijousu = box1.value;
    jousu = box3.value;
    hissan_set();
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } // 関数　答えの表示


  function show_answer() {
    box5.value = seki;
    box5.style.color = "blue";
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.play();
    kuriagari = 0; //くり上がりの表示

    for (var col = 0; col < hijousu_keta; col++) {
      if (Math.floor(hijousu_arr[col] * jousu + kuriagari) > 9) {
        kuriagari = Math.floor((hijousu_arr[col] * jousu + kuriagari) / 10);
        TBL.rows[2].cells[max_keta - col - 2].innerHTML = kuriagari;
        TBL.rows[2].cells[max_keta - col - 2].style.fontSize = "20px";
        TBL.rows[2].cells[max_keta - col - 2].style.color = "red";
        TBL.rows[2].cells[max_keta - col - 2].style.verticalAlign = "bottom";
      } else {
        kuriagari = 0;
      }
    } //筆算の答え表示


    for (var _col = 0; _col < seki_keta; _col++) {
      TBL.rows[3].cells[max_keta - _col - 1].innerHTML = seki_arr[_col];
    } //答えの表示の時，お金を並べ直すかは要検討

  } // 関数　答えの入力---------------


  function kotae_input() {
    hijousu = Math.floor(box1.value);
    jousu = Math.floor(box3.value);
    seki = Math.floor(hijousu * jousu);
    box5.value = Number(TBL.rows[3].cells[0].innerText) * 1000 + Number(TBL.rows[3].cells[1].innerText) * 100 + Number(TBL.rows[3].cells[2].innerText) * 10 + Number(TBL.rows[3].cells[3].innerText) * 1;

    if (box5.value == seki) {
      box5.style.color = "red";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  } //関数　筆算の描画---------------------


  function hissan_set() {
    if (hijousu > 999 || jousu > 9 || hijousu < 0 || jousu < 0) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
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
    box5.value = ""; //数字を配列として代入

    hijousu_keta = String(hijousu).length;
    jousu_keta = String(jousu).length;
    seki_keta = String(seki).length;
    hijousu_arr[2] = 0;

    for (var _i2 = 0; _i2 < hijousu_keta; _i2++) {
      hijousu_arr[_i2] = Number(String(hijousu).charAt(hijousu_keta - _i2 - 1));
    }

    for (var _i3 = 0; _i3 < jousu_keta; _i3++) {
      jousu_arr[_i3] = Number(String(jousu).charAt(jousu_keta - _i3 - 1));
    }

    for (var _i4 = 0; _i4 < seki_keta; _i4++) {
      seki_arr[_i4] = Number(String(seki).charAt(seki_keta - _i4 - 1));
    }

    suuji_set();
    okane_set();
  } //マス内にお金を並べる-----------------------


  function okane_set() {
    //一度　マス内のお金をクリア
    for (var row = 0; row < 12; row++) {
      for (var col = 0; col < 4; col++) {
        TBL_2.rows[row].cells[col].innerHTML = "";
      }
    }

    var img_arr = ["ichien", "juuen", "hyakuen"];

    for (var _col2 = 0; _col2 < hijousu_keta; _col2++) {
      TBL_2.rows[0].cells[3].innerHTML = "<img style=\"width:20px;height:20px;\" src=\"./image/ichien.png\" />" + "　が　(" + hijousu_arr[0] + "　×　" + jousu + ")　こ";
      TBL_2.rows[0].cells[2].innerHTML = "<img style=\"width:20px;height:20px;\" src=\"./image/juuen.png\" />" + "　が　(" + hijousu_arr[1] + "　×　" + jousu + ")　こ";
      TBL_2.rows[0].cells[1].innerHTML = "<img style=\"width:20px;height:20px;\" src=\"./image/hyakuen.png\" />" + "　が　(" + hijousu_arr[2] + "　×　" + jousu + ")　こ";

      for (var _i5 = 1; _i5 < jousu + 1; _i5++) {
        for (var _j2 = 0; _j2 < hijousu_arr[_col2]; _j2++) {
          var img = document.createElement("img");
          img.setAttribute("src", "./image/" + img_arr[_col2] + ".png");
          img.setAttribute("class", img_arr[_col2]);
          img.style.width = "20px";
          img.style.height = "20px";
          img.style.cursor = "pointer";
          img.addEventListener("touchstart", touchStartEvent, false);
          img.addEventListener("touchmove", touchMoveEvent, false);
          img.addEventListener("touchend", touchEndEvent_2, false);

          TBL_2.rows[_i5].cells[max_keta - _col2 - 1].appendChild(img);
        }
      }
    }
  } //マス内に数字を書き込む-------------------


  function suuji_set() {
    //一度　マス内の数字をクリア
    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    } //マス内に数字を代入


    for (var _col3 = 0; _col3 < hijousu_keta; _col3++) {
      TBL.rows[0].cells[max_keta - _col3 - 1].innerHTML = hijousu_arr[_col3];
    }

    for (var _col4 = 0; _col4 < jousu_keta; _col4++) {
      TBL.rows[1].cells[max_keta - _col4 - 1].innerHTML = jousu_arr[_col4];
    }

    if (hijousu < 100 & jousu < 100) {
      TBL.rows[1].cells[1].innerHTML = "×";
    } else {
      TBL.rows[1].cells[0].innerHTML = "×";
    }
  } //関数　数字のセット


  function num_set() {
    for (var _i6 = 0; _i6 < 10; _i6++) {
      var div = document.createElement("div");
      div.innerHTML = _i6;
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
  } //マウスでのドラッグを可能にする。


  var dragged;
  document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target; // make it half transparent
  }, false);
  /* events fired on the drop targets */

  document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault(); // move dragged elem to the selected drop target

    if (event.target.className == "droppable-elem") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged); //数パレット内の数字を一旦消去

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

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  }, false); //ドラッグ開始の操作

  function touchStartEvent(event) {
    //タッチによる画面スクロールを止める
    event.preventDefault();
  } //ドラッグ中の操作


  function touchMoveEvent(event) {
    event.preventDefault(); //ドラッグ中のアイテムをカーソルの位置に追従

    var draggedElem = event.target;
    var touch = event.changedTouches[0];
    event.target.style.position = "fixed";
    event.target.style.top = touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2 + "px";
    event.target.style.left = touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2 + "px";
  } //ドラッグ終了後の操作


  function touchEndEvent(event) {
    event.preventDefault(); //ドラッグ中の操作のために変更していたスタイルを元に戻す

    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = ""; //ドロップした位置にあるドロップ可能なエレメントに親子付けする

    var touch = event.changedTouches[0]; //スクロール分を加味した座標に存在するエレメントを新しい親とする

    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className == "droppable-elem") {
      newParentElem.appendChild(droppedElem); //数パレット内の数字を一旦消去

      var ele = document.getElementById("num_pallet");

      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      num_set();
      kotae_input();
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  } //ドラッグ終了後の操作2


  function touchEndEvent_2(event) {
    event.preventDefault(); //ドラッグ中の操作のために変更していたスタイルを元に戻す

    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = ""; //ドロップした位置にあるドロップ可能なエレメントに親子付けする

    var touch = event.changedTouches[0]; //スクロール分を加味した座標に存在するエレメントを新しい親とする

    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className == "droppable-elem-2") {
      newParentElem.appendChild(droppedElem);
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
    img_kuriagari();
  } //くり上がりの操作


  function Kuriagari_10() {
    var count = TBL_2.getElementsByClassName("ichien").length;

    if (count > 9) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    }

    while (count > 9) {
      for (var _i7 = 0; _i7 < 10; _i7++) {
        TBL_2.getElementsByClassName("ichien")[0].remove();
      }

      var _j3 = 0;
      img_style(_j3);
      count = count - 10;
    }
  }

  function Kuriagari_100() {
    var count = TBL_2.getElementsByClassName("juuen").length;

    if (count > 9) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    }

    while (count > 9) {
      for (var _i8 = 0; _i8 < 10; _i8++) {
        TBL_2.getElementsByClassName("juuen")[0].remove();
      }

      var _j4 = 1;
      img_style(_j4);
      count = count - 10;
    }
  }

  function Kuriagari_1000() {
    var count = TBL_2.getElementsByClassName("hyakuen").length;

    if (count > 9) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    }

    while (count > 9) {
      for (var _i9 = 0; _i9 < 10; _i9++) {
        TBL_2.getElementsByClassName("hyakuen")[0].remove();
      }

      var _j5 = 2;
      img_style(_j5);
      count = count - 10;
    }
  }

  function img_kuriagari() {
    var img_arr = ["ichien", "juuen", "hyakuen", "senen"];

    for (var _j6 = 0; _j6 < 3; _j6++) {
      var count = TBL_2.rows[10].cells[3 - _j6].getElementsByClassName(img_arr[_j6]).length;

      if (count > 9) {
        _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
        _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();

        for (var _i10 = 0; _i10 < 10; _i10++) {
          TBL_2.rows[10].cells[3 - _j6].getElementsByClassName(img_arr[_j6])[0].remove();
        }

        img_style(_j6);
      }
    }
  }

  function img_style(j) {
    var img_arr = ["ichien", "juuen", "hyakuen", "senen"];
    var img = document.createElement("img");
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
    var TBL_kuku = document.createElement("table");
    TBL_kuku.setAttribute("id", "kuku_hyou");
    TBL_kuku.style.textAlign = "center";
    TBL_kuku.style.position = "fixed";
    TBL_kuku.style.left = "100px";
    TBL_kuku.style.top = "130px";
    TBL_kuku.style.zIndex = 100;

    for (var _i11 = 0; _i11 < 10; _i11++) {
      var _tr2 = document.createElement("tr");

      for (var _j7 = 0; _j7 < 10; _j7++) {
        var _td2 = document.createElement("td");

        _td2.style.height = "20px";
        _td2.style.width = "20px";
        _td2.style.fontSize = "12px";
        _td2.style.color = "black";

        if (_i11 != 0 && _j7 !== 0) {
          _td2.innerText = Math.floor(_i11 * _j7);
          _td2.style.backgroundColor = "lightyellow";
        }

        if (_i11 == 0) {
          _td2.innerText = _j7;
          _td2.style.backgroundColor = "lightpink";
        }

        if (_j7 == 0) {
          _td2.innerText = _i11;
          _td2.style.backgroundColor = "lightblue";
        }

        if (_i11 == 0 && _j7 == 0) {
          _td2.innerText = "x";
        }

        _tr2.appendChild(_td2);
      }

      TBL_kuku.appendChild(_tr2);
    }

    kuku_hyou.appendChild(TBL_kuku);
    move(TBL_kuku);
  }
}

/***/ }),

/***/ "./src/08_kah2.js":
/*!************************!*\
  !*** ./src/08_kah2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kah2": () => (/* binding */ kah2)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _move_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move.js */ "./src/move.js");


function kah2() {
  main_text_box.innerHTML = "かけ算の筆算(2)"; //初期設定------------------------------------

  var hijousu = 123;
  var jousu = 45;
  var max_keta = 5;
  var seki;
  var bubun_seki1;
  var bubun_seki2;
  var kuriagari;
  var flag_hint1 = 0;
  var flag_hint2 = 0;
  var hijousu_arr = [];
  var jousu_arr = [];
  var seki_arr = [];
  var bubun_seki1_arr = [];
  var bubun_seki2_arr = [];
  var hijousu_keta;
  var jousu_keta;
  var seki_keta;
  var bubun_seki1_keta;
  var bubun_seki2_keta;
  document.getElementById("sub").innerHTML = "\n  <select id=\"tasu_type\" style=\"margin:10px;font-size:16px\">\n  <option value=\"1\">(\uFF12\u3051\u305F)\xD7(\uFF12\u3051\u305F)</option>\n  <option value=\"2\">(\uFF13\u3051\u305F)\xD7(\uFF12\u3051\u305F)</option>\n  </select>\n  <input type=\"button\" value=\"\u30AF\u30EA\u30A2\" id=\"clear\" class=\"btn btn-primary\"/>    \n  <input type=\"button\" value=\"\u3082\u3093\u3060\u3044\" id=\"mondai\" class=\"btn btn-success\"/>    \n  <input type=\"button\" value=\"\u30BB\u30C3\u30C8\" id=\"set\" class=\"btn btn-info\"/>    \n  <input type=\"button\" value=\"\u3053\u305F\u3048\" id=\"kotae\" class=\"btn btn-danger\"/>    \n  ";
  document.getElementById("content").innerHTML = "\n  <div style=\"display:flex; margin:10px;\">\n  <div id=\"shiki\" style=\"display:flex; margin:10px;\">\n  <input id=\"box1\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n  <div   id=\"box2\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">\xD7</div>\n  <input id=\"box3\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n  <div   id=\"box4\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">=</div>\n  <input id=\"box5\" type=\"number\" class=\"keisan_shiki\"/>\n  </div>\n  <input type=\"button\" value=\"\u30D2\u30F3\u30C8\uFF11\" id=\"hint_1\" class=\"btn btn-secondary\" style=\"width:100px;margin:5px;\"/>    \n  <input type=\"button\" value=\"\u30D2\u30F3\u30C8\uFF12\" id=\"hint_2\" class=\"btn btn-secondary\" style=\"width:100px;margin:5px;\"/>\n  <input type=\"button\" value=\"\u30D2\u30F3\u30C8\uFF13\" id=\"hint_3\" class=\"btn btn-secondary\" style=\"width:100px;margin:5px;\"/>    \n  </div>\n  <div  style=\"display:flex;margin:10px;\">\n    <div>\n      <table>\n      <tbody id=\"TBL\">\n      </tbodey>\n      </table>\n    </div>\n    <div style=\"margin-left:10px;\">\n      <div id=\"text_box_1\" style=\"width:350px;height:40px;font-size:30px;text-align:center;color:blue;position:absolute;left:350px;top:270px;background-color:#ffcabf;\">\n      </div>\n      <div id=\"text_box_2\" style=\"width:350px;height:40px;font-size:30px;text-align:center;color:blue;position:absolute;left:350px;top:350px;background-color:#ffff80;\">\n      </div>\n      <div id=\"kuku_hyou\">\n      </div>\n    </div>\n  </div>\n  "; //--各ボタンの設定-------------------------------------

  document.getElementById("clear").addEventListener("click", function () {
    return masu_clear();
  });
  document.getElementById("mondai").addEventListener("click", function () {
    return shutudai();
  });
  document.getElementById("set").addEventListener("click", function () {
    return mondai_set();
  });
  document.getElementById("kotae").addEventListener("click", function () {
    return show_answer();
  }); //式ボックスの設定------------------------------------

  box1.value = hijousu;
  box3.value = jousu;
  box5.addEventListener("change", function () {
    if (box5.value == seki) {
      box5.style.color = "red";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  });
  var hint_1 = document.getElementById("hint_1");
  hint_1.addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    bubun1();
  });
  var hint_2 = document.getElementById("hint_2");
  hint_2.addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    bubun2();
  });
  var kuku_hyou = document.getElementById("kuku_hyou");
  var hint_3 = document.getElementById("hint_3");
  hint_3.addEventListener("click", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    kuku();
  }); //筆算マスの定義------------------------------------

  var TBL = document.getElementById("TBL");

  for (var i = 0; i < 8; i++) {
    var tr = document.createElement("tr");
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

    for (var j = 0; j < max_keta; j++) {
      var td = document.createElement("td");
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

  var text_box_1 = document.getElementById("text_box_1");
  var text_box_2 = document.getElementById("text_box_2"); //数字パレットの設置

  var num_pallet = document.createElement("div");
  num_pallet.setAttribute("id", "num_pallet");
  num_pallet.setAttribute("class", "droppable-elem");
  num_pallet.style.marginLeft = "10px";
  content.appendChild(num_pallet);
  hissan_set();
  num_set(); //ここから関数-----------------------------------------------------
  //関数　マス内の数字をクリア

  function masu_clear() {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
    hint_clear();

    for (var row = 0; row < 8; row++) {
      for (var col = 0; col < 5; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    }

    TBL.rows[1].cells[1].innerHTML = "×";
    box1.value = "";
    box3.value = "";
    box5.value = "";
  }

  function hint_clear() {
    for (var row = 0; row < 8; row++) {
      for (var col = 0; col < 5; col++) {
        TBL.rows[row].cells[col].style.backgroundColor = "white";
        TBL.rows[row].cells[col].style.color = "black";
      }
    }

    text_box_1.innerHTML = "";
    text_box_2.innerHTML = "";
    TBL.rows[5].cells[4].innerHTML = "";
  } // 関数　問題をランダムに出す


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
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } // 関数　問題をセットする


  function mondai_set() {
    hijousu = box1.value;
    jousu = box3.value;
    hissan_set();
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } // 関数　答えの表示


  function show_answer() {
    box5.value = seki;
    box5.style.color = "blue";
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.play();
    kuriagari = 0; //くり上がり１の表示

    for (var col = 0; col < hijousu_keta; col++) {
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

    kuriagari = 0; //くり上がりの表示

    for (var _col = 0; _col < hijousu_keta; _col++) {
      if (Math.floor(hijousu_arr[_col] * jousu_arr[1] + kuriagari) > 9) {
        kuriagari = Math.floor((hijousu_arr[_col] * jousu_arr[1] + kuriagari) / 10);
        TBL.rows[4].cells[max_keta - _col - 3].innerHTML = kuriagari;
        TBL.rows[4].cells[max_keta - _col - 3].style.fontSize = "12px";
        TBL.rows[4].cells[max_keta - _col - 3].style.color = "gray";
        TBL.rows[4].cells[max_keta - _col - 3].style.verticalAlign = "bottom";
        TBL.rows[4].cells[max_keta - _col - 3].style.textAlign = "right";
      } else {
        kuriagari = 0;
      }
    }

    kuriagari = 0; //部分積１の表示

    for (var _col2 = 0; _col2 < bubun_seki1_keta; _col2++) {
      TBL.rows[3].cells[max_keta - _col2 - 1].innerHTML = bubun_seki1_arr[_col2];
    } //部分積２の表示


    for (var _col3 = 0; _col3 < bubun_seki2_keta; _col3++) {
      TBL.rows[5].cells[max_keta - _col3 - 2].innerHTML = bubun_seki2_arr[_col3];
    } //くり上がり答えの表示


    for (var _col4 = 0; _col4 < seki_keta; _col4++) {
      var sum = 0;
      sum = Math.floor(Number(TBL.rows[3].cells[max_keta - _col4 - 1].innerText) + Number(TBL.rows[5].cells[max_keta - _col4 - 1].innerText) + Number(TBL.rows[6].cells[max_keta - _col4 - 1].innerText));

      if (sum > 9) {
        kuriagari = 1;
        TBL.rows[6].cells[max_keta - _col4 - 2].innerHTML = kuriagari;
        TBL.rows[6].cells[max_keta - _col4 - 2].style.fontSize = "20px";
        TBL.rows[6].cells[max_keta - _col4 - 2].style.color = "red";
        TBL.rows[6].cells[max_keta - _col4 - 2].style.verticalAlign = "bottom";
      } else {
        kuriagari = 0;
      }
    } //筆算の答え表示


    for (var _col5 = 0; _col5 < seki_keta; _col5++) {
      TBL.rows[7].cells[max_keta - _col5 - 1].innerHTML = seki_arr[_col5];
    } //答えの表示の時，お金を並べ直すかは要検討

  } // 関数　答えの入力---------------


  function kotae_input() {
    hijousu = Math.floor(box1.value);
    jousu = Math.floor(box3.value);
    seki = Math.floor(hijousu * jousu);
    box5.value = Number(TBL.rows[7].cells[0].innerText) * 10000 + Number(TBL.rows[7].cells[1].innerText) * 1000 + Number(TBL.rows[7].cells[2].innerText) * 100 + Number(TBL.rows[7].cells[3].innerText) * 10 + Number(TBL.rows[7].cells[4].innerText) * 1;

    if (box5.value == seki) {
      box5.style.color = "red";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
    } else {
      box5.style.color = "black";
    }
  }

  function bubun1() {
    hint_clear();
    var data = [0, 2, 0, 3, 0, 4, 1, 4, 3, 1, 3, 2, 3, 3, 3, 4];

    if (flag_hint1 == 0) {
      for (var _i = 0; _i < data.length / 2; _i++) {
        TBL.rows[data[_i * 2]].cells[data[Math.floor(_i * 2 + 1)]].style.backgroundColor = "#ffcabf";
      }

      text_box_1.innerHTML = "".concat(hijousu, "\u3000\xD7\u3000").concat(jousu_arr[0]);
      flag_hint1 = 1;
    } else if (flag_hint1 == 1) {
      for (var _i2 = 0; _i2 < data.length / 2; _i2++) {
        TBL.rows[data[_i2 * 2]].cells[data[Math.floor(_i2 * 2 + 1)]].style.backgroundColor = "#ffcabf";
      }

      text_box_1.innerHTML = "".concat(hijousu, "\u3000\xD7\u3000").concat(jousu_arr[0], "\u3000\uFF1D\u3000").concat(hijousu * jousu_arr[0]);
      flag_hint1 = 2;
    } else if (flag_hint1 == 2) {
      flag_hint1 = 0;
    }
  }

  function bubun2() {
    hint_clear();
    var data = [0, 2, 0, 3, 0, 4, 1, 3, 5, 0, 5, 1, 5, 2, 5, 3];

    if (flag_hint2 == 0) {
      for (var _i3 = 0; _i3 < data.length / 2; _i3++) {
        TBL.rows[data[_i3 * 2]].cells[data[Math.floor(_i3 * 2 + 1)]].style.backgroundColor = "#ffff80";
      }

      TBL.rows[5].cells[4].innerHTML = "<span style=\"color:gray\">0</span>";
      text_box_2.innerHTML = "".concat(hijousu, "\u3000\xD7\u3000").concat(jousu_arr[1], "<span style=\"color:gray\">0</span>");
      flag_hint2 = 1;
    } else if (flag_hint2 == 1) {
      for (var _i4 = 0; _i4 < data.length / 2; _i4++) {
        TBL.rows[data[_i4 * 2]].cells[data[Math.floor(_i4 * 2 + 1)]].style.backgroundColor = "#ffff80";
        TBL.rows[5].cells[4].innerHTML = "<span style=\"color:gray\">0</span>";
        text_box_2.innerHTML = "".concat(hijousu, "\u3000\xD7\u3000").concat(jousu_arr[1], "<span style=\"color:gray\">0</span>\u3000\uFF1D\u3000").concat(hijousu * jousu_arr[1], "<span style=\"color:gray\">0</span>");
      }

      flag_hint2 = 2;
    } else if (flag_hint2 == 2) {
      flag_hint2 = 0;
    }
  } //関数　筆算の描画---------------------


  function hissan_set() {
    if (hijousu > 999 || jousu > 99 || hijousu < 0 || jousu < 0) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
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
    box5.value = ""; //数字を配列として代入

    hijousu_keta = String(hijousu).length;
    jousu_keta = String(jousu).length;
    seki_keta = String(seki).length;
    hijousu_arr[2] = 0;

    for (var _i5 = 0; _i5 < hijousu_keta; _i5++) {
      hijousu_arr[_i5] = Number(String(hijousu).charAt(hijousu_keta - _i5 - 1));
    }

    for (var _i6 = 0; _i6 < jousu_keta; _i6++) {
      jousu_arr[_i6] = Number(String(jousu).charAt(jousu_keta - _i6 - 1));
    }

    for (var _i7 = 0; _i7 < seki_keta; _i7++) {
      seki_arr[_i7] = Number(String(seki).charAt(seki_keta - _i7 - 1));
    }

    bubun_seki1 = Math.floor(hijousu * jousu_arr[0]);
    bubun_seki2 = Math.floor(hijousu * jousu_arr[1]);
    bubun_seki1_keta = String(bubun_seki1).length;
    bubun_seki2_keta = String(bubun_seki2).length;

    for (var _i8 = 0; _i8 < bubun_seki1_keta; _i8++) {
      bubun_seki1_arr[_i8] = Number(String(bubun_seki1).charAt(bubun_seki1_keta - _i8 - 1));
    }

    for (var _i9 = 0; _i9 < bubun_seki2_keta; _i9++) {
      bubun_seki2_arr[_i9] = Number(String(bubun_seki2).charAt(bubun_seki2_keta - _i9 - 1));
    }

    suuji_set();
  } //マス内に数字を書き込む-------------------


  function suuji_set() {
    //一度　マス内の数字をクリア
    for (var row = 0; row < 8; row++) {
      for (var col = 0; col < 5; col++) {
        TBL.rows[row].cells[col].innerHTML = "";
      }
    } //マス内に数字を代入


    for (var _col6 = 0; _col6 < hijousu_keta; _col6++) {
      TBL.rows[0].cells[max_keta - _col6 - 1].innerHTML = hijousu_arr[_col6];
    }

    for (var _col7 = 0; _col7 < jousu_keta; _col7++) {
      TBL.rows[1].cells[max_keta - _col7 - 1].innerHTML = jousu_arr[_col7];
    }

    if (hijousu < 100 & jousu < 100) {
      TBL.rows[1].cells[2].innerHTML = "×";
    } else {
      TBL.rows[1].cells[1].innerHTML = "×";
    }
  } //関数　数字のセット


  function num_set() {
    for (var _i10 = 0; _i10 < 10; _i10++) {
      var div = document.createElement("div");
      div.innerHTML = _i10;
      div.setAttribute("class", "draggable-elem");
      div.setAttribute("draggable", "true");
      div.addEventListener("touchstart", touchStartEvent, false);
      div.addEventListener("touchmove", touchMoveEvent, false);
      div.addEventListener("touchend", touchEndEvent, false);
      document.getElementById("num_pallet").appendChild(div);
    }
  } //マウスでのドラッグを可能にする。


  var dragged;
  document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target; // make it half transparent
  }, false);
  /* events fired on the drop targets */

  document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  document.addEventListener("drop", function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault(); // move dragged elem to the selected drop target

    if (event.target.className == "droppable-elem") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged); //数パレット内の数字を一旦消去

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

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  }, false); //ドラッグ開始の操作

  function touchStartEvent(event) {
    //タッチによる画面スクロールを止める
    event.preventDefault();
  } //ドラッグ中の操作


  function touchMoveEvent(event) {
    event.preventDefault(); //ドラッグ中のアイテムをカーソルの位置に追従

    var draggedElem = event.target;
    var touch = event.changedTouches[0];
    event.target.style.position = "fixed";
    event.target.style.top = touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2 + "px";
    event.target.style.left = touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2 + "px";
  } //ドラッグ終了後の操作


  function touchEndEvent(event) {
    event.preventDefault(); //ドラッグ中の操作のために変更していたスタイルを元に戻す

    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = ""; //ドロップした位置にあるドロップ可能なエレメントに親子付けする

    var touch = event.changedTouches[0]; //スクロール分を加味した座標に存在するエレメントを新しい親とする

    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className == "droppable-elem") {
      newParentElem.appendChild(droppedElem); //数パレット内の数字を一旦消去

      var ele = document.getElementById("num_pallet");

      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      num_set();
      kotae_input();
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
  }

  function kuku() {
    var TBL_kuku = document.createElement("table");
    TBL_kuku.setAttribute("id", "kuku_hyou");
    TBL_kuku.style.textAlign = "center";
    TBL_kuku.style.position = "fixed";
    TBL_kuku.style.left = "100px";
    TBL_kuku.style.top = "130px";
    TBL_kuku.style.zIndex = 100;

    for (var _i11 = 0; _i11 < 10; _i11++) {
      var _tr = document.createElement("tr");

      for (var _j = 0; _j < 10; _j++) {
        var _td = document.createElement("td");

        _td.style.height = "20px";
        _td.style.width = "20px";
        _td.style.fontSize = "12px";
        _td.style.color = "black";

        if (_i11 != 0 && _j !== 0) {
          _td.innerText = Math.floor(_i11 * _j);
          _td.style.backgroundColor = "#ffff80";
        }

        if (_i11 == 0) {
          _td.innerText = _j;
          _td.style.backgroundColor = "#ffcabf";
        }

        if (_j == 0) {
          _td.innerText = _i11;
          _td.style.backgroundColor = "lightblue";
        }

        if (_i11 == 0 && _j == 0) {
          _td.innerText = "x";
        }

        _tr.appendChild(_td);
      }

      TBL_kuku.appendChild(_tr);
    }

    kuku_hyou.appendChild(TBL_kuku);
    (0,_move_js__WEBPACK_IMPORTED_MODULE_1__.move)(TBL_kuku);
  }
}

/***/ }),

/***/ "./src/09_hyaku.js":
/*!*************************!*\
  !*** ./src/09_hyaku.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hyaku": () => (/* binding */ hyaku)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");


function hyaku() {
  main_text_box.innerHTML = "100までのかずのけいさん"; //初期設定------------------------------------

  document.getElementById("sub").innerHTML = "\n  <select id=\"tasu_type\" style=\"margin:10px;font-size:16px\">\n  <option value=\"1\">(\u25A1\u5341) \uFF0B (\u25A1\u5341)</option>\n  <option value=\"2\">(\u25A1\u5341) \uFF0D (\u25A1\u5341)</option>\n  <option value=\"3\">(\uFF12\u3051\u305F) \uFF0B (\uFF11\u3051\u305F)</option>\n  <option value=\"4\">(\uFF12\u3051\u305F) \uFF0D (\uFF11\u3051\u305F)</option>\n  </select>\n  <input type=\"button\" value=\"\u3082\u3093\u3060\u3044\" id=\"mondai\" class=\"btn btn-primary\"/>    \n  <input type=\"button\" value=\"\u305F\u3057\u304B\u3081\" id=\"check\" class=\"btn btn-danger\"/>    \n  <input type=\"button\" value=\"\u30D2\u30F3\u30C8\" id=\"hint\" class=\"btn btn-secondary\"/>    \n  <input type=\"button\" value=\"\u3053\u305F\u3048\u3092\u307F\u308B\" id=\"kotae\" style=\"width:100px;\" class=\"btn btn-info\"/>    \n  ";
  document.getElementById("content").innerHTML = "\n  <div id=\"shiki\" style=\"display:flex; margin:10px;\">\n    <input id=\"box1\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n    <div   id=\"box2\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">+</div>\n    <input id=\"box3\" type=\"number\" max=999 min=10 class=\"keisan_shiki\"/>\n    <div   id=\"box4\" type=\"number\" style=\"width:50px;text-align:center;font-size:36px;\" class=\"kigo\">=</div>\n    <input id=\"box5\" type=\"number\" class=\"keisan_shiki\"/>\n  </div>\n  <div  style=\"font-size:20px;display:flex;margin:10px;\">\n    <table style=\"width:600px;text-align:center;\">\n      <tbody id=\"TBL\" >\n      <tr style=\"height:50px;font-size:28px;\">\n        <td>\u5341\u306E\u304F\u3089\u3044</td>\n        <td>\u4E00\u306E\u304F\u3089\u3044</td>\n      </tr>\n      <tr style=\"height:50px;\">\n      <td>\u5341\u304C\u3000\u3053</td>\n      <td>\u4E00\u304C\u3000\u3053</td>\n      </tr>\n      <tr style=\"height:300px;\">\n      <td style=\"text-align:left;vertical-align:top;padding:10px;width:300px;\"class=\"droppable-elem\"></td>\n      <td style=\"text-align:left;vertical-align:top;padding:10px;width:140px;\"class=\"droppable-elem\"></td>\n      </tr>\n      </tbodey>\n      </table>\n      <div style=\"width:10px\"></div>\n      <div id=\"box_2\" style=\"background-color:lightgray;margin-top:100px;width:320px;height:320px;padding:10px;\" class=\"droppable-elem\"></div>\n      </div>\n      <div id=\"score\"></div>\n      "; //--各ボタンの設定-------------------------------------

  var val_1;
  var val_2;
  var val_3;
  var juu_no_kurai;
  var ichi_no_kurai;
  var hoka_no_box;
  var flag = false;
  box1.value = "";
  box3.value = "";
  document.getElementById("tasu_type").addEventListener("change", function () {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();

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
  document.getElementById("mondai").addEventListener("click", function () {
    return shutudai();
  });
  document.getElementById("check").addEventListener("click", function () {
    check_answer();
  });
  document.getElementById("hint").addEventListener("click", function () {
    return show_hint();
  });
  document.getElementById("kotae").addEventListener("click", function () {
    return show_answer();
  }); //関数　マス内の数字をクリア

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
  } // 関数　問題をランダムに出す


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
        val_2 = Math.floor(Math.random() * (val_3 % 10 - 1) + 1);
        val_1 = val_3 - val_2;
        juu_no_kurai = Math.floor(val_1 / 10);
        ichi_no_kurai = Math.floor(val_1 % 10);
        hoka_no_box = val_2;
        break;

      case "4":
        val_1 = Math.floor(Math.random() * 90 + 10);
        val_2 = Math.floor(Math.random() * (val_1 % 10 - 1) + 1);
        val_3 = val_1 - val_2;
        juu_no_kurai = Math.floor(val_1 / 10);
        ichi_no_kurai = Math.floor(val_1 % 10);
        hoka_no_box = 0;
        break;
    }

    box1.value = val_1;
    box3.value = val_2;
    box5.value = "";
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
    img_set();
  }

  function img_set() {
    for (var i = 0; i < juu_no_kurai; i++) {
      var img = document.createElement("img");
      img.style.cursor = "pointer";
      img.style.height = "100px";
      img.style.marginBottom = "5px";
      img.style.mixBlendMode = "multiply";
      img.src = "./image/juu.png";
      img.classList.add("Juu");
      TBL.rows[2].cells[0].appendChild(img);
      (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.drag)(img);
    }

    for (var _i = 0; _i < ichi_no_kurai; _i++) {
      var _img = document.createElement("img");

      _img.style.cursor = "pointer";
      _img.style.mixBlendMode = "multiply";
      _img.style.height = "100px";
      _img.style.marginBottom = "5px";
      _img.src = "./image/ichi.png";
      _img.style.marginRight = "10px";

      _img.classList.add("Ichi");

      TBL.rows[2].cells[1].appendChild(_img);
      (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.drag)(_img);
    }

    for (var _i2 = 0; _i2 < hoka_no_box; _i2++) {
      var _img2 = document.createElement("img");

      _img2.style.marginBottom = "5px";
      _img2.style.cursor = "pointer";
      _img2.style.mixBlendMode = "multiply";
      _img2.style.height = "100px";

      if (tasu_type.value == "1") {
        _img2.src = "./image/juu.png";

        _img2.classList.add("Juu");
      } else if (tasu_type.value == "3") {
        _img2.src = "./image/ichi.png";
        _img2.style.marginRight = "10px";

        _img2.classList.add("Ichi");
      }

      box_2.appendChild(_img2);
      (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.drag)(_img2);
    }
  } // 関数　答えの表示


  function show_answer() {
    box5.value = val_3;
    box5.style.color = "blue";
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.play();
  }

  function show_hint() {
    var cell1 = TBL.rows[2].cells[0];
    var cell2 = TBL.rows[2].cells[1];
    TBL.rows[1].cells[0].innerHTML = "\u5341\u304C\u3000<span style=\"font-size:32px;color:red;\">".concat(cell1.getElementsByClassName("Juu").length, "</span>\u3053");
    TBL.rows[1].cells[1].innerHTML = "\u4E00\u304C\u3000<span style=\"font-size:32px;color:red;\">".concat(cell2.getElementsByClassName("Ichi").length, "</span>\u3053");
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai2.play();
  }

  function check_answer() {
    if (box5.value == val_3) {
      box5.style.color = "red";
      score_up();
    } else {
      box5.style.color = "gray";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.alert.play();
    }
  }

  function score_up() {
    if (flag == true) {
      var img = document.createElement("img");

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
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play();
      score.appendChild(img);
    }
  }
}

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pi": () => (/* binding */ pi),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "seikai1": () => (/* binding */ seikai1),
/* harmony export */   "seikai2": () => (/* binding */ seikai2),
/* harmony export */   "reset": () => (/* binding */ reset),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "move1": () => (/* binding */ move1),
/* harmony export */   "move2": () => (/* binding */ move2),
/* harmony export */   "alert": () => (/* binding */ alert),
/* harmony export */   "kako": () => (/* binding */ kako),
/* harmony export */   "cancel": () => (/* binding */ cancel),
/* harmony export */   "cancel2": () => (/* binding */ cancel2),
/* harmony export */   "cancel3": () => (/* binding */ cancel3),
/* harmony export */   "open1": () => (/* binding */ open1),
/* harmony export */   "open2": () => (/* binding */ open2),
/* harmony export */   "shot": () => (/* binding */ shot),
/* harmony export */   "color_data": () => (/* binding */ color_data),
/* harmony export */   "kukua": () => (/* binding */ kukua),
/* harmony export */   "kukub": () => (/* binding */ kukub)
/* harmony export */ });
//コンテンツ共通の効果音の登録
var pi = new Howl({
  src: ["./Sounds/pi.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var set = new Howl({
  src: ["./Sounds/set.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var seikai1 = new Howl({
  src: ["./Sounds/seikai.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var seikai2 = new Howl({
  src: ["./Sounds/seikai2.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var reset = new Howl({
  src: ["./Sounds/reset.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var right = new Howl({
  src: ["./Sounds/right.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var move1 = new Howl({
  src: ["./Sounds/move1.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var move2 = new Howl({
  src: ["./Sounds/move2.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var alert = new Howl({
  src: ["./Sounds/alert.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var kako = new Howl({
  src: ["./Sounds/kako.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var cancel = new Howl({
  src: ["./Sounds/cancel.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var cancel2 = new Howl({
  src: ["./Sounds/cancel2.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var cancel3 = new Howl({
  src: ["./Sounds/cancel3.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var open1 = new Howl({
  src: ["./Sounds/open1.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var open2 = new Howl({
  src: ["./Sounds/open2.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var shot = new Howl({
  src: ["./Sounds/shot.mp3"],
  preload: true,
  // 事前ロード
  volume: 1.0,
  // 音量(0.0〜1.0の範囲で指定)
  loop: false,
  // ループ再生するか
  autoplay: false // 自動再生するか

});
var color_data = ["black", "#fff", "#ff4b00", "#fff100", "#03af7a", "#005aff", "#4dc4ff", "#ff8082", "#f6aa00", "#990099", "#804000", "#84919e", //背景色の設定
"", // white
"#fff", // black
"#ff4b00", // white
"#ffff80", // black
"#d8f255", // black
"#005aff", // white
"#4dc4ff", // black
"#ffcabf", // black
"#ffca80", // black
"#c9ace6", // black
"#a06000", // white
"#c8c8cb", // black
//背景に合わせた文字の色設定
"white", "black", "white", "black", "black", "white", "black", "black", "black", "black", "white", "black"];
var kukua = ["いんいち　が", "いんに　が", "いんさん　が", "いんし　が", "いんご　が", "いんろく　が", "いんしち　が", "いんはち　が", "いんく　が", "にいち　が", "ににん　が", "にさん　が", "にし　が", "にご", "にろく", "にしち", "にはち（には）", "にく", "さんいち　が", "さんに　が", "さざん　が", "さんし", "さんご", "さぶろく", "さんしち", "さんぱ", "さんく", "しいち　が", "しに　が", "しさん", "しし", "しご", "しろく", "ししち", "しは（しわ）", "しく", "ごいち　が", "ごに", "ごさん", "ごし", "ごご", "ごろく", "ごしち", "ごはち", "ごっく", "ろくいち　が", "ろくに", "ろくさん", "ろくし", "ろくご", "ろくろく", "ろくしち", "ろくは", "ろっく", "しちいち　が", "しちに", "しちさん", "しちし", "しちご", "しちろく", "しちしち", "しちは", "しちく", "はちいち　が", "はちに", "はちさん（はっさん）", "はちし（はっし）", "はちご", "はちろく", "はちしち", "はっぱ", "はっく", "くいち　が", "くに", "くさん", "くし", "くご", "くろく", "くしち", "くはち", "くく"];
var kukub = ["いち", "に", "さん", "し", "ご", "ろく", "しち", "はち", "く", "に", "し", "ろく", "はち", "じゅう", "じゅうに", "じゅうし", "じゅうろく", "じゅうはち", "さん", "ろく", "く", "じゅうに", "じゅうご", "じゅうはち", "にじゅういち", "にじゅうし", "にじゅうしち", "し", "はち", "じゅうに", "じゅうろく", "にじゅう", "にじゅうし", "にじゅうはち", "さんじゅうに", "さんじゅうろく", "ご", "じゅう", "じゅうご", "にじゅう", "にじゅうご", "さんじゅう", "さんじゅうご", "しじゅう", "しじゅうご", "ろく", "じゅうに", "じゅうはち", "にじゅうし", "さんじゅう", "さんじゅうろく", "しじゅうに", "しじゅうはち", "ごじゅうし", "しち", "じゅうし", "にじゅういち", "にじゅうはち", "さんじゅうご", "しじゅうに", "しじゅうく", "ごじゅうろく", "ろくじゅうさん", "はち", "じゅうろく", "にじゅうし", "さんじゅうに", "しじゅう", "しじゅうはち", "ごじゅうろく", "ろくじゅうし", "しちじゅうに", "く", "じゅうはち", "にじゅうしち", "さんじゅうろく", "しじゅうご", "ごじゅうし", "ろくじゅうさん", "しちじゅうに", "はちじゅういち"];

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drag": () => (/* binding */ drag)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");

function drag(event) {
  //マウスでのドラッグを可能にする。
  var dragged;
  var flag;
  var gomibako = document.getElementById("gomibako");
  document.addEventListener("dragstart", function (event) {
    // store a ref. on the dragged elem
    dragged = event.target; //asideパレットから直接ゴミ箱へ入れないように制御する。

    if (window.innerWidth - event.clientX > 200) flag = true;else flag = false;
  }, false);
  /* events fired on the draggable target */

  document.addEventListener("drag", function (event) {}, false);
  /* events fired on the drop targets */

  document.addEventListener("dragover", function (event) {
    // prevent default to allow drop
    event.preventDefault();
  }, false);
  document.addEventListener("drop", function (event) {
    event.preventDefault();

    if (event.target.className.match(/droppable-elem/) && flag == true) {
      if (event.target.id.match(/gomibako/)) {
        _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel.play();
      } else {
        _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
      }

      event.target.appendChild(dragged);
    }
  }, false); //ドラッグ開始の操作

  event.addEventListener("touchstart", function (event) {
    //タッチによる画面スクロールを止める
    event.preventDefault();
  }, false); //ドラッグ中の操作

  event.addEventListener("touchmove", function (event) {
    event.preventDefault(); //ドラッグ中のアイテムをカーソルの位置に追従

    var draggedElem = event.target;
    var touch = event.changedTouches[0];
    event.target.style.position = "fixed";
    event.target.style.top = touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2 + "px";
    event.target.style.left = touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2 + "px";
  }, false); //ドラッグ終了後の操作

  event.addEventListener("touchend", function (event) {
    event.preventDefault(); //ドラッグ中の操作のために変更していたスタイルを元に戻す

    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = ""; //ドロップした位置にあるドロップ可能なエレメントに親子付けする

    var touch = event.changedTouches[0]; //スクロール分を加味した座標に存在するエレメントを新しい親とする

    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className.match(/droppable-elem/)) {
      if (newParentElem.id.match(/gomibako/)) {
        _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel.play();
      } else {
        _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
      }

      newParentElem.appendChild(droppedElem);
    }
  }, false);
}

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "draw": () => (/* binding */ draw)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _move_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move.js */ "./src/move.js");


function draw() {
  //
  // JavaScriptのグローバル変数群
  //
  var canvas;
  var context;
  var wbound;
  var CANVAS_SIZE;
  var undoDataStack = [];
  var redoDataStack = [];
  var mouseDown = false;
  var touchDown = false;
  var x, y, stX, stY;
  $(function () {
    //
    // 画面読み込み時のロード処理
    //
    $(document).ready(function () {
      // キャンバスのサイズを設定
      // キャンバスの属性を設定
      canvas = document.getElementById("tegaki_canvas");
      canvas.width = window.innerWidth - 200;
      canvas.height = window.innerHeight - 70;
      CANVAS_SIZE = canvas.clientWidth; // 描画開始 → 描画中 → 描画終了

      canvas.addEventListener("mousedown", startDraw, false);
      canvas.addEventListener("mousemove", drawing, false);
      canvas.addEventListener("mouseup", endDraw, false);
      canvas.addEventListener("touchstart", touchStart, false);
      canvas.addEventListener("touchmove", touchMove, false);
      canvas.addEventListener("touchend", endTouch, false);
    }); //
    // undo
    //

    $("#undo").click(function () {
      if (undoDataStack.length <= 0) {
        return;
      }

      canvas = document.getElementById("tegaki_canvas");
      context = canvas.getContext("2d");
      redoDataStack.unshift(context.getImageData(0, 0, canvas.width, canvas.height));
      var imageData = undoDataStack.shift();
      context.putImageData(imageData, 0, 0);
      _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel.play();
    }); //
    // redo
    //

    $("#redo").click(function () {
      if (redoDataStack.length <= 0) {
        return;
      }

      canvas = document.getElementById("tegaki_canvas");
      context = canvas.getContext("2d");
      undoDataStack.unshift(context.getImageData(0, 0, canvas.width, canvas.height));
      var imageData = redoDataStack.shift();
      context.putImageData(imageData, 0, 0);
      _data_js__WEBPACK_IMPORTED_MODULE_0__.move2.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.move2.play();
    }); //
    // send
    //

    $("#send").click(function () {
      canvas = document.getElementById("tegaki_canvas");
      var png = canvas.toDataURL();
      var img = document.createElement("img");
      img.src = png;
      img.classList.add("tegaki");
      document.getElementById("content").appendChild(img);
      (0,_move_js__WEBPACK_IMPORTED_MODULE_1__.move)(img);
      canvas.style.pointerEvents = "none";
      canvas.style.background = "rgba(255, 255, 205, 0)";
      canvas.style.border = "border: none;";
      tegaki_img.style.backgroundColor = "white";
      main_text_box.innerHTML = "\u3058\u307F\u3071\u308C\u3002(\u5730\u5473\u306B\u52A9\u304B\u308B\u7B97\u6570\u30D1\u30EC\u30C3\u30C8)";
      main_text_box.style.color = "white";
      main_text_box.style.backgroundColor = "#005aff";
      _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.play();
    }); //
    // crear
    //

    $("#clear").click(function () {
      canvas = document.getElementById("tegaki_canvas");
      context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel3.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel3.play();
    });
  }); //
  // 描画開始
  //

  function startDraw(event) {
    // 描画前処理をおこないマウス押下状態にする。
    beforeDraw();
    mouseDown = true; // クライアント領域からマウス開始位置座標を取得

    wbound = event.target.getBoundingClientRect();
    stX = event.clientX - wbound.left;
    stY = event.clientY - wbound.top; // キャンバス情報を取得

    canvas = document.getElementById("tegaki_canvas");
    context = canvas.getContext("2d");
  }

  function touchStart(event) {
    // 描画前処理をおこないマウス押下状態にする。
    beforeDraw();
    touchDown = true; // クライアント領域からマウス開始位置座標を取得

    wbound = event.target.getBoundingClientRect();
    stX = event.touches[0].pageX - wbound.left;
    stY = event.touches[0].pageY - wbound.top; // キャンバス情報を取得

    canvas = document.getElementById("tegaki_canvas");
    context = canvas.getContext("2d");
  } //
  // 描画前処理
  //


  function beforeDraw() {
    // undo領域に描画情報を格納
    redoDataStack = [];
    canvas = document.getElementById("tegaki_canvas");
    context = canvas.getContext("2d");
    undoDataStack.unshift(context.getImageData(0, 0, canvas.width, canvas.height));
  } //
  // 描画中処理
  //


  function drawing(event) {
    // マウスボタンが押されていれば描画中と判断
    if (mouseDown) {
      x = event.clientX - wbound.left;
      y = event.clientY - wbound.top;
      draw(x, y);
    }
  }

  function touchMove(event) {
    // マウスボタンが押されていれば描画中と判断
    if (touchDown == true) {
      x = event.touches[0].pageX - wbound.left;
      y = event.touches[0].pageY - wbound.top;
      draw(x, y);
    }
  } //
  // 描画終了
  //


  function endDraw(event) {
    // マウスボタンが押されていれば描画中と判断
    if (mouseDown) {
      context.globalCompositeOperation = "source-over";
      context.setLineDash([]);
      mouseDown = false;
    }
  }

  function endTouch(event) {
    // マウスボタンが押されていれば描画中と判断
    if (touchDown) {
      context.globalCompositeOperation = "source-over";
      context.setLineDash([]);
      touchDown = false;
    }
  } //
  // 描画
  //


  function draw(x, y) {
    canvas = document.getElementById("tegaki_canvas");
    context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = _data_js__WEBPACK_IMPORTED_MODULE_0__.color_data[document.getElementById("color_box").value]; // context.strokeStyle = "black";

    context.fillStyle = _data_js__WEBPACK_IMPORTED_MODULE_0__.color_data[document.getElementById("color_box").value]; // context.fillStyle = "black";

    context.lineWidth = 2;
    context.lineCap = "round";
    context.globalCompositeOperation = "source-over";
    context.moveTo(stX, stY);
    context.lineTo(x, y);
    context.stroke();
    stX = x;
    stY = y;
  }
}

/***/ }),

/***/ "./src/move.js":
/*!*********************!*\
  !*** ./src/move.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "move": () => (/* binding */ move)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
 //ドラッグのみ

function move(event) {
  var moveable = new Moveable(document.body, {
    target: event,
    draggable: true,
    rotatable: false,
    resizable: false,
    warpable: false,
    origin: true,
    throttleDrag: 0,
    throttleRotate: 0,
    throttleResize: 0,
    renderDirections: ["n", "nw", "ne", "s", "se", "sw", "e", "w"],
    zoom: 1,
    padding: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  });
  var grid_check = document.getElementById("grid_check");

  if (grid_check.checked == true) {
    moveable.throttleDrag = 20;
    moveable.throttleRotate = 20;
    moveable.throttleResize = 20;
  } else {
    moveable.throttleDrag = 0;
    moveable.throttleRotate = 0;
    moveable.throttleResize = 0;
  }

  grid_check.addEventListener("click", function () {
    if (grid_check.checked == true) {
      moveable.throttleDrag = 20;
      moveable.throttleRotate = 20;
      moveable.throttleResize = 20;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
    } else {
      moveable.throttleDrag = 0;
      moveable.throttleRotate = 0;
      moveable.throttleResize = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.play();
    }
  });
  var gomibako = document.getElementById("gomibako");

  if (event.id == "gomibako" || event.id == "kuku_hyou") {
    moveable.origin = false;
  }

  if (event.className.match(/figure/)) {
    moveable.draggable = true;
    moveable.rotatable = true;
    moveable.resizable = true;
  }

  if (event.className.match(/text_box/)) {
    moveable.origin = false;
  }

  if (event.className.match(/tegaki/)) {
    moveable.origin = false;
    moveable.resizable = true;
  }

  moveable.on("drag", function (_ref) {
    var target = _ref.target,
        transform = _ref.transform;
    target.style.transform = transform;
  });
  moveable.on("dragEnd", function (e) {
    var clientRect = gomibako.getBoundingClientRect();
    var x = clientRect.left;
    var y = clientRect.top;
    var w = clientRect.width;
    var h = clientRect.height;

    if (e.clientX > x && e.clientX < Math.floor(x + w) && e.clientY > y && e.clientY < Math.floor(y + h)) {
      if (e.target.id != "gomibako") {
        e.target.parentNode.removeChild(e.target);
        _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel.currentTime = 0;
        _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel.play();
      }
    }
  });
  moveable.on("rotate", function (_ref2) {
    var target = _ref2.target,
        transform = _ref2.transform,
        dist = _ref2.dist;
    target.style.transform = transform;
  });
  moveable.on("resize", function (e) {
    e.target.style.width = "".concat(e.width, "px");
    e.target.style.height = "".concat(e.height, "px");
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.js */ "./src/draw.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");
/* harmony import */ var _move_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./move.js */ "./src/move.js");
/* harmony import */ var _00_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./00_grid.js */ "./src/00_grid.js");
/* harmony import */ var _01_suuzu_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./01_suuzu_block.js */ "./src/01_suuzu_block.js");
/* harmony import */ var _02_tokei_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./02_tokei.js */ "./src/02_tokei.js");
/* harmony import */ var _03_kazu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./03_kazu.js */ "./src/03_kazu.js");
/* harmony import */ var _04_ta_hissan_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./04_ta_hissan.js */ "./src/04_ta_hissan.js");
/* harmony import */ var _05_hi_hissan_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./05_hi_hissan.js */ "./src/05_hi_hissan.js");
/* harmony import */ var _06_kuku_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./06_kuku.js */ "./src/06_kuku.js");
/* harmony import */ var _07_kah1_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./07_kah1.js */ "./src/07_kah1.js");
/* harmony import */ var _08_kah2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./08_kah2.js */ "./src/08_kah2.js");
/* harmony import */ var _09_hyaku_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./09_hyaku.js */ "./src/09_hyaku.js");













 //先頭までスクロールする。

function noScroll(event) {
  event.preventDefault();
} // スクロール禁止(SP)


document.addEventListener("touchmove", noScroll, {
  passive: false
}); // スクロール禁止(PC)

document.addEventListener("mousewheel", noScroll, {
  passive: false
});
var grid_int = 80;
var b_color = "white";
var color = "black";
var ironuri = false;
var Target;
var Focus = footer_area;
var masu_check = document.getElementById("masu_check");
menu_change(); //メニューセット

calc_set(); //計算機

img_set(); //画像セット

(0,_draw_js__WEBPACK_IMPORTED_MODULE_1__.draw)(); //手書き入力の導入

(0,_move_js__WEBPACK_IMPORTED_MODULE_3__.move)(gomibako); //ごみ箱の設定
//コンテンツメニュー

menu_box.addEventListener("change", function () {
  menu_change();
}); //マスの大きさ

note_range.addEventListener("change", function () {
  range_change();
}); //マスの表示・非表示

masu_check.addEventListener("click", function () {
  masu_change();
}); //-----グリッドに図形を吸着するのは,moveable.jsの中で設定---
//図形描画

figure_box.addEventListener("click", function () {
  figure_box.selectedIndex = 0;
});
figure_box.addEventListener("change", function (event) {
  figure_draw();
}); //スクリーンキャプチャ

camera_img.addEventListener("click", function () {
  img_capture();
}); //白黒反転

UD.addEventListener("click", function () {
  reverse();
}); //手書き入力

tegaki_canvas.style.pointerEvents = "none";
tegaki_img.addEventListener("click", function () {
  tegaki();
}); //文字の色

color_box.addEventListener("change", function (event) {
  color_change(event);
}); //色塗り作成画面の設定

penki.addEventListener("click", function () {
  Ironuri();
}); //下地色

b_color_box.addEventListener("change", function (event) {
  b_color_change(event);
}); //入力文字送信

submit.addEventListener("click", function () {
  text_area_set();
}); //コンテンツメニューの切り替え--------------------------------

function menu_change() {
  _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  content.innerHTML = "";
  note_masu.innerHTML = "";

  switch (menu_box.selectedIndex) {
    case 0:
      main_text_box.innerHTML = "さんすうノート";
      masu_check.checked = true;
      var grid_int = 80;
      document.getElementById("sub").innerHTML = "";
      note_range.value = 0;
      (0,_00_grid_js__WEBPACK_IMPORTED_MODULE_4__.grid)(grid_int);
      break;

    case 1:
      main_text_box.innerHTML = "すうずぶろっく";
      masu_check.checked = true;
      note_range.value = 0;
      (0,_00_grid_js__WEBPACK_IMPORTED_MODULE_4__.grid)();
      (0,_01_suuzu_block_js__WEBPACK_IMPORTED_MODULE_5__.subl)(Focus);
      break;

    case 2:
      main_text_box.innerHTML = "とけい";
      masu_check.checked = false;
      (0,_02_tokei_js__WEBPACK_IMPORTED_MODULE_6__.tokei)();
      break;

    case 3:
      main_text_box.innerHTML = "100までのかずのけいさん";
      masu_check.checked = false;
      (0,_09_hyaku_js__WEBPACK_IMPORTED_MODULE_13__.hyaku)();
      break;

    case 4:
      main_text_box.innerHTML = "大きなかず";
      masu_check.checked = false;
      (0,_03_kazu_js__WEBPACK_IMPORTED_MODULE_7__.kazu)();
      break;

    case 5:
      main_text_box.innerHTML = "たし算のひっ算";
      masu_check.checked = false;
      (0,_04_ta_hissan_js__WEBPACK_IMPORTED_MODULE_8__.tahi)();
      break;

    case 6:
      main_text_box.innerHTML = "ひき算のひっ算";
      masu_check.checked = false;
      (0,_05_hi_hissan_js__WEBPACK_IMPORTED_MODULE_9__.hihi)();
      break;

    case 7:
      main_text_box.innerHTML = "九九のれんしゅう";
      masu_check.checked = false;
      (0,_06_kuku_js__WEBPACK_IMPORTED_MODULE_10__.kuku)();
      break;

    case 8:
      main_text_box.innerHTML = "かけ算の筆算(1)";
      masu_check.checked = false;
      (0,_07_kah1_js__WEBPACK_IMPORTED_MODULE_11__.kah1)();
      break;

    case 9:
      main_text_box.innerHTML = "かけ算の筆算(2)";
      masu_check.checked = false;
      (0,_08_kah2_js__WEBPACK_IMPORTED_MODULE_12__.kah2)();
      break;
  }
} //マスの大きさ


function range_change() {
  document.getElementById("masu_check").checked = true;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.kako.play();
  var range = [80, 60, 40, 20];
  grid_int = range[note_range.value];
  note_masu.innerHTML = "";
  (0,_00_grid_js__WEBPACK_IMPORTED_MODULE_4__.grid)(grid_int);
} //マスの表示・非表示


function masu_change() {
  if (masu_check.checked == true) {
    (0,_00_grid_js__WEBPACK_IMPORTED_MODULE_4__.grid)(grid_int, ironuri, Target);
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
  } else {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.play();
    note_masu.innerHTML = "";
  }
} //-----グリッドに図形を吸着するのは,moveable.jsの中で設定---
//図形描画選択メニューの作成


function figure_draw() {
  var figure_data = ["line", "line", "square", "triangle", "triangle", "triangle", "triangle", "triangle", "dia", "dia", "circle"];
  var img_data = ["", "", "", "triangle", "triangle2", "triangle3", "triangle4", "triangle", "dia1", "dia2", "circle"];
  _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
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
  (0,_move_js__WEBPACK_IMPORTED_MODULE_3__.move)(figure);
  figure.style.pointerEvents = "all";
} //スクリーンキャプチャ


function img_capture() {
  img_capture.backgroundColor = "#fff100";
  _data_js__WEBPACK_IMPORTED_MODULE_0__.shot.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.shot.play();
  html2canvas(document.body).then(function (canvas) {
    //. Canvas の内容を PNG 画像として取得
    var png = canvas.toDataURL("image/png");
    var png = canvas.toDataURL("image/png");
    png = png.replace(/^.*,/, ""); //. バイナリ変換

    var bin = atob(png);
    var buffer = new Uint8Array(bin.length);

    for (var i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }

    var blob = new Blob([buffer], {
      type: "image/png"
    });

    try {
      navigator.clipboard.write([new ClipboardItem({
        "image/png": blob
      })]);
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.seikai1.play(); // img_capture.backgroundColor = "#c8c8cb";

      alert("がめんは，クリップボードにコピーされました。(ctrl+Vキーなどではりつけができます。)");
    } catch (err) {
      console.log(err);
      alert("クリップボードにコピーされませんでした。");
    }
  });
} //白黒反転


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

  _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.reset.play();
} //手書き入力


function tegaki() {
  if (document.body.style.backgroundColor == "black") {
    color_box[2].selected = true;
  }

  if (tegaki_canvas.style.pointerEvents == "none") {
    tegaki_canvas.style.pointerEvents = "all";
    tegaki_img.style.backgroundColor = "#fff100";
    tegaki_canvas.style.background = "rgba(255, 255, 205, 0.5)";
    tegaki_canvas.style.border = "border: solid 1px #333;";
    main_text_box.innerHTML = "\u3066\u304C\u304D\u306B\u3085\u3046\u308A\u3087\u304F\u304C\u3067\u304D\u307E\u3059\u3002";
    switch_on(tegaki);
  } else {
    if (document.body.style.backgroundColor == "black") {
      color_box[0].selected = true;
    }

    tegaki_canvas.style.pointerEvents = "none";
    tegaki_img.style.backgroundColor = "#c8c8cb";
    tegaki_canvas.style.background = "rgba(255, 255, 205, 0)";
    tegaki_canvas.style.border = "border: none;";
    main_text_box.innerHTML = "\u3058\u307F\u30D1\u30EC\u3002<span style=\"font-size: 12px;\">(\u5730\u5473\u306B\u52A9\u304B\u308B\u7B97\u6570\u30D1\u30EC\u30C3\u30C8)</span>";
    main_text_box.color = "white";
    switch_off(tegaki);
  }
} // 文字の色


function color_change() {
  //フォントの選択
  var font_data = ["UD Digi Kyokasho N-B", "ヒラギノ明朝 ProN W6, HiraMinProN-W6, HG明朝E, ＭＳ Ｐ明朝,MS PMincho, MS 明朝, serif", "メイリオ,ヒラギノ角ゴ ProN,sans-serif"];
  font_select.addEventListener("change", function (event) {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
    document.body.style.fontFamily = font_data[Number(event.target.value)];
    document.body.style.fontWeight = 900;
  }); //メイン画面のカラー選択メニュー作成

  color_box.addEventListener("change", function (event) {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
    event.target.style.color = _data_js__WEBPACK_IMPORTED_MODULE_0__.color_data[Number(event.target.value)];
    text_input_box.style.color = color;
    document.getElementById("LED").style.color = color;

    if (event.target.value == "1") {
      event.target.style.color = "black";
      text_input_box.style.backgroundColor = "black";
    } else {
      text_input_box.style.backgroundColor = "white";
    }
  });
} //色塗り


function Ironuri() {
  if (ironuri == false) {
    ironuri = true;
    note_masu.pointerEvents = "all";
    b_color_box.style.backgroundColor = "#fff100";
    b_color_box.style.color = "red";
    b_color_box[2].selected = true;
    switch_on(penki);
    main_text_box.innerHTML = "\u30DE\u30B9\u306E \u3044\u308D\u306C\u308A\u304C\u3067\u304D\u307E\u3059\u3002";
    main_text_box.style.color = "white";
  } else {
    ironuri = false;
    note_masu.pointerEvents = "none";
    b_color_box.style.backgroundColor = "white";
    b_color_box[0].selected = true;
    switch_off(penki);
    main_text_box.innerHTML = "\u3058\u307F\u3071\u308C\u3002(\u5730\u5473\u306B\u52A9\u304B\u308B\u7B97\u6570\u30D1\u30EC\u30C3\u30C8)";
    return;
  }
} //下地色


function b_color_change(event) {
  _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
  b_color = _data_js__WEBPACK_IMPORTED_MODULE_0__.color_data[Number(event.target.value)];
  text_input_box.style.backgroundColor = b_color; // document.body.style.backgroundColor = b_color;

  event.target.style.color = _data_js__WEBPACK_IMPORTED_MODULE_0__.color_data[Number(event.target.value)];
  if (event.target.value == "13") event.target.style.color = "black";
} //入力文字送信


function text_area_set() {
  var div = document.createElement("div");
  div.innerHTML = text_input_box.value;
  div.classList.add("text_box");
  div.style.color = _data_js__WEBPACK_IMPORTED_MODULE_0__.color_data[color_box.value];
  div.style.backgroundColor = b_color;
  div.style.zIndex = 100;
  if (document.getElementById("color_box").value == "1") div.style.backgroundColor = "#333";
  div.style.width = div.innerText.length * 16 + "px";
  document.getElementById("content").appendChild(div);
  (0,_move_js__WEBPACK_IMPORTED_MODULE_3__.move)(div);
  _data_js__WEBPACK_IMPORTED_MODULE_0__.move2.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.move2.play();
} //その他


function switch_on(event) {
  event.style.backgroundColor = "#fff100";
  _data_js__WEBPACK_IMPORTED_MODULE_0__.set.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.set.play();
}

function switch_off(event) {
  event.style.backgroundColor = "#c8c8cb";
  _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.currentTime = 0;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.play();
} //計算機


function calc_set() {
  //電卓の画面作成
  var TBL_CALC = document.createElement("table");
  var TBL_CALC_data = ["", "%", "(", ")", "÷", "←", 7, 8, 9, "×", "C", 4, 5, 6, "-", "ON/OFF", 1, 2, 3, "+", "00", 0, ".", "=", "↩"];
  var SHIKI = "";
  var calc_swith = false;

  for (var i = 0; i < 5; i++) {
    var tr = document.createElement("tr");

    var _loop = function _loop(j) {
      var num = Math.floor(i * 5 + j);

      if (num == 0) {
        btn = document.createElement("img");
        btn.src = "./image/dentaku.png";
        btn.style.width = "38px";
        btn.style.height = "38px";
        btn.style.cursor = "pointer";
      } else {
        btn = document.createElement("button");
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

      btn.addEventListener("click", function () {
        if (calc_swith === true) {
          switch (num) {
            case 0:
            case 15:
              LED.style.border = "none";
              TBL_CALC.style.backgroundColor = "white";
              _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel2.play();
              calc_swith = false;
              return;

            case 10:
              LED.innerText = ""; //クリア

              SHIKI = ""; //クリア

              _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel3.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel3.play();
              break;

            case 1:
              LED.innerText += "%";
              SHIKI += "*0.01";
              _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
              break;

            case 4:
              LED.innerText += "÷";
              SHIKI += "/";
              _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
              break;

            case 5:
              LED.innerText = LED.innerText.slice(0, LED.innerText.length - 1);
              SHIKI = SHIKI.slice(0, LED.innerText.length - 1);
              _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel3.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.cancel3.play();
              break;

            case 9:
              LED.innerText += "×";
              SHIKI += "*";
              _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();

            case 23:
              LED.innerText += "=" + eval(SHIKI);
              _data_js__WEBPACK_IMPORTED_MODULE_0__.right.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.right.play();
              break;

            case 24:
              text_input_box.value = LED.innerText;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.right.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.right.play();
              break;

            default:
              LED.innerText += TBL_CALC_data[num];
              SHIKI += TBL_CALC_data[num];
              _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.currentTime = 0;
              _data_js__WEBPACK_IMPORTED_MODULE_0__.move1.play();
              break;
          }
        } else if (calc_swith === false) {
          if (num == 0 || num == 10 || num == 15) {
            LED.style.border = "solid 5px #fff100";
            TBL_CALC.style.backgroundColor = "#fff100";
            _data_js__WEBPACK_IMPORTED_MODULE_0__.open1.play();
            main_text_box.innerText = "でんたくで　けいさんが　できます。";
            calc_swith = true;
            return;
          } else {
            //ブロックの登録機能
            var div = document.createElement("div");
            div.classList.add("num", "art_num");
            div.setAttribute("draggable", "true");
            div.innerText = TBL_CALC_data[num];
            div.style.width = grid_int - 4 + "px";
            div.style.height = grid_int - 4 + "px";
            div.style.lineHeight = grid_int - 4 + "px";
            div.style.fontSize = grid_int / 2 - 2 + "px";
            footer_area.appendChild(div);
            _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
            _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
            (0,_drag_js__WEBPACK_IMPORTED_MODULE_2__.drag)(div);
          }
        }
      });
      tr.appendChild(btn);
    };

    for (var j = 0; j < 5; j++) {
      var btn;
      var btn;

      _loop(j);
    }

    TBL_CALC.appendChild(tr);
  }

  calc_pallet.appendChild(TBL_CALC);
} //画像配置


function img_set() {
  //画像データの登録
  var img_data = ["pink_block", "blue_block", "ohajiki_B", "ohajiki_P", "ichien", "go", "juuen", "gojuu", "hyakuen", "gohyaku", "ichi", "juu", "hyaku", "sen", "gosen", "ichiman"];
  var ele = document.getElementById("img_pallet");

  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }

  var _loop2 = function _loop2(i) {
    var img = document.createElement("img"); //画像をセット

    img.classList.add("img", img_data[i]);
    img.src = "./image/" + img_data[i] + ".png";
    img_pallet.appendChild(img);
    img.addEventListener("click", function () {
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
      _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.currentTime = 0;
      _data_js__WEBPACK_IMPORTED_MODULE_0__.pi.play();
      (0,_drag_js__WEBPACK_IMPORTED_MODULE_2__.drag)(img);
      img_set();
    });
  };

  for (var i = 0; i < img_data.length; i++) {
    _loop2(i);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1CLElBQXJDO0FBQ0QsT0FGTSxNQUVBLElBQUlZLENBQUMsR0FBRyxFQUFSLEVBQVk7QUFDakIyQyxRQUFBQSxHQUFHLENBQUNsRCxLQUFKLENBQVVhLEtBQVYsR0FBa0JsQixRQUFRLEdBQUcsQ0FBWCxHQUFlLENBQWYsR0FBbUIsSUFBckM7QUFDRCxPQUZNLE1BRUE7QUFDTHVELFFBQUFBLEdBQUcsQ0FBQ2xELEtBQUosQ0FBVWEsS0FBVixHQUFrQmxCLFFBQVEsR0FBRyxDQUFYLEdBQWUsSUFBakM7QUFDRDs7QUFDRHVELE1BQUFBLEdBQUcsQ0FBQ2xELEtBQUosQ0FBVWMsTUFBVixHQUFtQm5CLFFBQVEsR0FBRyxDQUFYLEdBQWUsSUFBbEM7QUFDQXVELE1BQUFBLEdBQUcsQ0FBQ2xELEtBQUosQ0FBVTJMLFVBQVYsR0FBdUJoTSxRQUFRLEdBQUcsQ0FBWCxHQUFlLElBQXRDO0FBQ0FxQyxNQUFBQSxXQUFXLENBQUNFLFdBQVosQ0FBd0JnQixHQUF4QjtBQUNBekQsTUFBQUEsb0RBQUEsR0FBc0IsQ0FBdEI7QUFDQUEsTUFBQUEsNkNBQUE7QUFDQTRDLE1BQUFBLDhDQUFJLENBQUNhLEdBQUQsQ0FBSjtBQUNBa1IsTUFBQUEsT0FBTztBQUNSLEtBakJEO0FBYmU7O0FBT2pCLE9BQUssSUFBSTdULENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0SixRQUFRLENBQUM5RyxNQUE3QixFQUFxQzlDLENBQUMsRUFBdEMsRUFBMEM7QUFBQSxXQUFqQ0EsQ0FBaUM7QUF3QnpDO0FBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ppbWlfcGFsbGV0Ly4vc3JjLzAwX2dyaWQuanMiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvLi9zcmMvMDFfc3V1enVfYmxvY2suanMiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvLi9zcmMvMDJfdG9rZWkuanMiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvLi9zcmMvMDNfa2F6dS5qcyIsIndlYnBhY2s6Ly9qaW1pX3BhbGxldC8uL3NyYy8wNF90YV9oaXNzYW4uanMiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvLi9zcmMvMDVfaGlfaGlzc2FuLmpzIiwid2VicGFjazovL2ppbWlfcGFsbGV0Ly4vc3JjLzA2X2t1a3UuanMiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvLi9zcmMvMDdfa2FoMS5qcyIsIndlYnBhY2s6Ly9qaW1pX3BhbGxldC8uL3NyYy8wOF9rYWgyLmpzIiwid2VicGFjazovL2ppbWlfcGFsbGV0Ly4vc3JjLzA5X2h5YWt1LmpzIiwid2VicGFjazovL2ppbWlfcGFsbGV0Ly4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvLi9zcmMvZHJhZy5qcyIsIndlYnBhY2s6Ly9qaW1pX3BhbGxldC8uL3NyYy9kcmF3LmpzIiwid2VicGFjazovL2ppbWlfcGFsbGV0Ly4vc3JjL21vdmUuanMiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ppbWlfcGFsbGV0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamltaV9wYWxsZXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qaW1pX3BhbGxldC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGdyaWQoZ3JpZF9pbnQpIHtcclxuICBjb25zdCBUQkwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgVEJMLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiTWFzdVwiKTtcclxuICBUQkwuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgdmFyIFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMjIwO1xyXG4gIHZhciBIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gMTQwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5mbG9vcihIZWlnaHQgLyBncmlkX2ludCk7IGkrKykge1xyXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IE1hdGguZmxvb3IoV2lkdGggLyBncmlkX2ludCk7IGorKykge1xyXG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgdGQuc3R5bGUud2lkdGggPSBncmlkX2ludCArIFwicHhcIjtcclxuICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gZ3JpZF9pbnQgKyBcInB4XCI7XHJcblxyXG4gICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgdGQuaW5uZXJUZXh0ID0gaiArIDE7XHJcbiAgICAgICAgdGQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0ZC5zdHlsZS5mb250U2l6ZSA9IGdyaWRfaW50IC8gMiArIFwicHhcIjtcclxuICAgICAgICB0ZC5zdHlsZS5jb2xvciA9IFwiIzRkYzRmZlwiO1xyXG4gICAgICB9XHJcbiAgICAgIHRkLnN0eWxlLmJvcmRlciA9IFwiZGFzaGVkICM0ZGM0ZmYgMXB4XCI7XHJcbiAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJkcm9wcGFibGUtZWxlbVwiKTtcclxuICAgICAgdGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAobm90ZV9tYXN1LnBvaW50ZXJFdmVudHMgPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGF0YS5jb2xvcl9kYXRhW2JfY29sb3JfYm94LnZhbHVlXTtcclxuICAgICAgICAgIGRhdGEua2Frby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICBkYXRhLmtha28ucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZm9vdGVyX2FyZWEuZmlyc3RDaGlsZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKGZvb3Rlcl9hcmVhLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGF0YS5waS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICBkYXRhLnBpLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9XHJcbiAgICBUQkwuYXBwZW5kQ2hpbGQodHIpO1xyXG4gIH1cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVfbWFzdVwiKS5hcHBlbmRDaGlsZChUQkwpO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xyXG5pbXBvcnQgeyBkcmFnIH0gZnJvbSBcIi4vZHJhZy5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YmwoRm9jdXMpIHtcclxuICAvL+WIneacn+ioreWumlxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViXCIpLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxyXG4gIDxpbnB1dCBpZD1cImNsZWFyXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44KK44Gb44Gj44GoXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIC8+XHJcbiAgPGlucHV0IGlkPVwiY2hlY2tcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjgZ/jgZfjgYvjgoFcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBpZD1cInNoaWtpXCI+44Gq44KJ44G544Gf44CA44GL44Ga44CAPGRpdiBpZD1cImNvdW50XCIvPjwvZGl2PuOBk1xyXG4gIDwvZGl2PlxyXG4gIGA7XHJcblxyXG4gIHZhciBncmlkX2ludCA9IDgwO1xyXG4gIGNvbnN0IHN1dXp1X2Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzdXV6dV9ibG9jay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1dXp1X2Jsb2NrXCIpO1xyXG4gIHN1dXp1X2Jsb2NrLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xyXG4gIHN1dXp1X2Jsb2NrLnN0eWxlLndpZHRoID0gZ3JpZF9pbnQgKiAxMCArIFwicHhcIjtcclxuICBzdXV6dV9ibG9jay5zdHlsZS5oZWlnaHQgPSBncmlkX2ludCAqIDUgKyBcInB4XCI7XHJcbiAgc3V1enVfYmxvY2suc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgc3V1enVfYmxvY2suc3R5bGUubGVmdCA9IFwiMTBweFwiO1xyXG4gIHN1dXp1X2Jsb2NrLnN0eWxlLnRvcCA9IFwiMTgwcHhcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHN1dXp1X2Jsb2NrKTtcclxuICBjcmVhdGVfYmxrKCk7XHJcbiAgcHV0X2JsaygpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnJlc2V0LmN1cnJlbnR0aW1lID0gMDtcclxuICAgIGRhdGEucmVzZXQucGxheSgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudFwiKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgcHV0X2JsaygpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRhdGEub3BlbjEuY3VycmVudHRpbWUgPSAwO1xyXG4gICAgZGF0YS5vcGVuMS5wbGF5KCk7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NlY3Rpb25fMSAuYmxrX2ltZ1wiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRcIikuaW5uZXJUZXh0ID0gTnVtYmVyKGltZy5sZW5ndGgpO1xyXG4gIH0pO1xyXG5cclxuICAvL+aVsOWbs+ODluODreODg+OCr+aeoOOBruaPj+eUu1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZV9ibGsoKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIHNlY3Rpb25fMS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlY3Rpb25fMVwiKTtcclxuICAgIHNlY3Rpb25fMS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBzZWN0aW9uXzEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZjZmMGNjXCI7XHJcbiAgICBjb25zdCBzZWN0aW9uXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIHNlY3Rpb25fMi5zdHlsZS5oZWlnaHQgPSBcIjgwcHhcIjtcclxuICAgIHNlY3Rpb25fMi5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6NTBweDtsaW5lLWhlaWdodDo4MHB4XCI+4oaRPC9zcGFuPmA7XHJcbiAgICBjb25zdCBzZWN0aW9uXzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICAgIHNlY3Rpb25fMy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlY3Rpb25fM1wiKTtcclxuICAgIHNlY3Rpb25fMy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBzZWN0aW9uXzMuc3R5bGUub3BhY2l0eSA9IDAuNztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICBjb25zdCBUQkwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgIFRCTC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlRCTF9cIiArIGkpO1xyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAyOyByb3crKykge1xyXG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDU7IGNvbCsrKSB7XHJcbiAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJibGtfdGRcIiwgXCJkcm9wcGFibGUtZWxlbVwiKTtcclxuICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVEJMLmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaSA8IDIpIHNlY3Rpb25fMS5hcHBlbmRDaGlsZChUQkwpO1xyXG4gICAgICBpZiAoaSA+PSAyKSBzZWN0aW9uXzMuYXBwZW5kQ2hpbGQoVEJMKTtcclxuICAgICAgc3V1enVfYmxvY2suYXBwZW5kQ2hpbGQoc2VjdGlvbl8xKTtcclxuICAgICAgc3V1enVfYmxvY2suYXBwZW5kQ2hpbGQoc2VjdGlvbl8yKTtcclxuICAgICAgc3V1enVfYmxvY2suYXBwZW5kQ2hpbGQoc2VjdGlvbl8zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v5pWw5Zuz44OW44Ot44OD44Kv44Gu6YWN572uXHJcbiAgZnVuY3Rpb24gcHV0X2JsaygpIHtcclxuICAgIHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxrX2ltZ1wiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibGtfaW1nXCIpWzBdLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgVEJMXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRCTF8yXCIpO1xyXG4gICAgY29uc3QgVEJMXzMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRCTF8zXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiYmxrX2ltZ1wiKTtcclxuICAgICAgZHJhZyhpbWcpO1xyXG4gICAgICBpZiAoaSA8IDEwKSB7XHJcbiAgICAgICAgaW1nLnNyYyA9IFwiLi9pbWFnZS9waW5rX2Jsb2NrLnBuZ1wiO1xyXG4gICAgICAgIFRCTF8yLnJvd3NbTWF0aC5mbG9vcihpIC8gNSldLmNlbGxzW2kgJSA1XS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPj0gMTApIHtcclxuICAgICAgICBpbWcuc3JjID0gXCIuL2ltYWdlL2JsdWVfYmxvY2sucG5nXCI7XHJcbiAgICAgICAgVEJMXzMucm93c1tNYXRoLmZsb29yKChpIC0gMTApIC8gNSldLmNlbGxzW2kgJSA1XS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRva2VpKCkge1xyXG4gIG1haW5fdGV4dF9ib3guaW5uZXJIVE1MID0gYOOBqOOBkeOBhOOAgDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjEycHg7XCI+44Go44GR44GE44Gu44Gv44KK44Gv44CA44K544Op44Kk44OA44O844Gn44GG44GU44GL44Gb44KL44KI44CCPC9zcGFuPmA7XHJcbiAgLy/liJ3mnJ/oqK3lrppcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YlwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnN0IHRva2VpX2JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQodG9rZWlfYm9hcmQpO1xyXG4gIHRva2VpX2JvYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9rZWlfYm9hcmRcIik7XHJcbiAgdG9rZWlfYm9hcmQuaW5uZXJIVE1MID0gYFxyXG4gIDxoMyBpZD1cImNsb2NrX3RleHRcIiBzdHlsZT1cIndpZHRoOiA2MDBweDsgaGVpZ2h0OiAyMHB4OyAgZm9udC1zaXplOiAxNnB4IHRleHQtYWxpZ246bGVmdDtcIj48L2gzPlxyXG4gIDxpbnB1dCBpZD1cInRva2VpX3JhbmdlXCIgdHlwZT1cInJhbmdlXCIgY2xhc3M9XCJjdXN0b20tcmFuZ2VcIiBtaW49MCBtYXg9NzIwIHN0ZXA9MTUgc3R5bGU9XCJoZWlnaHQ6NTBweDsgY3Vyc29yOnBvaW50ZXI7XCIvPlxyXG4gIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6NjAwcHg7XCI+XHJcbiAgICA8YnV0dG9uIGlkPVwiTWludXNcIj4tPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGlkPVwiUGx1c1wiPis8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LXdyYXA6d3JhcDtcIj5cclxuICA8Y2FudmFzIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgaWQ9XCJjbG9ja1wiIGNsYXNzPVwidGFyZ2V0XCI+PC9jYW52YXM+XHJcbiAgPGRpdj5cclxuICA8c2VsZWN0IG5hbWU9XCJ0eXBlXCIgaWQ9XCJ0eXBlXCIgc3R5bGU9XCJ3aWR0aDoxNTBweDttYXJnaW4tbGVmdDowcHg7XCI+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cIm5hbmppXCI+44Gq44KT44GY44Gq44KT44G144KT77yfPC9vcHRpb24+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cInVnb2thc3VcIj7jga/jgorjgpLjgYbjgZTjgYvjgZ3jgYY8L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICA8c2VsZWN0IG5hbWU9XCJtb2RlXCIgaWQ9XCJtb2RlXCIgc3R5bGU9XCJ3aWR0aDoxNTBweDttYXJnaW4tbGVmdDowcHg7XCI+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cImVhc3lcIj7jgoTjgZXjgZfjgYQ8L29wdGlvbj5cclxuICA8b3B0aW9uIHZhbHVlPVwibm9ybWFsXCI+44G144Gk44GGPC9vcHRpb24+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cImRpZmZpY3VsdFwiPuOCgOOBmuOBi+OBl+OBhDwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG4gIDxiciAvPlxyXG4gIDxoNCBpZD1cInNjb3JlXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7Zm9udC1mYW1pbHk6XCJCSVogVURHb3RoaWNcIjtcIj48L2g0PlxyXG4gIDxpbnB1dCBzdHlsZT1cIiAgZm9udC1zaXplOiAxMnB4O1xyXG53aWR0aDo4MHB4O21hcmdpbjoycHg7O21hcmdpbi1sZWZ0OjBweDtcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwicXVlc3Rpb25cIiB2YWx1ZT1cIuOCguOCk+OBoOOBhFwiPlxyXG4gIDxpbnB1dCBzdHlsZT1cIiAgZm9udC1zaXplOiAxMnB4O1xyXG53aWR0aDo4MHB4O21hcmdpbjoycHg7O1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgaWQ9XCJjaGVja1wiIHZhbHVlPVwi44GT44Gf44GI44GC44KP44GbXCI+XHJcbiAgPGlucHV0IHN0eWxlPVwiICBmb250LXNpemU6IDEycHg7XHJcbndpZHRoOjgwcHg7bWFyZ2luOjJweDs7XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIGlkPVwiYW5zXCIgdmFsdWU9XCLjgZPjgZ/jgYjjgpLjgb/jgotcIj5cclxuICA8YnIgLz5cclxuICA8aW5wdXQgc3R5bGU9XCIgIGZvbnQtc2l6ZTogMTJweDtcclxud2lkdGg6ODBweDttYXJnaW46MnB4OzttYXJnaW4tbGVmdDowcHg7XCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIGlkPVwiaGludDFcIiB2YWx1ZT1cIuODkuODs+ODiO+8kVwiLz5cclxuICA8aW5wdXQgc3R5bGU9XCIgIGZvbnQtc2l6ZTogMTJweDtcclxud2lkdGg6ODBweDttYXJnaW46MnB4OztcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgaWQ9XCJoaW50MlwiIHZhbHVlPVwi44OS44Oz44OI77ySXCIvPlxyXG4gIDxici8+XHJcbiAgPGlucHV0XHJcbiAgaWQ9XCJpbnB1dF9ob3Vyc1wiXHJcbiAgY2xhc3M9XCJpbnB1dC1ib3hcIlxyXG4gIHN0eWxlPVwibWFyZ2luOiAyMHB4XCJcclxuICB0eXBlPVwibnVtYmVyXCJcclxuICBtYXg9XCIxMlwiXHJcbiAgbWluPVwiMVwiXHJcbiAgLz7jgZhcclxuICA8aW5wdXRcclxuICBpZD1cImlucHV0X21pbnV0ZXNcIlxyXG4gIGNsYXNzPVwiaW5wdXQtYm94XCJcclxuICBzdHlsZT1cIm1hcmdpbjogMjBweFwiXHJcbiAgdHlwZT1cIm51bWJlclwiXHJcbiAgbWF4PVwiNTlcIlxyXG4gICAgICBtaW49XCIwXCJcclxuICAgICAgLz7jgbXjgpNcclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9ja1wiKTtcclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICBsZXQgaG91cnMgPSA2O1xyXG4gIGxldCBtaW51dGVzID0gMDtcclxuICBsZXQgc2NvcmVfZWFzeSA9IDA7XHJcbiAgbGV0IHNjb3JlX25vcm1hbCA9IDA7XHJcbiAgbGV0IHNjb3JlX2RpZmZpY3VsdCA9IDA7XHJcbiAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gIGxldCBoYXJpX2hvdXJzO1xyXG4gIGxldCBoYXJpX21pbnV0ZXM7XHJcbiAgbGV0IEhpbnQgPSBcIlwiO1xyXG4gIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR5cGVcIik7XHJcbiAgY29uc3QgbW9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kZVwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9ja190ZXh0XCIpO1xyXG4gIC8vIGNvbnN0IHRfcmFuZ2UgPSBuZXcgS2VlblNsaWRlcih0X3JhbmdlKTtcclxuICBjb25zdCB0b2tlaV9yYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9rZWlfcmFuZ2VcIik7XHJcbiAgdG9rZWlfcmFuZ2Uuc3RlcCA9IDE1O1xyXG4gIHRva2VpX3JhbmdlLnZhbHVlID0gMzYwO1xyXG4gIGNvbnN0IHBsdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBsdXNcIik7XHJcbiAgY29uc3QgbWludXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1pbnVzXCIpO1xyXG4gIGNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblwiKTtcclxuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVcIik7XHJcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrXCIpO1xyXG4gIGNvbnN0IGFucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zXCIpO1xyXG4gIGNvbnN0IGhpbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaW50MVwiKTtcclxuICBjb25zdCBoaW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGludDJcIik7XHJcbiAgY29uc3QgaW5wdXRfaG91cnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0X2hvdXJzXCIpO1xyXG4gIGNvbnN0IGlucHV0X21pbnV0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0X21pbnV0ZXNcIik7XHJcblxyXG4gIC8v5pmC6KiI44Gu6Yed44KS5YuV44GL44GZ44CCXHJcbiAgdG9rZWlfcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGhvdXJzID0gTWF0aC5mbG9vcih0b2tlaV9yYW5nZS52YWx1ZSAvIDYwKTtcclxuICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRva2VpX3JhbmdlLnZhbHVlICUgNjApO1xyXG4gICAgZGF0YS5rYWtvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEua2Frby5wbGF5KCk7XHJcbiAgICBkcmF3KCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v44OX44Op44K544Oc44K/44Oz44KS5oq844GX44Gf44Go44GNXHJcbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdG9rZWlfcmFuZ2UudmFsdWUgPSBNYXRoLmZsb29yKFxyXG4gICAgICBOdW1iZXIodG9rZWlfcmFuZ2UudmFsdWUpICsgTnVtYmVyKHRva2VpX3JhbmdlLnN0ZXApXHJcbiAgICApO1xyXG4gICAgaG91cnMgPSBNYXRoLmZsb29yKHRva2VpX3JhbmdlLnZhbHVlIC8gNjApO1xyXG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IodG9rZWlfcmFuZ2UudmFsdWUgJSA2MCk7XHJcbiAgICBkYXRhLmtha28uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5rYWtvLnBsYXkoKTtcclxuICAgIGRyYXcoKTtcclxuICB9KTtcclxuXHJcbiAgLy/jg57jgqTjg4rjgrnjg5zjgr/jg7PjgpLmirzjgZfjgZ/jgajjgY1cclxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdG9rZWlfcmFuZ2UudmFsdWUgPSB0b2tlaV9yYW5nZS52YWx1ZSAtIHRva2VpX3JhbmdlLnN0ZXA7XHJcbiAgICBob3VycyA9IE1hdGguZmxvb3IodG9rZWlfcmFuZ2UudmFsdWUgLyA2MCk7XHJcbiAgICBtaW51dGVzID0gTWF0aC5mbG9vcih0b2tlaV9yYW5nZS52YWx1ZSAlIDYwKTtcclxuICAgIGRhdGEua2Frby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLmtha28ucGxheSgpO1xyXG4gICAgZHJhdygpO1xyXG4gIH0pO1xyXG5cclxuICBzY29yZS5pbm5lckhUTUwgPSBg44GL44KT44Gf44KT44CA4oCmJHtzY29yZV9lYXN5feOCguOCk+OAgOOBm+OBhOOBi+OBhDxicj7jgbXjgaTjgYbjgIDjgIDigKYke3Njb3JlX25vcm1hbH3jgoLjgpPjgIDjgZvjgYTjgYvjgYQ8YnI+44KA44Ga44GL44GX44GE4oCmJHtzY29yZV9kaWZmaWN1bHR944KC44KT44CA44Gb44GE44GL44GEYDtcclxuXHJcbiAgcXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlucHV0X2hvdXJzLnZhbHVlID0gXCJcIjtcclxuICAgIGlucHV0X21pbnV0ZXMudmFsdWUgPSBcIlwiO1xyXG4gICAgdGV4dC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIGRhdGEuc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEuc2V0LnBsYXkoKTtcclxuICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgaG91cnMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMiArIDEpO1xyXG4gICAgc3dpdGNoIChtb2RlLnZhbHVlKSB7XHJcbiAgICAgIGNhc2UgXCJlYXN5XCI6XHJcbiAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICogMTU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpICogNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRpZmZpY3VsdFwiOlxyXG4gICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2MCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZS52YWx1ZSA9PSBcIm5hbmppXCIpIHtcclxuICAgICAgdGV4dC5pbm5lckhUTUwgPSBcIuOBquOCk+OBmOOAgOOBquOCk+OBteOCk++8n1wiO1xyXG4gICAgICBkcmF3KCk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUudmFsdWUgPT0gXCJ1Z29rYXN1XCIpIHtcclxuICAgICAgaGFyaV9ob3VycyA9IGhvdXJzO1xyXG4gICAgICBoYXJpX21pbnV0ZXMgPSBtaW51dGVzO1xyXG4gICAgICB0ZXh0LmlubmVySFRNTCA9IGAke2hhcmlfaG91cnN944GY44CAJHtoYXJpX21pbnV0ZXN944G144KT44Gr44CA44Gv44KK44KS44CA44GG44GU44GL44Gd44GGYDtcclxuICAgICAgaG91cnMgPSA2O1xyXG4gICAgICBtaW51dGVzID0gMDtcclxuICAgICAgdG9rZWlfcmFuZ2UudmFsdWUgPSAzNjA7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdHlwZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGRhdGEuc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEuc2V0LnBsYXkoKTtcclxuICB9KTtcclxuXHJcbiAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIHN3aXRjaCAobW9kZS52YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiZWFzeVwiOlxyXG4gICAgICAgIHRva2VpX3JhbmdlLnN0ZXAgPSAxNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIm5vcm1hbFwiOlxyXG4gICAgICAgIHRva2VpX3JhbmdlLnN0ZXAgPSA1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZGlmZmljdWx0XCI6XHJcbiAgICAgICAgdG9rZWlfcmFuZ2Uuc3RlcCA9IDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBkYXRhLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgfSk7XHJcblxyXG4gIGhpbnQxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgICBpZiAoSGludCA9PSBcImhpbnQxXCIpIHtcclxuICAgICAgSGludCA9IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBIaW50ID0gXCJoaW50MVwiO1xyXG4gICAgfVxyXG4gICAgZHJhdygpO1xyXG4gIH0pO1xyXG5cclxuICBoaW50Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZXQucGxheSgpO1xyXG4gICAgaWYgKEhpbnQgPT0gXCJoaW50MlwiKSB7XHJcbiAgICAgIEhpbnQgPSBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgSGludCA9IFwiaGludDJcIjtcclxuICAgIH1cclxuICAgIGRyYXcoKTtcclxuICB9KTtcclxuXHJcbiAgaW5wdXRfaG91cnMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnBpLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucGkucGxheSgpO1xyXG4gIH0pO1xyXG5cclxuICBpbnB1dF9taW51dGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgZGF0YS5waS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnBpLnBsYXkoKTtcclxuICB9KTtcclxuXHJcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChob3VycyA9PSAwKSBob3VycyA9IDEyO1xyXG4gICAgaWYgKHR5cGUudmFsdWUgPT0gXCJuYW5qaVwiKSB7XHJcbiAgICAgIHZhciBhbnN3ZXJfaG91cnMgPSBpbnB1dF9ob3Vycy52YWx1ZTtcclxuICAgICAgaWYgKGlucHV0X2hvdXJzLnZhbHVlID09IDApIGlucHV0X2hvdXJzLnZhbHVlID0gMTI7XHJcbiAgICAgIHZhciBhbnN3ZXJfbWludXRlcyA9IGlucHV0X21pbnV0ZXMudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUudmFsdWUgPT0gXCJ1Z29rYXN1XCIpIHtcclxuICAgICAgaG91cnMgPSBoYXJpX2hvdXJzO1xyXG4gICAgICBtaW51dGVzID0gaGFyaV9taW51dGVzO1xyXG4gICAgICB2YXIgYW5zd2VyX2hvdXJzID0gTWF0aC5mbG9vcih0b2tlaV9yYW5nZS52YWx1ZSAvIDYwKTtcclxuICAgICAgaWYgKGFuc3dlcl9ob3VycyA9PSAwKSBhbnN3ZXJfaG91cnMgPSAxMjtcclxuICAgICAgdmFyIGFuc3dlcl9taW51dGVzID0gTWF0aC5mbG9vcih0b2tlaV9yYW5nZS52YWx1ZSAlIDYwKTtcclxuICAgIH1cclxuICAgIGlmIChob3VycyA9PSBhbnN3ZXJfaG91cnMgJiYgbWludXRlcyA9PSBhbnN3ZXJfbWludXRlcyAmJiBmbGFnID09IHRydWUpIHtcclxuICAgICAgZGF0YS5zZWlrYWkxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5zZWlrYWkxLnBsYXkoKTtcclxuICAgICAgdGV4dC5pbm5lckhUTUwgPSBcIuOBm+OBhOOBi+OBhO+8gVwiO1xyXG4gICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgc3dpdGNoIChtb2RlLnZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSBcImVhc3lcIjpcclxuICAgICAgICAgIHNjb3JlX2Vhc3krKztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMikgKiA1O1xyXG4gICAgICAgICAgc2NvcmVfbm9ybWFsKys7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiZGlmZmljdWx0XCI6XHJcbiAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjApO1xyXG4gICAgICAgICAgc2NvcmVfZGlmZmljdWx0Kys7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBzY29yZS5pbm5lckhUTUwgPSBg44CA44GL44KT44Gf44KT44CA4oCmJHtzY29yZV9lYXN5feOCguOCk+OAgOOBm+OBhOOBi+OBhDxicj7jgIDjgbXjgaTjgYbjgIDjgIDigKYke3Njb3JlX25vcm1hbH3jgoLjgpPjgIDjgZvjgYTjgYvjgYQ8YnI+44CA44KA44Ga44GL44GX44GE4oCmJHtzY29yZV9kaWZmaWN1bHR944KC44KT44CA44Gb44GE44GL44GEYDtcclxuICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgKGhvdXJzICE9IGFuc3dlcl9ob3VycyB8fCBtaW51dGVzICE9IGFuc3dlcl9taW51dGVzKSAmJlxyXG4gICAgICBmbGFnID09IHRydWVcclxuICAgICkge1xyXG4gICAgICBkYXRhLmFsZXJ0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5hbGVydC5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGFucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZGF0YS5zZWlrYWkyLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEuc2Vpa2FpMi5wbGF5KCk7XHJcbiAgICBpZiAoaG91cnMgPT0gMCkgaG91cnMgPSAxMjtcclxuICAgIGlmICh0eXBlLnZhbHVlID09IFwibmFuamlcIikge1xyXG4gICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgdGV4dC5pbm5lckhUTUwgPSBg44GT44Gf44GI44Gv44CAJHtob3Vyc33jgZjjgIAke21pbnV0ZXN944G144KT44CA44Gn44GZ44CCYDtcclxuICAgIH0gZWxzZSBpZiAodHlwZS52YWx1ZSA9PSBcInVnb2thc3VcIikge1xyXG4gICAgICBob3VycyA9IGhhcmlfaG91cnM7XHJcbiAgICAgIG1pbnV0ZXMgPSBoYXJpX21pbnV0ZXM7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gbVJvdGF0ZSgpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oMjAwLCAyMDApO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDMuMDtcclxuICAgIGN0eC5saW5lVG8oXHJcbiAgICAgIDIwMCArIDEzMCAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqICgyNzAgKyA2ICogbWludXRlcykpLFxyXG4gICAgICAyMDAgKyAxMzAgKiBNYXRoLnNpbigoTWF0aC5QSSAvIDE4MCkgKiAoMjcwICsgNiAqIG1pbnV0ZXMpKVxyXG4gICAgKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmx1ZVwiO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaFJvdGF0ZSgpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oMjAwLCAyMDApO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDYuMDtcclxuICAgIGN0eC5saW5lVG8oXHJcbiAgICAgIDIwMCArXHJcbiAgICAgICAgMTAwICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogKDI3MCArIDMwICogKGhvdXJzICsgbWludXRlcyAvIDYwKSkpLFxyXG4gICAgICAyMDAgK1xyXG4gICAgICAgIDEwMCAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqICgyNzAgKyAzMCAqIChob3VycyArIG1pbnV0ZXMgLyA2MCkpKVxyXG4gICAgKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByb3RhdGUoKSB7XHJcbiAgICBtUm90YXRlKCk7XHJcbiAgICBoUm90YXRlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3VGV4dCgpIHtcclxuICAgIGN0eC5mb250ID0gXCIzMHB4ICfvvK3vvLMg44K044K344OD44KvJ1wiO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjb25zdCB0ZXh0QXJyWCA9IFsyNjAsIDMwNSwgMzI1LCAzMTAsIDI2NSwgMjAwLCAxNDAsIDk1LCA3NSwgOTUsIDEzNSwgMjAwXTtcclxuICAgIGNvbnN0IHRleHRBcnJZID0gW1xyXG4gICAgICAxMDUsIDE1MCwgMjEwLCAyNzUsIDMyMCwgMzM1LCAzMjAsIDI3MCwgMjEwLCAxNTAsIDEwNSwgODUsXHJcbiAgICBdO1xyXG4gICAgY29uc3QgdGV4dEFyclgyID0gWzIwMCwgMjgwLCAzNDAsIDM2MCwgMzQwLCAyODAsIDIwMCwgMTIwLCA2MCwgNDAsIDYwLCAxMjBdO1xyXG4gICAgY29uc3QgdGV4dEFyclkyID0gWzQ1LCA2NSwgMTI1LCAyMDUsIDI4NSwgMzQ1LCAzNjUsIDM0NSwgMjg1LCAyMDUsIDEyNSwgNjVdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMTE7IGkrKykge1xyXG4gICAgICBjdHguZmlsbFRleHQoaSArIDEsIHRleHRBcnJYW2ldLCB0ZXh0QXJyWVtpXSk7XHJcbiAgICB9XHJcbiAgICBjdHguZm9udCA9IFwiMTVweCAn77yt77yzIOOCtOOCt+ODg+OCrydcIjtcclxuICAgIGlmIChIaW50ID09IFwiaGludDFcIikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxMTsgaSsrKSB7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGkgKiA1LCB0ZXh0QXJyWDJbaV0sIHRleHRBcnJZMltpXSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoSGludCA9PSBcImhpbnQyXCIpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgaSxcclxuICAgICAgICAgIDIwMCArIDE2MCAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqICgyNzAgKyBpICogNikpLFxyXG4gICAgICAgICAgMjA1ICsgMTYwICogTWF0aC5zaW4oKE1hdGguUEkgLyAxODApICogKDI3MCArIGkgKiA2KSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjdHguZm9udCA9IFwiMTBweCAn77yt77yzIOOCtOOCt+ODg+OCrydcIjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXdTY2FsZSgpIHtcclxuICAgIGZvciAobGV0IGwgPSAwOyBsIDwgNjA7IGwrKykge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oXHJcbiAgICAgICAgMjAwICsgMTUwICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogKDI3MCArIGwgKiA2KSksXHJcbiAgICAgICAgMjAwICsgMTUwICogTWF0aC5zaW4oKE1hdGguUEkgLyAxODApICogKDI3MCArIGwgKiA2KSlcclxuICAgICAgKTtcclxuICAgICAgY3R4LmxpbmVUbyhcclxuICAgICAgICAyMDAgKyAxNDUgKiBNYXRoLmNvcygoTWF0aC5QSSAvIDE4MCkgKiAoMjcwICsgbCAqIDYpKSxcclxuICAgICAgICAyMDAgKyAxNDUgKiBNYXRoLnNpbigoTWF0aC5QSSAvIDE4MCkgKiAoMjcwICsgbCAqIDYpKVxyXG4gICAgICApO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gMC41O1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IG0gPSAwOyBtIDwgMTI7IG0rKykge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oXHJcbiAgICAgICAgMjAwICsgMTUwICogTWF0aC5jb3MoKE1hdGguUEkgLyAxODApICogKDI3MCArIG0gKiAzMCkpLFxyXG4gICAgICAgIDIwMCArIDE1MCAqIE1hdGguc2luKChNYXRoLlBJIC8gMTgwKSAqICgyNzAgKyBtICogMzApKVxyXG4gICAgICApO1xyXG4gICAgICBjdHgubGluZVRvKFxyXG4gICAgICAgIDIwMCArIDE0MCAqIE1hdGguY29zKChNYXRoLlBJIC8gMTgwKSAqICgyNzAgKyBtICogMzApKSxcclxuICAgICAgICAyMDAgKyAxNDAgKiBNYXRoLnNpbigoTWF0aC5QSSAvIDE4MCkgKiAoMjcwICsgbSAqIDMwKSlcclxuICAgICAgKTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IDIuMDtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3Qm9hcmQoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKDIwMCwgMjAwLCAxNTAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgIGN0eC5saW5lV2lkdGggPSAxLjA7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgZHJhd0JvYXJkKCk7XHJcbiAgICBkcmF3U2NhbGUoKTtcclxuICAgIGRyYXdUZXh0KCk7XHJcbiAgICByb3RhdGUoKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuaW1wb3J0IHsgZHJhZyB9IGZyb20gXCIuL2RyYWcuanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBrYXp1KCkge1xyXG4gIC8v5Yid5pyf6Kit5a6aXHJcblxyXG4gIGNvbnN0IGt1cmFpID0gW1wi5LiAXCIsIFwi5Y2BXCIsIFwi55m+XCIsIFwi5Y2DXCIsIFwi5LiA5LiHXCIsIFwi5Y2B5LiHXCIsIFwi55m+5LiHXCIsIFwi5Y2D5LiHXCIsIFwi5LiA5YSEXCIsIFwi5Y2B5YSEXCIsIFwi55m+5YSEXCIsIFwi5Y2D5YSEXCIsIFwi5LiA5YWGXCJdO1xyXG4gIGNvbnN0IGt1cmFpX3lvbWkgPSBbXCJcIiwgXCLljYFcIiwgXCLnmb5cIiwgXCLljYNcIiwgXCLkuIdcIiwgXCLljYFcIiwgXCLnmb5cIiwgXCLljYNcIiwgXCLlhIRcIiwgXCLljYFcIiwgXCLnmb5cIiwgXCLljYNcIiwgXCLlhYZcIl07XHJcbiAgY29uc3QgeW9taSA9IFtcIlwiLCBcIlwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuS4g1wiLCBcIuWFq1wiLCBcIuS5nVwiXTtcclxuICBjb25zdCBjb2xvcl9kYXRhID0gW1xyXG4gICAgXCJyZ2IoMjU1LCAyMDIsIDE5MSwgMC43KVwiLFxyXG4gICAgXCJyZ2IoMjU1LCAyNTUsIDEyOCwgMC43KVwiLFxyXG4gICAgXCJyZ2IoNzcsIDE5NiwgMjU1LCAwLjcpXCIsXHJcbiAgICBcInJnYigyMTYsIDI0MiwgODUsIDAuNylcIixcclxuICAgIFwicmdiKDI1NSwgMjAyLCAxMjgsIDAuNylcIixcclxuICAgIFwicmdiKDI1NSwgMjAyLCAxMjgsIDAuNylcIixcclxuICAgIFwicmdiKDI1NSwgMjAyLCAxMjgsIDAuNylcIixcclxuICAgIFwicmdiKDI1NSwgMjAyLCAxMjgsIDAuNylcIixcclxuICAgIFwicmdiKDIwMSwgMTcyLCAyMzAsIDAuNylcIixcclxuICAgIFwicmdiKDIwMSwgMTcyLCAyMzAsIDAuNylcIixcclxuICAgIFwicmdiKDIwMSwgMTcyLCAyMzAsIDAuNylcIixcclxuICAgIFwicmdiKDIwMSwgMTcyLCAyMzAsIDAuNylcIixcclxuICAgIFwicmdiKDI1NSwgMjQxLCAwLCAwLjcpXCIsXHJcbiAgXTtcclxuICAvL+WIneacn+ioreWumlxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViXCIpLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6MTBweDtsaW5lLWhlaWdodDo2MHB4O2Rpc3BsYXk6ZmxleDtcIj5cclxuICA8c2VsZWN0IGlkPVwic2VsZWN0XCIgc3R5bGU9XCJtYXJnaW4tbGVmdDoxMHB4XCI+XHJcbiAgPG9wdGlvbiB2YWx1ZT0wPjEwMOOBvuOBp+OBruOBi+OBmjwvb3B0aW9uPlxyXG4gIDxvcHRpb24gdmFsdWU9MT4xMDAw44G+44Gn44Gu5pWwPC9vcHRpb24+XHJcbiAgPG9wdGlvbiB2YWx1ZT0yPu+8keS4h+OBvuOBp+OBruaVsDwvb3B0aW9uPlxyXG4gIDxvcHRpb24gdmFsdWU9Mz7vvJHlhITjgb7jgafjga7mlbA8L29wdGlvbj5cclxuICA8b3B0aW9uIHZhbHVlPTQ+77yR5YSE44KS44GT44GI44KL5pWwPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm51bWJlcl8xXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDoyMHB4O3dpZHRoOjEwMHB4O2ZvbnQtc2l6ZToyNHB4O1wiLz7jgpJcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44K744OD44OIXCIgaWQ9XCJzZXRcIiBzdHlsZT1cImhlaWdodDo0MHB4O1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IGBcclxuIFxyXG4gIDx0YWJsZSBzdHlsZT1cIm1hcmdpbi1sZWZ0OjEwcHhcIj5cclxuICAgIDx0Ym9keSBpZD1cIlRCTFwiPlxyXG4gICAgPC90Ym9keT5cclxuICA8L3RhYmxlPlxyXG4gIDxocj5cclxuICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O2xpbmUtaGVpZ2h0OjUwcHg7XCI+XHJcbiAgPHNlbGVjdCBpZD1cInNlbGVjdF8zXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDoxMHB4O3RleHQtYWxpZ246cmlnaHQ7d2lkdGg6MTAwcHg7aGVpZ2h0OjQwcHg7XCI+XHJcbiAgPG9wdGlvbiB2YWx1ZT0wPjHjgpI8L29wdGlvbj5cclxuICA8b3B0aW9uIHZhbHVlPTE+MTDjgpI8L29wdGlvbj5cclxuICA8b3B0aW9uIHZhbHVlPTI+MTAw44KSPC9vcHRpb24+XHJcbiAgPG9wdGlvbiB2YWx1ZT0zPjEwMDDjgpI8L29wdGlvbj5cclxuICA8b3B0aW9uIHZhbHVlPTQ+77yR5LiH44KSPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cIm51bWJlcl8zXCIgbWF4PVwiMTAwXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O21hcmdpbi1sZWZ0OjIwcHg7d2lkdGg6MTAwcHg7aGVpZ2h0OjQwcHg7Zm9udC1zaXplOjI0cHg7XCIvPuOBkyxcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44Gq44KJ44G544KLXCIgaWQ9XCJjaGVja18yXCIgc3R5bGU9XCJtYXJnaW46NXB4O3dpZHRoOjgwcHg7aGVpZ2h0OjMwcHg7XCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIj7jgIBcclxuICA8L2Rpdj5cclxuICA8aHI+XHJcbiAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtsaW5lLWhlaWdodDo1MHB4O1wiPlxyXG4gICAgPHNlbGVjdCBpZD1cInNlbGVjdF8yXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDoxMHB4O3dpZHRoOjEwMHB4O2hlaWdodDo0MHB4O3RleHQtYWxpZ246cmlnaHQ7XCI+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9MD4x44KSPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9MT4xMOOCkjwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPTI+MTAw44KSPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9Mz4xMDAw44KSPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9ND7vvJHkuIfjgpI8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT01PjEw5LiH44KSPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9Nj4xMDDkuIfjgpI8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT03PjEwMDDkuIfjgpI8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT04Pu+8keWEhOOCkjwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibnVtYmVyXzJcIiBtYXg9XCI5OTlcIiBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7bWFyZ2luLWxlZnQ6MjBweDt3aWR0aDoxMjBweDtoZWlnaHQ6NDBweDtmb250LXNpemU6MjRweDtcIi8+44GT44GC44Gk44KB44Gf44GL44Ga44GvLFxyXG4gICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuOBl+OCieOBueOCi1wiIGlkPVwiY2hlY2tcIiBzdHlsZT1cIm1hcmdpbjo1cHg7d2lkdGg6ODBweDtoZWlnaHQ6MzBweDtcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPuOAgFxyXG4gICAgPGRpdiBpZD1cImFuc3dlcl8xXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O2ZvbnQtc2l6ZToyNHB4O21pbi13aWR0aDo0MHB4XCI+PC9kaXY+44CA44Gn44GZ44CCXHJcbiAgPC9kaXY+XHJcbiAgPGhyPlxyXG4gIFxyXG4gIGA7XHJcblxyXG4gIHZhciBtYXhfa2V0YSA9IDI7XHJcbiAgdmFyIG51bV9hcnIgPSBbXTtcclxuICB2YXIgbnVtX2xlbmd0aDtcclxuICB2YXIgbnVtO1xyXG4gIGNyZWF0ZV9UQkwoKTtcclxuXHJcbiAgLy/moYHmlbDjga7oqK3lrprlpInmm7Tjg6Hjg4vjg6Xjg7xcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGtldGFfY2hhbmdlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v5qGB5pWw44Gu6Kit5a6a5aSJ5pu044Oh44OL44Ol44O8XHJcbiAgZnVuY3Rpb24ga2V0YV9jaGFuZ2UoKSB7XHJcbiAgICBkYXRhLnNldC5jdXJyZW50dGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgICBjb25zdCBrZXRhX2RhdGEgPSBbMiwgMywgNCwgOCwgMTNdO1xyXG4gICAgbWF4X2tldGEgPSBrZXRhX2RhdGFbc2VsZWN0LnZhbHVlXTtcclxuICAgIG51bWJlcl8xLnN0eWxlLndpZHRoID0gTWF0aC5mbG9vcig0MCArIDMwICogbWF4X2tldGEpICsgXCJweFwiO1xyXG4gICAgbnVtYmVyXzEubWF4ID0gMTAgKiogbWF4X2tldGEgLSAxO1xyXG4gICAgY3JlYXRlX1RCTCgpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG51bSA9IE51bWJlcihudW1iZXJfMS52YWx1ZSk7XHJcbiAgICBpZiAobnVtID4gOTk5OTk5OTkpIHtcclxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSA0O1xyXG4gICAgfSBlbHNlIGlmIChudW0gPiA5OTk5ICYmIG51bSA8PSA5OTk5OTk5OSkge1xyXG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA+IDk5OSAmJiBudW0gPD0gOTk5OSkge1xyXG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDI7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA+IDk5ICYmIG51bSA8PSA5OTkpIHtcclxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bSA+IDk5OTk5OTk5OTk5OTkpIHtcclxuICAgICAgZGF0YS5hbGVydC5jdXJyZW50dGltZSA9IDA7XHJcbiAgICAgIGRhdGEuYWxlcnQucGxheSgpO1xyXG4gICAgICBhbGVydChcIuaVsOOBjOWkp+OBjeOBmeOBjuOBvuOBme+8gVwiKTtcclxuICAgICAgbnVtYmVyXzEudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZWxlY3QudmFsdWUgPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcclxuICAgIGRhdGEuc2V0LmN1cnJlbnR0aW1lID0gMDtcclxuICAgIGRhdGEuc2V0LnBsYXkoKTtcclxuICAgIGtldGFfY2hhbmdlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhtYXhfa2V0YSk7XHJcbiAgICB3cml0ZV9UQkwoKTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdmFyIGJla2lqbyA9IE51bWJlcihzZWxlY3RfMi52YWx1ZSk7XHJcbiAgICB2YXIgbnVtXzIgPSBOdW1iZXIobnVtYmVyXzIudmFsdWUpO1xyXG4gICAgbnVtID0gbnVtXzIgKiAxMCAqKiBiZWtpam87XHJcbiAgICBpZiAobnVtID4gOTk5OTk5OTkpIHtcclxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSA0O1xyXG4gICAgfSBlbHNlIGlmIChudW0gPiA5OTk5ICYmIG51bSA8PSA5OTk5OTk5OSkge1xyXG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA+IDk5OSAmJiBudW0gPD0gOTk5OSkge1xyXG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDI7XHJcbiAgICB9IGVsc2UgaWYgKG51bSA+IDk5ICYmIG51bSA8PSA5OTkpIHtcclxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAga2V0YV9jaGFuZ2UoKTtcclxuICAgIHdyaXRlX1RCTCgpO1xyXG4gICAgZGF0YS5yZXNldC5jdXJyZW50dGltZSA9IDA7XHJcbiAgICBkYXRhLnJlc2V0LnBsYXkoKTtcclxuICAgIGFuc3dlcl8xLmlubmVySFRNTCA9IFN0cmluZyhudW0pLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgXCIkMSxcIik7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tfMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdmFyIGJla2lqbyA9IE51bWJlcihzZWxlY3RfMy52YWx1ZSk7XHJcbiAgICB2YXIgbnVtXzMgPSBOdW1iZXIobnVtYmVyXzMudmFsdWUpO1xyXG4gICAgaWYgKGJla2lqbyA+IDgpIHtcclxuICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSA0O1xyXG4gICAgfSBlbHNlIGlmIChiZWtpam8gPiA0ICYmIGJla2lqbyA8PSA4KSB7XHJcbiAgICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMztcclxuICAgIH0gZWxzZSBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGJla2lqbztcclxuICAgIG51bSA9IG51bV8zICogMTAgKiogYmVraWpvO1xyXG5cclxuICAgIGtldGFfY2hhbmdlKCk7XHJcbiAgICBpZiAobnVtXzMgPiAxMDApIHtcclxuICAgICAgZGF0YS5hbGVydC5jdXJyZW50dGltZSA9IDA7XHJcbiAgICAgIGRhdGEuYWxlcnQucGxheSgpO1xyXG4gICAgICBhbGVydChcIuOBquOCieOBueOCi+aVsOOBr++8jDEwMOOBk+OBvuOBp+OBq+OBl+OBpuOBj+OBoOOBleOBhO+8gVwiKTtcclxuICAgICAgbnVtYmVyXzMudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkYXRhLnNldC5jdXJyZW50dGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgICB3cml0ZV9UQkwoKTtcclxuICAgIHB1dF9UQkwobnVtXzMsIGJla2lqbyk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZV9UQkwoKSB7XHJcbiAgICBUQkwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1heF9rZXRhOyBqKyspIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBtYXhfa2V0YSAtIGogLSAxO1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLnN0eWxlLndpZHRoID0gNzIgLyBtYXhfa2V0YSArIFwidndcIjtcclxuICAgICAgICB0ZC5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgICAgICB0ZC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHN3aXRjaCAoaSkge1xyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICB0ZC5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xyXG4gICAgICAgICAgICBpZiAobWF4X2tldGEgPT0gMikgdGQuaW5uZXJIVE1MID0ga3VyYWlbaW5kZXhdICsgXCLjga7jgY/jgonjgYRcIjtcclxuICAgICAgICAgICAgZWxzZSB0ZC5pbm5lckhUTUwgPSBrdXJhaVtpbmRleF0gKyBcIuOBruS9jVwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gXCI2MHB4XCI7XHJcbiAgICAgICAgICAgIHRkLnN0eWxlLmZvbnRTaXplID0gXCIzNnB4XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gNzIgLyBtYXhfa2V0YSArIFwidmhcIjtcclxuICAgICAgICAgICAgdGQuY2xhc3NMaXN0LmFkZChcImRyb3BwYWJsZS1lbGVtXCIpO1xyXG4gICAgICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICB0ZC5zdHlsZS50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgdGQuc3R5bGUudmVydGljYWxBbGlnbiA9IFwidG9wXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcl9kYXRhW2luZGV4XTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIH1cclxuICAgICAgVEJMLmFwcGVuZENoaWxkKHRyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyaXRlX1RCTCgpIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF4X2tldGE7IGorKykge1xyXG4gICAgICB2YXIgaW5kZXggPSBtYXhfa2V0YSAtIGogLSAxO1xyXG4gICAgICBpZiAobWF4X2tldGEgPT0gMikgVEJMLnJvd3NbMF0uY2VsbHNbal0uaW5uZXJIVE1MID0ga3VyYWlbaW5kZXhdICsgXCLjga7jgY/jgonjgYRcIjtcclxuICAgICAgZWxzZSBUQkwucm93c1swXS5jZWxsc1tqXS5pbm5lckhUTUwgPSBrdXJhaVtpbmRleF0gKyBcIuOBruS9jVwiO1xyXG4gICAgICBUQkwucm93c1sxXS5jZWxsc1tqXS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBUQkwucm93c1syXS5jZWxsc1tqXS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBUQkwucm93c1szXS5jZWxsc1tqXS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBUQkwucm93c1szXS5jZWxsc1tqXS5zdHlsZS53aWR0aCA9IDcyIC8gbWF4X2tldGEgKyBcInZ3XCI7XHJcbiAgICB9XHJcbiAgICBudW1fbGVuZ3RoID0gU3RyaW5nKG51bSkubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fbGVuZ3RoOyBpKyspIHtcclxuICAgICAgbnVtX2FycltudW1fbGVuZ3RoIC0gaSAtIDFdID0gTnVtYmVyKFN0cmluZyhudW0pLnN1YnN0cihpLCAxKSk7IC8v5LiA44Gu5L2N44GL44KJ6aCG44Gr5pWw5a2X44KS5oy/5YWlXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bV9sZW5ndGg7IGorKykge1xyXG4gICAgICB2YXIgaW5kZXggPSBtYXhfa2V0YSAtIGogLSAxO1xyXG4gICAgICBUQkwucm93c1sxXS5jZWxsc1tpbmRleF0uaW5uZXJIVE1MID0gbnVtX2FycltqXTtcclxuICAgICAgVEJMLnJvd3NbMl0uY2VsbHNbaW5kZXhdLmlubmVySFRNTCA9IHlvbWlbbnVtX2FycltqXV0gKyBrdXJhaV95b21pW2pdO1xyXG4gICAgICBpZiAoaiA9PSAwKSB7XHJcbiAgICAgICAgaWYgKG51bV9hcnJbal0gPT0gMSkgVEJMLnJvd3NbMl0uY2VsbHNbaW5kZXhdLmlubmVySFRNTCA9IFwi5LiAXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoaiA9PSA0KSB7XHJcbiAgICAgICAgaWYgKG51bV9hcnJbal0gPT0gMSkgVEJMLnJvd3NbMl0uY2VsbHNbaW5kZXhdLmlubmVySFRNTCA9IFwi5LiA5LiHXCI7XHJcbiAgICAgICAgZWxzZSBpZiAobnVtX2FycltqXSA9PSAwICYmIG51bV9hcnJbaiArIDFdID09IDAgJiYgbnVtX2FycltqICsgMl0gPT0gMCAmJiBudW1fYXJyW2ogKyAzXSA9PSAwKSBUQkwucm93c1syXS5jZWxsc1tpbmRleF0uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBlbHNlIGlmIChudW1fYXJyW2pdID09IDApIFRCTC5yb3dzWzJdLmNlbGxzW2luZGV4XS5pbm5lckhUTUwgPSBcIuS4h1wiO1xyXG4gICAgICB9IGVsc2UgaWYgKGogPT0gOCkge1xyXG4gICAgICAgIGlmIChudW1fYXJyW2pdID09IDEpIFRCTC5yb3dzWzJdLmNlbGxzW2luZGV4XS5pbm5lckhUTUwgPSBcIuS4gOWEhFwiO1xyXG4gICAgICAgIGVsc2UgaWYgKG51bV9hcnJbal0gPT0gMCAmJiBudW1fYXJyW2ogKyAxXSA9PSAwICYmIG51bV9hcnJbaiArIDJdID09IDAgJiYgbnVtX2FycltqICsgM10gPT0gMCkgVEJMLnJvd3NbMl0uY2VsbHNbaW5kZXhdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAobnVtX2FycltqXSA9PSAwKSBUQkwucm93c1syXS5jZWxsc1tpbmRleF0uaW5uZXJIVE1MID0gXCLlhIRcIjtcclxuICAgICAgfSBlbHNlIGlmIChqID09IDEyKSB7XHJcbiAgICAgICAgaWYgKG51bV9hcnJbal0gPT0gMSkgVEJMLnJvd3NbMl0uY2VsbHNbaW5kZXhdLmlubmVySFRNTCA9IFwi5LiA5YWGXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG51bV9hcnJbal0gPT0gMCkgVEJMLnJvd3NbMl0uY2VsbHNbaW5kZXhdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHB1dF9UQkwobnVtXzMsIGJla2lqbykge1xyXG4gICAgY29uc3QgaW1nX2RhdGEgPSBbXCJpY2hpXCIsIFwianV1XCIsIFwiaHlha3VcIiwgXCJzZW5cIiwgXCJpY2hpbWFuXCJdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXhfa2V0YTsgaisrKSB7XHJcbiAgICAgIHZhciBpbmRleCA9IG1heF9rZXRhIC0gaiAtIDE7XHJcbiAgICAgIFRCTC5yb3dzWzBdLmNlbGxzW2pdLmlubmVySFRNTCA9IGt1cmFpW2luZGV4XTtcclxuICAgIH1cclxuICAgIGlmIChudW1fMyA+IDkpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBkcmFnKGltZyk7XHJcbiAgICAgICAgaW1nLnNyYyA9IFwiLi9pbWFnZS9cIiArIGltZ19kYXRhW2Jla2lqb10gKyBcIi5wbmdcIjtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcIm1fXCIgKyBpbWdfZGF0YVtiZWtpam9dLCBcImltZ1wiKTtcclxuICAgICAgICBpbWcuc3R5bGUubWFyZ2luID0gXCIycHhcIjtcclxuICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgVEJMLnJvd3NbM10uY2VsbHNbbWF4X2tldGEgLSBiZWtpam8gLSAxXS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIFRCTC5yb3dzWzNdLmNlbGxzW21heF9rZXRhIC0gYmVraWpvIC0gMV0uc3R5bGUud2lkdGggPSBcIjUwJVwiO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV8zOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIFwiaW1nXCIpO1xyXG4gICAgICAgIGRyYWcoaW1nKTtcclxuICAgICAgICBpbWcuc3JjID0gXCIuL2ltYWdlL1wiICsgaW1nX2RhdGFbYmVraWpvXSArIFwiLnBuZ1wiO1xyXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKGltZ19kYXRhW2Jla2lqb10pO1xyXG4gICAgICAgIGltZy5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xyXG4gICAgICAgIGltZy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBUQkwucm93c1szXS5jZWxsc1ttYXhfa2V0YSAtIGJla2lqbyAtIDFdLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGFoaSgpIHtcclxuICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44Gf44GX566X44Gu44Gy44Gj566XXCI7XHJcbiAgLy/liJ3mnJ/oqK3lrpotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBsZXQgaGlrYXN1ID0gMTIzO1xyXG4gIGxldCBrYXN1ID0gNDU2O1xyXG4gIGxldCBtYXhfa2V0YSA9IDQ7XHJcbiAgbGV0IHdhO1xyXG4gIGxldCBrdXJpYWdhcmk7XHJcbiAgbGV0IGhpa2FzdV9hcnIgPSBbXTtcclxuICBsZXQga2FzdV9hcnIgPSBbXTtcclxuICBsZXQgd2FfYXJyID0gW107XHJcbiAgbGV0IGhpa2FzdV9rZXRhO1xyXG4gIGxldCBrYXN1X2tldGE7XHJcbiAgbGV0IHdhX2tldGE7XHJcbiAgXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJcIikuaW5uZXJIVE1MID0gYFxyXG4gIDxzZWxlY3QgaWQ9XCJ0YXN1X3R5cGVcIiBzdHlsZT1cImZvbnQtc2l6ZToxNnB4XCI+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4o77yS44GR44GfKSso77yS44GR44GfKTwvb3B0aW9uPlxyXG4gIDxvcHRpb24gdmFsdWU9XCIyXCI+KO+8k+OBkeOBnykrKO+8kuOBkeOBnyk8L29wdGlvbj5cclxuICA8b3B0aW9uIHZhbHVlPVwiM1wiPijvvJLjgZHjgZ8pKyjvvJPjgZHjgZ8pPC9vcHRpb24+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cIjRcIj4o77yT44GR44GfKSso77yT44GR44GfKTwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjgq/jg6rjgqJcIiBpZD1cImNsZWFyXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIi8+ICAgIFxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjgoLjgpPjgaDjgYRcIiBpZD1cIm1vbmRhaVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIvPiAgICBcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44K744OD44OIXCIgaWQ9XCJzZXRcIiBjbGFzcz1cImJ0biBidG4taW5mb1wiLz4gICAgXHJcbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuOBk+OBn+OBiFwiIGlkPVwia290YWVcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIvPiAgICBcclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgaWQ9XCJzaGlraVwiIHN0eWxlPVwiZGlzcGxheTpmbGV4OyBtYXJnaW46MTBweDtcIj5cclxuICAgIDxpbnB1dCBpZD1cImJveDFcIiB0eXBlPVwibnVtYmVyXCIgbWF4PTk5OSBtaW49MTAgY2xhc3M9XCJrZWlzYW5fc2hpa2lcIi8+XHJcbiAgICA8ZGl2ICAgaWQ9XCJib3gyXCIgdHlwZT1cIm51bWJlclwiIHN0eWxlPVwid2lkdGg6NTBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MzZweDtcIiBjbGFzcz1cImtpZ29cIj4rPC9kaXY+XHJcbiAgICA8aW5wdXQgaWQ9XCJib3gzXCIgdHlwZT1cIm51bWJlclwiIG1heD05OTkgbWluPTEwIGNsYXNzPVwia2Vpc2FuX3NoaWtpXCIvPlxyXG4gICAgPGRpdiAgIGlkPVwiYm94NFwiIHR5cGU9XCJudW1iZXJcIiBzdHlsZT1cIndpZHRoOjUwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjM2cHg7XCIgY2xhc3M9XCJraWdvXCI+PTwvZGl2PlxyXG4gICAgPGlucHV0IGlkPVwiYm94NVwiIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImtlaXNhbl9zaGlraVwiLz5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICBzdHlsZT1cImRpc3BsYXk6ZmxleDttYXJnaW46MTBweDtcIj5cclxuICAgIDx0YWJsZT5cclxuICAgIDx0Ym9keSBpZD1cIlRCTFwiPlxyXG4gICAgPC90Ym9kZXk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgPGRpdiBpZD1cImZpZWxkXCI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gIC8vLS3lkITjg5zjgr/jg7Pjga7oqK3lrpotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xlYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1hc3VfY2xlYXIoKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb25kYWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNodXR1ZGFpKCkpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb25kYWlfc2V0KCkpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia290YWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dfYW5zd2VyKCkpO1xyXG5cclxuICAvL+W8j+ODnOODg+OCr+OCueOBruioreWumi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGJveDEudmFsdWUgPSBoaWthc3U7XHJcbiAgYm94My52YWx1ZSA9IGthc3U7XHJcblxyXG4gIGJveDUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBpZiAoYm94NS52YWx1ZSA9PSB3YSkge1xyXG4gICAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgZGF0YS5zZWlrYWkxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5zZWlrYWkxLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8v562G566X44Oe44K544Gu5a6a576pLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgdHIuc3R5bGUubWF4SGVpZ2h0ID0gXCI2MHB4XCI7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1heF9rZXRhOyBqKyspIHtcclxuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgIHRkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzMzNcIjtcclxuICAgICAgdGQuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgdGQuc3R5bGUubWF4V2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gXCI2MHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLm1heEhlaWdodCA9IFwiNjBweFwiO1xyXG4gICAgICB0ZC5zdHlsZS5mb250U2l6ZSA9IFwiMzBweFwiO1xyXG4gICAgICB0ZC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAvLyB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgaWYgKGkgPT0gMCB8fCBpID09IDMpIHtcclxuICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3BwYWJsZS1lbGVtXCIpO1xyXG4gICAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzRkYzRmZlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBUQkwuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgVEJMLnN0eWxlLmhlaWdodCA9IFwiMjQwcHhcIjtcclxuICB9XHJcblxyXG4gIC8v44GK6YeR44OR44Os44OD44OI44Gu6Kit572uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBjb25zdCBUQkxfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICBmaWVsZC5hcHBlbmRDaGlsZChUQkxfMik7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgdHIuc3R5bGUubWF4SGVpZ2h0ID0gXCI2MHB4XCI7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1heF9rZXRhOyBqKyspIHtcclxuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgIHRkLnN0eWxlLmZvbnRTaXplID0gXCIzNnB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjI0cHhcIjtcclxuICAgICAgdGQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzMzM1wiO1xyXG4gICAgICB0ZC5zdHlsZS53aWR0aCA9IFwiMTUwcHhcIjtcclxuICAgICAgdGQuc3R5bGUubWF4V2lkdGggPSBcIjE1MHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLmhlaWdodCA9IFwiNjBweFwiO1xyXG4gICAgICB0ZC5zdHlsZS5tYXhIZWlnaHQgPSBcIjYwcHhcIjtcclxuICAgICAgaWYgKGogPT0gMCkge1xyXG4gICAgICAgIHRkLnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgICAgdGQuc3R5bGUubWF4V2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgfVxyXG4gICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIHRkLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIHRkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcHBhYmxlLWVsZW0tMlwiKTtcclxuICAgICAgaWYgKGkgPT0gMCB8fCBpID09IDMpIHtcclxuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0ZGM0ZmZcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgVEJMXzIuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgVEJMXzIuc3R5bGUuaGVpZ2h0ID0gXCIyNDBweFwiO1xyXG4gICAgVEJMXzIuc3R5bGUubWFyZ2luTGVmdCA9IFwiMTBweFwiO1xyXG4gIH1cclxuXHJcbiAgLy/mlbDlrZfjg5Hjg6zjg4Pjg4jjga7oqK3nva5cclxuICBjb25zdCBudW1fcGFsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBudW1fcGFsbGV0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBudW1fcGFsbGV0LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gIG51bV9wYWxsZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJudW1fcGFsbGV0XCIpO1xyXG4gIG51bV9wYWxsZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wcGFibGUtZWxlbVwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG51bV9wYWxsZXQpO1xyXG5cclxuICBoaXNzYW5fc2V0KGhpa2FzdSwga2FzdSk7XHJcbiAgbnVtX3NldCgpO1xyXG5cclxuICAvL+OBk+OBk+OBi+OCiemWouaVsC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy/plqLmlbDjgIDjg57jgrnlhoXjga7mlbDlrZfjgpLjgq/jg6rjgqJcclxuICBmdW5jdGlvbiBtYXN1X2NsZWFyKCkge1xyXG4gICAgZGF0YS5yZXNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnJlc2V0LnBsYXkoKTtcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2xdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFRCTC5yb3dzWzJdLmNlbGxzWzBdLmlubmVySFRNTCA9IFwiK1wiO1xyXG4gICAgVEJMLnJvd3NbMl0uY2VsbHNbMF0udGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGJveDEudmFsdWUgPSBcIlwiO1xyXG4gICAgYm94My52YWx1ZSA9IFwiXCI7XHJcbiAgICBib3g1LnZhbHVlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIC8vIOmWouaVsOOAgOWVj+mhjOOCkuODqeODs+ODgOODoOOBq+WHuuOBmVxyXG4gIGZ1bmN0aW9uIHNodXR1ZGFpKCkge1xyXG4gICAgc3dpdGNoICh0YXN1X3R5cGUudmFsdWUpIHtcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICBoaWthc3UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MCArIDEwKTtcclxuICAgICAgICBrYXN1ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAgKyAxMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgaGlrYXN1ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMTAwKTtcclxuICAgICAgICBrYXN1ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAgKyAxMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgaGlrYXN1ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAgKyAxMCk7XHJcbiAgICAgICAga2FzdSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCArIDEwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICBoaWthc3UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxMDApO1xyXG4gICAgICAgIGthc3UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxMDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgYm94MS52YWx1ZSA9IGhpa2FzdTtcclxuICAgIGJveDMudmFsdWUgPSBrYXN1O1xyXG4gICAgaGlzc2FuX3NldChoaWthc3UsIGthc3UpO1xyXG4gICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZXQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA5ZWP6aGM44KS44K744OD44OI44GZ44KLXHJcbiAgZnVuY3Rpb24gbW9uZGFpX3NldCgpIHtcclxuICAgIGhpa2FzdSA9IGJveDEudmFsdWU7XHJcbiAgICBrYXN1ID0gYm94My52YWx1ZTtcclxuICAgIGhpc3Nhbl9zZXQoaGlrYXN1LCBrYXN1KTtcclxuICAgIGRhdGEuc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEuc2V0LnBsYXkoKTtcclxuICB9XHJcblxyXG4gIC8vIOmWouaVsOOAgOetlOOBiOOBruihqOekulxyXG4gIGZ1bmN0aW9uIHNob3dfYW5zd2VyKCkge1xyXG4gICAgYm94NS52YWx1ZSA9IHdhO1xyXG4gICAgYm94NS5zdHlsZS5jb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAgZGF0YS5zZWlrYWkyLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEuc2Vpa2FpMi5wbGF5KCk7XHJcbiAgICAvL+OBj+OCiuS4iuOBjOOCiuOBruihqOekulxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgTWF0aC5taW4oaGlrYXN1X2tldGEsIGthc3Vfa2V0YSk7IGNvbCsrKSB7XHJcbiAgICAgIGlmIChNYXRoLmZsb29yKGhpa2FzdV9hcnJbY29sXSArIGthc3VfYXJyW2NvbF0gKyBrdXJpYWdhcmkpID4gOSkge1xyXG4gICAgICAgIFRCTC5yb3dzWzBdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMl0uaW5uZXJIVE1MID0gXCIxXCI7XHJcbiAgICAgICAga3VyaWFnYXJpID0gMTtcclxuICAgICAgICBUQkwucm93c1swXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDJdLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICAgICAgVEJMLnJvd3NbMF0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAyXS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgVEJMLnJvd3NbMF0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAyXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJib3R0b21cIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBrdXJpYWdhcmkgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+ethueul+OBruetlOOBiOihqOekulxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgd2Ffa2V0YTsgY29sKyspIHtcclxuICAgICAgVEJMLnJvd3NbM10uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAxXS5pbm5lckhUTUwgPSB3YV9hcnJbY29sXTtcclxuICAgIH1cclxuICAgIC8v562U44GI44Gu6KGo56S644Gu5pmC77yM44GK6YeR44KS5Lim44G555u044GZ44GL44Gv6KaB5qSc6KiOXHJcbiAgfVxyXG5cclxuICAvLyDplqLmlbDjgIDnrZTjgYjjga7lhaXlipstLS0tLS0tLS0tLS0tLS1cclxuICBmdW5jdGlvbiBrb3RhZV9pbnB1dCgpIHtcclxuICAgIGhpa2FzdSA9IE1hdGguZmxvb3IoYm94MS52YWx1ZSk7XHJcbiAgICBrYXN1ID0gTWF0aC5mbG9vcihib3gzLnZhbHVlKTtcclxuICAgIHdhID0gTWF0aC5mbG9vcihoaWthc3UgKyBrYXN1KTtcclxuICAgIGJveDUudmFsdWUgPVxyXG4gICAgICBOdW1iZXIoVEJMLnJvd3NbM10uY2VsbHNbMF0uaW5uZXJUZXh0KSAqIDEwMDAgKyBOdW1iZXIoVEJMLnJvd3NbM10uY2VsbHNbMV0uaW5uZXJUZXh0KSAqIDEwMCArIE51bWJlcihUQkwucm93c1szXS5jZWxsc1syXS5pbm5lclRleHQpICogMTAgKyBOdW1iZXIoVEJMLnJvd3NbM10uY2VsbHNbM10uaW5uZXJUZXh0KSAqIDE7XHJcbiAgICBpZiAoYm94NS52YWx1ZSA9PSB3YSkge1xyXG4gICAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgZGF0YS5zZWlrYWkxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5zZWlrYWkxLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+mWouaVsOOAgOethueul+OBruaPj+eUuy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGZ1bmN0aW9uIGhpc3Nhbl9zZXQoaGlrYXN1LCBrYXN1KSB7XHJcbiAgICBpZiAoaGlrYXN1ID4gOTk5IHx8IGthc3UgPiA5OTkgfHwgaGlrYXN1IDwgMCB8fCBrYXN1IDwgMCkge1xyXG4gICAgICBkYXRhLmFsZXJ0LnBsYXkoKTtcclxuICAgICAgYWxlcnQoXCLmlbDlrZfjga8x772eOTk544G+44Gn44Gr44GX44Gm44GP44Gg44GV44GE44CCXCIpO1xyXG4gICAgICBib3gxLnZhbHVlID0gXCJcIjtcclxuICAgICAgYm94My52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICBoaWthc3UgPSBNYXRoLmZsb29yKGhpa2FzdSk7XHJcbiAgICBrYXN1ID0gTWF0aC5mbG9vcihrYXN1KTtcclxuICAgIHdhID0gTWF0aC5mbG9vcihoaWthc3UgKyBrYXN1KTtcclxuICAgIGJveDEudmFsdWUgPSBoaWthc3U7XHJcbiAgICBib3gzLnZhbHVlID0ga2FzdTtcclxuICAgIGJveDUudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIC8v5pWw5a2X44KS6YWN5YiX44Go44GX44Gm5Luj5YWlXHJcbiAgICBoaWthc3Vfa2V0YSA9IFN0cmluZyhoaWthc3UpLmxlbmd0aDtcclxuICAgIGthc3Vfa2V0YSA9IFN0cmluZyhrYXN1KS5sZW5ndGg7XHJcbiAgICB3YV9rZXRhID0gU3RyaW5nKHdhKS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWthc3Vfa2V0YTsgaSsrKSB7XHJcbiAgICAgIGhpa2FzdV9hcnJbaV0gPSBOdW1iZXIoU3RyaW5nKGhpa2FzdSkuY2hhckF0KGhpa2FzdV9rZXRhIC0gaSAtIDEpKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2FzdV9rZXRhOyBpKyspIHtcclxuICAgICAga2FzdV9hcnJbaV0gPSBOdW1iZXIoU3RyaW5nKGthc3UpLmNoYXJBdChrYXN1X2tldGEgLSBpIC0gMSkpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YV9rZXRhOyBpKyspIHtcclxuICAgICAgd2FfYXJyW2ldID0gTnVtYmVyKFN0cmluZyh3YSkuY2hhckF0KHdhX2tldGEgLSBpIC0gMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1dWppX3NldCgpO1xyXG4gICAgb2thbmVfc2V0KCk7XHJcbiAgfVxyXG5cclxuICAvL+ODnuOCueWGheOBq+OBiumHkeOCkuS4puOBueOCiy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24gb2thbmVfc2V0KCkge1xyXG4gICAgLy/kuIDluqbjgIDjg57jgrnlhoXjga7jgYrph5HjgpLjgq/jg6rjgqJcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgVEJMXzIucm93c1tyb3ddLmNlbGxzW2NvbF0uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltZ19hcnIgPSBbXCJpY2hpZW5cIiwgXCJqdXVlblwiLCBcImh5YWt1ZW5cIl07XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBoaWthc3Vfa2V0YTsgY29sKyspIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWthc3VfYXJyW2NvbF07IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2UvXCIgKyBpbWdfYXJyW2NvbF0gKyBcIi5wbmdcIik7XHJcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGltZ19hcnJbY29sXSk7XHJcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIyNXB4XCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiMjVweFwiO1xyXG4gICAgICAgIGltZy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydEV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hNb3ZlRXZlbnQsIGZhbHNlKTtcclxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRvdWNoRW5kRXZlbnRfMiwgZmFsc2UpO1xyXG4gICAgICAgIFRCTF8yLnJvd3NbMV0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAxXS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBrYXN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2FzdV9hcnJbY29sXTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZS9cIiArIGltZ19hcnJbY29sXSArIFwiLnBuZ1wiKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgaW1nX2Fycltjb2xdKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBcIjI1cHhcIjtcclxuICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiMjVweFwiO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0RXZlbnQsIGZhbHNlKTtcclxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaE1vdmVFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRFdmVudF8yLCBmYWxzZSk7XHJcbiAgICAgICAgVEJMXzIucm93c1syXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDFdLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgoaGlrYXN1IDwgMTAwKSAmIChrYXN1IDwgMTAwKSkge1xyXG4gICAgICBUQkxfMi5yb3dzWzJdLmNlbGxzWzFdLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7XCI+Kzwvc3Bhbj5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgVEJMXzIucm93c1syXS5jZWxsc1swXS5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O1wiPis8L3NwYW4+YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v44Oe44K55YaF44Gr5pWw5a2X44KS5pu444GN6L6844KALS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGZ1bmN0aW9uIHN1dWppX3NldCgpIHtcclxuICAgIC8v5LiA5bqm44CA44Oe44K55YaF44Gu5pWw5a2X44KS44Kv44Oq44KiXHJcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA0OyByb3crKykge1xyXG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sXS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+ODnuOCueWGheOBq+aVsOWtl+OCkuS7o+WFpVxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgaGlrYXN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzWzFdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJIVE1MID0gaGlrYXN1X2Fycltjb2xdO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwga2FzdV9rZXRhOyBjb2wrKykge1xyXG4gICAgICBUQkwucm93c1syXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDFdLmlubmVySFRNTCA9IGthc3VfYXJyW2NvbF07XHJcbiAgICB9XHJcbiAgICBpZiAoKGhpa2FzdSA8IDEwMCkgJiAoa2FzdSA8IDEwMCkpIHtcclxuICAgICAgVEJMLnJvd3NbMl0uY2VsbHNbMV0uaW5uZXJIVE1MID0gXCIrXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUQkwucm93c1syXS5jZWxsc1swXS5pbm5lckhUTUwgPSBcIitcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v6Zai5pWw44CA5pWw5a2X44Gu44K744OD44OIXHJcbiAgZnVuY3Rpb24gbnVtX3NldCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJhZ2dhYmxlLWVsZW1cIik7XHJcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICBkaXYuc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcclxuICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xyXG4gICAgICBkaXYuc3R5bGUubGluZUhlaWdodCA9IFwiNTBweFwiO1xyXG4gICAgICBkaXYuc3R5bGUuY29sb3IgPSBcIiMzMzNcIjtcclxuICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgZGl2LnN0eWxlLmZvbnRTaXplID0gXCIzMHB4XCI7XHJcbiAgICAgIGRpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICBkaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMCVcIjtcclxuICAgICAgZGl2LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMzMzNcIjtcclxuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnRFdmVudCwgZmFsc2UpO1xyXG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaE1vdmVFdmVudCwgZmFsc2UpO1xyXG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRvdWNoRW5kRXZlbnQsIGZhbHNlKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1fcGFsbGV0XCIpLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+ODnuOCpuOCueOBp+OBruODieODqeODg+OCsOOCkuWPr+iDveOBq+OBmeOCi+OAglxyXG4gIHZhciBkcmFnZ2VkO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJkcmFnc3RhcnRcIixcclxuICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAvLyBzdG9yZSBhIHJlZi4gb24gdGhlIGRyYWdnZWQgZWxlbVxyXG4gICAgICBkcmFnZ2VkID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAvLyBtYWtlIGl0IGhhbGYgdHJhbnNwYXJlbnRcclxuICAgIH0sXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIC8qIGV2ZW50cyBmaXJlZCBvbiB0aGUgZHJvcCB0YXJnZXRzICovXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiZHJhZ292ZXJcIixcclxuICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiZHJvcFwiLFxyXG4gICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24gKG9wZW4gYXMgbGluayBmb3Igc29tZSBlbGVtZW50cylcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLy8gbW92ZSBkcmFnZ2VkIGVsZW0gdG8gdGhlIHNlbGVjdGVkIGRyb3AgdGFyZ2V0XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09IFwiZHJvcHBhYmxlLWVsZW1cIikge1xyXG4gICAgICAgIGRyYWdnZWQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkKTtcclxuICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ2dlZCk7XHJcbiAgICAgICAgLy/mlbDjg5Hjg6zjg4Pjg4jlhoXjga7mlbDlrZfjgpLkuIDml6bmtojljrtcclxuICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1fcGFsbGV0XCIpO1xyXG4gICAgICAgIHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgZWxlLnJlbW92ZUNoaWxkKGVsZS5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbnVtX3NldCgpO1xyXG4gICAgICAgIGtvdGFlX2lucHV0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImRyb3BwYWJsZS1lbGVtLTJcIiAmJiBkcmFnZ2VkLnRhZ05hbWUgPT0gXCJJTUdcIikge1xyXG4gICAgICAgIGRyYWdnZWQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnZ2VkKTtcclxuICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQoZHJhZ2dlZCk7XHJcbiAgICAgICAgaW1nX2t1cmlhZ2FyaSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGEucGkuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnBpLnBsYXkoKTtcclxuICAgIH0sXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIC8v44OJ44Op44OD44Kw6ZaL5aeL44Gu5pON5L2cXHJcbiAgZnVuY3Rpb24gdG91Y2hTdGFydEV2ZW50KGV2ZW50KSB7XHJcbiAgICAvL+OCv+ODg+ODgeOBq+OCiOOCi+eUu+mdouOCueOCr+ODreODvOODq+OCkuatouOCgeOCi1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8v44OJ44Op44OD44Kw5Lit44Gu5pON5L2cXHJcbiAgZnVuY3Rpb24gdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL+ODieODqeODg+OCsOS4reOBruOCouOCpOODhuODoOOCkuOCq+ODvOOCveODq+OBruS9jee9ruOBq+i/veW+k1xyXG4gICAgdmFyIGRyYWdnZWRFbGVtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUudG9wID0gdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQgLSBkcmFnZ2VkRWxlbS5vZmZzZXRIZWlnaHQgLyAyICsgXCJweFwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmxlZnQgPSB0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCAtIGRyYWdnZWRFbGVtLm9mZnNldFdpZHRoIC8gMiArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIC8v44OJ44Op44OD44Kw57WC5LqG5b6M44Gu5pON5L2cXHJcbiAgZnVuY3Rpb24gdG91Y2hFbmRFdmVudChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8v44OJ44Op44OD44Kw5Lit44Gu5pON5L2c44Gu44Gf44KB44Gr5aSJ5pu044GX44Gm44GE44Gf44K544K/44Kk44Or44KS5YWD44Gr5oi744GZXHJcbiAgICB2YXIgZHJvcHBlZEVsZW0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBkcm9wcGVkRWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUudG9wID0gXCJcIjtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5sZWZ0ID0gXCJcIjtcclxuICAgIC8v44OJ44Ot44OD44OX44GX44Gf5L2N572u44Gr44GC44KL44OJ44Ot44OD44OX5Y+v6IO944Gq44Ko44Os44Oh44Oz44OI44Gr6Kaq5a2Q5LuY44GR44GZ44KLXHJcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgIC8v44K544Kv44Ot44O844Or5YiG44KS5Yqg5ZGz44GX44Gf5bqn5qiZ44Gr5a2Y5Zyo44GZ44KL44Ko44Os44Oh44Oz44OI44KS5paw44GX44GE6Kaq44Go44GZ44KLXHJcbiAgICB2YXIgbmV3UGFyZW50RWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2gucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQsIHRvdWNoLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0KTtcclxuICAgIGlmIChuZXdQYXJlbnRFbGVtLmNsYXNzTmFtZSA9PSBcImRyb3BwYWJsZS1lbGVtXCIpIHtcclxuICAgICAgbmV3UGFyZW50RWxlbS5hcHBlbmRDaGlsZChkcm9wcGVkRWxlbSk7XHJcbiAgICAgIC8v5pWw44OR44Os44OD44OI5YaF44Gu5pWw5a2X44KS5LiA5pem5raI5Y67XHJcbiAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bV9wYWxsZXRcIik7XHJcbiAgICAgIHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG51bV9zZXQoKTtcclxuICAgICAga290YWVfaW5wdXQoKTtcclxuICAgIH1cclxuICAgIGRhdGEucGkuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5waS5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICAvL+ODieODqeODg+OCsOe1guS6huW+jOOBruaTjeS9nDJcclxuICBmdW5jdGlvbiB0b3VjaEVuZEV2ZW50XzIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL+ODieODqeODg+OCsOS4reOBruaTjeS9nOOBruOBn+OCgeOBq+WkieabtOOBl+OBpuOBhOOBn+OCueOCv+OCpOODq+OCkuWFg+OBq+aIu+OBmVxyXG4gICAgdmFyIGRyb3BwZWRFbGVtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgZHJvcHBlZEVsZW0uc3R5bGUucG9zaXRpb24gPSBcIlwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUubGVmdCA9IFwiXCI7XHJcbiAgICAvL+ODieODreODg+ODl+OBl+OBn+S9jee9ruOBq+OBguOCi+ODieODreODg+ODl+WPr+iDveOBquOCqOODrOODoeODs+ODiOOBq+imquWtkOS7mOOBkeOBmeOCi1xyXG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAvL+OCueOCr+ODreODvOODq+WIhuOCkuWKoOWRs+OBl+OBn+W6p+aomeOBq+WtmOWcqOOBmeOCi+OCqOODrOODoeODs+ODiOOCkuaWsOOBl+OBhOimquOBqOOBmeOCi1xyXG4gICAgdmFyIG5ld1BhcmVudEVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCB0b3VjaC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgICBpZiAobmV3UGFyZW50RWxlbS5jbGFzc05hbWUgPT0gXCJkcm9wcGFibGUtZWxlbS0yXCIpIHtcclxuICAgICAgbmV3UGFyZW50RWxlbS5hcHBlbmRDaGlsZChkcm9wcGVkRWxlbSk7XHJcbiAgICB9XHJcbiAgICBkYXRhLnBpLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucGkucGxheSgpO1xyXG4gICAgaW1nX2t1cmlhZ2FyaSgpO1xyXG4gIH1cclxuXHJcbiAgLy/jgY/jgorkuIrjgYzjgorjga7mk43kvZxcclxuICBmdW5jdGlvbiBpbWdfa3VyaWFnYXJpKCkge1xyXG4gICAgY29uc3QgaW1nX2FyciA9IFtcImljaGllblwiLCBcImp1dWVuXCIsIFwiaHlha3VlblwiLCBcInNlbmVuXCJdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgdmFyIGNvdW50ID0gVEJMXzIucm93c1szXS5jZWxsc1szIC0gal0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpbWdfYXJyW2pdKS5sZW5ndGg7XHJcbiAgICAgIGlmIChjb3VudCA+IDkpIHtcclxuICAgICAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBkYXRhLnJlc2V0LnBsYXkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgIFRCTF8yLnJvd3NbM10uY2VsbHNbMyAtIGpdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaW1nX2FycltqXSlbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ19zdHlsZShqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW1nX3N0eWxlKGopIHtcclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2UvXCIgKyBpbWdfYXJyW2ogKyAxXSArIFwiLnBuZ1wiKTtcclxuICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGltZ19hcnJbaiArIDFdKTtcclxuICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIyNXB4XCI7XHJcbiAgICAgIGlmIChqID09IDIpIHtcclxuICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgfVxyXG4gICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gXCIyNXB4XCI7XHJcbiAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0RXZlbnQsIGZhbHNlKTtcclxuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hNb3ZlRXZlbnQsIGZhbHNlKTtcclxuICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZEV2ZW50XzIsIGZhbHNlKTtcclxuICAgICAgVEJMXzIucm93c1swXS5jZWxsc1syIC0gal0uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGloaSgpIHtcclxuICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44Gy44GN566X44Gu44Gy44Gj566XXCI7XHJcbiAgLy/liJ3mnJ/oqK3lrpotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBsZXQgaGlnZW5zdSA9IDQ1NjtcclxuICBsZXQgZ2Vuc3UgPSAxMjM7XHJcbiAgbGV0IG1heF9rZXRhID0gNDtcclxuICBsZXQgc2E7XHJcbiAgbGV0IGt1cmlzYWdhcmkgPSAwO1xyXG4gIGxldCBoaWdlbnN1X2FyciA9IFtdO1xyXG4gIGxldCBnZW5zdV9hcnIgPSBbXTtcclxuICBsZXQgc2FfYXJyID0gW107XHJcbiAgbGV0IGhpZ2Vuc3Vfa2V0YTtcclxuICBsZXQgZ2Vuc3Vfa2V0YTtcclxuICBsZXQgc2Ffa2V0YTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YlwiKS5pbm5lckhUTUwgPSBgXHJcbiAgPHNlbGVjdCBpZD1cImhpa3VfdHlwZVwiIHN0eWxlPVwiZm9udC1zaXplOjE2cHhcIj5cclxuICA8b3B0aW9uIHZhbHVlPVwiMVwiPijvvJLjgZHjgZ8pLSjvvJLjgZHjgZ8pPC9vcHRpb24+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4o77yT44GR44GfKS0o77yS44GR44GfKTwvb3B0aW9uPlxyXG4gIDxvcHRpb24gdmFsdWU9XCIzXCI+KO+8kuOBkeOBnyktKO+8k+OBkeOBnyk8L29wdGlvbj5cclxuICA8b3B0aW9uIHZhbHVlPVwiNFwiPijvvJPjgZHjgZ8pLSjvvJPjgZHjgZ8pPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuOCr+ODquOColwiIGlkPVwiY2xlYXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiLz4gICAgXHJcbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuOCguOCk+OBoOOBhFwiIGlkPVwibW9uZGFpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIi8+ICAgIFxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjgrvjg4Pjg4hcIiBpZD1cInNldFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIvPiAgICBcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44GT44Gf44GIXCIgaWQ9XCJrb3RhZVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIi8+ICAgIFxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBpZD1cInNoaWtpXCIgc3R5bGU9XCJkaXNwbGF5OmZsZXg7IG1hcmdpbjoxMHB4O1wiPlxyXG4gICAgPGlucHV0IGlkPVwiYm94MVwiIHR5cGU9XCJudW1iZXJcIiBtYXg9OTk5IG1pbj0xMCBjbGFzcz1cImtlaXNhbl9zaGlraVwiLz5cclxuICAgIDxkaXYgICBpZD1cImJveDJcIiB0eXBlPVwibnVtYmVyXCIgc3R5bGU9XCJ3aWR0aDo1MHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTozNnB4O1wiIGNsYXNzPVwia2lnb1wiPi08L2Rpdj5cclxuICAgIDxpbnB1dCBpZD1cImJveDNcIiB0eXBlPVwibnVtYmVyXCIgbWF4PTk5OSBtaW49MTAgY2xhc3M9XCJrZWlzYW5fc2hpa2lcIi8+XHJcbiAgICA8ZGl2ICAgaWQ9XCJib3g0XCIgdHlwZT1cIm51bWJlclwiIHN0eWxlPVwid2lkdGg6NTBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MzZweDtcIiBjbGFzcz1cImtpZ29cIj49PC9kaXY+XHJcbiAgICA8aW5wdXQgaWQ9XCJib3g1XCIgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwia2Vpc2FuX3NoaWtpXCIvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgIHN0eWxlPVwiZGlzcGxheTpmbGV4O21hcmdpbjoxMHB4O1wiPlxyXG4gICAgPHRhYmxlPlxyXG4gICAgPHRib2R5IGlkPVwiVEJMXCI+XHJcbiAgICA8L3Rib2RleT5cclxuICAgIDwvdGFibGU+XHJcbiAgICA8ZGl2IGlkPVwiZmllbGRcIj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgLy8tLeWQhOODnOOCv+ODs+OBruioreWumi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImNsZWFyXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1hc3VfY2xlYXIoKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb25kYWlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNodXR1ZGFpKCkpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb25kYWlfc2V0KCkpO1xyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJrb3RhZVwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93X2Fuc3dlcigpKTtcclxuXHJcbiAgLy/lvI/jg5zjg4Pjgq/jgrnjga7oqK3lrpotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBib3gxLnZhbHVlID0gaGlnZW5zdTtcclxuICBib3gzLnZhbHVlID0gZ2Vuc3U7XHJcblxyXG4gIGJveDUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBpZiAoYm94NS52YWx1ZSA9PSB3YSkge1xyXG4gICAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgZGF0YS5zZWlrYWkxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5zZWlrYWkxLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy/nrYbnrpfjg57jgrnjga7lrprnvqktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICB0ci5zdHlsZS5tYXhIZWlnaHQgPSBcIjYwcHhcIjtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF4X2tldGE7IGorKykge1xyXG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgdGQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzMzM1wiO1xyXG4gICAgICB0ZC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICB0ZC5zdHlsZS5tYXhXaWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICB0ZC5zdHlsZS5oZWlnaHQgPSBcIjYwcHhcIjtcclxuICAgICAgdGQuc3R5bGUubWF4SGVpZ2h0ID0gXCI2MHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLmZvbnRTaXplID0gXCIzMHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgIC8vIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICBpZiAoaSA9PSAwIHx8IGkgPT0gMykge1xyXG4gICAgICAgIHRkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcHBhYmxlLWVsZW1cIik7XHJcbiAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNGRjNGZmXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFRCTC5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICBUQkwuc3R5bGUuaGVpZ2h0ID0gXCIyNDBweFwiO1xyXG4gIH1cclxuXHJcbiAgLy/jgYrph5Hjg5Hjg6zjg4Pjg4jjga7oqK3nva4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IFRCTF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gIGZpZWxkLmFwcGVuZENoaWxkKFRCTF8yKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICB0ci5zdHlsZS5tYXhIZWlnaHQgPSBcIjYwcHhcIjtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF4X2tldGE7IGorKykge1xyXG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgdGQuc3R5bGUuZm9udFNpemUgPSBcIjM2cHhcIjtcclxuICAgICAgdGQuc3R5bGUubGluZUhlaWdodCA9IFwiMjRweFwiO1xyXG4gICAgICB0ZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzMzXCI7XHJcbiAgICAgIHRkLnN0eWxlLndpZHRoID0gXCIxNTBweFwiO1xyXG4gICAgICB0ZC5zdHlsZS5tYXhXaWR0aCA9IFwiMTUwcHhcIjtcclxuICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gXCI2MHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLm1heEhlaWdodCA9IFwiNjBweFwiO1xyXG4gICAgICBpZiAoaiA9PSAwKSB7XHJcbiAgICAgICAgdGQuc3R5bGUud2lkdGggPSBcIjYwcHhcIjtcclxuICAgICAgICB0ZC5zdHlsZS5tYXhXaWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICB9XHJcbiAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuXHJcbiAgICAgIHRkLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIHRkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcHBhYmxlLWVsZW0tMlwiKTtcclxuICAgICAgaWYgKGkgPT0gMCB8fCBpID09IDMpIHtcclxuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0ZGM0ZmZcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgVEJMXzIuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgVEJMXzIuc3R5bGUuaGVpZ2h0ID0gXCIyNDBweFwiO1xyXG4gICAgVEJMXzIuc3R5bGUubWFyZ2luTGVmdCA9IFwiMTBweFwiO1xyXG4gIH1cclxuXHJcbiAgLy/mlbDlrZfjg5Hjg6zjg4Pjg4jjga7oqK3nva5cclxuICBjb25zdCBudW1fcGFsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBudW1fcGFsbGV0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBudW1fcGFsbGV0LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gIG51bV9wYWxsZXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJudW1fcGFsbGV0XCIpO1xyXG4gIG51bV9wYWxsZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wcGFibGUtZWxlbVwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG51bV9wYWxsZXQpO1xyXG5cclxuICBoaXNzYW5fc2V0KCk7XHJcbiAgbnVtX3NldCgpO1xyXG5cclxuICAvL+OBk+OBk+OBi+OCiemWouaVsC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy/plqLmlbDjgIDjg57jgrnlhoXjga7mlbDlrZfjgpLjgq/jg6rjgqJcclxuICBmdW5jdGlvbiBtYXN1X2NsZWFyKCkge1xyXG4gICAgZGF0YS5yZXNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnJlc2V0LnBsYXkoKTtcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2xdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFRCTC5yb3dzWzJdLmNlbGxzWzBdLmlubmVySFRNTCA9IFwiLVwiO1xyXG4gICAgYm94MS52YWx1ZSA9IFwiXCI7XHJcbiAgICBib3gzLnZhbHVlID0gXCJcIjtcclxuICAgIGJveDUudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA5ZWP6aGM44KS44Op44Oz44OA44Og44Gr5Ye644GZXHJcbiAgZnVuY3Rpb24gc2h1dHVkYWkoKSB7XHJcbiAgICBzd2l0Y2ggKGhpa3VfdHlwZS52YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgIGhpZ2Vuc3UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MCArIDEwKTtcclxuICAgICAgICBnZW5zdSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdlbnN1IC0gMTApICsgMTApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgIGhpZ2Vuc3UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MDAgKyAxMDApO1xyXG4gICAgICAgIGdlbnN1ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAgKyAxMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgaGlnZW5zdSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCArIDEwMCk7XHJcbiAgICAgICAgZ2Vuc3UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaGlnZW5zdSAtIDEwMCkgKyAxMDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgYm94MS52YWx1ZSA9IGhpZ2Vuc3U7XHJcbiAgICBib3gzLnZhbHVlID0gZ2Vuc3U7XHJcbiAgICBoaXNzYW5fc2V0KCk7XHJcbiAgICBkYXRhLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICAvLyDplqLmlbDjgIDllY/poYzjgpLjgrvjg4Pjg4jjgZnjgotcclxuICBmdW5jdGlvbiBtb25kYWlfc2V0KCkge1xyXG4gICAgaGlzc2FuX3NldCgpO1xyXG4gICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZXQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA562U44GI44Gu6KGo56S6XHJcbiAgZnVuY3Rpb24gc2hvd19hbnN3ZXIoKSB7XHJcbiAgICBib3g1LnZhbHVlID0gc2E7XHJcbiAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJibHVlXCI7XHJcbiAgICBkYXRhLnNlaWthaTIuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZWlrYWkyLnBsYXkoKTtcclxuICAgIC8v44GP44KK5LiL44GM44KK44Gu6KGo56S6XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBNYXRoLm1heChoaWdlbnN1X2tldGEsIGdlbnN1X2tldGEpIC0gMTsgY29sKyspIHtcclxuICAgICAgaWYgKE1hdGguZmxvb3IoaGlnZW5zdV9hcnJbY29sXSAtIGdlbnN1X2Fycltjb2xdIC0ga3VyaXNhZ2FyaSkgPCAwKSB7XHJcbiAgICAgICAgVEJMLnJvd3NbMF0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAxXS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgXCI8c3BhbiBzdHlsZT0nY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB4O3ZlcnRpY2FsLWFsaWduOmJvdHRvbTsnPlwiICtcclxuICAgICAgICAgIFwiMTBcIiArXHJcbiAgICAgICAgICBcIjwvc3Bhbj5cIjtcclxuICAgICAgICBUQkwucm93c1sxXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDJdLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBcIjxzcGFuIGNsYXNzPSduYW5hbWUxJz5cIiArXHJcbiAgICAgICAgICBoaWdlbnN1X2Fycltjb2wgKyAxXSArXHJcbiAgICAgICAgICBcIjwvc3Bhbj5cIiArXHJcbiAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHg7dmVydGljYWwtYWxpZ246dG9wOyc+XCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcihoaWdlbnN1X2Fycltjb2wgKyAxXSAtIDEpICtcclxuICAgICAgICAgIFwiPC9zcGFuPlwiO1xyXG4gICAgICAgIGt1cmlzYWdhcmkgPSAxO1xyXG4gICAgICB9IGVsc2Uga3VyaXNhZ2FyaSA9IDA7XHJcbiAgICAgIC8v77yS5Zue57mw44KK5LiL44GM44KK44CA44GL44Gk44CA6KKr5rib5pWw44GuMTDjga7kvY3jgYww44Gu5pmCXHJcbiAgICAgIGlmIChcclxuICAgICAgICBNYXRoLmZsb29yKGhpZ2Vuc3VfYXJyWzBdIC0gZ2Vuc3VfYXJyWzBdKSA8IDAgJiZcclxuICAgICAgICBoaWdlbnN1X2FyclsxXSA9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIFRCTC5yb3dzWzBdLmNlbGxzWzJdLmlubmVySFRNTCA9XHJcbiAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHg7dmVydGljYWwtYWxpZ246Ym90dG9tOyc+XCIgK1xyXG4gICAgICAgICAgXCI5XCIgK1xyXG4gICAgICAgICAgXCI8L3NwYW4+XCI7XHJcbiAgICAgICAgVEJMLnJvd3NbMV0uY2VsbHNbMl0uaW5uZXJIVE1MID0gXCIwXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8v562G566X44Gu562U44GI6KGo56S6XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzYV9rZXRhOyBjb2wrKykge1xyXG4gICAgICBUQkwucm93c1szXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDFdLmlubmVySFRNTCA9IHNhX2Fycltjb2xdO1xyXG4gICAgfVxyXG4gICAgLy/nrZTjgYjjga7ooajnpLrjga7mmYLvvIzjgYrph5HjgpLkuKbjgbnnm7TjgZnjgYvjga/opoHmpJzoqI5cclxuICB9XHJcblxyXG4gIC8vIOmWouaVsOOAgOetlOOBiOOBruWFpeWKmy0tLS0tLS0tLS0tLS0tLVxyXG4gIGZ1bmN0aW9uIGtvdGFlX2lucHV0KCkge1xyXG4gICAgaGlnZW5zdSA9IE1hdGguZmxvb3IoYm94MS52YWx1ZSk7XHJcbiAgICBnZW5zdSA9IE1hdGguZmxvb3IoYm94My52YWx1ZSk7XHJcbiAgICBzYSA9IE1hdGguZmxvb3IoaGlnZW5zdSAtIGdlbnN1KTtcclxuICAgIGJveDUudmFsdWUgPVxyXG4gICAgICBOdW1iZXIoVEJMLnJvd3NbM10uY2VsbHNbMF0uaW5uZXJUZXh0KSAqIDEwMDAgK1xyXG4gICAgICBOdW1iZXIoVEJMLnJvd3NbM10uY2VsbHNbMV0uaW5uZXJUZXh0KSAqIDEwMCArXHJcbiAgICAgIE51bWJlcihUQkwucm93c1szXS5jZWxsc1syXS5pbm5lclRleHQpICogMTAgK1xyXG4gICAgICBOdW1iZXIoVEJMLnJvd3NbM10uY2VsbHNbM10uaW5uZXJUZXh0KSAqIDE7XHJcbiAgICBpZiAoYm94NS52YWx1ZSA9PSBzYSkge1xyXG4gICAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgZGF0YS5zZWlrYWkxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5zZWlrYWkxLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+mWouaVsOOAgOethueul+OBruaPj+eUuy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGZ1bmN0aW9uIGhpc3Nhbl9zZXQoKSB7XHJcbiAgICBoaWdlbnN1ID0gTWF0aC5mbG9vcihib3gxLnZhbHVlKTtcclxuICAgIGdlbnN1ID0gTWF0aC5mbG9vcihib3gzLnZhbHVlKTtcclxuICAgIGlmIChoaWdlbnN1ID4gOTk5IHx8IGdlbnN1ID4gOTk5IHx8IGhpZ2Vuc3UgPCAwIHx8IGdlbnN1IDwgMCkge1xyXG4gICAgICBkYXRhLmFsZXJ0LnBsYXkoKTtcclxuICAgICAgYWxlcnQoXCLmlbDlrZfjga8x772eOTk544G+44Gn44Gr44GX44Gm44GP44Gg44GV44GE44CCXCIpO1xyXG4gICAgICBib3gxLnZhbHVlID0gXCJcIjtcclxuICAgICAgYm94My52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChoaWdlbnN1IDwgZ2Vuc3UpIHtcclxuICAgICAgZGF0YS5hbGVydC5wbGF5KCk7XHJcbiAgICAgIGFsZXJ0KFwi5byV44GL44KM44KL5pWw44Gv77yM5byV44GP5pWw44KI44KK44KC5aSn44GN44GP44GX44Gm44GP44Gg44GV44GE44CCXCIpO1xyXG4gICAgICBib3gxLnZhbHVlID0gXCJcIjtcclxuICAgICAgYm94My52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICBzYSA9IE1hdGguZmxvb3IoaGlnZW5zdSAtIGdlbnN1KTtcclxuICAgIGJveDEudmFsdWUgPSBoaWdlbnN1O1xyXG4gICAgYm94My52YWx1ZSA9IGdlbnN1O1xyXG4gICAgYm94NS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgLy/mlbDlrZfjgpLphY3liJfjgajjgZfjgabku6PlhaVcclxuICAgIGhpZ2Vuc3Vfa2V0YSA9IFN0cmluZyhoaWdlbnN1KS5sZW5ndGg7XHJcbiAgICBnZW5zdV9rZXRhID0gU3RyaW5nKGdlbnN1KS5sZW5ndGg7XHJcbiAgICBzYV9rZXRhID0gU3RyaW5nKHNhKS5sZW5ndGg7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWdlbnN1X2tldGE7IGkrKykge1xyXG4gICAgICBoaWdlbnN1X2FycltpXSA9IE51bWJlcihTdHJpbmcoaGlnZW5zdSkuY2hhckF0KGhpZ2Vuc3Vfa2V0YSAtIGkgLSAxKSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlbnN1X2tldGE7IGkrKykge1xyXG4gICAgICBnZW5zdV9hcnJbaV0gPSBOdW1iZXIoU3RyaW5nKGdlbnN1KS5jaGFyQXQoZ2Vuc3Vfa2V0YSAtIGkgLSAxKSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhX2tldGE7IGkrKykge1xyXG4gICAgICBzYV9hcnJbaV0gPSBOdW1iZXIoU3RyaW5nKHNhKS5jaGFyQXQoc2Ffa2V0YSAtIGkgLSAxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3V1amlfc2V0KCk7XHJcbiAgICBva2FuZV9zZXQoKTtcclxuICB9XHJcblxyXG4gIC8v44Oe44K55YaF44Gr44GK6YeR44KS5Lim44G544KLLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBmdW5jdGlvbiBva2FuZV9zZXQoKSB7XHJcbiAgICAvL+S4gOW6puOAgOODnuOCueWGheOBruOBiumHkeOCkuOCr+ODquOColxyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICBUQkxfMi5yb3dzW3Jvd10uY2VsbHNbY29sXS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1nX2FyciA9IFtcImljaGllblwiLCBcImp1dWVuXCIsIFwiaHlha3VlblwiXTtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGhpZ2Vuc3Vfa2V0YTsgY29sKyspIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWdlbnN1X2Fycltjb2xdOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlL1wiICsgaW1nX2Fycltjb2xdICsgXCIucG5nXCIpO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBpbWdfYXJyW2NvbF0pO1xyXG4gICAgICAgIGltZy5zdHlsZS53aWR0aCA9IFwiMjVweFwiO1xyXG4gICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjI1cHhcIjtcclxuICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnRFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoTW92ZUV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZEV2ZW50XzIsIGZhbHNlKTtcclxuICAgICAgICBUQkxfMi5yb3dzWzFdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgoaGlnZW5zdSA8IDEwMCkgJiAoZ2Vuc3UgPCAxMDApKSB7XHJcbiAgICAgIFRCTF8yLnJvd3NbMl0uY2VsbHNbMV0uaW5uZXJIVE1MID0gXCItXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUQkxfMi5yb3dzWzJdLmNlbGxzWzBdLmlubmVySFRNTCA9IFwiLVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/jg57jgrnlhoXjgavmlbDlrZfjgpLmm7jjgY3ovrzjgoAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24gc3V1amlfc2V0KCkge1xyXG4gICAgLy/kuIDluqbjgIDjg57jgrnlhoXjga7mlbDlrZfjgpLjgq/jg6rjgqJcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2xdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8v44Oe44K55YaF44Gr5pWw5a2X44KS5Luj5YWlXHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBoaWdlbnN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzWzFdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJIVE1MID0gaGlnZW5zdV9hcnJbY29sXTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGdlbnN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzWzJdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJIVE1MID0gZ2Vuc3VfYXJyW2NvbF07XHJcbiAgICB9XHJcbiAgICBpZiAoKGhpZ2Vuc3UgPCAxMDApICYgKGdlbnN1IDwgMTAwKSkge1xyXG4gICAgICBUQkwucm93c1syXS5jZWxsc1sxXS5pbm5lckhUTUwgPSBcIi1cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFRCTC5yb3dzWzJdLmNlbGxzWzBdLmlubmVySFRNTCA9IFwiLVwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/plqLmlbDjgIDmlbDlrZfjga7jgrvjg4Pjg4hcclxuICBmdW5jdGlvbiBudW1fc2V0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBpO1xyXG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcmFnZ2FibGUtZWxlbVwiKTtcclxuICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XHJcbiAgICAgIGRpdi5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xyXG4gICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XHJcbiAgICAgIGRpdi5zdHlsZS5saW5lSGVpZ2h0ID0gXCI1MHB4XCI7XHJcbiAgICAgIGRpdi5zdHlsZS5jb2xvciA9IFwiIzMzM1wiO1xyXG4gICAgICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBkaXYuc3R5bGUuZm9udFNpemUgPSBcIjMwcHhcIjtcclxuICAgICAgZGl2LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgIGRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwJVwiO1xyXG4gICAgICBkaXYuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzMzM1wiO1xyXG4gICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydEV2ZW50LCBmYWxzZSk7XHJcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoTW92ZUV2ZW50LCBmYWxzZSk7XHJcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRFdmVudCwgZmFsc2UpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bV9wYWxsZXRcIikuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v44Oe44Km44K544Gn44Gu44OJ44Op44OD44Kw44KS5Y+v6IO944Gr44GZ44KL44CCXHJcbiAgdmFyIGRyYWdnZWQ7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImRyYWdzdGFydFwiLFxyXG4gICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIC8vIHN0b3JlIGEgcmVmLiBvbiB0aGUgZHJhZ2dlZCBlbGVtXHJcbiAgICAgIGRyYWdnZWQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIC8vIG1ha2UgaXQgaGFsZiB0cmFuc3BhcmVudFxyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgLyogZXZlbnRzIGZpcmVkIG9uIHRoZSBkcm9wIHRhcmdldHMgKi9cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJkcmFnb3ZlclwiLFxyXG4gICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyBkcm9wXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9LFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJkcm9wXCIsXHJcbiAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAob3BlbiBhcyBsaW5rIGZvciBzb21lIGVsZW1lbnRzKVxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvLyBtb3ZlIGRyYWdnZWQgZWxlbSB0byB0aGUgc2VsZWN0ZWQgZHJvcCB0YXJnZXRcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gXCJkcm9wcGFibGUtZWxlbVwiKSB7XHJcbiAgICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWQpO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcclxuICAgICAgICAvL+aVsOODkeODrOODg+ODiOWGheOBruaVsOWtl+OCkuS4gOaXpua2iOWOu1xyXG4gICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bV9wYWxsZXRcIik7XHJcbiAgICAgICAgd2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBudW1fc2V0KCk7XHJcbiAgICAgICAga290YWVfaW5wdXQoKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NOYW1lID09IFwiZHJvcHBhYmxlLWVsZW0tMlwiICYmXHJcbiAgICAgICAgZHJhZ2dlZC50YWdOYW1lID09IFwiSU1HXCJcclxuICAgICAgKSB7XHJcbiAgICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWQpO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcclxuICAgICAgICBpbWdfa3VyaXNhZ2FyaSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGEucGkuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnBpLnBsYXkoKTtcclxuICAgIH0sXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIC8v44OJ44Op44OD44Kw6ZaL5aeL44Gu5pON5L2cXHJcbiAgZnVuY3Rpb24gdG91Y2hTdGFydEV2ZW50KGV2ZW50KSB7XHJcbiAgICAvL+OCv+ODg+ODgeOBq+OCiOOCi+eUu+mdouOCueOCr+ODreODvOODq+OCkuatouOCgeOCi1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8v44OJ44Op44OD44Kw5Lit44Gu5pON5L2cXHJcbiAgZnVuY3Rpb24gdG91Y2hNb3ZlRXZlbnQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL+ODieODqeODg+OCsOS4reOBruOCouOCpOODhuODoOOCkuOCq+ODvOOCveODq+OBruS9jee9ruOBq+i/veW+k1xyXG4gICAgdmFyIGRyYWdnZWRFbGVtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUudG9wID1cclxuICAgICAgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQgLSBkcmFnZ2VkRWxlbS5vZmZzZXRIZWlnaHQgLyAyICsgXCJweFwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmxlZnQgPVxyXG4gICAgICB0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCAtIGRyYWdnZWRFbGVtLm9mZnNldFdpZHRoIC8gMiArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIC8v44OJ44Op44OD44Kw57WC5LqG5b6M44Gu5pON5L2cXHJcbiAgZnVuY3Rpb24gdG91Y2hFbmRFdmVudChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8v44OJ44Op44OD44Kw5Lit44Gu5pON5L2c44Gu44Gf44KB44Gr5aSJ5pu044GX44Gm44GE44Gf44K544K/44Kk44Or44KS5YWD44Gr5oi744GZXHJcbiAgICB2YXIgZHJvcHBlZEVsZW0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBkcm9wcGVkRWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwiXCI7XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUudG9wID0gXCJcIjtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5sZWZ0ID0gXCJcIjtcclxuICAgIC8v44OJ44Ot44OD44OX44GX44Gf5L2N572u44Gr44GC44KL44OJ44Ot44OD44OX5Y+v6IO944Gq44Ko44Os44Oh44Oz44OI44Gr6Kaq5a2Q5LuY44GR44GZ44KLXHJcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgIC8v44K544Kv44Ot44O844Or5YiG44KS5Yqg5ZGz44GX44Gf5bqn5qiZ44Gr5a2Y5Zyo44GZ44KL44Ko44Os44Oh44Oz44OI44KS5paw44GX44GE6Kaq44Go44GZ44KLXHJcbiAgICB2YXIgbmV3UGFyZW50RWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoXHJcbiAgICAgIHRvdWNoLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LFxyXG4gICAgICB0b3VjaC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgKTtcclxuICAgIGlmIChuZXdQYXJlbnRFbGVtLmNsYXNzTmFtZSA9PSBcImRyb3BwYWJsZS1lbGVtXCIpIHtcclxuICAgICAgbmV3UGFyZW50RWxlbS5hcHBlbmRDaGlsZChkcm9wcGVkRWxlbSk7XHJcbiAgICAgIC8v5pWw44OR44Os44OD44OI5YaF44Gu5pWw5a2X44KS5LiA5pem5raI5Y67XHJcbiAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bV9wYWxsZXRcIik7XHJcbiAgICAgIHdoaWxlIChlbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG51bV9zZXQoKTtcclxuICAgICAga290YWVfaW5wdXQoKTtcclxuICAgIH1cclxuICAgIGRhdGEucGkuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5waS5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICAvL+ODieODqeODg+OCsOe1guS6huW+jOOBruaTjeS9nDJcclxuICBmdW5jdGlvbiB0b3VjaEVuZEV2ZW50XzIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL+ODieODqeODg+OCsOS4reOBruaTjeS9nOOBruOBn+OCgeOBq+WkieabtOOBl+OBpuOBhOOBn+OCueOCv+OCpOODq+OCkuWFg+OBq+aIu+OBmVxyXG4gICAgdmFyIGRyb3BwZWRFbGVtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgZHJvcHBlZEVsZW0uc3R5bGUucG9zaXRpb24gPSBcIlwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUubGVmdCA9IFwiXCI7XHJcbiAgICAvL+ODieODreODg+ODl+OBl+OBn+S9jee9ruOBq+OBguOCi+ODieODreODg+ODl+WPr+iDveOBquOCqOODrOODoeODs+ODiOOBq+imquWtkOS7mOOBkeOBmeOCi1xyXG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAvL+OCueOCr+ODreODvOODq+WIhuOCkuWKoOWRs+OBl+OBn+W6p+aomeOBq+WtmOWcqOOBmeOCi+OCqOODrOODoeODs+ODiOOCkuaWsOOBl+OBhOimquOBqOOBmeOCi1xyXG4gICAgdmFyIG5ld1BhcmVudEVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KFxyXG4gICAgICB0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXRcclxuICAgICk7XHJcbiAgICBpZiAobmV3UGFyZW50RWxlbS5jbGFzc05hbWUgPT0gXCJkcm9wcGFibGUtZWxlbS0yXCIpIHtcclxuICAgICAgbmV3UGFyZW50RWxlbS5hcHBlbmRDaGlsZChkcm9wcGVkRWxlbSk7XHJcbiAgICB9XHJcbiAgICBkYXRhLnBpLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucGkucGxheSgpO1xyXG4gICAgaW1nX2t1cmlzYWdhcmkoKTtcclxuICB9XHJcblxyXG4gIC8v44GP44KK5LiK44GM44KK44Gu5pON5L2cXHJcbiAgZnVuY3Rpb24gaW1nX2t1cmlzYWdhcmkoKSB7XHJcbiAgICBjb25zdCBpbWdfYXJyID0gW1wiaWNoaWVuXCIsIFwianV1ZW5cIiwgXCJoeWFrdWVuXCJdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgdmFyIGNvdW50ID0gVEJMXzIucm93c1swXS5jZWxsc1szIC0gal0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICBpbWdfYXJyW2ogKyAxXVxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgaWYgKGNvdW50ID09IDEpIHtcclxuICAgICAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBkYXRhLnJlc2V0LnBsYXkoKTtcclxuICAgICAgICBUQkxfMi5yb3dzWzBdLmNlbGxzWzMgLSBqXVxyXG4gICAgICAgICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaW1nX2FycltqICsgMV0pWzBdXHJcbiAgICAgICAgICAucmVtb3ZlKCk7XHJcbiAgICAgICAgaW1nX3N0eWxlKGopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbWdfc3R5bGUoaikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlL1wiICsgaW1nX2FycltqXSArIFwiLnBuZ1wiKTtcclxuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgaW1nX2FycltqXSk7XHJcbiAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIyNXB4XCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiMjVweFwiO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0RXZlbnQsIGZhbHNlKTtcclxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaE1vdmVFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRFdmVudF8yLCBmYWxzZSk7XHJcbiAgICAgICAgVEJMXzIucm93c1swXS5jZWxsc1szIC0gal0uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBrdWt1KCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViXCIpLmlubmVySFRNTCA9IGBcclxuICA8c2VsZWN0IGlkPVwiZGFuX21lbnVcIiBjbGFzcz1cImZvcm0tc2VsZWN0XCIgc3R5bGU9XCJmb250LXNpemU6MTZweDtcIj48L3NlbGVjdD4gIFxyXG4gIDxzZWxlY3QgaWQ9XCJkYW5fdHlwZVwiIGNsYXNzPVwiZm9ybS1zZWxlY3RcIiBzdHlsZT1cImZvbnQtc2l6ZToxNnB4O1wiPjwvc2VsZWN0PiBcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44K744OD44OIXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cInNldFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4O1wiPlxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjgaTjgY5cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIGlkPVwibmV4dFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4O1wiPlxyXG4gIGA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJZT01JXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJ5b21pXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJ5b21pX2tvdGFlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJTSElLSVwiPlxyXG4gICAgICA8ZGl2IGlkPVwia3VrdV9zaGlraVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwia3VrdV9zaGlraV9rb3RhZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzbHV0ZTttYXJnaW46MCAwIDEwcHggMTBweDtoZWlnaHQ6MzBweDtcIj5cclxuICAgICAgPHNlbGVjdCBpZD1cImNvbG9yX3ZhbFwiPjwvc2VsZWN0PiAgXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjg6rjgrvjg4Pjg4hcIiBpZD1cInJlc2V0X2J0blwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAgc3R5bGU9XCJoZWlnaHQ6MzBweDtcIj5cclxuICAgICAgPHNwYW4+44OS44Oz44OI44CMw5fjgI3jgpLjgYrjgZnjgajjgZzjgpPjgbbjga7mlbDlrZfjgYzlh7rjgovjgog8L3NwYW4+IFxyXG4gICAgPC9kaXY+XHJcbiAgICA8dGFibGUgc3R5bGU9XCJtYXJnaW4tbGVmdDoxMHB4O1wiPlxyXG4gICAgICA8dGJvZHkgaWQ9XCJrdWt1X2h5b3VcIiA+XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHR5cGVfZGF0YSA9IFtcIuS4iuOBjOOCiuS5neS5nVwiLCBcIuS4i+OBjOOCiuS5neS5nVwiLCBcIuOBsOOCieOBsOOCiVwiXTtcclxuICBjb25zdCBkYW5fbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFuX21lbnVcIik7XHJcbiAgY29uc3Qgc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRcIik7XHJcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dFwiKTtcclxuICBjb25zdCB5b21pID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5b21pXCIpO1xyXG4gIGNvbnN0IHlvbWlfa290YWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvbWlfa290YWVcIik7XHJcbiAgY29uc3Qgc2hpa2kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt1a3Vfc2hpa2lcIik7XHJcbiAgY29uc3Qgc2hpa2lfa290YWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt1a3Vfc2hpa2lfa290YWVcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDk7IGkrKykge1xyXG4gICAgY29uc3QgZGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIGRhbi52YWx1ZSA9IGk7XHJcbiAgICBkYW4udGV4dENvbnRlbnQgPSBpICsgXCLjga7jgaDjgpNcIjtcclxuICAgIGRhbl9tZW51LmFwcGVuZENoaWxkKGRhbik7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcclxuICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgdHlwZS52YWx1ZSA9IGk7XHJcbiAgICB0eXBlLnRleHRDb250ZW50ID0gdHlwZV9kYXRhW2kgLSAxXTtcclxuICAgIGRhbl90eXBlLmFwcGVuZENoaWxkKHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgICB2YXIgbnVtID0gMDtcclxuICAgIC8v44OG44Kt44K544OI44Kv44Oq44KiXHJcbiAgICB5b21pLmlubmVySFRNTCA9IGRhbl9tZW51LnZhbHVlICsgXCLjga7jgaDjgpPjga5cIjtcclxuICAgIHlvbWlfa290YWUuaW5uZXJIVE1MID0gXCLjgozjgpPjgZfjgoXjgYZcIjtcclxuICAgIHNoaWtpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBzaGlraV9rb3RhZS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIC8vIOOBi+OBkeOCieOCjOOCi+aVsOOBruOCu+ODg+ODiFxyXG4gICAgdmFyIGhpam91c3UgPSBkYW5fbWVudS52YWx1ZTtcclxuICAgIC8vIOOBi+OBkeOCi+aVsOOBruOCu+ODg+ODiFxyXG4gICAgdmFyIGpvdXN1ID0gW107XHJcbiAgICBzd2l0Y2ggKGRhbl90eXBlLnZhbHVlKSB7XHJcbiAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgam91c3UgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgam91c3UgPSBbOSwgOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgY29uc3QgYmFyYSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgam91c3UucHVzaCguLi5iYXJhLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiYXJhLmxlbmd0aCksIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBudW0rKztcclxuICAgICAgZGF0YS5waS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIGRhdGEucGkucGxheSgpO1xyXG4gICAgICBzd2l0Y2ggKG51bSAlIDIpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB5b21pLmlubmVySFRNTCA9IGRhdGEua3VrdWFbKGhpam91c3UgLSAxKSAqIDkgKyBqb3VzdVtwYXJzZUludChudW0gLyAyKV0gLSAxXSArIFwi44CA44CAXCI7XHJcbiAgICAgICAgICB5b21pX2tvdGFlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICBzaGlraS5pbm5lckhUTUwgPSBoaWpvdXN1ICsgXCLDl1wiICsgam91c3VbcGFyc2VJbnQobnVtIC8gMildICsgXCLvvJ1cIjtcclxuICAgICAgICAgIHNoaWtpX2tvdGFlLmlubmVySFRNTCA9IFwi77yfXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB5b21pLmlubmVySFRNTCA9IGRhdGEua3VrdWFbKGhpam91c3UgLSAxKSAqIDkgKyBqb3VzdVtwYXJzZUludChudW0gLyAyIC0gMSldIC0gMV0gKyBcIuOAgOOAgFwiO1xyXG4gICAgICAgICAgeW9taV9rb3RhZS5pbm5lckhUTUwgPSBkYXRhLmt1a3ViWyhoaWpvdXN1IC0gMSkgKiA5ICsgam91c3VbcGFyc2VJbnQobnVtIC8gMiAtIDEpXSAtIDFdO1xyXG4gICAgICAgICAgc2hpa2kuaW5uZXJIVE1MID0gaGlqb3VzdSArIFwiw5dcIiArIGpvdXN1W3BhcnNlSW50KG51bSAvIDIgLSAxKV0gKyBcIu+8nVwiO1xyXG4gICAgICAgICAgc2hpa2lfa290YWUuaW5uZXJIVE1MID0gaGlqb3VzdSAqIGpvdXN1W3BhcnNlSW50KG51bSAvIDIgLSAxKV07XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtID4gMTcpIG51bSA9IDA7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZGF0YS5tb3ZlMS5sb2FkKCk7XHJcbiAgY29uc3QgQ29sb3JzID0gW1wid2hpdGVcIiwgXCLjgZfjgo1cIiwgXCJwaW5rXCIsIFwi44OU44Oz44KvXCIsIFwieWVsbG93XCIsIFwi44GN44GE44KNXCIsIFwibGlnaHRncmVlblwiLCBcIuOBv+OBqeOCilwiLCBcImxpZ2h0Ymx1ZVwiLCBcIuOBguOBilwiLCBcIm9yYW5nZVwiLCBcIuOCquODrOODs+OCuFwiLCBcImxpZ2h0cHVycGxlXCIsIFwi44KA44KJ44GV44GNXCIsIFwibGlnaHRicm93blwiLCBcIuOBoeOCg+OBhOOCjVwiXTtcclxuICBsZXQgZGl2X2NvbG9yID0gXCJ3aGl0ZVwiO1xyXG5cclxuICBjb25zdCBUQkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt1a3VfaHlvdVwiKVxyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcclxuICAgIGNvbnN0IENvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIENvbG9yLnZhbHVlID0gaTtcclxuICAgIENvbG9yLnRleHRDb250ZW50ID0gQ29sb3JzW2kgKiAyIC0gMV07XHJcbiAgICBjb2xvcl92YWwuYXBwZW5kQ2hpbGQoQ29sb3IpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcl92YWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBkaXZfY29sb3IgPSBDb2xvcnNbY29sb3JfdmFsLnZhbHVlICogMiAtIDJdO1xyXG4gICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZXQucGxheSgpO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZmxhZywgZmxhZ19jb2wsIGZsYWdfcm93LCBmbGFnX0FMTDtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldF9idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRhdGEuc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEuc2V0LnBsYXkoKTtcclxuICAgIHZhciByZXN1bHQgPSB3aW5kb3cuY29uZmlybShcIuOBrOOBo+OBn+OAgOOBhOOCjeOCkuOAgOOCguOBqOOBq+OAgOOCguOBqeOBl+OBvuOBmeOBi++8n1wiKTtcclxuICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgZGF0YS5yZXNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIGRhdGEucmVzZXQucGxheSgpO1xyXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcclxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcclxuICAgICAgICAgIGlmIChyb3cgPT0gMCAmJiBjb2wgIT0gMCkge1xyXG4gICAgICAgICAgICBmbGFnX2NvbCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGNvbCA9PSAwICYmIHJvdyAhPSAwKSB7XHJcbiAgICAgICAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sXS5pbm5lckhUTUwgPSByb3c7XHJcbiAgICAgICAgICAgIGZsYWdfcm93ID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocm93ID09IDAgJiYgY29sID09IDApIHtcclxuICAgICAgICAgICAgZmxhZ19BTEwgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyb3cgIT0gMCAmJiBjb2wgIT0gMCkge1xyXG4gICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sXS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBUQkwucm93c1tyb3ddLmNlbGxzW2NvbF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XHJcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImh5b3VcIik7XHJcblxyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIGlmIChyb3cgPT0gMCAmJiBjb2wgIT0gMCkge1xyXG4gICAgICAgIHRkLmlubmVySFRNTCA9IGNvbDtcclxuICAgICAgICBmbGFnX2NvbCA9IGZhbHNlO1xyXG4gICAgICAgIHRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICBkYXRhLm1vdmUxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgIGRhdGEubW92ZTEucGxheSgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZmxhZ19jb2wpO1xyXG4gICAgICAgICAgaWYgKGZsYWdfY29sID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgMTA7IGsrKykge1xyXG4gICAgICAgICAgICAgIFRCTC5yb3dzW2tdLmNlbGxzW2NvbF0uaW5uZXJIVE1MID0gayAqIGNvbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmbGFnX2NvbCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGZsYWdfY29sID09IHRydWUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPCAxMDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgVEJMLnJvd3Nba10uY2VsbHNbY29sXS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsYWdfY29sID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbCA9PSAwICYmIHJvdyAhPSAwKSB7XHJcbiAgICAgICAgdGQuaW5uZXJIVE1MID0gcm93O1xyXG4gICAgICAgIGZsYWdfcm93ID0gZmFsc2U7XHJcbiAgICAgICAgdGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgIGRhdGEubW92ZTEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgZGF0YS5tb3ZlMS5wbGF5KCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhmbGFnX3Jvdyk7XHJcbiAgICAgICAgICBpZiAoZmxhZ19yb3cgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPCAxMDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1trXS5pbm5lckhUTUwgPSByb3cgKiBrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsYWdfcm93ID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmxhZ19yb3cgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8IDEwOyBrKyspIHtcclxuICAgICAgICAgICAgICBUQkwucm93c1tyb3ddLmNlbGxzW2tdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmxhZ19yb3cgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChyb3cgPT0gMCAmJiBjb2wgPT0gMCkge1xyXG4gICAgICAgIHRkLmlubmVySFRNTCA9IFwiw5dcIjtcclxuICAgICAgICBmbGFnX0FMTCA9IGZhbHNlO1xyXG4gICAgICAgIHRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICBkYXRhLm1vdmUxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgIGRhdGEubW92ZTEucGxheSgpO1xyXG4gICAgICAgICAgaWYgKGZsYWdfQUxMID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgMTA7IGsrKykge1xyXG4gICAgICAgICAgICAgIGZvciAobGV0IGwgPSAxOyBsIDwgMTA7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgVEJMLnJvd3Nba10uY2VsbHNbbF0uaW5uZXJIVE1MID0gayAqIGw7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsYWdfQUxMID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmxhZ19BTEwgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8IDEwOyBrKyspIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMTsgbCA8IDEwOyBsKyspIHtcclxuICAgICAgICAgICAgICAgIFRCTC5yb3dzW2tdLmNlbGxzW2xdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZsYWdfQUxMID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJvdyAhPSAwICYmIGNvbCAhPSAwKSB7XHJcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIHRkLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICB0ZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5tb3ZlMS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICBkYXRhLm1vdmUxLnBsYXkoKTtcclxuICAgICAgICAgIGlmIChmbGFnID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9IHJvdyAqIGNvbDtcclxuICAgICAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGl2X2NvbG9yO1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZmxhZyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgVEJMLmFwcGVuZENoaWxkKHRyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24ga2FoMSgpIHtcclxuICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44GL44GR566X44Gu562G566XKDEpXCI7XHJcbiAgLy/liJ3mnJ/oqK3lrpotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBsZXQgaGlqb3VzdSA9IDEyMztcclxuICBsZXQgam91c3UgPSA0O1xyXG4gIGxldCBtYXhfa2V0YSA9IDQ7XHJcbiAgbGV0IHNla2k7XHJcbiAgbGV0IGt1cmlhZ2FyaTtcclxuICBsZXQgaGlqb3VzdV9hcnIgPSBbXTtcclxuICBsZXQgam91c3VfYXJyID0gW107XHJcbiAgbGV0IHNla2lfYXJyID0gW107XHJcbiAgbGV0IGhpam91c3Vfa2V0YTtcclxuICBsZXQgam91c3Vfa2V0YTtcclxuICBsZXQgc2VraV9rZXRhO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YlwiKS5pbm5lckhUTUwgPSBgXHJcbiAgPHNlbGVjdCBpZD1cInRhc3VfdHlwZVwiIHN0eWxlPVwibWFyZ2luOjEwcHg7Zm9udC1zaXplOjE2cHhcIj5cclxuICA8b3B0aW9uIHZhbHVlPVwiMVwiPijvvJLjgZHjgZ8pw5co77yR44GR44GfKTwvb3B0aW9uPlxyXG4gIDxvcHRpb24gdmFsdWU9XCIyXCI+KO+8k+OBkeOBnynDlyjvvJHjgZHjgZ8pPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuOCr+ODquOColwiIGlkPVwiY2xlYXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiLz4gICAgXHJcbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuOCguOCk+OBoOOBhFwiIGlkPVwibW9uZGFpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIi8+ICAgIFxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjgrvjg4Pjg4hcIiBpZD1cInNldFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIvPiAgICBcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44GT44Gf44GIXCIgaWQ9XCJrb3RhZVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIi8+ICAgIFxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjg5Ljg7Pjg4hcIiBpZD1cImhpbnRcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIvPiAgICBcclxuICBgO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7IG1hcmdpbjoxMHB4O1wiPlxyXG4gIDxkaXYgaWQ9XCJzaGlraVwiIHN0eWxlPVwiZGlzcGxheTpmbGV4OyBtYXJnaW46MTBweDtcIj5cclxuICA8aW5wdXQgaWQ9XCJib3gxXCIgdHlwZT1cIm51bWJlclwiIG1heD05OTkgbWluPTEwIGNsYXNzPVwia2Vpc2FuX3NoaWtpXCIvPlxyXG4gIDxkaXYgICBpZD1cImJveDJcIiB0eXBlPVwibnVtYmVyXCIgc3R5bGU9XCJ3aWR0aDo1MHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTozNnB4O1wiIGNsYXNzPVwia2lnb1wiPsOXPC9kaXY+XHJcbiAgPGlucHV0IGlkPVwiYm94M1wiIHR5cGU9XCJudW1iZXJcIiBtYXg9OTk5IG1pbj0xMCBjbGFzcz1cImtlaXNhbl9zaGlraVwiLz5cclxuICA8ZGl2ICAgaWQ9XCJib3g0XCIgdHlwZT1cIm51bWJlclwiIHN0eWxlPVwid2lkdGg6NTBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MzZweDtcIiBjbGFzcz1cImtpZ29cIj49PC9kaXY+XHJcbiAgPGlucHV0IGlkPVwiYm94NVwiIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImtlaXNhbl9zaGlraVwiLz5cclxuICA8L2Rpdj5cclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiMTAwMOOBj+OCiuS4iuOBjOOCilwiIGlkPVwia3VyaWFnYXJpXzEwMDBcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgc3R5bGU9XCJ3aWR0aDoxMDBweDttYXJnaW46NXB4O1wiLz4gICAgXHJcbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIjEwMOOBj+OCiuS4iuOBjOOCilwiIGlkPVwia3VyaWFnYXJpXzEwMFwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cIndpZHRoOjEwMHB4O21hcmdpbjo1cHg7XCIvPlxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCIxMOOBj+OCiuS4iuOBjOOCilwiIGlkPVwia3VyaWFnYXJpXzEwXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwid2lkdGg6MTAwcHg7bWFyZ2luOjVweDtcIi8+ICAgIFxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgIHN0eWxlPVwiZGlzcGxheTpmbGV4O21hcmdpbjoxMHB4O1wiPlxyXG4gIDxkaXY+XHJcbiAgICA8dGFibGU+XHJcbiAgICA8dGJvZHkgaWQ9XCJUQkxcIj5cclxuICAgIDwvdGJvZGV5PlxyXG4gICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgIDx0YWJsZSBzdHlsZT1cIm1hcmdpbi1sZWZ0OjEwcHg7XCI+XHJcbiAgICA8dGJvZHkgaWQ9XCJUQkxfMlwiPlxyXG4gICAgPC90Ym9kZXk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBpZD1cImt1a3VfaHlvdVwiPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgLy8tLeWQhOODnOOCv+ODs+OBruioreWumi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbWFzdV9jbGVhcigpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbmRhaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2h1dHVkYWkoKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1vbmRhaV9zZXQoKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrb3RhZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd19hbnN3ZXIoKSk7XHJcblxyXG4gIC8v5byP44Oc44OD44Kv44K544Gu6Kit5a6aLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYm94MS52YWx1ZSA9IGhpam91c3U7XHJcbiAgYm94My52YWx1ZSA9IGpvdXN1O1xyXG4gIGJveDUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBpZiAoYm94NS52YWx1ZSA9PSBzZWtpKSB7XHJcbiAgICAgIGJveDUuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICBkYXRhLnNlaWthaTEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnNlaWthaTEucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm94NS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3Qga3VyaWFnYXJpXzEwMDAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt1cmlhZ2FyaV8xMDAwXCIpO1xyXG4gIGt1cmlhZ2FyaV8xMDAwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBLdXJpYWdhcmlfMTAwMCgpKTtcclxuICBjb25zdCBrdXJpYWdhcmlfMTAwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdXJpYWdhcmlfMTAwXCIpO1xyXG4gIGt1cmlhZ2FyaV8xMDAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IEt1cmlhZ2FyaV8xMDAoKSk7XHJcbiAgY29uc3Qga3VyaWFnYXJpXzEwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdXJpYWdhcmlfMTBcIik7XHJcbiAga3VyaWFnYXJpXzEwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBLdXJpYWdhcmlfMTAoKSk7XHJcbiAgY29uc3Qga3VrdV9oeW91ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdWt1X2h5b3VcIik7XHJcbiAgY29uc3QgaGludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGludFwiKTtcclxuICBoaW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucmVzZXQucGxheSgpO1xyXG4gICAga3VrdSgpO1xyXG4gIH0pO1xyXG5cclxuICAvL+ethueul+ODnuOCueOBruWumue+qS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IFRCTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVEJMXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIHRyLnN0eWxlLm1heEhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgaWYgKGkgPT0gMikge1xyXG4gICAgICB0ci5zdHlsZS5tYXhIZWlnaHQgPSBcIjIwcHhcIjtcclxuICAgICAgdHIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWtpX2t1cmlhZ2FyaVwiKTtcclxuICAgIH1cclxuICAgIGlmIChpID09IDMpIHtcclxuICAgICAgdHIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWtpX2tvdGFlXCIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXhfa2V0YTsgaisrKSB7XHJcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICB0ZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzMzXCI7XHJcbiAgICAgIHRkLnN0eWxlLndpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiO1xyXG4gICAgICB0ZC5zdHlsZS5mb250U2l6ZSA9IFwiMzZweFwiO1xyXG4gICAgICB0ZC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIGlmIChpID09IDIgfHwgaSA9PSAzKSB7XHJcbiAgICAgICAgdGQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkcm9wcGFibGUtZWxlbVwiKTtcclxuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM0ZGM0ZmZcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaSA9PSAyKSB7XHJcbiAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmMTAwXCI7XHJcbiAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gXCIyMHB4XCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFRCTC5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICBUQkwuc3R5bGUuaGVpZ2h0ID0gXCIyNDBweFwiO1xyXG4gIH1cclxuXHJcbiAgLy/jgYrph5Hjg5Hjg6zjg4Pjg4jjga7oqK3nva4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8v44GT44Gf44GI44CA44K744OD44OIXHJcblxyXG4gIGNvbnN0IFRCTF8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUQkxfMlwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgdHIuc3R5bGUubWF4SGVpZ2h0ID0gXCIyNXB4XCI7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1heF9rZXRhOyBqKyspIHtcclxuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgIGlmIChqID09IDApIHtcclxuICAgICAgICB0ZC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgICAgICB0ZC5zdHlsZS53aWR0aCA9IFwiNjBweFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRkLnN0eWxlLmJvcmRlciA9IFwiMXB4IGRvdHRlZCAjMzMzXCI7XHJcbiAgICAgICAgdGQuc3R5bGUud2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICAgIH1cclxuICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gXCIyOHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuXHJcbiAgICAgIHRkLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIHRkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcHBhYmxlLWVsZW0tMlwiKTtcclxuICAgICAgaWYgKGkgPT0gMCB8fCBpID09IDExKSB7XHJcbiAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNGRjNGZmXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSAxMCkge1xyXG4gICAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjEwMFwiO1xyXG4gICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IFwiNTZweFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBUQkxfMi5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICBUQkxfMi5zdHlsZS5ib3JkZXIgPSBcInNvbGlkIDFweCAjMzMzXCI7XHJcbiAgICBUQkxfMi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxMHB4XCI7XHJcbiAgICBUQkxfMi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMTBweFwiO1xyXG4gIH1cclxuXHJcbiAgLy/mlbDlrZfjg5Hjg6zjg4Pjg4jjga7oqK3nva5cclxuICBjb25zdCBudW1fcGFsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBudW1fcGFsbGV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibnVtX3BhbGxldFwiKTtcclxuICBudW1fcGFsbGV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcHBhYmxlLWVsZW1cIik7XHJcbiAgbnVtX3BhbGxldC5zdHlsZS5tYXJnaW5MZWZ0PVwiMTBweFwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobnVtX3BhbGxldCk7XHJcblxyXG4gIGhpc3Nhbl9zZXQoKTtcclxuICBudW1fc2V0KCk7XHJcblxyXG4gIC8v44GT44GT44GL44KJ6Zai5pWwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvL+mWouaVsOOAgOODnuOCueWGheOBruaVsOWtl+OCkuOCr+ODquOColxyXG4gIGZ1bmN0aW9uIG1hc3VfY2xlYXIoKSB7XHJcbiAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucmVzZXQucGxheSgpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgNDsgcm93KyspIHtcclxuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNDsgY29sKyspIHtcclxuICAgICAgICBUQkwucm93c1tyb3ddLmNlbGxzW2NvbF0uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgVEJMLnJvd3NbMV0uY2VsbHNbMF0uaW5uZXJIVE1MID0gXCLDl1wiO1xyXG4gICAgYm94MS52YWx1ZSA9IFwiXCI7XHJcbiAgICBib3gzLnZhbHVlID0gXCJcIjtcclxuICAgIGJveDUudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA5ZWP6aGM44KS44Op44Oz44OA44Og44Gr5Ye644GZXHJcbiAgZnVuY3Rpb24gc2h1dHVkYWkoKSB7XHJcbiAgICBzd2l0Y2ggKHRhc3VfdHlwZS52YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgIGhpam91c3UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MCArIDEwKTtcclxuICAgICAgICBqb3VzdSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkgKyAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICBoaWpvdXN1ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwICsgMTAwKTtcclxuICAgICAgICBqb3VzdSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkgKyAxKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGJveDEudmFsdWUgPSBoaWpvdXN1O1xyXG4gICAgYm94My52YWx1ZSA9IGpvdXN1O1xyXG4gICAgaGlzc2FuX3NldCgpO1xyXG4gICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZXQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA5ZWP6aGM44KS44K744OD44OI44GZ44KLXHJcbiAgZnVuY3Rpb24gbW9uZGFpX3NldCgpIHtcclxuICAgIGhpam91c3UgPSBib3gxLnZhbHVlO1xyXG4gICAgam91c3UgPSBib3gzLnZhbHVlO1xyXG4gICAgaGlzc2FuX3NldCgpO1xyXG4gICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZXQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA562U44GI44Gu6KGo56S6XHJcbiAgZnVuY3Rpb24gc2hvd19hbnN3ZXIoKSB7XHJcbiAgICBib3g1LnZhbHVlID0gc2VraTtcclxuICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsdWVcIjtcclxuICAgIGRhdGEuc2Vpa2FpMi5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNlaWthaTIucGxheSgpO1xyXG4gICAga3VyaWFnYXJpID0gMDtcclxuICAgIC8v44GP44KK5LiK44GM44KK44Gu6KGo56S6XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBoaWpvdXN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIGlmIChNYXRoLmZsb29yKGhpam91c3VfYXJyW2NvbF0gKiBqb3VzdSArIGt1cmlhZ2FyaSkgPiA5KSB7XHJcbiAgICAgICAga3VyaWFnYXJpID0gTWF0aC5mbG9vcigoaGlqb3VzdV9hcnJbY29sXSAqIGpvdXN1ICsga3VyaWFnYXJpKSAvIDEwKTtcclxuICAgICAgICBUQkwucm93c1syXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDJdLmlubmVySFRNTCA9IGt1cmlhZ2FyaTtcclxuICAgICAgICBUQkwucm93c1syXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDJdLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICAgICAgVEJMLnJvd3NbMl0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAyXS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgVEJMLnJvd3NbMl0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAyXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJib3R0b21cIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBrdXJpYWdhcmkgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+ethueul+OBruetlOOBiOihqOekulxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2VraV9rZXRhOyBjb2wrKykge1xyXG4gICAgICBUQkwucm93c1szXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDFdLmlubmVySFRNTCA9IHNla2lfYXJyW2NvbF07XHJcbiAgICB9XHJcbiAgICAvL+etlOOBiOOBruihqOekuuOBruaZgu+8jOOBiumHkeOCkuS4puOBueebtOOBmeOBi+OBr+imgeaknOiojlxyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA562U44GI44Gu5YWl5YqbLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24ga290YWVfaW5wdXQoKSB7XHJcbiAgICBoaWpvdXN1ID0gTWF0aC5mbG9vcihib3gxLnZhbHVlKTtcclxuICAgIGpvdXN1ID0gTWF0aC5mbG9vcihib3gzLnZhbHVlKTtcclxuICAgIHNla2kgPSBNYXRoLmZsb29yKGhpam91c3UgKiBqb3VzdSk7XHJcbiAgICBib3g1LnZhbHVlID1cclxuICAgICAgTnVtYmVyKFRCTC5yb3dzWzNdLmNlbGxzWzBdLmlubmVyVGV4dCkgKiAxMDAwICsgTnVtYmVyKFRCTC5yb3dzWzNdLmNlbGxzWzFdLmlubmVyVGV4dCkgKiAxMDAgKyBOdW1iZXIoVEJMLnJvd3NbM10uY2VsbHNbMl0uaW5uZXJUZXh0KSAqIDEwICsgTnVtYmVyKFRCTC5yb3dzWzNdLmNlbGxzWzNdLmlubmVyVGV4dCkgKiAxO1xyXG4gICAgaWYgKGJveDUudmFsdWUgPT0gc2VraSkge1xyXG4gICAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgZGF0YS5zZWlrYWkxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5zZWlrYWkxLnBsYXkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+mWouaVsOOAgOethueul+OBruaPj+eUuy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGZ1bmN0aW9uIGhpc3Nhbl9zZXQoKSB7XHJcbiAgICBpZiAoaGlqb3VzdSA+IDk5OSB8fCBqb3VzdSA+IDkgfHwgaGlqb3VzdSA8IDAgfHwgam91c3UgPCAwKSB7XHJcbiAgICAgIGRhdGEuYWxlcnQucGxheSgpO1xyXG4gICAgICBhbGVydChcIuOBi+OBkeOCieOCjOOCi+aVsOOBrzHvvZ45OTnvvIzjgYvjgZHjgovmlbDjga8x772eOeOBvuOBp+OBq+OBl+OBpuOBj+OBoOOBleOBhOOAglwiKTtcclxuICAgICAgYm94MS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIGJveDMudmFsdWUgPSBcIlwiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgaGlqb3VzdSA9IE1hdGguZmxvb3IoaGlqb3VzdSk7XHJcbiAgICBqb3VzdSA9IE1hdGguZmxvb3Ioam91c3UpO1xyXG4gICAgc2VraSA9IE1hdGguZmxvb3IoaGlqb3VzdSAqIGpvdXN1KTtcclxuICAgIGJveDEudmFsdWUgPSBoaWpvdXN1O1xyXG4gICAgYm94My52YWx1ZSA9IGpvdXN1O1xyXG4gICAgYm94NS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgLy/mlbDlrZfjgpLphY3liJfjgajjgZfjgabku6PlhaVcclxuICAgIGhpam91c3Vfa2V0YSA9IFN0cmluZyhoaWpvdXN1KS5sZW5ndGg7XHJcbiAgICBqb3VzdV9rZXRhID0gU3RyaW5nKGpvdXN1KS5sZW5ndGg7XHJcbiAgICBzZWtpX2tldGEgPSBTdHJpbmcoc2VraSkubGVuZ3RoO1xyXG5cclxuICAgIGhpam91c3VfYXJyWzJdID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpam91c3Vfa2V0YTsgaSsrKSB7XHJcbiAgICAgIGhpam91c3VfYXJyW2ldID0gTnVtYmVyKFN0cmluZyhoaWpvdXN1KS5jaGFyQXQoaGlqb3VzdV9rZXRhIC0gaSAtIDEpKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgam91c3Vfa2V0YTsgaSsrKSB7XHJcbiAgICAgIGpvdXN1X2FycltpXSA9IE51bWJlcihTdHJpbmcoam91c3UpLmNoYXJBdChqb3VzdV9rZXRhIC0gaSAtIDEpKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VraV9rZXRhOyBpKyspIHtcclxuICAgICAgc2VraV9hcnJbaV0gPSBOdW1iZXIoU3RyaW5nKHNla2kpLmNoYXJBdChzZWtpX2tldGEgLSBpIC0gMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1dWppX3NldCgpO1xyXG4gICAgb2thbmVfc2V0KCk7XHJcbiAgfVxyXG5cclxuICAvL+ODnuOCueWGheOBq+OBiumHkeOCkuS4puOBueOCiy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24gb2thbmVfc2V0KCkge1xyXG4gICAgLy/kuIDluqbjgIDjg57jgrnlhoXjga7jgYrph5HjgpLjgq/jg6rjgqJcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEyOyByb3crKykge1xyXG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCA0OyBjb2wrKykge1xyXG4gICAgICAgIFRCTF8yLnJvd3Nbcm93XS5jZWxsc1tjb2xdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbWdfYXJyID0gW1wiaWNoaWVuXCIsIFwianV1ZW5cIiwgXCJoeWFrdWVuXCJdO1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgaGlqb3VzdV9rZXRhOyBjb2wrKykge1xyXG4gICAgICBUQkxfMi5yb3dzWzBdLmNlbGxzWzNdLmlubmVySFRNTCA9IGA8aW1nIHN0eWxlPVwid2lkdGg6MjBweDtoZWlnaHQ6MjBweDtcIiBzcmM9XCIuL2ltYWdlL2ljaGllbi5wbmdcIiAvPmAgKyBcIuOAgOOBjOOAgChcIiArIGhpam91c3VfYXJyWzBdICsgXCLjgIDDl+OAgFwiICsgam91c3UgKyBcIinjgIDjgZNcIjtcclxuICAgICAgVEJMXzIucm93c1swXS5jZWxsc1syXS5pbm5lckhUTUwgPSBgPGltZyBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7XCIgc3JjPVwiLi9pbWFnZS9qdXVlbi5wbmdcIiAvPmAgKyBcIuOAgOOBjOOAgChcIiArIGhpam91c3VfYXJyWzFdICsgXCLjgIDDl+OAgFwiICsgam91c3UgKyBcIinjgIDjgZNcIjtcclxuICAgICAgVEJMXzIucm93c1swXS5jZWxsc1sxXS5pbm5lckhUTUwgPSBgPGltZyBzdHlsZT1cIndpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7XCIgc3JjPVwiLi9pbWFnZS9oeWFrdWVuLnBuZ1wiIC8+YCArIFwi44CA44GM44CAKFwiICsgaGlqb3VzdV9hcnJbMl0gKyBcIuOAgMOX44CAXCIgKyBqb3VzdSArIFwiKeOAgOOBk1wiO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGpvdXN1ICsgMTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoaWpvdXN1X2Fycltjb2xdOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZS9cIiArIGltZ19hcnJbY29sXSArIFwiLnBuZ1wiKTtcclxuICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBpbWdfYXJyW2NvbF0pO1xyXG4gICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XHJcbiAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gXCIyMHB4XCI7XHJcbiAgICAgICAgICBpbWcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG91Y2hTdGFydEV2ZW50LCBmYWxzZSk7XHJcbiAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaE1vdmVFdmVudCwgZmFsc2UpO1xyXG4gICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZEV2ZW50XzIsIGZhbHNlKTtcclxuICAgICAgICAgIFRCTF8yLnJvd3NbaV0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAxXS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/jg57jgrnlhoXjgavmlbDlrZfjgpLmm7jjgY3ovrzjgoAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24gc3V1amlfc2V0KCkge1xyXG4gICAgLy/kuIDluqbjgIDjg57jgrnlhoXjga7mlbDlrZfjgpLjgq/jg6rjgqJcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDQ7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDQ7IGNvbCsrKSB7XHJcbiAgICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2xdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8v44Oe44K55YaF44Gr5pWw5a2X44KS5Luj5YWlXHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBoaWpvdXN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzWzBdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJIVE1MID0gaGlqb3VzdV9hcnJbY29sXTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGpvdXN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzWzFdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJIVE1MID0gam91c3VfYXJyW2NvbF07XHJcbiAgICB9XHJcbiAgICBpZiAoKGhpam91c3UgPCAxMDApICYgKGpvdXN1IDwgMTAwKSkge1xyXG4gICAgICBUQkwucm93c1sxXS5jZWxsc1sxXS5pbm5lckhUTUwgPSBcIsOXXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUQkwucm93c1sxXS5jZWxsc1swXS5pbm5lckhUTUwgPSBcIsOXXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+mWouaVsOOAgOaVsOWtl+OBruOCu+ODg+ODiFxyXG4gIGZ1bmN0aW9uIG51bV9zZXQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGl2LmlubmVySFRNTCA9IGk7XHJcbiAgICAgIGRpdi5zdHlsZS53aWR0aCA9IFwiNDBweFwiO1xyXG4gICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7XHJcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyYWdnYWJsZS1lbGVtXCIpO1xyXG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuXHJcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0RXZlbnQsIGZhbHNlKTtcclxuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hNb3ZlRXZlbnQsIGZhbHNlKTtcclxuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZEV2ZW50LCBmYWxzZSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtX3BhbGxldFwiKS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bV9wYWxsZXRcIikuc3R5bGUud2lkdGggPSBcIjQwMHB4XCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtX3BhbGxldFwiKS5zdHlsZS5oZWlnaHQgPSBcIjQycHhcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v44Oe44Km44K544Gn44Gu44OJ44Op44OD44Kw44KS5Y+v6IO944Gr44GZ44KL44CCXHJcbiAgdmFyIGRyYWdnZWQ7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImRyYWdzdGFydFwiLFxyXG4gICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIC8vIHN0b3JlIGEgcmVmLiBvbiB0aGUgZHJhZ2dlZCBlbGVtXHJcbiAgICAgIGRyYWdnZWQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIC8vIG1ha2UgaXQgaGFsZiB0cmFuc3BhcmVudFxyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgLyogZXZlbnRzIGZpcmVkIG9uIHRoZSBkcm9wIHRhcmdldHMgKi9cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJkcmFnb3ZlclwiLFxyXG4gICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyBkcm9wXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9LFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJkcm9wXCIsXHJcbiAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgLy8gcHJldmVudCBkZWZhdWx0IGFjdGlvbiAob3BlbiBhcyBsaW5rIGZvciBzb21lIGVsZW1lbnRzKVxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAvLyBtb3ZlIGRyYWdnZWQgZWxlbSB0byB0aGUgc2VsZWN0ZWQgZHJvcCB0YXJnZXRcclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gXCJkcm9wcGFibGUtZWxlbVwiKSB7XHJcbiAgICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWQpO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcclxuICAgICAgICAvL+aVsOODkeODrOODg+ODiOWGheOBruaVsOWtl+OCkuS4gOaXpua2iOWOu1xyXG4gICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bV9wYWxsZXRcIik7XHJcbiAgICAgICAgd2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBudW1fc2V0KCk7XHJcbiAgICAgICAga290YWVfaW5wdXQoKTtcclxuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09IFwiZHJvcHBhYmxlLWVsZW0tMlwiICYmIGRyYWdnZWQudGFnTmFtZSA9PSBcIklNR1wiKSB7XHJcbiAgICAgICAgZHJhZ2dlZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdnZWQpO1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcclxuICAgICAgICBpbWdfa3VyaWFnYXJpKCk7XHJcbiAgICAgIH1cclxuICAgICAgZGF0YS5waS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIGRhdGEucGkucGxheSgpO1xyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgLy/jg4njg6njg4PjgrDplovlp4vjga7mk43kvZxcclxuICBmdW5jdGlvbiB0b3VjaFN0YXJ0RXZlbnQoZXZlbnQpIHtcclxuICAgIC8v44K/44OD44OB44Gr44KI44KL55S76Z2i44K544Kv44Ot44O844Or44KS5q2i44KB44KLXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgLy/jg4njg6njg4PjgrDkuK3jga7mk43kvZxcclxuICBmdW5jdGlvbiB0b3VjaE1vdmVFdmVudChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8v44OJ44Op44OD44Kw5Lit44Gu44Ki44Kk44OG44Og44KS44Kr44O844K944Or44Gu5L2N572u44Gr6L+95b6TXHJcbiAgICB2YXIgZHJhZ2dlZEVsZW0gPSBldmVudC50YXJnZXQ7XHJcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS50b3AgPSB0b3VjaC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCAtIGRyYWdnZWRFbGVtLm9mZnNldEhlaWdodCAvIDIgKyBcInB4XCI7XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUubGVmdCA9IHRvdWNoLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0IC0gZHJhZ2dlZEVsZW0ub2Zmc2V0V2lkdGggLyAyICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgLy/jg4njg6njg4PjgrDntYLkuoblvozjga7mk43kvZxcclxuICBmdW5jdGlvbiB0b3VjaEVuZEV2ZW50KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy/jg4njg6njg4PjgrDkuK3jga7mk43kvZzjga7jgZ/jgoHjgavlpInmm7TjgZfjgabjgYTjgZ/jgrnjgr/jgqTjg6vjgpLlhYPjgavmiLvjgZlcclxuICAgIHZhciBkcm9wcGVkRWxlbSA9IGV2ZW50LnRhcmdldDtcclxuICAgIGRyb3BwZWRFbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS50b3AgPSBcIlwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmxlZnQgPSBcIlwiO1xyXG4gICAgLy/jg4njg63jg4Pjg5fjgZfjgZ/kvY3nva7jgavjgYLjgovjg4njg63jg4Pjg5flj6/og73jgarjgqjjg6zjg6Hjg7Pjg4jjgavopqrlrZDku5jjgZHjgZnjgotcclxuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgLy/jgrnjgq/jg63jg7zjg6vliIbjgpLliqDlkbPjgZfjgZ/luqfmqJnjgavlrZjlnKjjgZnjgovjgqjjg6zjg6Hjg7Pjg4jjgpLmlrDjgZfjgYTopqrjgajjgZnjgotcclxuICAgIHZhciBuZXdQYXJlbnRFbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpO1xyXG4gICAgaWYgKG5ld1BhcmVudEVsZW0uY2xhc3NOYW1lID09IFwiZHJvcHBhYmxlLWVsZW1cIikge1xyXG4gICAgICBuZXdQYXJlbnRFbGVtLmFwcGVuZENoaWxkKGRyb3BwZWRFbGVtKTtcclxuICAgICAgLy/mlbDjg5Hjg6zjg4Pjg4jlhoXjga7mlbDlrZfjgpLkuIDml6bmtojljrtcclxuICAgICAgdmFyIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtX3BhbGxldFwiKTtcclxuICAgICAgd2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZWxlLnJlbW92ZUNoaWxkKGVsZS5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICBudW1fc2V0KCk7XHJcbiAgICAgIGtvdGFlX2lucHV0KCk7XHJcbiAgICB9XHJcbiAgICBkYXRhLnBpLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucGkucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy/jg4njg6njg4PjgrDntYLkuoblvozjga7mk43kvZwyXHJcbiAgZnVuY3Rpb24gdG91Y2hFbmRFdmVudF8yKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy/jg4njg6njg4PjgrDkuK3jga7mk43kvZzjga7jgZ/jgoHjgavlpInmm7TjgZfjgabjgYTjgZ/jgrnjgr/jgqTjg6vjgpLlhYPjgavmiLvjgZlcclxuICAgIHZhciBkcm9wcGVkRWxlbSA9IGV2ZW50LnRhcmdldDtcclxuICAgIGRyb3BwZWRFbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS50b3AgPSBcIlwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmxlZnQgPSBcIlwiO1xyXG4gICAgLy/jg4njg63jg4Pjg5fjgZfjgZ/kvY3nva7jgavjgYLjgovjg4njg63jg4Pjg5flj6/og73jgarjgqjjg6zjg6Hjg7Pjg4jjgavopqrlrZDku5jjgZHjgZnjgotcclxuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgLy/jgrnjgq/jg63jg7zjg6vliIbjgpLliqDlkbPjgZfjgZ/luqfmqJnjgavlrZjlnKjjgZnjgovjgqjjg6zjg6Hjg7Pjg4jjgpLmlrDjgZfjgYTopqrjgajjgZnjgotcclxuICAgIHZhciBuZXdQYXJlbnRFbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5wYWdlWCAtIHdpbmRvdy5wYWdlWE9mZnNldCwgdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQpO1xyXG4gICAgaWYgKG5ld1BhcmVudEVsZW0uY2xhc3NOYW1lID09IFwiZHJvcHBhYmxlLWVsZW0tMlwiKSB7XHJcbiAgICAgIG5ld1BhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZHJvcHBlZEVsZW0pO1xyXG4gICAgfVxyXG4gICAgZGF0YS5waS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnBpLnBsYXkoKTtcclxuICAgIGltZ19rdXJpYWdhcmkoKTtcclxuICB9XHJcblxyXG4gIC8v44GP44KK5LiK44GM44KK44Gu5pON5L2cXHJcbiAgZnVuY3Rpb24gS3VyaWFnYXJpXzEwKCkge1xyXG4gICAgdmFyIGNvdW50ID0gVEJMXzIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImljaGllblwiKS5sZW5ndGg7XHJcbiAgICBpZiAoY291bnQgPiA5KSB7XHJcbiAgICAgIGRhdGEucmVzZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnJlc2V0LnBsYXkoKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChjb3VudCA+IDkpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgVEJMXzIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImljaGllblwiKVswXS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaiA9IDA7XHJcbiAgICAgIGltZ19zdHlsZShqKTtcclxuICAgICAgY291bnQgPSBjb3VudCAtIDEwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gS3VyaWFnYXJpXzEwMCgpIHtcclxuICAgIHZhciBjb3VudCA9IFRCTF8yLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqdXVlblwiKS5sZW5ndGg7XHJcbiAgICBpZiAoY291bnQgPiA5KSB7XHJcbiAgICAgIGRhdGEucmVzZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnJlc2V0LnBsYXkoKTtcclxuICAgIH1cclxuICAgIHdoaWxlIChjb3VudCA+IDkpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgVEJMXzIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImp1dWVuXCIpWzBdLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBqID0gMTtcclxuICAgICAgaW1nX3N0eWxlKGopO1xyXG4gICAgICBjb3VudCA9IGNvdW50IC0gMTA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIEt1cmlhZ2FyaV8xMDAwKCkge1xyXG4gICAgdmFyIGNvdW50ID0gVEJMXzIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImh5YWt1ZW5cIikubGVuZ3RoO1xyXG4gICAgaWYgKGNvdW50ID4gOSkge1xyXG4gICAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5yZXNldC5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAoY291bnQgPiA5KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIFRCTF8yLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoeWFrdWVuXCIpWzBdLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBqID0gMjtcclxuICAgICAgaW1nX3N0eWxlKGopO1xyXG4gICAgICBjb3VudCA9IGNvdW50IC0gMTA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbWdfa3VyaWFnYXJpKCkge1xyXG4gICAgY29uc3QgaW1nX2FyciA9IFtcImljaGllblwiLCBcImp1dWVuXCIsIFwiaHlha3VlblwiLCBcInNlbmVuXCJdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcclxuICAgICAgdmFyIGNvdW50ID0gVEJMXzIucm93c1sxMF0uY2VsbHNbMyAtIGpdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaW1nX2FycltqXSkubGVuZ3RoO1xyXG4gICAgICBpZiAoY291bnQgPiA5KSB7XHJcbiAgICAgICAgZGF0YS5yZXNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgZGF0YS5yZXNldC5wbGF5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICBUQkxfMi5yb3dzWzEwXS5jZWxsc1szIC0gal0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpbWdfYXJyW2pdKVswXS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nX3N0eWxlKGopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbWdfc3R5bGUoaikge1xyXG4gICAgY29uc3QgaW1nX2FyciA9IFtcImljaGllblwiLCBcImp1dWVuXCIsIFwiaHlha3VlblwiLCBcInNlbmVuXCJdO1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlL1wiICsgaW1nX2FycltqICsgMV0gKyBcIi5wbmdcIik7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgaW1nX2FycltqICsgMV0pO1xyXG4gICAgaW1nLnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XHJcbiAgICBpZiAoaiA9PSAyKSB7XHJcbiAgICAgIGltZy5zdHlsZS53aWR0aCA9IFwiNDVweFwiO1xyXG4gICAgfVxyXG4gICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnRFdmVudCwgZmFsc2UpO1xyXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hNb3ZlRXZlbnQsIGZhbHNlKTtcclxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hFbmRFdmVudF8yLCBmYWxzZSk7XHJcbiAgICBUQkxfMi5yb3dzWzEwXS5jZWxsc1syIC0gal0uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGt1a3UoKSB7XHJcbiAgICBjb25zdCBUQkxfa3VrdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIFRCTF9rdWt1LnNldEF0dHJpYnV0ZShcImlkXCIsIFwia3VrdV9oeW91XCIpO1xyXG4gICAgVEJMX2t1a3Uuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIFRCTF9rdWt1LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgVEJMX2t1a3Uuc3R5bGUubGVmdCA9IFwiMTAwcHhcIjtcclxuICAgIFRCTF9rdWt1LnN0eWxlLnRvcCA9IFwiMTMwcHhcIjtcclxuICAgIFRCTF9rdWt1LnN0eWxlLnpJbmRleCA9IDEwMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xyXG4gICAgICAgIHRkLnN0eWxlLndpZHRoID0gXCIyMHB4XCI7XHJcbiAgICAgICAgdGQuc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgICAgICB0ZC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuXHJcbiAgICAgICAgaWYgKGkgIT0gMCAmJiBqICE9PSAwKSB7XHJcbiAgICAgICAgICB0ZC5pbm5lclRleHQgPSBNYXRoLmZsb29yKGkgKiBqKTtcclxuICAgICAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHR5ZWxsb3dcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgdGQuaW5uZXJUZXh0ID0gajtcclxuICAgICAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRwaW5rXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqID09IDApIHtcclxuICAgICAgICAgIHRkLmlubmVyVGV4dCA9IGk7XHJcbiAgICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Ymx1ZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA9PSAwICYmIGogPT0gMCkge1xyXG4gICAgICAgICAgdGQuaW5uZXJUZXh0ID0gXCJ4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgfVxyXG4gICAgICBUQkxfa3VrdS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9XHJcbiAgICBrdWt1X2h5b3UuYXBwZW5kQ2hpbGQoVEJMX2t1a3UpO1xyXG4gICAgbW92ZShUQkxfa3VrdSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIi4vZGF0YS5qc1wiO1xyXG5pbXBvcnQgeyBtb3ZlIH0gZnJvbSBcIi4vbW92ZS5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGthaDIoKSB7XHJcbiAgbWFpbl90ZXh0X2JveC5pbm5lckhUTUwgPSBcIuOBi+OBkeeul+OBruethueulygyKVwiO1xyXG4gIC8v5Yid5pyf6Kit5a6aLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgbGV0IGhpam91c3UgPSAxMjM7XHJcbiAgbGV0IGpvdXN1ID0gNDU7XHJcbiAgbGV0IG1heF9rZXRhID0gNTtcclxuICBsZXQgc2VraTtcclxuICBsZXQgYnVidW5fc2VraTE7XHJcbiAgbGV0IGJ1YnVuX3Nla2kyO1xyXG4gIGxldCBrdXJpYWdhcmk7XHJcbiAgdmFyIGZsYWdfaGludDEgPSAwO1xyXG4gIHZhciBmbGFnX2hpbnQyID0gMDtcclxuICBsZXQgaGlqb3VzdV9hcnIgPSBbXTtcclxuICBsZXQgam91c3VfYXJyID0gW107XHJcbiAgbGV0IHNla2lfYXJyID0gW107XHJcbiAgbGV0IGJ1YnVuX3Nla2kxX2FyciA9IFtdO1xyXG4gIGxldCBidWJ1bl9zZWtpMl9hcnIgPSBbXTtcclxuICBsZXQgaGlqb3VzdV9rZXRhO1xyXG4gIGxldCBqb3VzdV9rZXRhO1xyXG4gIGxldCBzZWtpX2tldGE7XHJcbiAgbGV0IGJ1YnVuX3Nla2kxX2tldGE7XHJcbiAgbGV0IGJ1YnVuX3Nla2kyX2tldGE7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3ViXCIpLmlubmVySFRNTCA9IGBcclxuICA8c2VsZWN0IGlkPVwidGFzdV90eXBlXCIgc3R5bGU9XCJtYXJnaW46MTBweDtmb250LXNpemU6MTZweFwiPlxyXG4gIDxvcHRpb24gdmFsdWU9XCIxXCI+KO+8kuOBkeOBnynDlyjvvJLjgZHjgZ8pPC9vcHRpb24+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4o77yT44GR44GfKcOXKO+8kuOBkeOBnyk8L29wdGlvbj5cclxuICA8L3NlbGVjdD5cclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44Kv44Oq44KiXCIgaWQ9XCJjbGVhclwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIvPiAgICBcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44KC44KT44Gg44GEXCIgaWQ9XCJtb25kYWlcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiLz4gICAgXHJcbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuOCu+ODg+ODiFwiIGlkPVwic2V0XCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIi8+ICAgIFxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjgZPjgZ/jgYhcIiBpZD1cImtvdGFlXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiLz4gICAgXHJcbiAgYDtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4OyBtYXJnaW46MTBweDtcIj5cclxuICA8ZGl2IGlkPVwic2hpa2lcIiBzdHlsZT1cImRpc3BsYXk6ZmxleDsgbWFyZ2luOjEwcHg7XCI+XHJcbiAgPGlucHV0IGlkPVwiYm94MVwiIHR5cGU9XCJudW1iZXJcIiBtYXg9OTk5IG1pbj0xMCBjbGFzcz1cImtlaXNhbl9zaGlraVwiLz5cclxuICA8ZGl2ICAgaWQ9XCJib3gyXCIgdHlwZT1cIm51bWJlclwiIHN0eWxlPVwid2lkdGg6NTBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MzZweDtcIiBjbGFzcz1cImtpZ29cIj7DlzwvZGl2PlxyXG4gIDxpbnB1dCBpZD1cImJveDNcIiB0eXBlPVwibnVtYmVyXCIgbWF4PTk5OSBtaW49MTAgY2xhc3M9XCJrZWlzYW5fc2hpa2lcIi8+XHJcbiAgPGRpdiAgIGlkPVwiYm94NFwiIHR5cGU9XCJudW1iZXJcIiBzdHlsZT1cIndpZHRoOjUwcHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjM2cHg7XCIgY2xhc3M9XCJraWdvXCI+PTwvZGl2PlxyXG4gIDxpbnB1dCBpZD1cImJveDVcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJrZWlzYW5fc2hpa2lcIi8+XHJcbiAgPC9kaXY+XHJcbiAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIuODkuODs+ODiO+8kVwiIGlkPVwiaGludF8xXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHN0eWxlPVwid2lkdGg6MTAwcHg7bWFyZ2luOjVweDtcIi8+ICAgIFxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjg5Ljg7Pjg4jvvJJcIiBpZD1cImhpbnRfMlwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cIndpZHRoOjEwMHB4O21hcmdpbjo1cHg7XCIvPlxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjg5Ljg7Pjg4jvvJNcIiBpZD1cImhpbnRfM1wiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBzdHlsZT1cIndpZHRoOjEwMHB4O21hcmdpbjo1cHg7XCIvPiAgICBcclxuICA8L2Rpdj5cclxuICA8ZGl2ICBzdHlsZT1cImRpc3BsYXk6ZmxleDttYXJnaW46MTBweDtcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgPHRib2R5IGlkPVwiVEJMXCI+XHJcbiAgICAgIDwvdGJvZGV5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6MTBweDtcIj5cclxuICAgICAgPGRpdiBpZD1cInRleHRfYm94XzFcIiBzdHlsZT1cIndpZHRoOjM1MHB4O2hlaWdodDo0MHB4O2ZvbnQtc2l6ZTozMHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOmJsdWU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDozNTBweDt0b3A6MjcwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZjYWJmO1wiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInRleHRfYm94XzJcIiBzdHlsZT1cIndpZHRoOjM1MHB4O2hlaWdodDo0MHB4O2ZvbnQtc2l6ZTozMHB4O3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOmJsdWU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDozNTBweDt0b3A6MzUwcHg7YmFja2dyb3VuZC1jb2xvcjojZmZmZjgwO1wiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImt1a3VfaHlvdVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgLy8tLeWQhOODnOOCv+ODs+OBruioreWumi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbWFzdV9jbGVhcigpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbmRhaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2h1dHVkYWkoKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1vbmRhaV9zZXQoKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrb3RhZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd19hbnN3ZXIoKSk7XHJcblxyXG4gIC8v5byP44Oc44OD44Kv44K544Gu6Kit5a6aLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgYm94MS52YWx1ZSA9IGhpam91c3U7XHJcbiAgYm94My52YWx1ZSA9IGpvdXN1O1xyXG4gIGJveDUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBpZiAoYm94NS52YWx1ZSA9PSBzZWtpKSB7XHJcbiAgICAgIGJveDUuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICBkYXRhLnNlaWthaTEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnNlaWthaTEucGxheSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm94NS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGludF8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaW50XzFcIik7XHJcbiAgaGludF8xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucmVzZXQucGxheSgpO1xyXG4gICAgYnVidW4xKCk7XHJcbiAgfSk7XHJcbiAgY29uc3QgaGludF8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaW50XzJcIik7XHJcbiAgaGludF8yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucmVzZXQucGxheSgpO1xyXG4gICAgYnVidW4yKCk7XHJcbiAgfSk7XHJcbiAgY29uc3Qga3VrdV9oeW91ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdWt1X2h5b3VcIik7XHJcbiAgY29uc3QgaGludF8zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaW50XzNcIik7XHJcbiAgaGludF8zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucmVzZXQucGxheSgpO1xyXG4gICAga3VrdSgpO1xyXG4gIH0pO1xyXG5cclxuICAvL+ethueul+ODnuOCueOBruWumue+qS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGNvbnN0IFRCTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVEJMXCIpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIHRyLnN0eWxlLm1heEhlaWdodCA9IFwiNjBweFwiO1xyXG4gICAgaWYgKGkgPT0gMSB8fCBpID09IDUpIHtcclxuICAgICAgdHIuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIzcHggc29saWQgYmxhY2tcIjtcclxuICAgIH1cclxuICAgIGlmIChpID09IDMgfHwgaSA9PSA1KSB7XHJcbiAgICAgIHRyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VraV90b2NodVwiKTtcclxuICAgIH1cclxuICAgIGlmIChpID09IDIpIHtcclxuICAgICAgdHIuc3R5bGUubWF4SGVpZ2h0ID0gXCIyMHB4XCI7XHJcbiAgICAgIHRyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VraV9rdXJpYWdhcmkxXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGkgPT0gNCkge1xyXG4gICAgICB0ci5zdHlsZS5tYXhIZWlnaHQgPSBcIjIwcHhcIjtcclxuICAgICAgdHIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWtpX2t1cmlhZ2FyaTJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoaSA9PSA2KSB7XHJcbiAgICAgIHRyLnN0eWxlLm1heEhlaWdodCA9IFwiMjBweFwiO1xyXG4gICAgICB0ci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNla2lfa3VyaWFnYXJpM1wiKTtcclxuICAgIH1cclxuICAgIGlmIChpID09IDcpIHtcclxuICAgICAgdHIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWtpX2tvdGFlXCIpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXhfa2V0YTsgaisrKSB7XHJcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICB0ZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzMzXCI7XHJcbiAgICAgIHRkLnN0eWxlLndpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLm1heFdpZHRoID0gXCI2MHB4XCI7XHJcbiAgICAgIHRkLnN0eWxlLmhlaWdodCA9IFwiNjBweFwiO1xyXG4gICAgICB0ZC5zdHlsZS5tYXhIZWlnaHQgPSBcIjYwcHhcIjtcclxuICAgICAgdGQuc3R5bGUuZm9udFNpemUgPSBcIjMwcHhcIjtcclxuICAgICAgdGQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICBpZiAoaSA+IDEpIHtcclxuICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyb3BwYWJsZS1lbGVtXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpID09IDIgfHwgaSA9PSA0IHx8IGkgPT0gNikge1xyXG4gICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpID09IDIpIHtcclxuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmNhYmZcIjtcclxuICAgICAgfSBlbHNlIGlmIChpID09IDQpIHtcclxuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmODBcIjtcclxuICAgICAgfSBlbHNlIGlmIChpID09IDYpIHtcclxuICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Ymx1ZVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBUQkwuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgVEJMLnN0eWxlLmhlaWdodCA9IFwiMzYwcHhcIjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRfYm94XzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRfYm94XzFcIik7XHJcbiAgY29uc3QgdGV4dF9ib3hfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dF9ib3hfMlwiKTtcclxuXHJcbiAgLy/mlbDlrZfjg5Hjg6zjg4Pjg4jjga7oqK3nva5cclxuICBjb25zdCBudW1fcGFsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBudW1fcGFsbGV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibnVtX3BhbGxldFwiKTtcclxuICBudW1fcGFsbGV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHJvcHBhYmxlLWVsZW1cIik7XHJcbiAgbnVtX3BhbGxldC5zdHlsZS5tYXJnaW5MZWZ0PVwiMTBweFwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobnVtX3BhbGxldCk7XHJcblxyXG4gIGhpc3Nhbl9zZXQoKTtcclxuICBudW1fc2V0KCk7XHJcblxyXG4gIC8v44GT44GT44GL44KJ6Zai5pWwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAvL+mWouaVsOOAgOODnuOCueWGheOBruaVsOWtl+OCkuOCr+ODquOColxyXG4gIGZ1bmN0aW9uIG1hc3VfY2xlYXIoKSB7XHJcbiAgICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEucmVzZXQucGxheSgpO1xyXG4gICAgaGludF9jbGVhcigpO1xyXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcclxuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNTsgY29sKyspIHtcclxuICAgICAgICBUQkwucm93c1tyb3ddLmNlbGxzW2NvbF0uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgVEJMLnJvd3NbMV0uY2VsbHNbMV0uaW5uZXJIVE1MID0gXCLDl1wiO1xyXG4gICAgYm94MS52YWx1ZSA9IFwiXCI7XHJcbiAgICBib3gzLnZhbHVlID0gXCJcIjtcclxuICAgIGJveDUudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGludF9jbGVhcigpIHtcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDU7IGNvbCsrKSB7XHJcbiAgICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2xdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICBUQkwucm93c1tyb3ddLmNlbGxzW2NvbF0uc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRleHRfYm94XzEuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRleHRfYm94XzIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIFRCTC5yb3dzWzVdLmNlbGxzWzRdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvLyDplqLmlbDjgIDllY/poYzjgpLjg6njg7Pjg4Djg6Djgavlh7rjgZlcclxuICBmdW5jdGlvbiBzaHV0dWRhaSgpIHtcclxuICAgIHN3aXRjaCAodGFzdV90eXBlLnZhbHVlKSB7XHJcbiAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgaGlqb3VzdSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwICsgMTApO1xyXG4gICAgICAgIGpvdXN1ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAgKyAxMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgaGlqb3VzdSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMCArIDEwMCk7XHJcbiAgICAgICAgam91c3UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MCArIDEwKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGJveDEudmFsdWUgPSBoaWpvdXN1O1xyXG4gICAgYm94My52YWx1ZSA9IGpvdXN1O1xyXG4gICAgaGlzc2FuX3NldCgpO1xyXG4gICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZXQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA5ZWP6aGM44KS44K744OD44OI44GZ44KLXHJcbiAgZnVuY3Rpb24gbW9uZGFpX3NldCgpIHtcclxuICAgIGhpam91c3UgPSBib3gxLnZhbHVlO1xyXG4gICAgam91c3UgPSBib3gzLnZhbHVlO1xyXG4gICAgaGlzc2FuX3NldCgpO1xyXG4gICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZXQucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA562U44GI44Gu6KGo56S6XHJcbiAgZnVuY3Rpb24gc2hvd19hbnN3ZXIoKSB7XHJcbiAgICBib3g1LnZhbHVlID0gc2VraTtcclxuICAgIGJveDUuc3R5bGUuY29sb3IgPSBcImJsdWVcIjtcclxuICAgIGRhdGEuc2Vpa2FpMi5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNlaWthaTIucGxheSgpO1xyXG4gICAga3VyaWFnYXJpID0gMDtcclxuICAgIC8v44GP44KK5LiK44GM44KK77yR44Gu6KGo56S6XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBoaWpvdXN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIGlmIChNYXRoLmZsb29yKGhpam91c3VfYXJyW2NvbF0gKiBqb3VzdV9hcnJbMF0gKyBrdXJpYWdhcmkpID4gOSkge1xyXG4gICAgICAgIGt1cmlhZ2FyaSA9IE1hdGguZmxvb3IoKGhpam91c3VfYXJyW2NvbF0gKiBqb3VzdV9hcnJbMF0gKyBrdXJpYWdhcmkpIC8gMTApO1xyXG4gICAgICAgIFRCTC5yb3dzWzJdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMl0uaW5uZXJIVE1MID0ga3VyaWFnYXJpO1xyXG4gICAgICAgIFRCTC5yb3dzWzJdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMl0uc3R5bGUuZm9udFNpemUgPSBcIjEycHhcIjtcclxuICAgICAgICBUQkwucm93c1syXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDJdLnN0eWxlLmNvbG9yID0gXCJncmF5XCI7XHJcbiAgICAgICAgVEJMLnJvd3NbMl0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAyXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJib3R0b21cIjtcclxuICAgICAgICBUQkwucm93c1syXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDJdLnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBrdXJpYWdhcmkgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBrdXJpYWdhcmkgPSAwO1xyXG4gICAgLy/jgY/jgorkuIrjgYzjgorjga7ooajnpLpcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGhpam91c3Vfa2V0YTsgY29sKyspIHtcclxuICAgICAgaWYgKE1hdGguZmxvb3IoaGlqb3VzdV9hcnJbY29sXSAqIGpvdXN1X2FyclsxXSArIGt1cmlhZ2FyaSkgPiA5KSB7XHJcbiAgICAgICAga3VyaWFnYXJpID0gTWF0aC5mbG9vcigoaGlqb3VzdV9hcnJbY29sXSAqIGpvdXN1X2FyclsxXSArIGt1cmlhZ2FyaSkgLyAxMCk7XHJcbiAgICAgICAgVEJMLnJvd3NbNF0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAzXS5pbm5lckhUTUwgPSBrdXJpYWdhcmk7XHJcbiAgICAgICAgVEJMLnJvd3NbNF0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAzXS5zdHlsZS5mb250U2l6ZSA9IFwiMTJweFwiO1xyXG4gICAgICAgIFRCTC5yb3dzWzRdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gM10uc3R5bGUuY29sb3IgPSBcImdyYXlcIjtcclxuICAgICAgICBUQkwucm93c1s0XS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDNdLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcImJvdHRvbVwiO1xyXG4gICAgICAgIFRCTC5yb3dzWzRdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gM10uc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGt1cmlhZ2FyaSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGt1cmlhZ2FyaSA9IDA7XHJcblxyXG4gICAgLy/pg6jliIbnqY3vvJHjga7ooajnpLpcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJ1YnVuX3Nla2kxX2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzWzNdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJIVE1MID0gYnVidW5fc2VraTFfYXJyW2NvbF07XHJcbiAgICB9XHJcbiAgICAvL+mDqOWIhuepje+8kuOBruihqOekulxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYnVidW5fc2VraTJfa2V0YTsgY29sKyspIHtcclxuICAgICAgVEJMLnJvd3NbNV0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAyXS5pbm5lckhUTUwgPSBidWJ1bl9zZWtpMl9hcnJbY29sXTtcclxuICAgIH1cclxuICAgIC8v44GP44KK5LiK44GM44KK562U44GI44Gu6KGo56S6XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzZWtpX2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICBzdW0gPSBNYXRoLmZsb29yKE51bWJlcihUQkwucm93c1szXS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDFdLmlubmVyVGV4dCkgKyBOdW1iZXIoVEJMLnJvd3NbNV0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAxXS5pbm5lclRleHQpICsgTnVtYmVyKFRCTC5yb3dzWzZdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJUZXh0KSk7XHJcbiAgICAgIGlmIChzdW0gPiA5KSB7XHJcbiAgICAgICAga3VyaWFnYXJpID0gMTtcclxuICAgICAgICBUQkwucm93c1s2XS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDJdLmlubmVySFRNTCA9IGt1cmlhZ2FyaTtcclxuICAgICAgICBUQkwucm93c1s2XS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDJdLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XHJcbiAgICAgICAgVEJMLnJvd3NbNl0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAyXS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgVEJMLnJvd3NbNl0uY2VsbHNbbWF4X2tldGEgLSBjb2wgLSAyXS5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJib3R0b21cIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBrdXJpYWdhcmkgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+ethueul+OBruetlOOBiOihqOekulxyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2VraV9rZXRhOyBjb2wrKykge1xyXG4gICAgICBUQkwucm93c1s3XS5jZWxsc1ttYXhfa2V0YSAtIGNvbCAtIDFdLmlubmVySFRNTCA9IHNla2lfYXJyW2NvbF07XHJcbiAgICB9XHJcbiAgICAvL+etlOOBiOOBruihqOekuuOBruaZgu+8jOOBiumHkeOCkuS4puOBueebtOOBmeOBi+OBr+imgeaknOiojlxyXG4gIH1cclxuXHJcbiAgLy8g6Zai5pWw44CA562U44GI44Gu5YWl5YqbLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24ga290YWVfaW5wdXQoKSB7XHJcbiAgICBoaWpvdXN1ID0gTWF0aC5mbG9vcihib3gxLnZhbHVlKTtcclxuICAgIGpvdXN1ID0gTWF0aC5mbG9vcihib3gzLnZhbHVlKTtcclxuICAgIHNla2kgPSBNYXRoLmZsb29yKGhpam91c3UgKiBqb3VzdSk7XHJcbiAgICBib3g1LnZhbHVlID1cclxuICAgICAgTnVtYmVyKFRCTC5yb3dzWzddLmNlbGxzWzBdLmlubmVyVGV4dCkgKiAxMDAwMCArXHJcbiAgICAgIE51bWJlcihUQkwucm93c1s3XS5jZWxsc1sxXS5pbm5lclRleHQpICogMTAwMCArXHJcbiAgICAgIE51bWJlcihUQkwucm93c1s3XS5jZWxsc1syXS5pbm5lclRleHQpICogMTAwICtcclxuICAgICAgTnVtYmVyKFRCTC5yb3dzWzddLmNlbGxzWzNdLmlubmVyVGV4dCkgKiAxMCArXHJcbiAgICAgIE51bWJlcihUQkwucm93c1s3XS5jZWxsc1s0XS5pbm5lclRleHQpICogMTtcclxuICAgIGlmIChib3g1LnZhbHVlID09IHNla2kpIHtcclxuICAgICAgYm94NS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgIGRhdGEuc2Vpa2FpMS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIGRhdGEuc2Vpa2FpMS5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBidWJ1bjEoKSB7XHJcbiAgICBoaW50X2NsZWFyKCk7XHJcbiAgICBsZXQgZGF0YSA9IFswLCAyLCAwLCAzLCAwLCA0LCAxLCA0LCAzLCAxLCAzLCAyLCAzLCAzLCAzLCA0XTtcclxuICAgIGlmIChmbGFnX2hpbnQxID09IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCAvIDI7IGkrKykge1xyXG4gICAgICAgIFRCTC5yb3dzW2RhdGFbaSAqIDJdXS5jZWxsc1tkYXRhW01hdGguZmxvb3IoaSAqIDIgKyAxKV1dLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmY2FiZlwiO1xyXG4gICAgICB9XHJcbiAgICAgIHRleHRfYm94XzEuaW5uZXJIVE1MID0gYCR7aGlqb3VzdX3jgIDDl+OAgCR7am91c3VfYXJyWzBdfWA7XHJcbiAgICAgIGZsYWdfaGludDEgPSAxO1xyXG4gICAgfSBlbHNlIGlmIChmbGFnX2hpbnQxID09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCAvIDI7IGkrKykge1xyXG4gICAgICAgIFRCTC5yb3dzW2RhdGFbaSAqIDJdXS5jZWxsc1tkYXRhW01hdGguZmxvb3IoaSAqIDIgKyAxKV1dLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmY2FiZlwiO1xyXG4gICAgICB9XHJcbiAgICAgIHRleHRfYm94XzEuaW5uZXJIVE1MID0gYCR7aGlqb3VzdX3jgIDDl+OAgCR7am91c3VfYXJyWzBdfeOAgO+8neOAgCR7aGlqb3VzdSAqIGpvdXN1X2FyclswXX1gO1xyXG4gICAgICBmbGFnX2hpbnQxID0gMjtcclxuICAgIH0gZWxzZSBpZiAoZmxhZ19oaW50MSA9PSAyKSB7XHJcbiAgICAgIGZsYWdfaGludDEgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYnVidW4yKCkge1xyXG4gICAgaGludF9jbGVhcigpO1xyXG4gICAgbGV0IGRhdGEgPSBbMCwgMiwgMCwgMywgMCwgNCwgMSwgMywgNSwgMCwgNSwgMSwgNSwgMiwgNSwgM107XHJcbiAgICBpZiAoZmxhZ19oaW50MiA9PSAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGggLyAyOyBpKyspIHtcclxuICAgICAgICBUQkwucm93c1tkYXRhW2kgKiAyXV0uY2VsbHNbZGF0YVtNYXRoLmZsb29yKGkgKiAyICsgMSldXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmODBcIjtcclxuICAgICAgfVxyXG4gICAgICBUQkwucm93c1s1XS5jZWxsc1s0XS5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjpncmF5XCI+MDwvc3Bhbj5gO1xyXG4gICAgICB0ZXh0X2JveF8yLmlubmVySFRNTCA9IGAke2hpam91c3V944CAw5fjgIAke2pvdXN1X2FyclsxXX08c3BhbiBzdHlsZT1cImNvbG9yOmdyYXlcIj4wPC9zcGFuPmA7XHJcbiAgICAgIGZsYWdfaGludDIgPSAxO1xyXG4gICAgfSBlbHNlIGlmIChmbGFnX2hpbnQyID09IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCAvIDI7IGkrKykge1xyXG4gICAgICAgIFRCTC5yb3dzW2RhdGFbaSAqIDJdXS5jZWxsc1tkYXRhW01hdGguZmxvb3IoaSAqIDIgKyAxKV1dLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmY4MFwiO1xyXG4gICAgICAgIFRCTC5yb3dzWzVdLmNlbGxzWzRdLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOmdyYXlcIj4wPC9zcGFuPmA7XHJcbiAgICAgICAgdGV4dF9ib3hfMi5pbm5lckhUTUwgPSBgJHtoaWpvdXN1feOAgMOX44CAJHtqb3VzdV9hcnJbMV19PHNwYW4gc3R5bGU9XCJjb2xvcjpncmF5XCI+MDwvc3Bhbj7jgIDvvJ3jgIAke2hpam91c3UgKiBqb3VzdV9hcnJbMV19PHNwYW4gc3R5bGU9XCJjb2xvcjpncmF5XCI+MDwvc3Bhbj5gO1xyXG4gICAgICB9XHJcbiAgICAgIGZsYWdfaGludDIgPSAyO1xyXG4gICAgfSBlbHNlIGlmIChmbGFnX2hpbnQyID09IDIpIHtcclxuICAgICAgZmxhZ19oaW50MiA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+mWouaVsOOAgOethueul+OBruaPj+eUuy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIGZ1bmN0aW9uIGhpc3Nhbl9zZXQoKSB7XHJcbiAgICBpZiAoaGlqb3VzdSA+IDk5OSB8fCBqb3VzdSA+IDk5IHx8IGhpam91c3UgPCAwIHx8IGpvdXN1IDwgMCkge1xyXG4gICAgICBkYXRhLmFsZXJ0LnBsYXkoKTtcclxuICAgICAgYWxlcnQoXCLjgYvjgZHjgonjgozjgovmlbDjga8x772eOTk577yM44GL44GR44KL5pWw44GvMe+9njk544G+44Gn44Gr44GX44Gm44GP44Gg44GV44GE44CCXCIpO1xyXG4gICAgICBib3gxLnZhbHVlID0gXCJcIjtcclxuICAgICAgYm94My52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGhpbnRfY2xlYXIoKTtcclxuICAgIGZsYWdfaGludDEgPSAwO1xyXG4gICAgZmxhZ19oaW50MiA9IDA7XHJcbiAgICBib3g1LnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgaGlqb3VzdSA9IE1hdGguZmxvb3IoaGlqb3VzdSk7XHJcbiAgICBqb3VzdSA9IE1hdGguZmxvb3Ioam91c3UpO1xyXG4gICAgc2VraSA9IE1hdGguZmxvb3IoaGlqb3VzdSAqIGpvdXN1KTtcclxuICAgIGJveDEudmFsdWUgPSBoaWpvdXN1O1xyXG4gICAgYm94My52YWx1ZSA9IGpvdXN1O1xyXG4gICAgYm94NS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgLy/mlbDlrZfjgpLphY3liJfjgajjgZfjgabku6PlhaVcclxuICAgIGhpam91c3Vfa2V0YSA9IFN0cmluZyhoaWpvdXN1KS5sZW5ndGg7XHJcbiAgICBqb3VzdV9rZXRhID0gU3RyaW5nKGpvdXN1KS5sZW5ndGg7XHJcbiAgICBzZWtpX2tldGEgPSBTdHJpbmcoc2VraSkubGVuZ3RoO1xyXG5cclxuICAgIGhpam91c3VfYXJyWzJdID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpam91c3Vfa2V0YTsgaSsrKSB7XHJcbiAgICAgIGhpam91c3VfYXJyW2ldID0gTnVtYmVyKFN0cmluZyhoaWpvdXN1KS5jaGFyQXQoaGlqb3VzdV9rZXRhIC0gaSAtIDEpKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgam91c3Vfa2V0YTsgaSsrKSB7XHJcbiAgICAgIGpvdXN1X2FycltpXSA9IE51bWJlcihTdHJpbmcoam91c3UpLmNoYXJBdChqb3VzdV9rZXRhIC0gaSAtIDEpKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VraV9rZXRhOyBpKyspIHtcclxuICAgICAgc2VraV9hcnJbaV0gPSBOdW1iZXIoU3RyaW5nKHNla2kpLmNoYXJBdChzZWtpX2tldGEgLSBpIC0gMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1YnVuX3Nla2kxID0gTWF0aC5mbG9vcihoaWpvdXN1ICogam91c3VfYXJyWzBdKTtcclxuICAgIGJ1YnVuX3Nla2kyID0gTWF0aC5mbG9vcihoaWpvdXN1ICogam91c3VfYXJyWzFdKTtcclxuICAgIGJ1YnVuX3Nla2kxX2tldGEgPSBTdHJpbmcoYnVidW5fc2VraTEpLmxlbmd0aDtcclxuICAgIGJ1YnVuX3Nla2kyX2tldGEgPSBTdHJpbmcoYnVidW5fc2VraTIpLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVidW5fc2VraTFfa2V0YTsgaSsrKSB7XHJcbiAgICAgIGJ1YnVuX3Nla2kxX2FycltpXSA9IE51bWJlcihTdHJpbmcoYnVidW5fc2VraTEpLmNoYXJBdChidWJ1bl9zZWtpMV9rZXRhIC0gaSAtIDEpKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVidW5fc2VraTJfa2V0YTsgaSsrKSB7XHJcbiAgICAgIGJ1YnVuX3Nla2kyX2FycltpXSA9IE51bWJlcihTdHJpbmcoYnVidW5fc2VraTIpLmNoYXJBdChidWJ1bl9zZWtpMl9rZXRhIC0gaSAtIDEpKTtcclxuICAgIH1cclxuICAgIHN1dWppX3NldCgpO1xyXG4gIH1cclxuXHJcbiAgLy/jg57jgrnlhoXjgavmlbDlrZfjgpLmm7jjgY3ovrzjgoAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZnVuY3Rpb24gc3V1amlfc2V0KCkge1xyXG4gICAgLy/kuIDluqbjgIDjg57jgrnlhoXjga7mlbDlrZfjgpLjgq/jg6rjgqJcclxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XHJcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDU7IGNvbCsrKSB7XHJcbiAgICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2xdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8v44Oe44K55YaF44Gr5pWw5a2X44KS5Luj5YWlXHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBoaWpvdXN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzWzBdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJIVE1MID0gaGlqb3VzdV9hcnJbY29sXTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGpvdXN1X2tldGE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzWzFdLmNlbGxzW21heF9rZXRhIC0gY29sIC0gMV0uaW5uZXJIVE1MID0gam91c3VfYXJyW2NvbF07XHJcbiAgICB9XHJcbiAgICBpZiAoKGhpam91c3UgPCAxMDApICYgKGpvdXN1IDwgMTAwKSkge1xyXG4gICAgICBUQkwucm93c1sxXS5jZWxsc1syXS5pbm5lckhUTUwgPSBcIsOXXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBUQkwucm93c1sxXS5jZWxsc1sxXS5pbm5lckhUTUwgPSBcIsOXXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+mWouaVsOOAgOaVsOWtl+OBruOCu+ODg+ODiFxyXG4gIGZ1bmN0aW9uIG51bV9zZXQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGl2LmlubmVySFRNTCA9IGk7XHJcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRyYWdnYWJsZS1lbGVtXCIpO1xyXG4gICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuXHJcbiAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaFN0YXJ0RXZlbnQsIGZhbHNlKTtcclxuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hNb3ZlRXZlbnQsIGZhbHNlKTtcclxuICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaEVuZEV2ZW50LCBmYWxzZSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtX3BhbGxldFwiKS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/jg57jgqbjgrnjgafjga7jg4njg6njg4PjgrDjgpLlj6/og73jgavjgZnjgovjgIJcclxuICB2YXIgZHJhZ2dlZDtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiZHJhZ3N0YXJ0XCIsXHJcbiAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgLy8gc3RvcmUgYSByZWYuIG9uIHRoZSBkcmFnZ2VkIGVsZW1cclxuICAgICAgZHJhZ2dlZCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgLy8gbWFrZSBpdCBoYWxmIHRyYW5zcGFyZW50XHJcbiAgICB9LFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICAvKiBldmVudHMgZmlyZWQgb24gdGhlIGRyb3AgdGFyZ2V0cyAqL1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImRyYWdvdmVyXCIsXHJcbiAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgLy8gcHJldmVudCBkZWZhdWx0IHRvIGFsbG93IGRyb3BcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0sXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImRyb3BcIixcclxuICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uIChvcGVuIGFzIGxpbmsgZm9yIHNvbWUgZWxlbWVudHMpXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8vIG1vdmUgZHJhZ2dlZCBlbGVtIHRvIHRoZSBzZWxlY3RlZCBkcm9wIHRhcmdldFxyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImRyb3BwYWJsZS1lbGVtXCIpIHtcclxuICAgICAgICBkcmFnZ2VkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZCk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnZWQpO1xyXG4gICAgICAgIC8v5pWw44OR44Os44OD44OI5YaF44Gu5pWw5a2X44KS5LiA5pem5raI5Y67XHJcbiAgICAgICAgdmFyIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtX3BhbGxldFwiKTtcclxuICAgICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG51bV9zZXQoKTtcclxuICAgICAgICBrb3RhZV9pbnB1dCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gXCJkcm9wcGFibGUtZWxlbS0yXCIgJiYgZHJhZ2dlZC50YWdOYW1lID09IFwiSU1HXCIpIHtcclxuICAgICAgICBkcmFnZ2VkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ2dlZCk7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGRyYWdnZWQpO1xyXG4gICAgICAgIGltZ19rdXJpYWdhcmkoKTtcclxuICAgICAgfVxyXG4gICAgICBkYXRhLnBpLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5waS5wbGF5KCk7XHJcbiAgICB9LFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICAvL+ODieODqeODg+OCsOmWi+Wni+OBruaTjeS9nFxyXG4gIGZ1bmN0aW9uIHRvdWNoU3RhcnRFdmVudChldmVudCkge1xyXG4gICAgLy/jgr/jg4Pjg4HjgavjgojjgovnlLvpnaLjgrnjgq/jg63jg7zjg6vjgpLmraLjgoHjgotcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvL+ODieODqeODg+OCsOS4reOBruaTjeS9nFxyXG4gIGZ1bmN0aW9uIHRvdWNoTW92ZUV2ZW50KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy/jg4njg6njg4PjgrDkuK3jga7jgqLjgqTjg4bjg6DjgpLjgqvjg7zjgr3jg6vjga7kvY3nva7jgavov73lvpNcclxuICAgIHZhciBkcmFnZ2VkRWxlbSA9IGV2ZW50LnRhcmdldDtcclxuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRvcCA9IHRvdWNoLnBhZ2VZIC0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gZHJhZ2dlZEVsZW0ub2Zmc2V0SGVpZ2h0IC8gMiArIFwicHhcIjtcclxuICAgIGV2ZW50LnRhcmdldC5zdHlsZS5sZWZ0ID0gdG91Y2gucGFnZVggLSB3aW5kb3cucGFnZVhPZmZzZXQgLSBkcmFnZ2VkRWxlbS5vZmZzZXRXaWR0aCAvIDIgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICAvL+ODieODqeODg+OCsOe1guS6huW+jOOBruaTjeS9nFxyXG4gIGZ1bmN0aW9uIHRvdWNoRW5kRXZlbnQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL+ODieODqeODg+OCsOS4reOBruaTjeS9nOOBruOBn+OCgeOBq+WkieabtOOBl+OBpuOBhOOBn+OCueOCv+OCpOODq+OCkuWFg+OBq+aIu+OBmVxyXG4gICAgdmFyIGRyb3BwZWRFbGVtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgZHJvcHBlZEVsZW0uc3R5bGUucG9zaXRpb24gPSBcIlwiO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICBldmVudC50YXJnZXQuc3R5bGUubGVmdCA9IFwiXCI7XHJcbiAgICAvL+ODieODreODg+ODl+OBl+OBn+S9jee9ruOBq+OBguOCi+ODieODreODg+ODl+WPr+iDveOBquOCqOODrOODoeODs+ODiOOBq+imquWtkOS7mOOBkeOBmeOCi1xyXG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAvL+OCueOCr+ODreODvOODq+WIhuOCkuWKoOWRs+OBl+OBn+W6p+aomeOBq+WtmOWcqOOBmeOCi+OCqOODrOODoeODs+ODiOOCkuaWsOOBl+OBhOimquOBqOOBmeOCi1xyXG4gICAgdmFyIG5ld1BhcmVudEVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCB0b3VjaC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgICBpZiAobmV3UGFyZW50RWxlbS5jbGFzc05hbWUgPT0gXCJkcm9wcGFibGUtZWxlbVwiKSB7XHJcbiAgICAgIG5ld1BhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZHJvcHBlZEVsZW0pO1xyXG4gICAgICAvL+aVsOODkeODrOODg+ODiOWGheOBruaVsOWtl+OCkuS4gOaXpua2iOWOu1xyXG4gICAgICB2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1fcGFsbGV0XCIpO1xyXG4gICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICAgIG51bV9zZXQoKTtcclxuICAgICAga290YWVfaW5wdXQoKTtcclxuICAgIH1cclxuICAgIGRhdGEucGkuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5waS5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBrdWt1KCkge1xyXG4gICAgY29uc3QgVEJMX2t1a3UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICBUQkxfa3VrdS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImt1a3VfaHlvdVwiKTtcclxuICAgIFRCTF9rdWt1LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBUQkxfa3VrdS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgIFRCTF9rdWt1LnN0eWxlLmxlZnQgPSBcIjEwMHB4XCI7XHJcbiAgICBUQkxfa3VrdS5zdHlsZS50b3AgPSBcIjEzMHB4XCI7XHJcbiAgICBUQkxfa3VrdS5zdHlsZS56SW5kZXggPSAxMDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICB0ZC5zdHlsZS5oZWlnaHQgPSBcIjIwcHhcIjtcclxuICAgICAgICB0ZC5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xyXG4gICAgICAgIHRkLnN0eWxlLmZvbnRTaXplID0gXCIxMnB4XCI7XHJcbiAgICAgICAgdGQuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcblxyXG4gICAgICAgIGlmIChpICE9IDAgJiYgaiAhPT0gMCkge1xyXG4gICAgICAgICAgdGQuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihpICogaik7XHJcbiAgICAgICAgICB0ZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmODBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgdGQuaW5uZXJUZXh0ID0gajtcclxuICAgICAgICAgIHRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmY2FiZlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaiA9PSAwKSB7XHJcbiAgICAgICAgICB0ZC5pbm5lclRleHQgPSBpO1xyXG4gICAgICAgICAgdGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGJsdWVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPT0gMCAmJiBqID09IDApIHtcclxuICAgICAgICAgIHRkLmlubmVyVGV4dCA9IFwieFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgIH1cclxuICAgICAgVEJMX2t1a3UuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfVxyXG4gICAga3VrdV9oeW91LmFwcGVuZENoaWxkKFRCTF9rdWt1KTtcclxuICAgIG1vdmUoVEJMX2t1a3UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuaW1wb3J0IHsgZHJhZyB9IGZyb20gXCIuL2RyYWcuanNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGh5YWt1KCkge1xyXG4gIG1haW5fdGV4dF9ib3guaW5uZXJIVE1MID0gXCIxMDDjgb7jgafjga7jgYvjgZrjga7jgZHjgYTjgZXjgpNcIjtcclxuICAvL+WIneacn+ioreWumi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YlwiKS5pbm5lckhUTUwgPSBgXHJcbiAgPHNlbGVjdCBpZD1cInRhc3VfdHlwZVwiIHN0eWxlPVwibWFyZ2luOjEwcHg7Zm9udC1zaXplOjE2cHhcIj5cclxuICA8b3B0aW9uIHZhbHVlPVwiMVwiPijilqHljYEpIO+8iyAo4pah5Y2BKTwvb3B0aW9uPlxyXG4gIDxvcHRpb24gdmFsdWU9XCIyXCI+KOKWoeWNgSkg77yNICjilqHljYEpPC9vcHRpb24+XHJcbiAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4o77yS44GR44GfKSDvvIsgKO+8keOBkeOBnyk8L29wdGlvbj5cclxuICA8b3B0aW9uIHZhbHVlPVwiNFwiPijvvJLjgZHjgZ8pIO+8jSAo77yR44GR44GfKTwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjgoLjgpPjgaDjgYRcIiBpZD1cIm1vbmRhaVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIvPiAgICBcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44Gf44GX44GL44KBXCIgaWQ9XCJjaGVja1wiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIi8+ICAgIFxyXG4gIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCLjg5Ljg7Pjg4hcIiBpZD1cImhpbnRcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIvPiAgICBcclxuICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwi44GT44Gf44GI44KS44G/44KLXCIgaWQ9XCJrb3RhZVwiIHN0eWxlPVwid2lkdGg6MTAwcHg7XCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIi8+ICAgIFxyXG4gIGA7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBpZD1cInNoaWtpXCIgc3R5bGU9XCJkaXNwbGF5OmZsZXg7IG1hcmdpbjoxMHB4O1wiPlxyXG4gICAgPGlucHV0IGlkPVwiYm94MVwiIHR5cGU9XCJudW1iZXJcIiBtYXg9OTk5IG1pbj0xMCBjbGFzcz1cImtlaXNhbl9zaGlraVwiLz5cclxuICAgIDxkaXYgICBpZD1cImJveDJcIiB0eXBlPVwibnVtYmVyXCIgc3R5bGU9XCJ3aWR0aDo1MHB4O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZTozNnB4O1wiIGNsYXNzPVwia2lnb1wiPis8L2Rpdj5cclxuICAgIDxpbnB1dCBpZD1cImJveDNcIiB0eXBlPVwibnVtYmVyXCIgbWF4PTk5OSBtaW49MTAgY2xhc3M9XCJrZWlzYW5fc2hpa2lcIi8+XHJcbiAgICA8ZGl2ICAgaWQ9XCJib3g0XCIgdHlwZT1cIm51bWJlclwiIHN0eWxlPVwid2lkdGg6NTBweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MzZweDtcIiBjbGFzcz1cImtpZ29cIj49PC9kaXY+XHJcbiAgICA8aW5wdXQgaWQ9XCJib3g1XCIgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwia2Vpc2FuX3NoaWtpXCIvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7ZGlzcGxheTpmbGV4O21hcmdpbjoxMHB4O1wiPlxyXG4gICAgPHRhYmxlIHN0eWxlPVwid2lkdGg6NjAwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCI+XHJcbiAgICAgIDx0Ym9keSBpZD1cIlRCTFwiID5cclxuICAgICAgPHRyIHN0eWxlPVwiaGVpZ2h0OjUwcHg7Zm9udC1zaXplOjI4cHg7XCI+XHJcbiAgICAgICAgPHRkPuWNgeOBruOBj+OCieOBhDwvdGQ+XHJcbiAgICAgICAgPHRkPuS4gOOBruOBj+OCieOBhDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0ciBzdHlsZT1cImhlaWdodDo1MHB4O1wiPlxyXG4gICAgICA8dGQ+5Y2B44GM44CA44GTPC90ZD5cclxuICAgICAgPHRkPuS4gOOBjOOAgOOBkzwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0ciBzdHlsZT1cImhlaWdodDozMDBweDtcIj5cclxuICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O3ZlcnRpY2FsLWFsaWduOnRvcDtwYWRkaW5nOjEwcHg7d2lkdGg6MzAwcHg7XCJjbGFzcz1cImRyb3BwYWJsZS1lbGVtXCI+PC90ZD5cclxuICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O3ZlcnRpY2FsLWFsaWduOnRvcDtwYWRkaW5nOjEwcHg7d2lkdGg6MTQwcHg7XCJjbGFzcz1cImRyb3BwYWJsZS1lbGVtXCI+PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPC90Ym9kZXk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoxMHB4XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJib3hfMlwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7bWFyZ2luLXRvcDoxMDBweDt3aWR0aDozMjBweDtoZWlnaHQ6MzIwcHg7cGFkZGluZzoxMHB4O1wiIGNsYXNzPVwiZHJvcHBhYmxlLWVsZW1cIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJzY29yZVwiPjwvZGl2PlxyXG4gICAgICBgO1xyXG4gIC8vLS3lkITjg5zjgr/jg7Pjga7oqK3lrpotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgdmFyIHZhbF8xO1xyXG4gIHZhciB2YWxfMjtcclxuICB2YXIgdmFsXzM7XHJcbiAgdmFyIGp1dV9ub19rdXJhaTtcclxuICB2YXIgaWNoaV9ub19rdXJhaTtcclxuICB2YXIgaG9rYV9ub19ib3g7XHJcbiAgdmFyIGZsYWcgPSBmYWxzZTtcclxuICBib3gxLnZhbHVlID0gXCJcIjtcclxuICBib3gzLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXN1X3R5cGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBkYXRhLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgICBzd2l0Y2ggKHRhc3VfdHlwZS52YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgIGJveDIuaW5uZXJIVE1MID0gXCIrXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgYm94Mi5pbm5lckhUTUwgPSBcIi1cIjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbmRhaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2h1dHVkYWkoKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY2hlY2tfYW5zd2VyKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoaW50XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93X2hpbnQoKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrb3RhZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd19hbnN3ZXIoKSk7XHJcblxyXG4gIC8v6Zai5pWw44CA44Oe44K55YaF44Gu5pWw5a2X44KS44Kv44Oq44KiXHJcbiAgZnVuY3Rpb24gbWFzdV9jbGVhcigpIHtcclxuICAgIFRCTC5yb3dzWzFdLmNlbGxzWzBdLmlubmVySFRNTCA9IFwi5Y2B44GM44CA44GTXCI7XHJcbiAgICBUQkwucm93c1sxXS5jZWxsc1sxXS5pbm5lckhUTUwgPSBcIuS4gOOBjOOAgOOBk1wiO1xyXG4gICAgVEJMLnJvd3NbMl0uY2VsbHNbMF0uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIFRCTC5yb3dzWzJdLmNlbGxzWzFdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBib3hfMi5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgYm94MS52YWx1ZSA9IFwiXCI7XHJcbiAgICBib3gzLnZhbHVlID0gXCJcIjtcclxuICAgIGJveDUudmFsdWUgPSBcIlwiO1xyXG4gICAgYm94NS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICB9XHJcblxyXG4gIC8vIOmWouaVsOOAgOWVj+mhjOOCkuODqeODs+ODgOODoOOBq+WHuuOBmVxyXG4gIGZ1bmN0aW9uIHNodXR1ZGFpKCkge1xyXG4gICAgbWFzdV9jbGVhcigpO1xyXG4gICAgZmxhZyA9IHRydWU7XHJcbiAgICBzd2l0Y2ggKHRhc3VfdHlwZS52YWx1ZSkge1xyXG4gICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgIHZhbF8zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDIpICogMTA7XHJcbiAgICAgICAgdmFsXzIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodmFsXzMgLyAxMCAtIDEpICsgMSkgKiAxMDtcclxuICAgICAgICB2YWxfMSA9IHZhbF8zIC0gdmFsXzI7XHJcbiAgICAgICAganV1X25vX2t1cmFpID0gTWF0aC5mbG9vcih2YWxfMSAvIDEwKTtcclxuICAgICAgICBpY2hpX25vX2t1cmFpID0gMDtcclxuICAgICAgICBob2thX25vX2JveCA9IE1hdGguZmxvb3IodmFsXzIgLyAxMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgdmFsXzEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMikgKiAxMDtcclxuICAgICAgICB2YWxfMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh2YWxfMSAvIDEwIC0gMSkgKyAxKSAqIDEwO1xyXG4gICAgICAgIHZhbF8zID0gdmFsXzEgLSB2YWxfMjtcclxuICAgICAgICBqdXVfbm9fa3VyYWkgPSBNYXRoLmZsb29yKHZhbF8xIC8gMTApO1xyXG4gICAgICAgIGljaGlfbm9fa3VyYWkgPSAwO1xyXG4gICAgICAgIGhva2Ffbm9fYm94ID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICB2YWxfMyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwICsgMTApO1xyXG4gICAgICAgIHZhbF8yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKCh2YWxfMyAlIDEwKSAtIDEpICsgMSk7XHJcbiAgICAgICAgdmFsXzEgPSB2YWxfMyAtIHZhbF8yO1xyXG4gICAgICAgIGp1dV9ub19rdXJhaSA9IE1hdGguZmxvb3IodmFsXzEgLyAxMCk7XHJcbiAgICAgICAgaWNoaV9ub19rdXJhaSA9IE1hdGguZmxvb3IodmFsXzEgJSAxMCk7XHJcbiAgICAgICAgaG9rYV9ub19ib3ggPSB2YWxfMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICB2YWxfMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwICsgMTApO1xyXG4gICAgICAgIHZhbF8yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKCh2YWxfMSAlIDEwKSAtIDEpICsgMSk7XHJcbiAgICAgICAgdmFsXzMgPSB2YWxfMSAtIHZhbF8yO1xyXG4gICAgICAgIGp1dV9ub19rdXJhaSA9IE1hdGguZmxvb3IodmFsXzEgLyAxMCk7XHJcbiAgICAgICAgaWNoaV9ub19rdXJhaSA9IE1hdGguZmxvb3IodmFsXzEgJSAxMCk7XHJcbiAgICAgICAgaG9rYV9ub19ib3ggPSAwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgYm94MS52YWx1ZSA9IHZhbF8xO1xyXG4gICAgYm94My52YWx1ZSA9IHZhbF8yO1xyXG4gICAgYm94NS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkYXRhLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgICBpbWdfc2V0KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbWdfc2V0KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqdXVfbm9fa3VyYWk7IGkrKykge1xyXG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpbWcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XHJcbiAgICAgIGltZy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjVweFwiO1xyXG4gICAgICBpbWcuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJtdWx0aXBseVwiO1xyXG4gICAgICBpbWcuc3JjID0gXCIuL2ltYWdlL2p1dS5wbmdcIjtcclxuICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJKdXVcIik7XHJcbiAgICAgIFRCTC5yb3dzWzJdLmNlbGxzWzBdLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgIGRyYWcoaW1nKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNoaV9ub19rdXJhaTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltZy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgaW1nLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwibXVsdGlwbHlcIjtcclxuICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IFwiMTAwcHhcIjtcclxuICAgICAgaW1nLnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiNXB4XCI7XHJcbiAgICAgIGltZy5zcmMgPSBcIi4vaW1hZ2UvaWNoaS5wbmdcIjtcclxuICAgICAgaW1nLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiSWNoaVwiKTtcclxuICAgICAgVEJMLnJvd3NbMl0uY2VsbHNbMV0uYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgZHJhZyhpbWcpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob2thX25vX2JveDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltZy5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjVweFwiO1xyXG4gICAgICBpbWcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgIGltZy5zdHlsZS5taXhCbGVuZE1vZGUgPSBcIm11bHRpcGx5XCI7XHJcbiAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XHJcbiAgICAgIGlmICh0YXN1X3R5cGUudmFsdWUgPT0gXCIxXCIpIHtcclxuICAgICAgICBpbWcuc3JjID0gXCIuL2ltYWdlL2p1dS5wbmdcIjtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcIkp1dVwiKTtcclxuICAgICAgfSBlbHNlIGlmICh0YXN1X3R5cGUudmFsdWUgPT0gXCIzXCIpIHtcclxuICAgICAgICBpbWcuc3JjID0gXCIuL2ltYWdlL2ljaGkucG5nXCI7XHJcbiAgICAgICAgaW1nLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJJY2hpXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGJveF8yLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgIGRyYWcoaW1nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOmWouaVsOOAgOetlOOBiOOBruihqOekulxyXG4gIGZ1bmN0aW9uIHNob3dfYW5zd2VyKCkge1xyXG4gICAgYm94NS52YWx1ZSA9IHZhbF8zO1xyXG4gICAgYm94NS5zdHlsZS5jb2xvciA9IFwiYmx1ZVwiO1xyXG4gICAgZGF0YS5zZWlrYWkyLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEuc2Vpa2FpMi5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93X2hpbnQoKSB7XHJcbiAgICB2YXIgY2VsbDEgPSBUQkwucm93c1syXS5jZWxsc1swXTtcclxuICAgIHZhciBjZWxsMiA9IFRCTC5yb3dzWzJdLmNlbGxzWzFdO1xyXG4gICAgVEJMLnJvd3NbMV0uY2VsbHNbMF0uaW5uZXJIVE1MID0gYOWNgeOBjOOAgDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjMycHg7Y29sb3I6cmVkO1wiPiR7Y2VsbDEuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkp1dVwiKS5sZW5ndGh9PC9zcGFuPuOBk2A7XHJcbiAgICBUQkwucm93c1sxXS5jZWxsc1sxXS5pbm5lckhUTUwgPSBg5LiA44GM44CAPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MzJweDtjb2xvcjpyZWQ7XCI+JHtjZWxsMi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiSWNoaVwiKS5sZW5ndGh9PC9zcGFuPuOBk2A7XHJcbiAgICBkYXRhLnNlaWthaTIuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5zZWlrYWkyLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrX2Fuc3dlcigpIHtcclxuICAgIGlmIChib3g1LnZhbHVlID09IHZhbF8zKSB7XHJcbiAgICAgIGJveDUuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICBzY29yZV91cCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm94NS5zdHlsZS5jb2xvciA9IFwiZ3JheVwiO1xyXG4gICAgICBkYXRhLmFsZXJ0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5hbGVydC5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzY29yZV91cCgpIHtcclxuICAgIGlmIChmbGFnID09IHRydWUpIHtcclxuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgc3dpdGNoICh0YXN1X3R5cGUudmFsdWUpIHtcclxuICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgaW1nLnNyYyA9IFwiLi9pbWFnZS9iYWxsb29uLnBuZ1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgIGltZy5zcmMgPSBcIi4vaW1hZ2UvY29va2llLnBuZ1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgIGltZy5zcmMgPSBcIi4vaW1hZ2UvaGFuYS5wbmdcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICBpbWcuc3JjID0gXCIuL2ltYWdlL3JvYm90LnBuZ1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaW1nLnN0eWxlLndpZHRoID0gXCI1MHB4XCI7XHJcbiAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcclxuICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICBkYXRhLnNlaWthaTEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnNlaWthaTEucGxheSgpO1xyXG4gICAgICBzY29yZS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvL+OCs+ODs+ODhuODs+ODhOWFsemAmuOBruWKueaenOmfs+OBrueZu+mMslxyXG5leHBvcnQgY29uc3QgcGkgPSBuZXcgSG93bCh7XHJcbiAgc3JjOiBbXCIuL1NvdW5kcy9waS5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2V0ID0gbmV3IEhvd2woe1xyXG4gIHNyYzogW1wiLi9Tb3VuZHMvc2V0Lm1wM1wiXSxcclxuICBwcmVsb2FkOiB0cnVlLCAvLyDkuovliY3jg63jg7zjg4lcclxuICB2b2x1bWU6IDEuMCwgLy8g6Z+z6YePKDAuMOOAnDEuMOOBruevhOWbsuOBp+aMh+WumilcclxuICBsb29wOiBmYWxzZSwgLy8g44Or44O844OX5YaN55Sf44GZ44KL44GLXHJcbiAgYXV0b3BsYXk6IGZhbHNlLCAvLyDoh6rli5Xlho3nlJ/jgZnjgovjgYtcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZWlrYWkxID0gbmV3IEhvd2woe1xyXG4gIHNyYzogW1wiLi9Tb3VuZHMvc2Vpa2FpLm1wM1wiXSxcclxuICBwcmVsb2FkOiB0cnVlLCAvLyDkuovliY3jg63jg7zjg4lcclxuICB2b2x1bWU6IDEuMCwgLy8g6Z+z6YePKDAuMOOAnDEuMOOBruevhOWbsuOBp+aMh+WumilcclxuICBsb29wOiBmYWxzZSwgLy8g44Or44O844OX5YaN55Sf44GZ44KL44GLXHJcbiAgYXV0b3BsYXk6IGZhbHNlLCAvLyDoh6rli5Xlho3nlJ/jgZnjgovjgYtcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzZWlrYWkyID0gbmV3IEhvd2woe1xyXG4gIHNyYzogW1wiLi9Tb3VuZHMvc2Vpa2FpMi5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcmVzZXQgPSBuZXcgSG93bCh7XHJcbiAgc3JjOiBbXCIuL1NvdW5kcy9yZXNldC5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcmlnaHQgPSBuZXcgSG93bCh7XHJcbiAgc3JjOiBbXCIuL1NvdW5kcy9yaWdodC5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbW92ZTEgPSBuZXcgSG93bCh7XHJcbiAgc3JjOiBbXCIuL1NvdW5kcy9tb3ZlMS5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgbW92ZTIgPSBuZXcgSG93bCh7XHJcbiAgc3JjOiBbXCIuL1NvdW5kcy9tb3ZlMi5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgYWxlcnQgPSBuZXcgSG93bCh7XHJcbiAgc3JjOiBbXCIuL1NvdW5kcy9hbGVydC5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qga2FrbyA9IG5ldyBIb3dsKHtcclxuICBzcmM6IFtcIi4vU291bmRzL2tha28ubXAzXCJdLFxyXG4gIHByZWxvYWQ6IHRydWUsIC8vIOS6i+WJjeODreODvOODiVxyXG4gIHZvbHVtZTogMS4wLCAvLyDpn7Pph48oMC4w44CcMS4w44Gu56+E5Zuy44Gn5oyH5a6aKVxyXG4gIGxvb3A6IGZhbHNlLCAvLyDjg6vjg7zjg5flho3nlJ/jgZnjgovjgYtcclxuICBhdXRvcGxheTogZmFsc2UsIC8vIOiHquWLleWGjeeUn+OBmeOCi+OBi1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IGNhbmNlbCA9IG5ldyBIb3dsKHtcclxuICBzcmM6IFtcIi4vU291bmRzL2NhbmNlbC5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgY2FuY2VsMiA9IG5ldyBIb3dsKHtcclxuICBzcmM6IFtcIi4vU291bmRzL2NhbmNlbDIubXAzXCJdLFxyXG4gIHByZWxvYWQ6IHRydWUsIC8vIOS6i+WJjeODreODvOODiVxyXG4gIHZvbHVtZTogMS4wLCAvLyDpn7Pph48oMC4w44CcMS4w44Gu56+E5Zuy44Gn5oyH5a6aKVxyXG4gIGxvb3A6IGZhbHNlLCAvLyDjg6vjg7zjg5flho3nlJ/jgZnjgovjgYtcclxuICBhdXRvcGxheTogZmFsc2UsIC8vIOiHquWLleWGjeeUn+OBmeOCi+OBi1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IGNhbmNlbDMgPSBuZXcgSG93bCh7XHJcbiAgc3JjOiBbXCIuL1NvdW5kcy9jYW5jZWwzLm1wM1wiXSxcclxuICBwcmVsb2FkOiB0cnVlLCAvLyDkuovliY3jg63jg7zjg4lcclxuICB2b2x1bWU6IDEuMCwgLy8g6Z+z6YePKDAuMOOAnDEuMOOBruevhOWbsuOBp+aMh+WumilcclxuICBsb29wOiBmYWxzZSwgLy8g44Or44O844OX5YaN55Sf44GZ44KL44GLXHJcbiAgYXV0b3BsYXk6IGZhbHNlLCAvLyDoh6rli5Xlho3nlJ/jgZnjgovjgYtcclxufSk7XHJcbmV4cG9ydCBjb25zdCBvcGVuMSA9IG5ldyBIb3dsKHtcclxuICBzcmM6IFtcIi4vU291bmRzL29wZW4xLm1wM1wiXSxcclxuICBwcmVsb2FkOiB0cnVlLCAvLyDkuovliY3jg63jg7zjg4lcclxuICB2b2x1bWU6IDEuMCwgLy8g6Z+z6YePKDAuMOOAnDEuMOOBruevhOWbsuOBp+aMh+WumilcclxuICBsb29wOiBmYWxzZSwgLy8g44Or44O844OX5YaN55Sf44GZ44KL44GLXHJcbiAgYXV0b3BsYXk6IGZhbHNlLCAvLyDoh6rli5Xlho3nlJ/jgZnjgovjgYtcclxufSk7XHJcbmV4cG9ydCBjb25zdCBvcGVuMiA9IG5ldyBIb3dsKHtcclxuICBzcmM6IFtcIi4vU291bmRzL29wZW4yLm1wM1wiXSxcclxuICBwcmVsb2FkOiB0cnVlLCAvLyDkuovliY3jg63jg7zjg4lcclxuICB2b2x1bWU6IDEuMCwgLy8g6Z+z6YePKDAuMOOAnDEuMOOBruevhOWbsuOBp+aMh+WumilcclxuICBsb29wOiBmYWxzZSwgLy8g44Or44O844OX5YaN55Sf44GZ44KL44GLXHJcbiAgYXV0b3BsYXk6IGZhbHNlLCAvLyDoh6rli5Xlho3nlJ/jgZnjgovjgYtcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzaG90ID0gbmV3IEhvd2woe1xyXG4gIHNyYzogW1wiLi9Tb3VuZHMvc2hvdC5tcDNcIl0sXHJcbiAgcHJlbG9hZDogdHJ1ZSwgLy8g5LqL5YmN44Ot44O844OJXHJcbiAgdm9sdW1lOiAxLjAsIC8vIOmfs+mHjygwLjDjgJwxLjDjga7nr4Tlm7LjgafmjIflrpopXHJcbiAgbG9vcDogZmFsc2UsIC8vIOODq+ODvOODl+WGjeeUn+OBmeOCi+OBi1xyXG4gIGF1dG9wbGF5OiBmYWxzZSwgLy8g6Ieq5YuV5YaN55Sf44GZ44KL44GLXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbG9yX2RhdGEgPSBbXHJcbiAgXCJibGFja1wiLFxyXG4gIFwiI2ZmZlwiLFxyXG4gIFwiI2ZmNGIwMFwiLFxyXG4gIFwiI2ZmZjEwMFwiLFxyXG4gIFwiIzAzYWY3YVwiLFxyXG4gIFwiIzAwNWFmZlwiLFxyXG4gIFwiIzRkYzRmZlwiLFxyXG4gIFwiI2ZmODA4MlwiLFxyXG4gIFwiI2Y2YWEwMFwiLFxyXG4gIFwiIzk5MDA5OVwiLFxyXG4gIFwiIzgwNDAwMFwiLFxyXG4gIFwiIzg0OTE5ZVwiLFxyXG4gIC8v6IOM5pmv6Imy44Gu6Kit5a6aXHJcbiAgXCJcIiwgLy8gd2hpdGVcclxuICBcIiNmZmZcIiwgLy8gYmxhY2tcclxuICBcIiNmZjRiMDBcIiwgLy8gd2hpdGVcclxuICBcIiNmZmZmODBcIiwgLy8gYmxhY2tcclxuICBcIiNkOGYyNTVcIiwgLy8gYmxhY2tcclxuICBcIiMwMDVhZmZcIiwgLy8gd2hpdGVcclxuICBcIiM0ZGM0ZmZcIiwgLy8gYmxhY2tcclxuICBcIiNmZmNhYmZcIiwgLy8gYmxhY2tcclxuICBcIiNmZmNhODBcIiwgLy8gYmxhY2tcclxuICBcIiNjOWFjZTZcIiwgLy8gYmxhY2tcclxuICBcIiNhMDYwMDBcIiwgLy8gd2hpdGVcclxuICBcIiNjOGM4Y2JcIiwgLy8gYmxhY2tcclxuICAvL+iDjOaZr+OBq+WQiOOCj+OBm+OBn+aWh+Wtl+OBruiJsuioreWumlxyXG4gIFwid2hpdGVcIixcclxuICBcImJsYWNrXCIsXHJcbiAgXCJ3aGl0ZVwiLFxyXG4gIFwiYmxhY2tcIixcclxuICBcImJsYWNrXCIsXHJcbiAgXCJ3aGl0ZVwiLFxyXG4gIFwiYmxhY2tcIixcclxuICBcImJsYWNrXCIsXHJcbiAgXCJibGFja1wiLFxyXG4gIFwiYmxhY2tcIixcclxuICBcIndoaXRlXCIsXHJcbiAgXCJibGFja1wiLFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBrdWt1YSA9IFtcclxuICBcIuOBhOOCk+OBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44GE44KT44Gr44CA44GMXCIsXHJcbiAgXCLjgYTjgpPjgZXjgpPjgIDjgYxcIixcclxuICBcIuOBhOOCk+OBl+OAgOOBjFwiLFxyXG4gIFwi44GE44KT44GU44CA44GMXCIsXHJcbiAgXCLjgYTjgpPjgo3jgY/jgIDjgYxcIixcclxuICBcIuOBhOOCk+OBl+OBoeOAgOOBjFwiLFxyXG4gIFwi44GE44KT44Gv44Gh44CA44GMXCIsXHJcbiAgXCLjgYTjgpPjgY/jgIDjgYxcIixcclxuICBcIuOBq+OBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44Gr44Gr44KT44CA44GMXCIsXHJcbiAgXCLjgavjgZXjgpPjgIDjgYxcIixcclxuICBcIuOBq+OBl+OAgOOBjFwiLFxyXG4gIFwi44Gr44GUXCIsXHJcbiAgXCLjgavjgo3jgY9cIixcclxuICBcIuOBq+OBl+OBoVwiLFxyXG4gIFwi44Gr44Gv44Gh77yI44Gr44Gv77yJXCIsXHJcbiAgXCLjgavjgY9cIixcclxuICBcIuOBleOCk+OBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44GV44KT44Gr44CA44GMXCIsXHJcbiAgXCLjgZXjgZbjgpPjgIDjgYxcIixcclxuICBcIuOBleOCk+OBl1wiLFxyXG4gIFwi44GV44KT44GUXCIsXHJcbiAgXCLjgZXjgbbjgo3jgY9cIixcclxuICBcIuOBleOCk+OBl+OBoVwiLFxyXG4gIFwi44GV44KT44GxXCIsXHJcbiAgXCLjgZXjgpPjgY9cIixcclxuICBcIuOBl+OBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44GX44Gr44CA44GMXCIsXHJcbiAgXCLjgZfjgZXjgpNcIixcclxuICBcIuOBl+OBl1wiLFxyXG4gIFwi44GX44GUXCIsXHJcbiAgXCLjgZfjgo3jgY9cIixcclxuICBcIuOBl+OBl+OBoVwiLFxyXG4gIFwi44GX44Gv77yI44GX44KP77yJXCIsXHJcbiAgXCLjgZfjgY9cIixcclxuICBcIuOBlOOBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44GU44GrXCIsXHJcbiAgXCLjgZTjgZXjgpNcIixcclxuICBcIuOBlOOBl1wiLFxyXG4gIFwi44GU44GUXCIsXHJcbiAgXCLjgZTjgo3jgY9cIixcclxuICBcIuOBlOOBl+OBoVwiLFxyXG4gIFwi44GU44Gv44GhXCIsXHJcbiAgXCLjgZTjgaPjgY9cIixcclxuICBcIuOCjeOBj+OBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44KN44GP44GrXCIsXHJcbiAgXCLjgo3jgY/jgZXjgpNcIixcclxuICBcIuOCjeOBj+OBl1wiLFxyXG4gIFwi44KN44GP44GUXCIsXHJcbiAgXCLjgo3jgY/jgo3jgY9cIixcclxuICBcIuOCjeOBj+OBl+OBoVwiLFxyXG4gIFwi44KN44GP44GvXCIsXHJcbiAgXCLjgo3jgaPjgY9cIixcclxuICBcIuOBl+OBoeOBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44GX44Gh44GrXCIsXHJcbiAgXCLjgZfjgaHjgZXjgpNcIixcclxuICBcIuOBl+OBoeOBl1wiLFxyXG4gIFwi44GX44Gh44GUXCIsXHJcbiAgXCLjgZfjgaHjgo3jgY9cIixcclxuICBcIuOBl+OBoeOBl+OBoVwiLFxyXG4gIFwi44GX44Gh44GvXCIsXHJcbiAgXCLjgZfjgaHjgY9cIixcclxuICBcIuOBr+OBoeOBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44Gv44Gh44GrXCIsXHJcbiAgXCLjga/jgaHjgZXjgpPvvIjjga/jgaPjgZXjgpPvvIlcIixcclxuICBcIuOBr+OBoeOBl++8iOOBr+OBo+OBl++8iVwiLFxyXG4gIFwi44Gv44Gh44GUXCIsXHJcbiAgXCLjga/jgaHjgo3jgY9cIixcclxuICBcIuOBr+OBoeOBl+OBoVwiLFxyXG4gIFwi44Gv44Gj44GxXCIsXHJcbiAgXCLjga/jgaPjgY9cIixcclxuICBcIuOBj+OBhOOBoeOAgOOBjFwiLFxyXG4gIFwi44GP44GrXCIsXHJcbiAgXCLjgY/jgZXjgpNcIixcclxuICBcIuOBj+OBl1wiLFxyXG4gIFwi44GP44GUXCIsXHJcbiAgXCLjgY/jgo3jgY9cIixcclxuICBcIuOBj+OBl+OBoVwiLFxyXG4gIFwi44GP44Gv44GhXCIsXHJcbiAgXCLjgY/jgY9cIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBrdWt1YiA9IFtcclxuICBcIuOBhOOBoVwiLFxyXG4gIFwi44GrXCIsXHJcbiAgXCLjgZXjgpNcIixcclxuICBcIuOBl1wiLFxyXG4gIFwi44GUXCIsXHJcbiAgXCLjgo3jgY9cIixcclxuICBcIuOBl+OBoVwiLFxyXG4gIFwi44Gv44GhXCIsXHJcbiAgXCLjgY9cIixcclxuICBcIuOBq1wiLFxyXG4gIFwi44GXXCIsXHJcbiAgXCLjgo3jgY9cIixcclxuICBcIuOBr+OBoVwiLFxyXG4gIFwi44GY44KF44GGXCIsXHJcbiAgXCLjgZjjgoXjgYbjgatcIixcclxuICBcIuOBmOOCheOBhuOBl1wiLFxyXG4gIFwi44GY44KF44GG44KN44GPXCIsXHJcbiAgXCLjgZjjgoXjgYbjga/jgaFcIixcclxuICBcIuOBleOCk1wiLFxyXG4gIFwi44KN44GPXCIsXHJcbiAgXCLjgY9cIixcclxuICBcIuOBmOOCheOBhuOBq1wiLFxyXG4gIFwi44GY44KF44GG44GUXCIsXHJcbiAgXCLjgZjjgoXjgYbjga/jgaFcIixcclxuICBcIuOBq+OBmOOCheOBhuOBhOOBoVwiLFxyXG4gIFwi44Gr44GY44KF44GG44GXXCIsXHJcbiAgXCLjgavjgZjjgoXjgYbjgZfjgaFcIixcclxuICBcIuOBl1wiLFxyXG4gIFwi44Gv44GhXCIsXHJcbiAgXCLjgZjjgoXjgYbjgatcIixcclxuICBcIuOBmOOCheOBhuOCjeOBj1wiLFxyXG4gIFwi44Gr44GY44KF44GGXCIsXHJcbiAgXCLjgavjgZjjgoXjgYbjgZdcIixcclxuICBcIuOBq+OBmOOCheOBhuOBr+OBoVwiLFxyXG4gIFwi44GV44KT44GY44KF44GG44GrXCIsXHJcbiAgXCLjgZXjgpPjgZjjgoXjgYbjgo3jgY9cIixcclxuICBcIuOBlFwiLFxyXG4gIFwi44GY44KF44GGXCIsXHJcbiAgXCLjgZjjgoXjgYbjgZRcIixcclxuICBcIuOBq+OBmOOCheOBhlwiLFxyXG4gIFwi44Gr44GY44KF44GG44GUXCIsXHJcbiAgXCLjgZXjgpPjgZjjgoXjgYZcIixcclxuICBcIuOBleOCk+OBmOOCheOBhuOBlFwiLFxyXG4gIFwi44GX44GY44KF44GGXCIsXHJcbiAgXCLjgZfjgZjjgoXjgYbjgZRcIixcclxuICBcIuOCjeOBj1wiLFxyXG4gIFwi44GY44KF44GG44GrXCIsXHJcbiAgXCLjgZjjgoXjgYbjga/jgaFcIixcclxuICBcIuOBq+OBmOOCheOBhuOBl1wiLFxyXG4gIFwi44GV44KT44GY44KF44GGXCIsXHJcbiAgXCLjgZXjgpPjgZjjgoXjgYbjgo3jgY9cIixcclxuICBcIuOBl+OBmOOCheOBhuOBq1wiLFxyXG4gIFwi44GX44GY44KF44GG44Gv44GhXCIsXHJcbiAgXCLjgZTjgZjjgoXjgYbjgZdcIixcclxuICBcIuOBl+OBoVwiLFxyXG4gIFwi44GY44KF44GG44GXXCIsXHJcbiAgXCLjgavjgZjjgoXjgYbjgYTjgaFcIixcclxuICBcIuOBq+OBmOOCheOBhuOBr+OBoVwiLFxyXG4gIFwi44GV44KT44GY44KF44GG44GUXCIsXHJcbiAgXCLjgZfjgZjjgoXjgYbjgatcIixcclxuICBcIuOBl+OBmOOCheOBhuOBj1wiLFxyXG4gIFwi44GU44GY44KF44GG44KN44GPXCIsXHJcbiAgXCLjgo3jgY/jgZjjgoXjgYbjgZXjgpNcIixcclxuICBcIuOBr+OBoVwiLFxyXG4gIFwi44GY44KF44GG44KN44GPXCIsXHJcbiAgXCLjgavjgZjjgoXjgYbjgZdcIixcclxuICBcIuOBleOCk+OBmOOCheOBhuOBq1wiLFxyXG4gIFwi44GX44GY44KF44GGXCIsXHJcbiAgXCLjgZfjgZjjgoXjgYbjga/jgaFcIixcclxuICBcIuOBlOOBmOOCheOBhuOCjeOBj1wiLFxyXG4gIFwi44KN44GP44GY44KF44GG44GXXCIsXHJcbiAgXCLjgZfjgaHjgZjjgoXjgYbjgatcIixcclxuICBcIuOBj1wiLFxyXG4gIFwi44GY44KF44GG44Gv44GhXCIsXHJcbiAgXCLjgavjgZjjgoXjgYbjgZfjgaFcIixcclxuICBcIuOBleOCk+OBmOOCheOBhuOCjeOBj1wiLFxyXG4gIFwi44GX44GY44KF44GG44GUXCIsXHJcbiAgXCLjgZTjgZjjgoXjgYbjgZdcIixcclxuICBcIuOCjeOBj+OBmOOCheOBhuOBleOCk1wiLFxyXG4gIFwi44GX44Gh44GY44KF44GG44GrXCIsXHJcbiAgXCLjga/jgaHjgZjjgoXjgYbjgYTjgaFcIixcclxuXTtcclxuIiwiaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZyhldmVudCkge1xyXG4gIC8v44Oe44Km44K544Gn44Gu44OJ44Op44OD44Kw44KS5Y+v6IO944Gr44GZ44KL44CCXHJcbiAgdmFyIGRyYWdnZWQ7XHJcbiAgdmFyIGZsYWc7XHJcbiAgY29uc3QgZ29taWJha28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvbWliYWtvXCIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJkcmFnc3RhcnRcIixcclxuICAgIChldmVudCkgPT4ge1xyXG4gICAgICAvLyBzdG9yZSBhIHJlZi4gb24gdGhlIGRyYWdnZWQgZWxlbVxyXG4gICAgICBkcmFnZ2VkID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgLy9hc2lkZeODkeODrOODg+ODiOOBi+OCieebtOaOpeOCtOODn+euseOBuOWFpeOCjOOBquOBhOOCiOOBhuOBq+WItuW+oeOBmeOCi+OAglxyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggLSBldmVudC5jbGllbnRYID4gMjAwKSBmbGFnID0gdHJ1ZTtcclxuICAgICAgZWxzZSBmbGFnID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICAvKiBldmVudHMgZmlyZWQgb24gdGhlIGRyYWdnYWJsZSB0YXJnZXQgKi9cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ1wiLCAoZXZlbnQpID0+IHt9LCBmYWxzZSk7XHJcblxyXG4gIC8qIGV2ZW50cyBmaXJlZCBvbiB0aGUgZHJvcCB0YXJnZXRzICovXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiZHJhZ292ZXJcIixcclxuICAgIChldmVudCkgPT4ge1xyXG4gICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiZHJvcFwiLFxyXG4gICAgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9kcm9wcGFibGUtZWxlbS8pICYmIGZsYWcgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaWQubWF0Y2goL2dvbWliYWtvLykpIHtcclxuICAgICAgICAgIGRhdGEuY2FuY2VsLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGF0YS5waS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChkcmFnZ2VkKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgLy/jg4njg6njg4PjgrDplovlp4vjga7mk43kvZxcclxuICBldmVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJ0b3VjaHN0YXJ0XCIsXHJcbiAgICAoZXZlbnQpID0+IHtcclxuICAgICAgLy/jgr/jg4Pjg4HjgavjgojjgovnlLvpnaLjgrnjgq/jg63jg7zjg6vjgpLmraLjgoHjgotcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0sXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIC8v44OJ44Op44OD44Kw5Lit44Gu5pON5L2cXHJcbiAgZXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwidG91Y2htb3ZlXCIsXHJcbiAgICAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgLy/jg4njg6njg4PjgrDkuK3jga7jgqLjgqTjg4bjg6DjgpLjgqvjg7zjgr3jg6vjga7kvY3nva7jgavov73lvpNcclxuICAgICAgdmFyIGRyYWdnZWRFbGVtID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICBldmVudC50YXJnZXQuc3R5bGUudG9wID0gdG91Y2gucGFnZVkgLSB3aW5kb3cucGFnZVlPZmZzZXQgLSBkcmFnZ2VkRWxlbS5vZmZzZXRIZWlnaHQgLyAyICsgXCJweFwiO1xyXG4gICAgICBldmVudC50YXJnZXQuc3R5bGUubGVmdCA9IHRvdWNoLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0IC0gZHJhZ2dlZEVsZW0ub2Zmc2V0V2lkdGggLyAyICsgXCJweFwiO1xyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgLy/jg4njg6njg4PjgrDntYLkuoblvozjga7mk43kvZxcclxuICBldmVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJ0b3VjaGVuZFwiLFxyXG4gICAgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIC8v44OJ44Op44OD44Kw5Lit44Gu5pON5L2c44Gu44Gf44KB44Gr5aSJ5pu044GX44Gm44GE44Gf44K544K/44Kk44Or44KS5YWD44Gr5oi744GZXHJcbiAgICAgIHZhciBkcm9wcGVkRWxlbSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgZHJvcHBlZEVsZW0uc3R5bGUucG9zaXRpb24gPSBcIlwiO1xyXG4gICAgICBldmVudC50YXJnZXQuc3R5bGUudG9wID0gXCJcIjtcclxuICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmxlZnQgPSBcIlwiO1xyXG4gICAgICAvL+ODieODreODg+ODl+OBl+OBn+S9jee9ruOBq+OBguOCi+ODieODreODg+ODl+WPr+iDveOBquOCqOODrOODoeODs+ODiOOBq+imquWtkOS7mOOBkeOBmeOCi1xyXG4gICAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgLy/jgrnjgq/jg63jg7zjg6vliIbjgpLliqDlkbPjgZfjgZ/luqfmqJnjgavlrZjlnKjjgZnjgovjgqjjg6zjg6Hjg7Pjg4jjgpLmlrDjgZfjgYTopqrjgajjgZnjgotcclxuICAgICAgdmFyIG5ld1BhcmVudEVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoLnBhZ2VYIC0gd2luZG93LnBhZ2VYT2Zmc2V0LCB0b3VjaC5wYWdlWSAtIHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgICAgIGlmIChuZXdQYXJlbnRFbGVtLmNsYXNzTmFtZS5tYXRjaCgvZHJvcHBhYmxlLWVsZW0vKSkge1xyXG4gICAgICAgIGlmIChuZXdQYXJlbnRFbGVtLmlkLm1hdGNoKC9nb21pYmFrby8pKSB7XHJcbiAgICAgICAgICBkYXRhLmNhbmNlbC5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRhdGEucGkucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdQYXJlbnRFbGVtLmFwcGVuZENoaWxkKGRyb3BwZWRFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcclxuaW1wb3J0IHsgbW92ZSB9IGZyb20gXCIuL21vdmUuanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3KCkge1xyXG4gIC8vXHJcbiAgLy8gSmF2YVNjcmlwdOOBruOCsOODreODvOODkOODq+WkieaVsOe+pFxyXG4gIC8vXHJcbiAgdmFyIGNhbnZhcztcclxuICB2YXIgY29udGV4dDtcclxuICB2YXIgd2JvdW5kO1xyXG4gIHZhciBDQU5WQVNfU0laRTtcclxuICB2YXIgdW5kb0RhdGFTdGFjayA9IFtdO1xyXG4gIHZhciByZWRvRGF0YVN0YWNrID0gW107XHJcbiAgdmFyIG1vdXNlRG93biA9IGZhbHNlO1xyXG4gIHZhciB0b3VjaERvd24gPSBmYWxzZTtcclxuICB2YXIgeCwgeSwgc3RYLCBzdFk7XHJcblxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgLy9cclxuICAgIC8vIOeUu+mdouiqreOBv+i+vOOBv+aZguOBruODreODvOODieWHpueQhlxyXG4gICAgLy9cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8g44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K644KS6Kit5a6aXHJcblxyXG4gICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7lsZ7mgKfjgpLoqK3lrppcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWdha2lfY2FudmFzXCIpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDIwMDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDcwO1xyXG4gICAgICBDQU5WQVNfU0laRSA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgIC8vIOaPj+eUu+mWi+WniyDihpIg5o+P55S75LitIOKGkiDmj4/nlLvntYLkuoZcclxuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnREcmF3LCBmYWxzZSk7XHJcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYXdpbmcsIGZhbHNlKTtcclxuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGVuZERyYXcsIGZhbHNlKTtcclxuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoU3RhcnQsIGZhbHNlKTtcclxuICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hNb3ZlLCBmYWxzZSk7XHJcbiAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZW5kVG91Y2gsIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyB1bmRvXHJcbiAgICAvL1xyXG4gICAgJChcIiN1bmRvXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHVuZG9EYXRhU3RhY2subGVuZ3RoIDw9IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVnYWtpX2NhbnZhc1wiKTtcclxuICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIHJlZG9EYXRhU3RhY2sudW5zaGlmdChjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpKTtcclxuXHJcbiAgICAgIHZhciBpbWFnZURhdGEgPSB1bmRvRGF0YVN0YWNrLnNoaWZ0KCk7XHJcbiAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICAgIGRhdGEuY2FuY2VsLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5jYW5jZWwucGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIHJlZG9cclxuICAgIC8vXHJcbiAgICAkKFwiI3JlZG9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAocmVkb0RhdGFTdGFjay5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWdha2lfY2FudmFzXCIpO1xyXG4gICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgdW5kb0RhdGFTdGFjay51bnNoaWZ0KGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkpO1xyXG5cclxuICAgICAgdmFyIGltYWdlRGF0YSA9IHJlZG9EYXRhU3RhY2suc2hpZnQoKTtcclxuICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgICAgZGF0YS5tb3ZlMi5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIGRhdGEubW92ZTIucGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIHNlbmRcclxuICAgIC8vXHJcbiAgICAkKFwiI3NlbmRcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlZ2FraV9jYW52YXNcIik7XHJcbiAgICAgIHZhciBwbmcgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBpbWcuc3JjID0gcG5nO1xyXG4gICAgICBpbWcuY2xhc3NMaXN0LmFkZChcInRlZ2FraVwiKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgIG1vdmUoaW1nKTtcclxuICAgICAgY2FudmFzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAyNTUsIDIwNSwgMClcIjtcclxuICAgICAgY2FudmFzLnN0eWxlLmJvcmRlciA9IFwiYm9yZGVyOiBub25lO1wiO1xyXG4gICAgICB0ZWdha2lfaW1nLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgbWFpbl90ZXh0X2JveC5pbm5lckhUTUwgPSBg44GY44G/44Gx44KM44CCKOWcsOWRs+OBq+WKqeOBi+OCi+eul+aVsOODkeODrOODg+ODiClgO1xyXG4gICAgICBtYWluX3RleHRfYm94LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBtYWluX3RleHRfYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwNWFmZlwiO1xyXG4gICAgICBkYXRhLmNhbmNlbDIuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLmNhbmNlbDIucGxheSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIGNyZWFyXHJcbiAgICAvL1xyXG4gICAgJChcIiNjbGVhclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVnYWtpX2NhbnZhc1wiKTtcclxuICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAgIGRhdGEuY2FuY2VsMy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIGRhdGEuY2FuY2VsMy5wbGF5KCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy9cclxuICAvLyDmj4/nlLvplovlp4tcclxuICAvL1xyXG4gIGZ1bmN0aW9uIHN0YXJ0RHJhdyhldmVudCkge1xyXG4gICAgLy8g5o+P55S75YmN5Yem55CG44KS44GK44GT44Gq44GE44Oe44Km44K55oq85LiL54q25oWL44Gr44GZ44KL44CCXHJcbiAgICBiZWZvcmVEcmF3KCk7XHJcbiAgICBtb3VzZURvd24gPSB0cnVlO1xyXG4gICAgLy8g44Kv44Op44Kk44Ki44Oz44OI6aCY5Z+f44GL44KJ44Oe44Km44K56ZaL5aeL5L2N572u5bqn5qiZ44KS5Y+W5b6XXHJcbiAgICB3Ym91bmQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBzdFggPSBldmVudC5jbGllbnRYIC0gd2JvdW5kLmxlZnQ7XHJcbiAgICBzdFkgPSBldmVudC5jbGllbnRZIC0gd2JvdW5kLnRvcDtcclxuXHJcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnmg4XloLHjgpLlj5blvpdcclxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVnYWtpX2NhbnZhc1wiKTtcclxuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG91Y2hTdGFydChldmVudCkge1xyXG4gICAgLy8g5o+P55S75YmN5Yem55CG44KS44GK44GT44Gq44GE44Oe44Km44K55oq85LiL54q25oWL44Gr44GZ44KL44CCXHJcbiAgICBiZWZvcmVEcmF3KCk7XHJcbiAgICB0b3VjaERvd24gPSB0cnVlO1xyXG4gICAgLy8g44Kv44Op44Kk44Ki44Oz44OI6aCY5Z+f44GL44KJ44Oe44Km44K56ZaL5aeL5L2N572u5bqn5qiZ44KS5Y+W5b6XXHJcbiAgICB3Ym91bmQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBzdFggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gd2JvdW5kLmxlZnQ7XHJcbiAgICBzdFkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZIC0gd2JvdW5kLnRvcDtcclxuICAgIC8vIOOCreODo+ODs+ODkOOCueaDheWgseOCkuWPluW+l1xyXG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWdha2lfY2FudmFzXCIpO1xyXG4gICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIOaPj+eUu+WJjeWHpueQhlxyXG4gIC8vXHJcbiAgZnVuY3Rpb24gYmVmb3JlRHJhdygpIHtcclxuICAgIC8vIHVuZG/poJjln5/jgavmj4/nlLvmg4XloLHjgpLmoLzntI1cclxuICAgIHJlZG9EYXRhU3RhY2sgPSBbXTtcclxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVnYWtpX2NhbnZhc1wiKTtcclxuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdW5kb0RhdGFTdGFjay51bnNoaWZ0KGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCkpO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyDmj4/nlLvkuK3lh6bnkIZcclxuICAvL1xyXG4gIGZ1bmN0aW9uIGRyYXdpbmcoZXZlbnQpIHtcclxuICAgIC8vIOODnuOCpuOCueODnOOCv+ODs+OBjOaKvOOBleOCjOOBpuOBhOOCjOOBsOaPj+eUu+S4reOBqOWIpOaWrVxyXG4gICAgaWYgKG1vdXNlRG93bikge1xyXG4gICAgICB4ID0gZXZlbnQuY2xpZW50WCAtIHdib3VuZC5sZWZ0O1xyXG4gICAgICB5ID0gZXZlbnQuY2xpZW50WSAtIHdib3VuZC50b3A7XHJcbiAgICAgIGRyYXcoeCwgeSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRvdWNoTW92ZShldmVudCkge1xyXG4gICAgLy8g44Oe44Km44K544Oc44K/44Oz44GM5oq844GV44KM44Gm44GE44KM44Gw5o+P55S75Lit44Go5Yik5patXHJcbiAgICBpZiAodG91Y2hEb3duID09IHRydWUpIHtcclxuICAgICAgeCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSB3Ym91bmQubGVmdDtcclxuICAgICAgeSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLSB3Ym91bmQudG9wO1xyXG4gICAgICBkcmF3KHgsIHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyDmj4/nlLvntYLkuoZcclxuICAvL1xyXG4gIGZ1bmN0aW9uIGVuZERyYXcoZXZlbnQpIHtcclxuICAgIC8vIOODnuOCpuOCueODnOOCv+ODs+OBjOaKvOOBleOCjOOBpuOBhOOCjOOBsOaPj+eUu+S4reOBqOWIpOaWrVxyXG4gICAgaWYgKG1vdXNlRG93bikge1xyXG4gICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcclxuICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7XHJcbiAgICAgIG1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZW5kVG91Y2goZXZlbnQpIHtcclxuICAgIC8vIOODnuOCpuOCueODnOOCv+ODs+OBjOaKvOOBleOCjOOBpuOBhOOCjOOBsOaPj+eUu+S4reOBqOWIpOaWrVxyXG4gICAgaWYgKHRvdWNoRG93bikge1xyXG4gICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcclxuICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbXSk7XHJcbiAgICAgIHRvdWNoRG93biA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvLyDmj4/nlLtcclxuICAvL1xyXG4gIGZ1bmN0aW9uIGRyYXcoeCwgeSkge1xyXG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWdha2lfY2FudmFzXCIpO1xyXG4gICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGRhdGEuY29sb3JfZGF0YVtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yX2JveFwiKS52YWx1ZV07XHJcbiAgICAvLyBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBkYXRhLmNvbG9yX2RhdGFbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvcl9ib3hcIikudmFsdWVdO1xyXG4gICAgLy8gY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDI7XHJcbiAgICBjb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcblxyXG4gICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1vdmVyXCI7XHJcbiAgICBjb250ZXh0Lm1vdmVUbyhzdFgsIHN0WSk7XHJcbiAgICBjb250ZXh0LmxpbmVUbyh4LCB5KTtcclxuICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICBzdFggPSB4O1xyXG4gICAgc3RZID0geTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcblxyXG4vL+ODieODqeODg+OCsOOBruOBv1xyXG5leHBvcnQgZnVuY3Rpb24gbW92ZShldmVudCkge1xyXG4gIGNvbnN0IG1vdmVhYmxlID0gbmV3IE1vdmVhYmxlKGRvY3VtZW50LmJvZHksIHtcclxuICAgIHRhcmdldDogZXZlbnQsXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICByb3RhdGFibGU6IGZhbHNlLFxyXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcclxuICAgIHdhcnBhYmxlOiBmYWxzZSxcclxuICAgIG9yaWdpbjogdHJ1ZSxcclxuICAgIHRocm90dGxlRHJhZzogMCxcclxuICAgIHRocm90dGxlUm90YXRlOiAwLFxyXG4gICAgdGhyb3R0bGVSZXNpemU6IDAsXHJcbiAgICByZW5kZXJEaXJlY3Rpb25zOiBbXCJuXCIsIFwibndcIiwgXCJuZVwiLCBcInNcIiwgXCJzZVwiLCBcInN3XCIsIFwiZVwiLCBcIndcIl0sXHJcbiAgICB6b29tOiAxLFxyXG4gICAgcGFkZGluZzogeyBsZWZ0OiAwLCB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ3JpZF9jaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZF9jaGVja1wiKTtcclxuICBpZiAoZ3JpZF9jaGVjay5jaGVja2VkID09IHRydWUpIHtcclxuICAgIG1vdmVhYmxlLnRocm90dGxlRHJhZyA9IDIwO1xyXG4gICAgbW92ZWFibGUudGhyb3R0bGVSb3RhdGUgPSAyMDtcclxuICAgIG1vdmVhYmxlLnRocm90dGxlUmVzaXplID0gMjA7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vdmVhYmxlLnRocm90dGxlRHJhZyA9IDA7XHJcbiAgICBtb3ZlYWJsZS50aHJvdHRsZVJvdGF0ZSA9IDA7XHJcbiAgICBtb3ZlYWJsZS50aHJvdHRsZVJlc2l6ZSA9IDA7XHJcbiAgfVxyXG4gIGdyaWRfY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChncmlkX2NoZWNrLmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICBtb3ZlYWJsZS50aHJvdHRsZURyYWcgPSAyMDtcclxuICAgICAgbW92ZWFibGUudGhyb3R0bGVSb3RhdGUgPSAyMDtcclxuICAgICAgbW92ZWFibGUudGhyb3R0bGVSZXNpemUgPSAyMDtcclxuICAgICAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb3ZlYWJsZS50aHJvdHRsZURyYWcgPSAwO1xyXG4gICAgICBtb3ZlYWJsZS50aHJvdHRsZVJvdGF0ZSA9IDA7XHJcbiAgICAgIG1vdmVhYmxlLnRocm90dGxlUmVzaXplID0gMDtcclxuICAgICAgZGF0YS5jYW5jZWwyLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5jYW5jZWwyLnBsYXkoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ29taWJha28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvbWliYWtvXCIpO1xyXG4gIGlmIChldmVudC5pZCA9PSBcImdvbWliYWtvXCIgfHwgZXZlbnQuaWQgPT0gXCJrdWt1X2h5b3VcIikge1xyXG4gICAgbW92ZWFibGUub3JpZ2luID0gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChldmVudC5jbGFzc05hbWUubWF0Y2goL2ZpZ3VyZS8pKSB7XHJcbiAgICBtb3ZlYWJsZS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgbW92ZWFibGUucm90YXRhYmxlID0gdHJ1ZTtcclxuICAgIG1vdmVhYmxlLnJlc2l6YWJsZSA9IHRydWU7XHJcbiAgfVxyXG4gIGlmIChldmVudC5jbGFzc05hbWUubWF0Y2goL3RleHRfYm94LykpIHtcclxuICAgIG1vdmVhYmxlLm9yaWdpbiA9IGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZXZlbnQuY2xhc3NOYW1lLm1hdGNoKC90ZWdha2kvKSkge1xyXG4gICAgbW92ZWFibGUub3JpZ2luID0gZmFsc2U7XHJcbiAgICBtb3ZlYWJsZS5yZXNpemFibGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbW92ZWFibGUub24oXCJkcmFnXCIsICh7IHRhcmdldCwgdHJhbnNmb3JtIH0pID0+IHtcclxuICAgIHRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgfSk7XHJcbiAgbW92ZWFibGUub24oXCJkcmFnRW5kXCIsIChlKSA9PiB7XHJcbiAgICB2YXIgY2xpZW50UmVjdCA9IGdvbWliYWtvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHggPSBjbGllbnRSZWN0LmxlZnQ7XHJcbiAgICB2YXIgeSA9IGNsaWVudFJlY3QudG9wO1xyXG4gICAgdmFyIHcgPSBjbGllbnRSZWN0LndpZHRoO1xyXG4gICAgdmFyIGggPSBjbGllbnRSZWN0LmhlaWdodDtcclxuICAgIGlmIChlLmNsaWVudFggPiB4ICYmIGUuY2xpZW50WCA8IE1hdGguZmxvb3IoeCArIHcpICYmIGUuY2xpZW50WSA+IHkgJiYgZS5jbGllbnRZIDwgTWF0aC5mbG9vcih5ICsgaCkpIHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmlkICE9IFwiZ29taWJha29cIikge1xyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQpO1xyXG4gICAgICAgIGRhdGEuY2FuY2VsLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBkYXRhLmNhbmNlbC5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICBtb3ZlYWJsZS5vbihcInJvdGF0ZVwiLCAoeyB0YXJnZXQsIHRyYW5zZm9ybSwgZGlzdCB9KSA9PiB7XHJcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gIH0pO1xyXG4gIG1vdmVhYmxlLm9uKFwicmVzaXplXCIsIChlKSA9PiB7XHJcbiAgICBlLnRhcmdldC5zdHlsZS53aWR0aCA9IGAke2Uud2lkdGh9cHhgO1xyXG4gICAgZS50YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7ZS5oZWlnaHR9cHhgO1xyXG4gIH0pO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcbmltcG9ydCB7IGRyYXcgfSBmcm9tIFwiLi9kcmF3LmpzXCI7XHJcbmltcG9ydCB7IGRyYWcgfSBmcm9tIFwiLi9kcmFnLmpzXCI7XHJcbmltcG9ydCB7IG1vdmUgfSBmcm9tIFwiLi9tb3ZlLmpzXCI7XHJcbmltcG9ydCB7IGdyaWQgfSBmcm9tIFwiLi8wMF9ncmlkLmpzXCI7XHJcbmltcG9ydCB7IHN1YmwgfSBmcm9tIFwiLi8wMV9zdXV6dV9ibG9jay5qc1wiO1xyXG5pbXBvcnQgeyB0b2tlaSB9IGZyb20gXCIuLzAyX3Rva2VpLmpzXCI7XHJcbmltcG9ydCB7IGthenUgfSBmcm9tIFwiLi8wM19rYXp1LmpzXCI7XHJcbmltcG9ydCB7IHRhaGkgfSBmcm9tIFwiLi8wNF90YV9oaXNzYW4uanNcIjtcclxuaW1wb3J0IHsgaGloaSB9IGZyb20gXCIuLzA1X2hpX2hpc3Nhbi5qc1wiO1xyXG5pbXBvcnQgeyBrdWt1IH0gZnJvbSBcIi4vMDZfa3VrdS5qc1wiO1xyXG5pbXBvcnQgeyBrYWgxIH0gZnJvbSBcIi4vMDdfa2FoMS5qc1wiO1xyXG5pbXBvcnQgeyBrYWgyIH0gZnJvbSBcIi4vMDhfa2FoMi5qc1wiO1xyXG5pbXBvcnQgeyBoeWFrdSB9IGZyb20gXCIuLzA5X2h5YWt1LmpzXCI7XHJcblxyXG4vL+WFiOmgreOBvuOBp+OCueOCr+ODreODvOODq+OBmeOCi+OAglxyXG5mdW5jdGlvbiBub1Njcm9sbChldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuLy8g44K544Kv44Ot44O844Or56aB5q2iKFNQKVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG5vU2Nyb2xsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG4vLyDjgrnjgq/jg63jg7zjg6vnpoHmraIoUEMpXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG5vU2Nyb2xsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxudmFyIGdyaWRfaW50ID0gODA7XHJcbnZhciBiX2NvbG9yID0gXCJ3aGl0ZVwiO1xyXG52YXIgY29sb3IgPSBcImJsYWNrXCI7XHJcbnZhciBpcm9udXJpID0gZmFsc2U7XHJcbnZhciBUYXJnZXQ7XHJcbnZhciBGb2N1cyA9IGZvb3Rlcl9hcmVhO1xyXG5jb25zdCBtYXN1X2NoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXN1X2NoZWNrXCIpO1xyXG5tZW51X2NoYW5nZSgpOyAvL+ODoeODi+ODpeODvOOCu+ODg+ODiFxyXG5jYWxjX3NldCgpOyAvL+ioiOeul+apn1xyXG5pbWdfc2V0KCk7IC8v55S75YOP44K744OD44OIXHJcbmRyYXcoKTsgLy/miYvmm7jjgY3lhaXlipvjga7lsI7lhaVcclxubW92ZShnb21pYmFrbyk7IC8v44GU44G/566x44Gu6Kit5a6aXHJcblxyXG4vL+OCs+ODs+ODhuODs+ODhOODoeODi+ODpeODvFxyXG5tZW51X2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICBtZW51X2NoYW5nZSgpO1xyXG59KTtcclxuLy/jg57jgrnjga7lpKfjgY3jgZVcclxubm90ZV9yYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICByYW5nZV9jaGFuZ2UoKTtcclxufSk7XHJcbi8v44Oe44K544Gu6KGo56S644O76Z2e6KGo56S6XHJcbm1hc3VfY2hlY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBtYXN1X2NoYW5nZSgpO1xyXG59KTtcclxuLy8tLS0tLeOCsOODquODg+ODieOBq+Wbs+W9ouOCkuWQuOedgOOBmeOCi+OBruOBryxtb3ZlYWJsZS5qc+OBruS4reOBp+ioreWumi0tLVxyXG4vL+Wbs+W9ouaPj+eUu1xyXG5maWd1cmVfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZmlndXJlX2JveC5zZWxlY3RlZEluZGV4ID0gMDtcclxufSk7XHJcbmZpZ3VyZV9ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICBmaWd1cmVfZHJhdygpO1xyXG59KTtcclxuLy/jgrnjgq/jg6rjg7zjg7Pjgq3jg6Pjg5fjg4Hjg6NcclxuY2FtZXJhX2ltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGltZ19jYXB0dXJlKCk7XHJcbn0pO1xyXG4vL+eZvem7kuWPjei7olxyXG5VRC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHJldmVyc2UoKTtcclxufSk7XHJcbi8v5omL5pu444GN5YWl5YqbXHJcbnRlZ2FraV9jYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG50ZWdha2lfaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgdGVnYWtpKCk7XHJcbn0pO1xyXG4vL+aWh+Wtl+OBruiJslxyXG5jb2xvcl9ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICBjb2xvcl9jaGFuZ2UoZXZlbnQpO1xyXG59KTtcclxuLy/oibLloZfjgorkvZzmiJDnlLvpnaLjga7oqK3lrppcclxucGVua2kuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBJcm9udXJpKCk7XHJcbn0pO1xyXG4vL+S4i+WcsOiJslxyXG5iX2NvbG9yX2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gIGJfY29sb3JfY2hhbmdlKGV2ZW50KTtcclxufSk7XHJcbi8v5YWl5Yqb5paH5a2X6YCB5L+hXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHRleHRfYXJlYV9zZXQoKTtcclxufSk7XHJcblxyXG4vL+OCs+ODs+ODhuODs+ODhOODoeODi+ODpeODvOOBruWIh+OCiuabv+OBiC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIG1lbnVfY2hhbmdlKCkge1xyXG4gIGRhdGEuc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG5vdGVfbWFzdS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHN3aXRjaCAobWVudV9ib3guc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44GV44KT44GZ44GG44OO44O844OIXCI7XHJcbiAgICAgIG1hc3VfY2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHZhciBncmlkX2ludCA9IDgwO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YlwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBub3RlX3JhbmdlLnZhbHVlID0gMDtcclxuICAgICAgZ3JpZChncmlkX2ludCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44GZ44GG44Ga44G244KN44Gj44GPXCI7XHJcbiAgICAgIG1hc3VfY2hlY2suY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIG5vdGVfcmFuZ2UudmFsdWUgPSAwO1xyXG4gICAgICBncmlkKCk7XHJcbiAgICAgIHN1YmwoRm9jdXMpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjpcclxuICAgICAgbWFpbl90ZXh0X2JveC5pbm5lckhUTUwgPSBcIuOBqOOBkeOBhFwiO1xyXG4gICAgICBtYXN1X2NoZWNrLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdG9rZWkoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIG1haW5fdGV4dF9ib3guaW5uZXJIVE1MID0gXCIxMDDjgb7jgafjga7jgYvjgZrjga7jgZHjgYTjgZXjgpNcIjtcclxuICAgICAgbWFzdV9jaGVjay5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIGh5YWt1KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA0OlxyXG4gICAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi5aSn44GN44Gq44GL44GaXCI7XHJcbiAgICAgIG1hc3VfY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBrYXp1KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA1OlxyXG4gICAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44Gf44GX566X44Gu44Gy44Gj566XXCI7XHJcbiAgICAgIG1hc3VfY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB0YWhpKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA2OlxyXG4gICAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44Gy44GN566X44Gu44Gy44Gj566XXCI7XHJcbiAgICAgIG1hc3VfY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBoaWhpKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA3OlxyXG4gICAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi5Lmd5Lmd44Gu44KM44KT44GX44KF44GGXCI7XHJcbiAgICAgIG1hc3VfY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBrdWt1KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA4OlxyXG4gICAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44GL44GR566X44Gu562G566XKDEpXCI7XHJcbiAgICAgIG1hc3VfY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBrYWgxKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA5OlxyXG4gICAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IFwi44GL44GR566X44Gu562G566XKDIpXCI7XHJcbiAgICAgIG1hc3VfY2hlY2suY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBrYWgyKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG4vL+ODnuOCueOBruWkp+OBjeOBlVxyXG5mdW5jdGlvbiByYW5nZV9jaGFuZ2UoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXN1X2NoZWNrXCIpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIGRhdGEua2Frby5jdXJyZW50VGltZSA9IDA7XHJcbiAgZGF0YS5rYWtvLnBsYXkoKTtcclxuICBjb25zdCByYW5nZSA9IFs4MCwgNjAsIDQwLCAyMF07XHJcbiAgZ3JpZF9pbnQgPSByYW5nZVtub3RlX3JhbmdlLnZhbHVlXTtcclxuICBub3RlX21hc3UuaW5uZXJIVE1MID0gXCJcIjtcclxuICBncmlkKGdyaWRfaW50KTtcclxufVxyXG4vL+ODnuOCueOBruihqOekuuODu+mdnuihqOekulxyXG5mdW5jdGlvbiBtYXN1X2NoYW5nZSgpIHtcclxuICBpZiAobWFzdV9jaGVjay5jaGVja2VkID09IHRydWUpIHtcclxuICAgIGdyaWQoZ3JpZF9pbnQsIGlyb251cmksIFRhcmdldCk7XHJcbiAgICBkYXRhLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLnNldC5wbGF5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGEuY2FuY2VsMi5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBkYXRhLmNhbmNlbDIucGxheSgpO1xyXG4gICAgbm90ZV9tYXN1LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfVxyXG59XHJcbi8vLS0tLS3jgrDjg6rjg4Pjg4njgavlm7PlvaLjgpLlkLjnnYDjgZnjgovjga7jga8sbW92ZWFibGUuanPjga7kuK3jgafoqK3lrpotLS1cclxuLy/lm7PlvaLmj4/nlLvpgbjmip7jg6Hjg4vjg6Xjg7zjga7kvZzmiJBcclxuZnVuY3Rpb24gZmlndXJlX2RyYXcoKSB7XHJcbiAgY29uc3QgZmlndXJlX2RhdGEgPSBbXCJsaW5lXCIsIFwibGluZVwiLCBcInNxdWFyZVwiLCBcInRyaWFuZ2xlXCIsIFwidHJpYW5nbGVcIiwgXCJ0cmlhbmdsZVwiLCBcInRyaWFuZ2xlXCIsIFwidHJpYW5nbGVcIiwgXCJkaWFcIiwgXCJkaWFcIiwgXCJjaXJjbGVcIl07XHJcbiAgY29uc3QgaW1nX2RhdGEgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJ0cmlhbmdsZVwiLCBcInRyaWFuZ2xlMlwiLCBcInRyaWFuZ2xlM1wiLCBcInRyaWFuZ2xlNFwiLCBcInRyaWFuZ2xlXCIsIFwiZGlhMVwiLCBcImRpYTJcIiwgXCJjaXJjbGVcIl07XHJcbiAgZGF0YS5tb3ZlMS5jdXJyZW50VGltZSA9IDA7XHJcbiAgZGF0YS5tb3ZlMS5wbGF5KCk7XHJcbiAgZmlndXJlX2JveC5zZWxlY3RlZEluZGV4ID0gTnVtYmVyKGZpZ3VyZV9ib3gudmFsdWUpO1xyXG4gIGlmIChOdW1iZXIoZmlndXJlX2JveC52YWx1ZSkgPiAyKSB7XHJcbiAgICB2YXIgZmlndXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGZpZ3VyZS5zcmMgPSBcIi4vaW1hZ2UvXCIgKyBpbWdfZGF0YVtOdW1iZXIoZmlndXJlX2JveC52YWx1ZSldICsgXCIucG5nXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBmaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZmlndXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2Q4ZjI1NVwiO1xyXG4gIH1cclxuICBmaWd1cmUuY2xhc3NMaXN0LmFkZChcImZpZ3VyZVwiLCBcImRyb3BwYWJsZS1lbGVtXCIsIGZpZ3VyZV9kYXRhW2ZpZ3VyZV9ib3gudmFsdWVdKTtcclxuICBmaWd1cmUuc3R5bGUuekluZGV4Kys7XHJcbiAgZmlndXJlX3BhbGxldC5hcHBlbmRDaGlsZChmaWd1cmUpO1xyXG4gIG1vdmUoZmlndXJlKTtcclxuICBmaWd1cmUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XHJcbn1cclxuLy/jgrnjgq/jg6rjg7zjg7Pjgq3jg6Pjg5fjg4Hjg6NcclxuZnVuY3Rpb24gaW1nX2NhcHR1cmUoKSB7XHJcbiAgaW1nX2NhcHR1cmUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmMTAwXCI7XHJcbiAgZGF0YS5zaG90LmN1cnJlbnRUaW1lID0gMDtcclxuICBkYXRhLnNob3QucGxheSgpO1xyXG4gIGh0bWwyY2FudmFzKGRvY3VtZW50LmJvZHkpLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xyXG4gICAgLy8uIENhbnZhcyDjga7lhoXlrrnjgpIgUE5HIOeUu+WDj+OBqOOBl+OBpuWPluW+l1xyXG4gICAgdmFyIHBuZyA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcbiAgICB2YXIgcG5nID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcclxuICAgIHBuZyA9IHBuZy5yZXBsYWNlKC9eLiosLywgXCJcIik7XHJcblxyXG4gICAgLy8uIOODkOOCpOODiuODquWkieaPm1xyXG4gICAgdmFyIGJpbiA9IGF0b2IocG5nKTtcclxuICAgIHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheShiaW4ubGVuZ3RoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGJ1ZmZlcltpXSA9IGJpbi5jaGFyQ29kZUF0KGkpO1xyXG4gICAgfVxyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBcImltYWdlL3BuZ1wiIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGUoW1xyXG4gICAgICAgIG5ldyBDbGlwYm9hcmRJdGVtKHtcclxuICAgICAgICAgIFwiaW1hZ2UvcG5nXCI6IGJsb2IsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0pO1xyXG4gICAgICBkYXRhLnNlaWthaTEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICBkYXRhLnNlaWthaTEucGxheSgpO1xyXG4gICAgICAvLyBpbWdfY2FwdHVyZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNjOGM4Y2JcIjtcclxuICAgICAgYWxlcnQoXCLjgYzjgoHjgpPjga/vvIzjgq/jg6rjg4Pjg5fjg5zjg7zjg4njgavjgrPjg5Tjg7zjgZXjgozjgb7jgZfjgZ/jgIIoY3RybCtW44Kt44O844Gq44Gp44Gn44Gv44KK44Gk44GR44GM44Gn44GN44G+44GZ44CCKVwiKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICBhbGVydChcIuOCr+ODquODg+ODl+ODnOODvOODieOBq+OCs+ODlOODvOOBleOCjOOBvuOBm+OCk+OBp+OBl+OBn+OAglwiKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vL+eZvem7kuWPjei7olxyXG5mdW5jdGlvbiByZXZlcnNlKCkge1xyXG4gIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSBcIndoaXRlXCIpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIHRleHRfaW5wdXRfYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIHRleHRfaW5wdXRfYm94LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgYl9jb2xvciA9IFwiYmxhY2tcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgdGV4dF9pbnB1dF9ib3guc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgdGV4dF9pbnB1dF9ib3guc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICBiX2NvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gIH1cclxuICBkYXRhLnJlc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICBkYXRhLnJlc2V0LnBsYXkoKTtcclxufVxyXG4vL+aJi+abuOOBjeWFpeWKm1xyXG5mdW5jdGlvbiB0ZWdha2koKSB7XHJcbiAgaWYgKGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID09IFwiYmxhY2tcIikge1xyXG4gICAgY29sb3JfYm94WzJdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHRlZ2FraV9jYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9PSBcIm5vbmVcIikge1xyXG4gICAgdGVnYWtpX2NhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcclxuICAgIHRlZ2FraV9pbWcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmMTAwXCI7XHJcbiAgICB0ZWdha2lfY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAyNTUsIDIwNSwgMC41KVwiO1xyXG4gICAgdGVnYWtpX2NhbnZhcy5zdHlsZS5ib3JkZXIgPSBcImJvcmRlcjogc29saWQgMXB4ICMzMzM7XCI7XHJcbiAgICBtYWluX3RleHRfYm94LmlubmVySFRNTCA9IGDjgabjgYzjgY3jgavjgoXjgYbjgorjgofjgY/jgYzjgafjgY3jgb7jgZnjgIJgO1xyXG4gICAgc3dpdGNoX29uKHRlZ2FraSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSBcImJsYWNrXCIpIHtcclxuICAgICAgY29sb3JfYm94WzBdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRlZ2FraV9jYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgdGVnYWtpX2ltZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNjOGM4Y2JcIjtcclxuICAgIHRlZ2FraV9jYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjA1LCAwKVwiO1xyXG4gICAgdGVnYWtpX2NhbnZhcy5zdHlsZS5ib3JkZXIgPSBcImJvcmRlcjogbm9uZTtcIjtcclxuICAgIG1haW5fdGV4dF9ib3guaW5uZXJIVE1MID0gYOOBmOOBv+ODkeODrOOAgjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4O1wiPijlnLDlkbPjgavliqnjgYvjgovnrpfmlbDjg5Hjg6zjg4Pjg4gpPC9zcGFuPmA7XHJcbiAgICBtYWluX3RleHRfYm94LmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgc3dpdGNoX29mZih0ZWdha2kpO1xyXG4gIH1cclxufVxyXG4vLyDmloflrZfjga7oibJcclxuZnVuY3Rpb24gY29sb3JfY2hhbmdlKCkge1xyXG4gIC8v44OV44Kp44Oz44OI44Gu6YG45oqeXHJcbiAgY29uc3QgZm9udF9kYXRhID0gW1wiVUQgRGlnaSBLeW9rYXNobyBOLUJcIiwgXCLjg5Ljg6njgq7jg47mmI7mnJ0gUHJvTiBXNiwgSGlyYU1pblByb04tVzYsIEhH5piO5pydRSwg77yt77yzIO+8sOaYjuacnSxNUyBQTWluY2hvLCBNUyDmmI7mnJ0sIHNlcmlmXCIsIFwi44Oh44Kk44Oq44KqLOODkuODqeOCruODjuinkuOCtCBQcm9OLHNhbnMtc2VyaWZcIl07XHJcbiAgZm9udF9zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIGRhdGEubW92ZTEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgZGF0YS5tb3ZlMS5wbGF5KCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250X2RhdGFbTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSldO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250V2VpZ2h0ID0gOTAwO1xyXG4gIH0pO1xyXG4gIC8v44Oh44Kk44Oz55S76Z2i44Gu44Kr44Op44O86YG45oqe44Oh44OL44Ol44O85L2c5oiQXHJcbiAgY29sb3JfYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBkYXRhLm1vdmUxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGRhdGEubW92ZTEucGxheSgpO1xyXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmNvbG9yID0gZGF0YS5jb2xvcl9kYXRhW051bWJlcihldmVudC50YXJnZXQudmFsdWUpXTtcclxuICAgIHRleHRfaW5wdXRfYm94LnN0eWxlLmNvbG9yID0gY29sb3I7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxFRFwiKS5zdHlsZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIjFcIikge1xyXG4gICAgICBldmVudC50YXJnZXQuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XHJcbiAgICAgIHRleHRfaW5wdXRfYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHRfaW5wdXRfYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4vL+iJsuWhl+OCilxyXG5mdW5jdGlvbiBJcm9udXJpKCkge1xyXG4gIGlmIChpcm9udXJpID09IGZhbHNlKSB7XHJcbiAgICBpcm9udXJpID0gdHJ1ZTtcclxuICAgIG5vdGVfbWFzdS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcclxuICAgIGJfY29sb3JfYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjEwMFwiO1xyXG4gICAgYl9jb2xvcl9ib3guc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgYl9jb2xvcl9ib3hbMl0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgc3dpdGNoX29uKHBlbmtpKTtcclxuICAgIG1haW5fdGV4dF9ib3guaW5uZXJIVE1MID0gYOODnuOCueOBriDjgYTjgo3jgazjgorjgYzjgafjgY3jgb7jgZnjgIJgO1xyXG4gICAgbWFpbl90ZXh0X2JveC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgaXJvbnVyaSA9IGZhbHNlO1xyXG4gICAgbm90ZV9tYXN1LnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIGJfY29sb3JfYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgIGJfY29sb3JfYm94WzBdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHN3aXRjaF9vZmYocGVua2kpO1xyXG4gICAgbWFpbl90ZXh0X2JveC5pbm5lckhUTUwgPSBg44GY44G/44Gx44KM44CCKOWcsOWRs+OBq+WKqeOBi+OCi+eul+aVsOODkeODrOODg+ODiClgO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4vL+S4i+WcsOiJslxyXG5mdW5jdGlvbiBiX2NvbG9yX2NoYW5nZShldmVudCkge1xyXG4gIGRhdGEubW92ZTEuY3VycmVudFRpbWUgPSAwO1xyXG4gIGRhdGEubW92ZTEucGxheSgpO1xyXG4gIGJfY29sb3IgPSBkYXRhLmNvbG9yX2RhdGFbTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSldO1xyXG4gIHRleHRfaW5wdXRfYm94LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJfY29sb3I7XHJcbiAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiX2NvbG9yO1xyXG4gIGV2ZW50LnRhcmdldC5zdHlsZS5jb2xvciA9IGRhdGEuY29sb3JfZGF0YVtOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKV07XHJcbiAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PSBcIjEzXCIpIGV2ZW50LnRhcmdldC5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcclxufVxyXG4vL+WFpeWKm+aWh+Wtl+mAgeS/oVxyXG5mdW5jdGlvbiB0ZXh0X2FyZWFfc2V0KCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2LmlubmVySFRNTCA9IHRleHRfaW5wdXRfYm94LnZhbHVlO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwidGV4dF9ib3hcIik7XHJcbiAgZGl2LnN0eWxlLmNvbG9yID0gZGF0YS5jb2xvcl9kYXRhW2NvbG9yX2JveC52YWx1ZV07XHJcbiAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJfY29sb3I7XHJcbiAgZGl2LnN0eWxlLnpJbmRleCA9IDEwMDtcclxuXHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3JfYm94XCIpLnZhbHVlID09IFwiMVwiKSBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzMzXCI7XHJcbiAgZGl2LnN0eWxlLndpZHRoID0gZGl2LmlubmVyVGV4dC5sZW5ndGggKiAxNiArIFwicHhcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICBtb3ZlKGRpdik7XHJcbiAgZGF0YS5tb3ZlMi5jdXJyZW50VGltZSA9IDA7XHJcbiAgZGF0YS5tb3ZlMi5wbGF5KCk7XHJcbn1cclxuLy/jgZ3jga7ku5ZcclxuZnVuY3Rpb24gc3dpdGNoX29uKGV2ZW50KSB7XHJcbiAgZXZlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmMTAwXCI7XHJcbiAgZGF0YS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gIGRhdGEuc2V0LnBsYXkoKTtcclxufVxyXG5mdW5jdGlvbiBzd2l0Y2hfb2ZmKGV2ZW50KSB7XHJcbiAgZXZlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYzhjOGNiXCI7XHJcbiAgZGF0YS5jYW5jZWwyLmN1cnJlbnRUaW1lID0gMDtcclxuICBkYXRhLmNhbmNlbDIucGxheSgpO1xyXG59XHJcbi8v6KiI566X5qmfXHJcbmZ1bmN0aW9uIGNhbGNfc2V0KCkge1xyXG4gIC8v6Zu75Y2T44Gu55S76Z2i5L2c5oiQXHJcbiAgY29uc3QgVEJMX0NBTEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgY29uc3QgVEJMX0NBTENfZGF0YSA9IFtcIlwiLCBcIiVcIiwgXCIoXCIsIFwiKVwiLCBcIsO3XCIsIFwi4oaQXCIsIDcsIDgsIDksIFwiw5dcIiwgXCJDXCIsIDQsIDUsIDYsIFwiLVwiLCBcIk9OL09GRlwiLCAxLCAyLCAzLCBcIitcIiwgXCIwMFwiLCAwLCBcIi5cIiwgXCI9XCIsIFwi4oapXCJdO1xyXG4gIGxldCBTSElLSSA9IFwiXCI7XHJcbiAgbGV0IGNhbGNfc3dpdGggPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xyXG4gICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihpICogNSArIGopO1xyXG4gICAgICBpZiAobnVtID09IDApIHtcclxuICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBidG4uc3JjID0gXCIuL2ltYWdlL2RlbnRha3UucG5nXCI7XHJcbiAgICAgICAgYnRuLnN0eWxlLndpZHRoID0gXCIzOHB4XCI7XHJcbiAgICAgICAgYnRuLnN0eWxlLmhlaWdodCA9IFwiMzhweFwiO1xyXG4gICAgICAgIGJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIm51bVwiKTtcclxuICAgICAgfVxyXG4gICAgICBidG4uaW5uZXJUZXh0ID0gVEJMX0NBTENfZGF0YVtpICogNSArIGpdO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZChidG4pO1xyXG4gICAgICBpZiAobnVtID09IDE1KSB7XHJcbiAgICAgICAgYnRuLnN0eWxlLmZvbnRTaXplID0gXCI4cHhcIjtcclxuICAgICAgICBidG4uc3R5bGUub3ZlcmZsb3dXcmFwID0gXCJicmVhay13b3JkXCI7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFzdV9jaGVja1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtID09IDIwKSB7XHJcbiAgICAgICAgYnRuLnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XHJcbiAgICAgICAgYnRuLnN0eWxlLnBhZGRpbmcgPSBcIjRweCAwIDAgMFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW0gPT0gMTAgfHwgbnVtID09IDE1KSB7XHJcbiAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIGJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZjRiMDBcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtID09IDUpIHtcclxuICAgICAgICBidG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAzYWY3YVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW0gPiAyMikge1xyXG4gICAgICAgIGJ0bi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDA1YWZmXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYWxjX3N3aXRoID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBzd2l0Y2ggKG51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgICAgTEVELnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgIFRCTF9DQUxDLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgICBkYXRhLmNhbmNlbDIuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgIGRhdGEuY2FuY2VsMi5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgY2FsY19zd2l0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICBMRUQuaW5uZXJUZXh0ID0gXCJcIjsgLy/jgq/jg6rjgqJcclxuICAgICAgICAgICAgICBTSElLSSA9IFwiXCI7IC8v44Kv44Oq44KiXHJcbiAgICAgICAgICAgICAgZGF0YS5jYW5jZWwzLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICBkYXRhLmNhbmNlbDMucGxheSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgTEVELmlubmVyVGV4dCArPSBcIiVcIjtcclxuICAgICAgICAgICAgICBTSElLSSArPSBcIiowLjAxXCI7XHJcbiAgICAgICAgICAgICAgZGF0YS5tb3ZlMS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgZGF0YS5tb3ZlMS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICBMRUQuaW5uZXJUZXh0ICs9IFwiw7dcIjtcclxuICAgICAgICAgICAgICBTSElLSSArPSBcIi9cIjtcclxuICAgICAgICAgICAgICBkYXRhLm1vdmUxLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICBkYXRhLm1vdmUxLnBsYXkoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgIExFRC5pbm5lclRleHQgPSBMRUQuaW5uZXJUZXh0LnNsaWNlKDAsIExFRC5pbm5lclRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgU0hJS0kgPSBTSElLSS5zbGljZSgwLCBMRUQuaW5uZXJUZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgIGRhdGEuY2FuY2VsMy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgZGF0YS5jYW5jZWwzLnBsYXkoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgIExFRC5pbm5lclRleHQgKz0gXCLDl1wiO1xyXG4gICAgICAgICAgICAgIFNISUtJICs9IFwiKlwiO1xyXG4gICAgICAgICAgICAgIGRhdGEubW92ZTEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgIGRhdGEubW92ZTEucGxheSgpO1xyXG4gICAgICAgICAgICBjYXNlIDIzOlxyXG4gICAgICAgICAgICAgIExFRC5pbm5lclRleHQgKz0gXCI9XCIgKyBldmFsKFNISUtJKTtcclxuICAgICAgICAgICAgICBkYXRhLnJpZ2h0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICBkYXRhLnJpZ2h0LnBsYXkoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNDpcclxuICAgICAgICAgICAgICB0ZXh0X2lucHV0X2JveC52YWx1ZSA9IExFRC5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgZGF0YS5yaWdodC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgICAgZGF0YS5yaWdodC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgTEVELmlubmVyVGV4dCArPSBUQkxfQ0FMQ19kYXRhW251bV07XHJcbiAgICAgICAgICAgICAgU0hJS0kgKz0gVEJMX0NBTENfZGF0YVtudW1dO1xyXG4gICAgICAgICAgICAgIGRhdGEubW92ZTEuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgIGRhdGEubW92ZTEucGxheSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY2FsY19zd2l0aCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGlmIChudW0gPT0gMCB8fCBudW0gPT0gMTAgfHwgbnVtID09IDE1KSB7XHJcbiAgICAgICAgICAgIExFRC5zdHlsZS5ib3JkZXIgPSBcInNvbGlkIDVweCAjZmZmMTAwXCI7XHJcbiAgICAgICAgICAgIFRCTF9DQUxDLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjEwMFwiO1xyXG4gICAgICAgICAgICBkYXRhLm9wZW4xLnBsYXkoKTtcclxuICAgICAgICAgICAgbWFpbl90ZXh0X2JveC5pbm5lclRleHQgPSBcIuOBp+OCk+OBn+OBj+OBp+OAgOOBkeOBhOOBleOCk+OBjOOAgOOBp+OBjeOBvuOBmeOAglwiO1xyXG4gICAgICAgICAgICBjYWxjX3N3aXRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/jg5bjg63jg4Pjgq/jga7nmbvpjLLmqZ/og71cclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJudW1cIiwgXCJhcnRfbnVtXCIpO1xyXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgZGl2LmlubmVyVGV4dCA9IFRCTF9DQUxDX2RhdGFbbnVtXTtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gZ3JpZF9pbnQgLSA0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gZ3JpZF9pbnQgLSA0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUubGluZUhlaWdodCA9IGdyaWRfaW50IC0gNCArIFwicHhcIjtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmZvbnRTaXplID0gZ3JpZF9pbnQgLyAyIC0gMiArIFwicHhcIjtcclxuICAgICAgICAgICAgZm9vdGVyX2FyZWEuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgZGF0YS5waS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIGRhdGEucGkucGxheSgpO1xyXG4gICAgICAgICAgICBkcmFnKGRpdik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQoYnRuKTtcclxuICAgIH1cclxuICAgIFRCTF9DQUxDLmFwcGVuZENoaWxkKHRyKTtcclxuICB9XHJcbiAgY2FsY19wYWxsZXQuYXBwZW5kQ2hpbGQoVEJMX0NBTEMpO1xyXG59XHJcbi8v55S75YOP6YWN572uXHJcbmZ1bmN0aW9uIGltZ19zZXQoKSB7XHJcbiAgLy/nlLvlg4/jg4fjg7zjgr/jga7nmbvpjLJcclxuICBjb25zdCBpbWdfZGF0YSA9IFtcInBpbmtfYmxvY2tcIiwgXCJibHVlX2Jsb2NrXCIsIFwib2hhamlraV9CXCIsIFwib2hhamlraV9QXCIsIFwiaWNoaWVuXCIsIFwiZ29cIiwgXCJqdXVlblwiLCBcImdvanV1XCIsIFwiaHlha3VlblwiLCBcImdvaHlha3VcIiwgXCJpY2hpXCIsIFwianV1XCIsIFwiaHlha3VcIiwgXCJzZW5cIiwgXCJnb3NlblwiLCBcImljaGltYW5cIl07XHJcbiAgdmFyIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nX3BhbGxldFwiKTtcclxuICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcclxuICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nX2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAvL+eUu+WDj+OCkuOCu+ODg+ODiFxyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpbWdcIiwgaW1nX2RhdGFbaV0pO1xyXG4gICAgaW1nLnNyYyA9IFwiLi9pbWFnZS9cIiArIGltZ19kYXRhW2ldICsgXCIucG5nXCI7XHJcbiAgICBpbWdfcGFsbGV0LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGkgPT0gMTApIHtcclxuICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBncmlkX2ludCAvIDMgLSA0ICsgXCJweFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPT0gMTEpIHtcclxuICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBncmlkX2ludCAvIDIgLSA0ICsgXCJweFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPiAxMikge1xyXG4gICAgICAgIGltZy5zdHlsZS53aWR0aCA9IGdyaWRfaW50ICogMiAtIDQgKyBcInB4XCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gZ3JpZF9pbnQgLSA0ICsgXCJweFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBncmlkX2ludCAtIDQgKyBcInB4XCI7XHJcbiAgICAgIGltZy5zdHlsZS5saW5lSGVpZ2h0ID0gZ3JpZF9pbnQgLSA0ICsgXCJweFwiO1xyXG4gICAgICBmb290ZXJfYXJlYS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICBkYXRhLnBpLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgZGF0YS5waS5wbGF5KCk7XHJcbiAgICAgIGRyYWcoaW1nKTtcclxuICAgICAgaW1nX3NldCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYXRhIiwiZ3JpZCIsImdyaWRfaW50IiwiVEJMIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsIldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJpIiwiTWF0aCIsImZsb29yIiwidHIiLCJqIiwidGQiLCJ3aWR0aCIsImhlaWdodCIsImlubmVyVGV4dCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiY29sb3IiLCJib3JkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwibm90ZV9tYXN1IiwicG9pbnRlckV2ZW50cyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yX2RhdGEiLCJiX2NvbG9yX2JveCIsInZhbHVlIiwia2FrbyIsImN1cnJlbnRUaW1lIiwicGxheSIsImZvb3Rlcl9hcmVhIiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwicGkiLCJnZXRFbGVtZW50QnlJZCIsImRyYWciLCJzdWJsIiwiRm9jdXMiLCJpbm5lckhUTUwiLCJzdXV6dV9ibG9jayIsImxlZnQiLCJ0b3AiLCJjb250ZW50IiwiY3JlYXRlX2JsayIsInB1dF9ibGsiLCJyZXNldCIsImN1cnJlbnR0aW1lIiwib3BlbjEiLCJpbWciLCJxdWVyeVNlbGVjdG9yQWxsIiwiTnVtYmVyIiwibGVuZ3RoIiwic2VjdGlvbl8xIiwiZGlzcGxheSIsInNlY3Rpb25fMiIsInNlY3Rpb25fMyIsIm9wYWNpdHkiLCJyb3ciLCJjb2wiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlIiwiVEJMXzIiLCJUQkxfMyIsInNyYyIsInJvd3MiLCJjZWxscyIsInRva2VpIiwibWFpbl90ZXh0X2JveCIsInRva2VpX2JvYXJkIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhvdXJzIiwibWludXRlcyIsInNjb3JlX2Vhc3kiLCJzY29yZV9ub3JtYWwiLCJzY29yZV9kaWZmaWN1bHQiLCJmbGFnIiwiaGFyaV9ob3VycyIsImhhcmlfbWludXRlcyIsIkhpbnQiLCJ0eXBlIiwibW9kZSIsInRleHQiLCJ0b2tlaV9yYW5nZSIsInN0ZXAiLCJwbHVzIiwibWludXMiLCJxdWVzdGlvbiIsInNjb3JlIiwiY2hlY2siLCJhbnMiLCJoaW50MSIsImhpbnQyIiwiaW5wdXRfaG91cnMiLCJpbnB1dF9taW51dGVzIiwiZHJhdyIsInNldCIsInJhbmRvbSIsImFuc3dlcl9ob3VycyIsImFuc3dlcl9taW51dGVzIiwic2Vpa2FpMSIsImFsZXJ0Iiwic2Vpa2FpMiIsIm1Sb3RhdGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lV2lkdGgiLCJsaW5lVG8iLCJjb3MiLCJQSSIsInNpbiIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiaFJvdGF0ZSIsInJvdGF0ZSIsImRyYXdUZXh0IiwiZm9udCIsInRleHRBcnJYIiwidGV4dEFyclkiLCJ0ZXh0QXJyWDIiLCJ0ZXh0QXJyWTIiLCJmaWxsVGV4dCIsImRyYXdTY2FsZSIsImwiLCJtIiwiZHJhd0JvYXJkIiwiY2xlYXJSZWN0IiwiYXJjIiwia2F6dSIsImt1cmFpIiwia3VyYWlfeW9taSIsInlvbWkiLCJtYXhfa2V0YSIsIm51bV9hcnIiLCJudW1fbGVuZ3RoIiwibnVtIiwiY3JlYXRlX1RCTCIsImtldGFfY2hhbmdlIiwia2V0YV9kYXRhIiwic2VsZWN0IiwibnVtYmVyXzEiLCJtYXgiLCJzZWxlY3RlZEluZGV4IiwiY29uc29sZSIsImxvZyIsIndyaXRlX1RCTCIsImJla2lqbyIsInNlbGVjdF8yIiwibnVtXzIiLCJudW1iZXJfMiIsImFuc3dlcl8xIiwiU3RyaW5nIiwicmVwbGFjZSIsInNlbGVjdF8zIiwibnVtXzMiLCJudW1iZXJfMyIsInB1dF9UQkwiLCJpbmRleCIsInZlcnRpY2FsQWxpZ24iLCJzdWJzdHIiLCJpbWdfZGF0YSIsIm1hcmdpbiIsImN1cnNvciIsInRhaGkiLCJoaWthc3UiLCJrYXN1Iiwid2EiLCJrdXJpYWdhcmkiLCJoaWthc3VfYXJyIiwia2FzdV9hcnIiLCJ3YV9hcnIiLCJoaWthc3Vfa2V0YSIsImthc3Vfa2V0YSIsIndhX2tldGEiLCJtYXN1X2NsZWFyIiwic2h1dHVkYWkiLCJtb25kYWlfc2V0Iiwic2hvd19hbnN3ZXIiLCJib3gxIiwiYm94MyIsImJveDUiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsImZpZWxkIiwibGluZUhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwibnVtX3BhbGxldCIsImhpc3Nhbl9zZXQiLCJudW1fc2V0IiwidGFzdV90eXBlIiwibWluIiwia290YWVfaW5wdXQiLCJjaGFyQXQiLCJzdXVqaV9zZXQiLCJva2FuZV9zZXQiLCJpbWdfYXJyIiwidG91Y2hTdGFydEV2ZW50IiwidG91Y2hNb3ZlRXZlbnQiLCJ0b3VjaEVuZEV2ZW50XzIiLCJkaXYiLCJib3JkZXJSYWRpdXMiLCJ0b3VjaEVuZEV2ZW50IiwiZHJhZ2dlZCIsImV2ZW50IiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJlbGUiLCJ0YWdOYW1lIiwiaW1nX2t1cmlhZ2FyaSIsImRyYWdnZWRFbGVtIiwidG91Y2giLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VZIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJwYWdlWCIsInBhZ2VYT2Zmc2V0Iiwib2Zmc2V0V2lkdGgiLCJkcm9wcGVkRWxlbSIsIm5ld1BhcmVudEVsZW0iLCJlbGVtZW50RnJvbVBvaW50IiwiY291bnQiLCJpbWdfc3R5bGUiLCJoaWhpIiwiaGlnZW5zdSIsImdlbnN1Iiwic2EiLCJrdXJpc2FnYXJpIiwiaGlnZW5zdV9hcnIiLCJnZW5zdV9hcnIiLCJzYV9hcnIiLCJoaWdlbnN1X2tldGEiLCJnZW5zdV9rZXRhIiwic2Ffa2V0YSIsImhpa3VfdHlwZSIsImltZ19rdXJpc2FnYXJpIiwia3VrdSIsInR5cGVfZGF0YSIsImRhbl9tZW51IiwibmV4dCIsInlvbWlfa290YWUiLCJzaGlraSIsInNoaWtpX2tvdGFlIiwiZGFuIiwidGV4dENvbnRlbnQiLCJkYW5fdHlwZSIsImhpam91c3UiLCJqb3VzdSIsImJhcmEiLCJwdXNoIiwic3BsaWNlIiwia3VrdWEiLCJwYXJzZUludCIsImt1a3ViIiwibW92ZTEiLCJsb2FkIiwiQ29sb3JzIiwiZGl2X2NvbG9yIiwiQ29sb3IiLCJjb2xvcl92YWwiLCJmbGFnX2NvbCIsImZsYWdfcm93IiwiZmxhZ19BTEwiLCJyZXN1bHQiLCJjb25maXJtIiwiayIsImthaDEiLCJzZWtpIiwiaGlqb3VzdV9hcnIiLCJqb3VzdV9hcnIiLCJzZWtpX2FyciIsImhpam91c3Vfa2V0YSIsImpvdXN1X2tldGEiLCJzZWtpX2tldGEiLCJrdXJpYWdhcmlfMTAwMCIsIkt1cmlhZ2FyaV8xMDAwIiwia3VyaWFnYXJpXzEwMCIsIkt1cmlhZ2FyaV8xMDAiLCJrdXJpYWdhcmlfMTAiLCJLdXJpYWdhcmlfMTAiLCJrdWt1X2h5b3UiLCJoaW50IiwibWFyZ2luUmlnaHQiLCJUQkxfa3VrdSIsInpJbmRleCIsIm1vdmUiLCJrYWgyIiwiYnVidW5fc2VraTEiLCJidWJ1bl9zZWtpMiIsImZsYWdfaGludDEiLCJmbGFnX2hpbnQyIiwiYnVidW5fc2VraTFfYXJyIiwiYnVidW5fc2VraTJfYXJyIiwiYnVidW5fc2VraTFfa2V0YSIsImJ1YnVuX3Nla2kyX2tldGEiLCJoaW50XzEiLCJidWJ1bjEiLCJoaW50XzIiLCJidWJ1bjIiLCJoaW50XzMiLCJib3JkZXJCb3R0b20iLCJ0ZXh0X2JveF8xIiwidGV4dF9ib3hfMiIsImhpbnRfY2xlYXIiLCJzdW0iLCJoeWFrdSIsInZhbF8xIiwidmFsXzIiLCJ2YWxfMyIsImp1dV9ub19rdXJhaSIsImljaGlfbm9fa3VyYWkiLCJob2thX25vX2JveCIsImJveDIiLCJjaGVja19hbnN3ZXIiLCJzaG93X2hpbnQiLCJib3hfMiIsImltZ19zZXQiLCJtYXJnaW5Cb3R0b20iLCJtaXhCbGVuZE1vZGUiLCJjZWxsMSIsImNlbGwyIiwic2NvcmVfdXAiLCJIb3dsIiwicHJlbG9hZCIsInZvbHVtZSIsImxvb3AiLCJhdXRvcGxheSIsInJpZ2h0IiwibW92ZTIiLCJjYW5jZWwiLCJjYW5jZWwyIiwiY2FuY2VsMyIsIm9wZW4yIiwic2hvdCIsImdvbWliYWtvIiwiaW5uZXJXaWR0aCIsImNsaWVudFgiLCJtYXRjaCIsImlkIiwiY29udGV4dCIsIndib3VuZCIsIkNBTlZBU19TSVpFIiwidW5kb0RhdGFTdGFjayIsInJlZG9EYXRhU3RhY2siLCJtb3VzZURvd24iLCJ0b3VjaERvd24iLCJ4IiwieSIsInN0WCIsInN0WSIsIiQiLCJyZWFkeSIsImlubmVySGVpZ2h0Iiwic3RhcnREcmF3IiwiZHJhd2luZyIsImVuZERyYXciLCJ0b3VjaFN0YXJ0IiwidG91Y2hNb3ZlIiwiZW5kVG91Y2giLCJjbGljayIsInVuc2hpZnQiLCJnZXRJbWFnZURhdGEiLCJpbWFnZURhdGEiLCJzaGlmdCIsInB1dEltYWdlRGF0YSIsInBuZyIsInRvRGF0YVVSTCIsImJhY2tncm91bmQiLCJ0ZWdha2lfaW1nIiwiYmVmb3JlRHJhdyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFkiLCJ0b3VjaGVzIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwic2V0TGluZURhc2giLCJmaWxsU3R5bGUiLCJsaW5lQ2FwIiwibW92ZWFibGUiLCJNb3ZlYWJsZSIsImJvZHkiLCJkcmFnZ2FibGUiLCJyb3RhdGFibGUiLCJyZXNpemFibGUiLCJ3YXJwYWJsZSIsIm9yaWdpbiIsInRocm90dGxlRHJhZyIsInRocm90dGxlUm90YXRlIiwidGhyb3R0bGVSZXNpemUiLCJyZW5kZXJEaXJlY3Rpb25zIiwiem9vbSIsInBhZGRpbmciLCJib3R0b20iLCJncmlkX2NoZWNrIiwiY2hlY2tlZCIsIm9uIiwidHJhbnNmb3JtIiwiZSIsImNsaWVudFJlY3QiLCJ3IiwiaCIsImRpc3QiLCJub1Njcm9sbCIsInBhc3NpdmUiLCJiX2NvbG9yIiwiaXJvbnVyaSIsIlRhcmdldCIsIm1hc3VfY2hlY2siLCJtZW51X2NoYW5nZSIsImNhbGNfc2V0IiwibWVudV9ib3giLCJub3RlX3JhbmdlIiwicmFuZ2VfY2hhbmdlIiwibWFzdV9jaGFuZ2UiLCJmaWd1cmVfYm94IiwiZmlndXJlX2RyYXciLCJjYW1lcmFfaW1nIiwiaW1nX2NhcHR1cmUiLCJVRCIsInJldmVyc2UiLCJ0ZWdha2lfY2FudmFzIiwidGVnYWtpIiwiY29sb3JfYm94IiwiY29sb3JfY2hhbmdlIiwicGVua2kiLCJJcm9udXJpIiwiYl9jb2xvcl9jaGFuZ2UiLCJzdWJtaXQiLCJ0ZXh0X2FyZWFfc2V0IiwicmFuZ2UiLCJmaWd1cmVfZGF0YSIsImZpZ3VyZSIsImZpZ3VyZV9wYWxsZXQiLCJodG1sMmNhbnZhcyIsInRoZW4iLCJiaW4iLCJhdG9iIiwiYnVmZmVyIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJibG9iIiwiQmxvYiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlIiwiQ2xpcGJvYXJkSXRlbSIsImVyciIsInRleHRfaW5wdXRfYm94Iiwic2VsZWN0ZWQiLCJzd2l0Y2hfb24iLCJzd2l0Y2hfb2ZmIiwiZm9udF9kYXRhIiwiZm9udF9zZWxlY3QiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsIlRCTF9DQUxDIiwiVEJMX0NBTENfZGF0YSIsIlNISUtJIiwiY2FsY19zd2l0aCIsImJ0biIsIm92ZXJmbG93V3JhcCIsIkxFRCIsInNsaWNlIiwiZXZhbCIsImNhbGNfcGFsbGV0IiwiaW1nX3BhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=