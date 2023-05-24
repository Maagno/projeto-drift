  ctx = document.getElementById("canvas").getContext("2d");
  fatorx = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  fatory = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  pista = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
  ];
  px = 10;
  py = 10;
  angulo = 18;
  esq = false;
  dir = false;
  function vira(k) {
    if (k == 37) esq = true;
    if (k == 39) dir = true;
  }
  function para(k) {
    esq = false;
    dir = false;
  }
  function move() {
    if (esq) angulo = (angulo + 35) % 36;
    if (dir) angulo = (angulo + 1) % 36;
    document.getElementById('carro').innerHTML = "<div style='position:relative; z-index:2; top:254px; width:20px; height:40px; background-color:#000000; border-radius:4px; transform:rotate(" + angulo + "0deg);'><div style='width:10px; height:4px; background-color:#000000; border:5px solid #ff4444; border-top:none; border-bottom:none;'></div><div style='width:14px; height:20px; background-color:#999999; border:3px solid #000000;'></div></div>";
    ctx.fillStyle = "#9aba9a";
    ctx.fillRect(0, 0, 460, 460);
    px += fatorx[angulo] * 3.7;
    py += fatory[angulo] * 3.7;
    ctx.fillStyle = "#385383";
    for (x = 0; x < pista.length; x++)for (y = 0; y < pista[x].length; y++)if (pista[x][y] != 0) ctx.fillRect((200 * y) + py + 38, (200 * x) + px + 28, 200, 200);
    setTimeout('move()', 75);
  }
  move();
