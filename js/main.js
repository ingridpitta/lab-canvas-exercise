function draw() {
  let canvas = document.getElementById("my_canvas");
  let context = canvas.getContext("2d");
  context.strokeStyle = "white";
  context.fillStyle = "rgb(179, 152, 96)";
  context.fillRect(0, 0, 1000, 1000);

  context.beginPath();
  context.fillStyle = "rgb(222,148,77)";
  context.arc(150, 70, 15, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(150, 55);
  context.lineTo(150, 0);
  context.moveTo(150, 85);
  context.lineTo(150, 1500);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.fillStyle = "rgb(222,148,77)";
  context.moveTo(0, 90);
  context.lineTo(60, 90);
  context.lineTo(60, 50);
  context.lineTo(0, 50);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.fillStyle = "rgb(222,148,77)";
  context.moveTo(300, 90);
  context.lineTo(230, 90);
  context.lineTo(230, 50);
  context.lineTo(300, 50);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(0, 95);
  context.lineTo(60, 95);
  context.lineTo(60, 45);
  context.lineTo(0, 45);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(300, 95);
  context.lineTo(230, 95);
  context.lineTo(230, 45);
  context.lineTo(300, 45);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.fillStyle = "transparent";
  context.arc(60, 70, 15, (3 * Math.PI) / 2, Math.PI / 2);
  context.fill();
  context.stroke();
  context.setLineDash([5, 3]);
  context.arc(60, 70, 15, (3 * Math.PI) / 2, Math.PI / 2, true);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.fillStyle = "transparent";
  context.setLineDash([5, 3]);
  context.arc(230, 70, 15, (3 * Math.PI) / 2, Math.PI / 2);
  context.fill();
  context.stroke();
  context.closePath();

  context.beginPath();
  context.fillStyle = "transparent";
  context.setLineDash([0, 0]);
  context.arc(230, 70, 15, (3 * Math.PI) / 2, Math.PI / 2, true);
  context.fill();
  context.stroke();
  context.closePath();
}

draw();
