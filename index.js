// code your solution here
function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W" && entry.team === "Denver Broncos");
    return win ? win.year : undefined;
  }
  
  module.exports = superbowlWin;
  
