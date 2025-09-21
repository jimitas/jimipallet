import * as data from "./data.js";
import { drag } from "./drag.js";

export function kazu() {
  //初期設定

  const kurai = ["一", "十", "百", "千", "一万", "十万", "百万", "千万", "一億", "十億", "百億", "千億", "一兆"];
  const kurai_yomi = ["", "十", "百", "千", "万", "十", "百", "千", "億", "十", "百", "千", "兆"];
  const yomi = ["", "", "二", "三", "四", "五", "六", "七", "八", "九"];
  const color_data = [
    "rgb(255, 202, 191, 0.7)",
    "rgb(255, 255, 128, 0.7)",
    "rgb(77, 196, 255, 0.7)",
    "rgb(216, 242, 85, 0.7)",
    "rgb(255, 202, 128, 0.7)",
    "rgb(255, 202, 128, 0.7)",
    "rgb(255, 202, 128, 0.7)",
    "rgb(255, 202, 128, 0.7)",
    "rgb(201, 172, 230, 0.7)",
    "rgb(201, 172, 230, 0.7)",
    "rgb(201, 172, 230, 0.7)",
    "rgb(201, 172, 230, 0.7)",
    "rgb(255, 241, 0, 0.7)",
  ];
  //初期設定
  document.getElementById("sub").innerHTML = `
  <div style="margin-left:10px;line-height:60px;display:flex;">
  <select id="select" style="margin-left:10px">
  <option value=0>100までのかず</option>
  <option value=1>1000までの数</option>
  <option value=2>１万までの数</option>
  <option value=3>１億までの数</option>
  <option value=4>１億をこえる数</option>
  </select>
  <input type="number" id="number_1" style="margin-left:20px;width:100px;font-size:24px;"/>を
  <input type="button" value="セット" id="set" style="height:40px;" class="btn btn-primary">
  </div>
  
  `;

  document.getElementById("content").innerHTML = `
 
  <table style="margin-left:10px">
    <tbody id="TBL">
    </tbody>
  </table>
  <hr>
  <div style="display:flex;line-height:50px;">
  <select id="select_3" style="margin-left:10px;text-align:right;width:100px;height:40px;">
  <option value=0>1を</option>
  <option value=1>10を</option>
  <option value=2>100を</option>
  <option value=3>1000を</option>
  <option value=4>１万を</option>
  </select>
  <input type="number" id="number_3" max="100" style="text-align:right;margin-left:20px;width:100px;height:40px;font-size:24px;"/>こ,
  <input type="button" value="ならべる" id="check_2" style="margin:5px;width:80px;height:30px;" class="btn btn-info">　
  </div>
  <hr>
  <div style="display:flex;line-height:50px;">
    <select id="select_2" style="margin-left:10px;width:100px;height:40px;text-align:right;">
      <option value=0>1を</option>
      <option value=1>10を</option>
      <option value=2>100を</option>
      <option value=3>1000を</option>
      <option value=4>１万を</option>
      <option value=5>10万を</option>
      <option value=6>100万を</option>
      <option value=7>1000万を</option>
      <option value=8>１億を</option>
    </select>
    <input type="number" id="number_2" max="999" style="text-align:right;margin-left:20px;width:120px;height:40px;font-size:24px;"/>こあつめたかずは,
    <input type="button" value="しらべる" id="check" style="margin:5px;width:80px;height:30px;" class="btn btn-success">　
    <div id="answer_1" style="text-align:right;font-size:24px;min-width:40px"></div>　です。
  </div>
  <hr>
  
  `;

  var max_keta = 2;
  var num_arr = [];
  var num_length;
  var num;
  create_TBL();

  //桁数の設定変更メニュー
  document.getElementById("select").addEventListener("change", () => {
    keta_change();
  });

  //桁数の設定変更メニュー
  function keta_change() {
    data.set.currenttime = 0;
    data.set.play();
    const keta_data = [2, 3, 4, 8, 13];
    max_keta = keta_data[select.value];
    number_1.style.width = Math.floor(40 + 30 * max_keta) + "px";
    number_1.max = 10 ** max_keta - 1;
    create_TBL();
  }

  document.getElementById("set").addEventListener("click", () => {
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
      data.alert.currenttime = 0;
      data.alert.play();
      alert("数が大きすぎます！");
      number_1.value = "";
      return;
    }
    select.value = select.selectedIndex;
    data.set.currenttime = 0;
    data.set.play();
    keta_change();
    console.log(max_keta);
    write_TBL();
  });

  document.getElementById("check").addEventListener("click", () => {
    var bekijo = Number(select_2.value);
    var num_2 = Number(number_2.value);
    num = num_2 * 10 ** bekijo;
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
    data.reset.currenttime = 0;
    data.reset.play();
    answer_1.innerHTML = String(num).replace(/(\d)(?=(\d\d\d\d)+(?!\d))/g, "$1,");
  });

  document.getElementById("check_2").addEventListener("click", () => {
    var bekijo = Number(select_3.value);
    var num_3 = Number(number_3.value);
    if (bekijo > 8) {
      select.selectedIndex = 4;
    } else if (bekijo > 4 && bekijo <= 8) {
      select.selectedIndex = 3;
    } else select.selectedIndex = bekijo;
    num = num_3 * 10 ** bekijo;

    keta_change();
    if (num_3 > 100) {
      data.alert.currenttime = 0;
      data.alert.play();
      alert("ならべる数は，100こまでにしてください！");
      number_3.value = "";
      return;
    }
    data.set.currenttime = 0;
    data.set.play();
    write_TBL();
    put_TBL(num_3, bekijo);
  });

  function create_TBL() {
    TBL.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < max_keta; j++) {
        var index = max_keta - j - 1;
        const td = document.createElement("td");
        td.style.width = 72 / max_keta + "vw";
        td.style.height = "40px";
        td.style.textAlign = "center";
        switch (i) {
          case 0:
            td.style.fontSize = "18px";
            if (max_keta == 2) td.innerHTML = kurai[index] + "のくらい";
            else td.innerHTML = kurai[index] + "の位";
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
    for (let j = 0; j < max_keta; j++) {
      var index = max_keta - j - 1;
      if (max_keta == 2) TBL.rows[0].cells[j].innerHTML = kurai[index] + "のくらい";
      else TBL.rows[0].cells[j].innerHTML = kurai[index] + "の位";
      TBL.rows[1].cells[j].innerHTML = "";
      TBL.rows[2].cells[j].innerHTML = "";
      TBL.rows[3].cells[j].innerHTML = "";
      TBL.rows[3].cells[j].style.width = 72 / max_keta + "vw";
    }
    num_length = String(num).length;
    for (let i = 0; i < num_length; i++) {
      num_arr[num_length - i - 1] = Number(String(num).substr(i, 1)); //一の位から順に数字を挿入
    }
    for (let j = 0; j < num_length; j++) {
      var index = max_keta - j - 1;
      TBL.rows[1].cells[index].innerHTML = num_arr[j];
      TBL.rows[2].cells[index].innerHTML = yomi[num_arr[j]] + kurai_yomi[j];
      if (j == 0) {
        if (num_arr[j] == 1) TBL.rows[2].cells[index].innerHTML = "一";
      } else if (j == 4) {
        if (num_arr[j] == 1) TBL.rows[2].cells[index].innerHTML = "一万";
        else if (num_arr[j] == 0 && num_arr[j + 1] == 0 && num_arr[j + 2] == 0 && num_arr[j + 3] == 0) TBL.rows[2].cells[index].innerHTML = "";
        else if (num_arr[j] == 0) TBL.rows[2].cells[index].innerHTML = "万";
      } else if (j == 8) {
        if (num_arr[j] == 1) TBL.rows[2].cells[index].innerHTML = "一億";
        else if (num_arr[j] == 0 && num_arr[j + 1] == 0 && num_arr[j + 2] == 0 && num_arr[j + 3] == 0) TBL.rows[2].cells[index].innerHTML = "";
        else if (num_arr[j] == 0) TBL.rows[2].cells[index].innerHTML = "億";
      } else if (j == 12) {
        if (num_arr[j] == 1) TBL.rows[2].cells[index].innerHTML = "一兆";
      } else {
        if (num_arr[j] == 0) TBL.rows[2].cells[index].innerHTML = "";
      }
    }
  }

  function put_TBL(num_3, bekijo) {
    const img_data = ["ichi", "juu", "hyaku", "sen", "ichiman"];
    for (let j = 0; j < max_keta; j++) {
      var index = max_keta - j - 1;
      TBL.rows[0].cells[j].innerHTML = kurai[index];
    }
    if (num_3 > 9) {
      for (let i = 0; i < num_3; i++) {
        const img = document.createElement("img");
        drag(img);
        img.src = "./image/" + img_data[bekijo] + ".png";
        img.classList.add("m_" + img_data[bekijo], "img");
        img.style.margin = "2px";
        img.style.cursor = "pointer";
        TBL.rows[3].cells[max_keta - bekijo - 1].appendChild(img);
        TBL.rows[3].cells[max_keta - bekijo - 1].style.width = "50%";
      }
    } else {
      for (let i = 0; i < num_3; i++) {
        const img = document.createElement("img", "img");
        drag(img);
        img.src = "./image/" + img_data[bekijo] + ".png";
        img.classList.add(img_data[bekijo]);
        img.style.margin = "5px";
        img.style.cursor = "pointer";
        TBL.rows[3].cells[max_keta - bekijo - 1].appendChild(img);
      }
    }
  }
}
