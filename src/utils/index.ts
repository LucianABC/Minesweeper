
import { GAME_MODE, ROWS_AND_COLS, Cell } from "src/constants/GameStatus";

export const generateBombIds = (q: number, maxId: number) =>{
  const ids: number[]= []

  for (let i = 0; i < q; i++){
    const id =  Math.floor(Math.random() * maxId);
    ids.push(id)
  }

  return ids
}

export const createCells = (gameMode: GAME_MODE): Cell[] => {
  const cells: Cell[] = [];
  const cantidad =
    ROWS_AND_COLS[gameMode].colCount * ROWS_AND_COLS[gameMode].rowCount;

  for (let i = 0; i < cantidad; i++) {
    cells.push({
      id: i,
      activated: false,
      hasBomb: false,
    });
  }
  return cells
};

export const plantBombs = (cells: Cell[], bombIds: number[]):Cell[]=>{
  return cells.map((cell, i)=>{
    const hasBomb = bombIds.some((id)=>id===cell.id)
    return {...cell, hasBomb}
  })  
  
}