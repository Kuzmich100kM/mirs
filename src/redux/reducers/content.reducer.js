const SET_LETTERS = "SET_LETTERS"
const SET_DATA = "SET_DATA"

const initialState = {
  lettersArr: [],
  dataArr: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LETTERS:
      return { ...state, lettersArr: [...payload] }

    case SET_DATA:
      return { ...state, dataArr: [...payload] }

    default:
      return state
  }
}

export const setLettersAC = data => ({ type: SET_LETTERS, payload: data })
export const setDataAC = data => ({ type: SET_DATA, payload: data })
