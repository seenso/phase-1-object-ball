let gameObject = () => {
  return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": "Black, White",
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7
        },
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15
        },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5
        },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1
        }
      }
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": "Turquoise, Purple",
      "players": {
        "Jeff Adriern": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10
        },
        "DeSagna Diop": {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5
        },
        "Ben Gordon": {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0
        },
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals":22,
          "blocks": 5,
          "slamDunks": 12
        },
      }
    }
  };
};

let numPointsScored = (playerName) => {
  for (let gameKey in gameObject) { //either home or away
    let teamObj = game[gameKey];
    for(let team in teamObj) { //team name, colors, players
      let playerObj = teamObj.players;
      for (let player in playerObj) { //players
        if (player === playerName) {
          return playerObj[player].points;
        }
      }
    }
  }
};

let shoeSize = (playerName) => { //copy&pasted numPointsScored & set to return shoe (not points)
  for (let gameKey in gameObject) { //either home or away
    let teamObj = game[gameKey];
    for(let team in teamObj) { //team name, colors, players
      let playerObj = teamObj.players;
      for (let player in playerObj) { //players
        if (player === playerName) {
          return playerObj[player].shoe;
        }
      }
    }
  }
};

let teamColors = (teamName) => {
  for (let gameKey in gameObject) { //either home or away
    let teamObj = game[gameKey];
    for(let team in teamObj) { //team name, colors, players
      if(team === teamName) {
        return gameObject.colors;
      }
    }
  }
};

let teamNames = () => {
  //return an arr of team names
  let teamNames = [];
  for (let gameKey in gameObject) {
    if (gameKey === "teamName") {
      teamNames.push(gameKey.teamName);
    }
  }
  return teamNames;
};

let playerNumbers = (teamName) => {
  //return arr of jersey numbers for team
  let jerseyNumArr = [];

  for (let gameKey in gameObject) { //either home or away
    let teamObj = game[gameKey];
    for(let team in teamObj) { //team name, colors, players
      let playerObj = teamObj.players;
      for (let player in playerObj) { //players
          jerseyNumArr.push(player.number);
      }
    }
  }

  return jerseyNumArr;
};

let playerStats = (playerName) => {
  //return obj of player's stats
  let playerStat = {};
  return playerStat;
};

let bigShoeRebounds = () => {};