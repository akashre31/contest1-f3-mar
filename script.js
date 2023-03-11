function openingCeremony(sportsObj, callbackFnc) {
    console.log("Let the games begin");
    setTimeout(() => {
      sportsObj = { red: 0, blue: 0, green: 0, yellow: 0 };
      console.log("Score initialized: ", sportsObj);
      callbackFnc(sportsObj, race100M);
    }, 1000);
  }
  
  function race100M(sportsObj, callbackFnc) {
    console.log("Race 100M has started");
    let times = {};
    const minTime = 10;
    const maxTime = 15;
    const colors = ["red", "blue", "green", "yellow"];
    for (let color of colors) {
      times[color] = Math.floor(Math.random() * (maxTime - minTime + 1) + minTime);
    }
    console.log("Race results: ", times);
    const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
    sportsObj[sortedColors[0]] += 50;
    sportsObj[sortedColors[1]] += 25;
    console.log("Score updated: ", sportsObj);
    callbackFnc(sportsObj, longJump);
  }
  
  function longJump(sportsObj, callbackFnc) {
    console.log("Long Jump has started");
    const colors = ["red", "blue", "green", "yellow"];
    const winner = colors[Math.floor(Math.random() * colors.length)];
    console.log(`Winner of Long Jump: ${winner}`);
    sportsObj[winner] += 150;
    console.log("Score updated: ", sportsObj);
    callbackFnc(sportsObj, highJump);
  }
  
  function highJump(sportsObj, callbackFnc) {
    console.log("High Jump has started");
    const colors = ["red", "blue", "green", "yellow"];
    const winner = prompt("What colour secured the highest jump?");
    if (colors.includes(winner)) {
      sportsObj[winner] += 100;
      console.log("Score updated: ", sportsObj);
    } else if (winner === null || winner === "") {
      console.log("Event was cancelled");
    } else {
      console.log("Invalid input. Event was cancelled");
    }
    callbackFnc(sportsObj, awardCeremony);
  }
  
  function awardCeremony(sportsObj) {
    console.log("Award Ceremony has started");
    const sortedScores = Object.keys(sportsObj).sort((a, b) => sportsObj[b] - sportsObj[a]);
    console.log(
      `${sortedScores[0]} came first with ${sportsObj[sortedScores[0]]} points. ${sortedScores[1]} came second with ${sportsObj[sortedScores[1]]} points. ${sortedScores[2]} came third with ${sportsObj[sortedScores[2]]} points.`
    );
  }
  
  // Call openingCeremony to start the event
  openingCeremony({ red: 100, blue: 50, green: 150, yellow: 100 }, race100M);
  function Race100M(score, callback) {
    console.log("Race100M started!");
    const times = {};
    Object.keys(score).forEach(color => {
      times[color] = Math.floor(Math.random() * 6) + 10;
    });
    console.log("Race100M results:", times);
    const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
    const first = sortedColors[0];
    const second = sortedColors[1];
    score[first] += 50;
    score[second] += 25;
    console.log(`Race100M won by ${first} and ${second} with scores ${score[first]} and ${score[second]} respectively.`);
    callback(score, LongJump);
  }
  
  function LongJump(score, callback) {
    console.log("LongJump started!");
    const color = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];
    score[color] += 150;
    console.log(`${color} won LongJump with a score of ${score[color]}.`);
    callback(score, HighJump);
  }
  
  function HighJump(score) {
    console.log("HighJump started!");
    const color = prompt("Which color secured the highest jump?");
    if (color && score[color] !== undefined) {
      score[color] += 100;
      console.log(`${color} won HighJump with a score of ${score[color]}.`);
    } else if (color === null || color === "" || score[color] === undefined) {
      console.log("Event was cancelled.");
    }
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    console.log("Award Ceremony started!");
    const sortedColors = Object.keys(score).sort((a, b) => score[b] - score[a]);
    console.log(`${sortedColors[0]} came first with ${score[sortedColors[0]]} points.`);
    console.log(`${sortedColors[1]} came second with ${score[sortedColors[1]]} points.`);
    console.log(`${sortedColors[2]} came third with ${score[sortedColors[2]]} points.`);
  }
  function OpeningCeremony() {
    console.log("Let the games begin!");
    const score = { red: 0, yellow: 0, blue: 0, green: 0 };
    setTimeout(() => {
      Race100M(score, LongJump);
    }, 1000);
  }
  OpeningCeremony();
    