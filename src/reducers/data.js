const data = [
  {
    letter: "B",
    blocks: [
      { id: 1, name: "block 1" },
      { id: 2, name: "block 2" },
    ],
  },
  {
    letter: "C",
    blocks: [
      { id: 3, name: "block 1" },
      { id: 4, name: "block 2" },
      { id: 5, name: "block 3" },
    ],
  },
  {
    letter: "E",
    blocks: [
      { id: 6, name: "block 1" },
      { id: 7, name: "block 2" },
      { id: 8, name: "block 3" },
    ],
  },
]

module.exports = {
  getData: () => data,
}
