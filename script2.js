function OpeningCeremony(score, callback) {
    console.log("Let the games begin");
    setTimeout(function() {
      Race100M(score, callback);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    console.log("Starting 100m race...");
    setTimeout(function() {
      const raceTimes = {
        red: Math.floor(Math.random() * 6) + 10,
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10
      };
      let sortedTimes = Object.keys(raceTimes).sort(function(a, b) {
        return raceTimes[a] - raceTimes[b];
      });
      console.log("Race Results:");
      console.log(`1st Place: ${sortedTimes[0]} - 50 points`);
      console.log(`2nd Place: ${sortedTimes[1]} - 25 points`);
      score[sortedTimes[0]] += 50;
      score[sortedTimes[1]] += 25;
      console.log("Updated Score:");
      console.log(score);
      callback(score, LongJump);
    }, 3000);
  }
  
  function LongJump(score, callback) {
    console.log("Starting Long Jump...");
    setTimeout(function() {
      const colors = ["red", "blue", "green", "yellow"];
      const colorIndex = Math.floor(Math.random() * 4);
      const color = colors[colorIndex];
      console.log(`Winner: ${color} - 150 points`);
      score[color] += 150;
      console.log("Updated Score:");
      console.log(score);
      callback(score, HighJump);
    }, 2000);
  }
  
  function HighJump(score) {
    console.log("Starting High Jump...");
    const jumpWinner = prompt("What color secured the highest jump?");
    if (jumpWinner) {
      const color = jumpWinner.toLowerCase();
      if (score.hasOwnProperty(color)) {
        console.log(`Winner: ${color} - 100 points`);
        score[color] += 100;
        console.log("Updated Score:");
        console.log(score);
      } else {
        console.log("Event was cancelled.");
      }
    } else {
      console.log("Event was cancelled.");
    }
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    console.log("Final Scores:");
    const sortedScores = Object.entries(score).sort(function(a, b) {
      return b[1] - a[1];
    });
    console.log(`${sortedScores[0][0].charAt(0).toUpperCase() + sortedScores[0][0].slice(1)} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0].charAt(0).toUpperCase() + sortedScores[1][0].slice(1)} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0].charAt(0).toUpperCase() + sortedScores[2][0].slice(1)} came third with ${sortedScores[2][1]} points.`);
  }
  
  OpeningCeremony({red:0,blue:0,green:0,yellow:0}, Race100M);
  