const pillList = [
  {
    id: "9iem7irgi0HFQnnSPkrx",
    isTaken: false,
    pillName: "출근 후 영양제",
    time: "13:30",
    uid: "ERo01GKLL9PIa2KxKgvZgpm8hGN2",
    userId: "ERo01GKLL9PIa2KxKgvZgpm8hGN2",
  },
  {
    id: "pFSoLz69wL9XGAUSGIxG",
    isTaken: false,
    pillName: "점심약",
    time: "12:00",
    uid: "ERo01GKLL9PIa2KxKgvZgpm8hGN2",
    userId: "ERo01GKLL9PIa2KxKgvZgpm8hGN2",
  },
  {
    id: "uuYw73xK5FamjNFxpAPy",
    isTaken: false,
    pillName: "아침약",
    time: "12:15",
    uid: "ERo01GKLL9PIa2KxKgvZgpm8hGN2",
    userId: "ERo01GKLL9PIa2KxKgvZgpm8hGN2",
  },
];

/**
 *
 * @param {*} a
 * @param {*} b
 * @returns
 */
const sortByTime = (a, b) => {
  if (a.time > b.time) return 1;
  if (a.time < b.time) return -1;
};

pillList.sort(sortByTime);
console.log(pillList);
