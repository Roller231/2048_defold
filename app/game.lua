function field_cell_move(i, ii, x, y)
    if i + x == 0 or i + x == 4 then
        return
    end
    if field[i+x][ii+y] == 0 then
        field[i+x][ii+y] = field[i][ii]
        field[i][ii] = 0
        field_cell_move(i+x, ii+y, x, y)
        -- если ячейки одинаковые - объеденить
    elseif field[i+x][ii+y] == field[i][ii] then
        field[i+x][ii+y] = field[i][ii]*2
        field[i][ii] = 0
    end
end
function field_add_new()
    local freeCell = false
    do
        local i = 1
        while i <= 3 do
            do
                local ii = 1
                while ii <= 4 do
                    if field[i][ii] == 0 then
                        field[i][ii] = 2
                        freeCell = true
                        return
                    end
                    ii = ii + 1
                end
            end
            i = i + 1
        end
    end
    if not freeCell then
        restart()
    end
end
function restart()
    field = {{0, 2, 0, 2}, {2, 2, 0, 0}, {0, 0, 0, 0}}
    update_ui_field()
end
function update_ui_field()
    do
        local i = 1
        while i <= 3 do
            do
                local ii = 1
                while ii <= 4 do
                    local name = table.concat({i-1,ii-1})
                    gui.set_text(gui.get_node(name), field[i][ii])
                    ii = ii + 1
                end
            end
            i = i + 1
        end
    end
end
field = {{0, 2, 0, 2}, {2, 2, 0, 0}, {0, 0, 0, 0}}
function field_move(x, y)
    do
        local i = 1
        while i <= 3 do
            do
                local ii = 1
                while ii <= 4 do
                    if x > 0 then
                        field_cell_move(4 - i, ii, x, y)
                    elseif x < 0 then
                        field_cell_move(i, ii, x, y)
                    elseif y > 0 then
                        field_cell_move(i, 5 - ii, x, y)
                    else
                        field_cell_move(i, ii, x, y)
                    end
                    ii = ii + 1
                end
            end
            i = i + 1
        end
    end
    field_add_new()
    update_ui_field()
end
