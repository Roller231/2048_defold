let field: number[][] = [[0, 2, 0, 2], [2, 2, 0, 0], [0, 0, 0, 0]];

// Перемещает ячейки поля по 4 сторонам
function field_move(x: number, y: number): void {

  for (let i = 1; i <= 3; i++) {
    for (let ii = 1; ii <= 4; ii++) {
      if (x > 0) {
        field_cell_move(4 - i, ii, x, y);
      } else if (x < 0) {
        field_cell_move(i, ii, x, y);
      } else if (y > 0) {
        field_cell_move(i, 5 - ii, x, y);
      } else {
        field_cell_move(i, ii, x, y);
      }
    }
  }
  field_add_new();
  update_ui_field();
}

// Перемещает ячейку поля, вызывается из field_move
function field_cell_move(i: number, ii: number, x: number, y: number): void {

  // если ячейка пустая - переместить
  if (i + x === 0 || i + x === 4) return;
  if (field[i + x][ii + y] === 0) {
    field[i + x][ii + y] = field[i][ii];
    field[i][ii] = 0;
    field_cell_move(i + x, ii + y, x, y);
    // если ячейки одинаковые - объединить
  } else if (field[i + x][ii + y] === field[i][ii]) {
    field[i + x][ii + y] = field[i][ii] * 2;
    field[i][ii] = 0;
  }
}

// Случайно выбирает ячейку для спавна новой 2
function field_add_new(): void {

  let freeCell = false;
  for (let i = 1; i <= 3; i++) {
    for (let ii = 1; ii <= 4; ii++) {
      if (field[i][ii] === 0) {
        field[i][ii] = 2;
        freeCell = true;
        return;
      }
    }
  }
  if (!freeCell) {
    restart();
  }
}

// Перезапускает field если field_add_new не найдёт пустую ячейку
function restart(): void {

  field = [[0, 2, 0, 2], [2, 2, 0, 0], [0, 0, 0, 0]];
  update_ui_field();
}

// Обновляет UI после field_move и field_add_new
function update_ui_field(): void {

  for (let i = 1; i <= 3; i++) {
    for (let ii = 1; ii <= 4; ii++) {
      const name = `${i - 1}${ii - 1}`;
      gui.set_text(gui.get_node(name), field[i][ii]);
      // gui.set_color(gui.get_node("box"), color);
    }
  }
}
