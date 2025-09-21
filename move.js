import * as data from "./data.js";

//ドラッグのみ
export function move(event) {
  const moveable = new Moveable(document.body, {
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
    padding: { left: 0, top: 0, right: 0, bottom: 0 },
  });

  const grid_check = document.getElementById("grid_check");
  if (grid_check.checked == true) {
    moveable.throttleDrag = 20;
    moveable.throttleRotate = 20;
    moveable.throttleResize = 20;
  } else {
    moveable.throttleDrag = 0;
    moveable.throttleRotate = 0;
    moveable.throttleResize = 0;
  }
  grid_check.addEventListener("click", () => {
    if (grid_check.checked == true) {
      moveable.throttleDrag = 20;
      moveable.throttleRotate = 20;
      moveable.throttleResize = 20;
      data.set.currentTime = 0;
      data.set.play();
    } else {
      moveable.throttleDrag = 0;
      moveable.throttleRotate = 0;
      moveable.throttleResize = 0;
      data.cancel2.currentTime = 0;
      data.cancel2.play();
    }
  });

  const gomibako = document.getElementById("gomibako");
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

  moveable.on("drag", ({ target, transform }) => {
    target.style.transform = transform;
  });
  moveable.on("dragEnd", (e) => {
    var clientRect = gomibako.getBoundingClientRect();
    var x = clientRect.left;
    var y = clientRect.top;
    var w = clientRect.width;
    var h = clientRect.height;
    if (e.clientX > x && e.clientX < Math.floor(x + w) && e.clientY > y && e.clientY < Math.floor(y + h)) {
      if (e.target.id != "gomibako") {
        e.target.parentNode.removeChild(e.target);
        data.cancel.currentTime = 0;
        data.cancel.play();
      }
    }
  });
  moveable.on("rotate", ({ target, transform, dist }) => {
    target.style.transform = transform;
  });
  moveable.on("resize", (e) => {
    e.target.style.width = `${e.width}px`;
    e.target.style.height = `${e.height}px`;
  });
}
