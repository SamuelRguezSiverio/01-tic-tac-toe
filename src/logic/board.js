import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    // revisa todas las cobinaciones ganadoras
    // sabremos si X u O ha ganado
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // sino hay ningún ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    // revisa si hay un empate
    // si no hay ningún espacio vacío más en el tablero
    return newBoard.every((square) => square !== null)
  }