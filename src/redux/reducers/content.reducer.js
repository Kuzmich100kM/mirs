const SET_LETTERS = "SET_LETTERS"
const CHANGE_LETTERS = "CHANGE_LETTERS"
const SET_DATA = "SET_DATA"

const initialState = {
  lettersObj: {},
  dataArr: [],
}

// const lettersObj = {A: true, B: true, C: false, D: false}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LETTERS:
      return { ...state, lettersObj: { ...payload } }

    case CHANGE_LETTERS: {
      return { ...state, lettersObj: { ...state.lettersObj, ...payload } }
    }
    case SET_DATA:
      return { ...state, dataArr: [...payload] }

    default:
      return state
  }
}

export const setLettersAC = data => ({ type: SET_LETTERS, payload: data })
export const changeLettersAC = data => ({ type: CHANGE_LETTERS, payload: data })
export const setDataAC = data => ({ type: SET_DATA, payload: data })
