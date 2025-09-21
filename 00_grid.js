import * as data from "./data.js";
export function grid(grid_int) {
  const TBL = document.createElement("table");
  TBL.setAttribute("id", "Masu");
  TBL.style.position = "fixed";
  var Width = document.documentElement.clientWidth - 220;
  var Height = document.documentElement.clientHeight - 140;
  for (let i = 0; i < Math.floor(Height / grid_int); i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < Math.floor(Width / grid_int); j++) {
      const td = document.createElement("td");
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
      td.addEventListener("click", () => {
        if (note_masu.pointerEvents == "all") {
          td.style.backgroundColor = data.color_data[b_color_box.value];
          data.kako.currentTime = 0;
          data.kako.play();
        } else {
          if (footer_area.firstChild != null) {
            td.appendChild(footer_area.firstChild);
          }
          data.pi.currentTime = 0;
          data.pi.play();
        }
      });
      tr.appendChild(td);
    }
    TBL.appendChild(tr);
  }
  document.getElementById("note_masu").appendChild(TBL);
}
