// {A:false, B:false, C:false, ... Z:false, 0-9:false}

export default () => {
  const charsArr = {}
  for (let i = 0; i < 26; i++) {
    charsArr[String.fromCharCode(65 + i)] = false
  }
  charsArr["0-9"] = false

  return charsArr
}
