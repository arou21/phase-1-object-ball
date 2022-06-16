const gameObject = {
     home:  {
    teamName: "brooklynNets ",
    colors: "black and white", 
    players: {
        "Alan Anderson": {
            number: "0",
            shoe: "16",
            point: "22",
            rebounds: "12",
            assists: "12",
            steals: "3",
            blocks: "1",
            slamDunks: "1", 
        },
      "Reggie Evans": {
                number: "30",
                shoe: "14",
                point: "12",
                rebounds: "12",
                assists: "12",
                steals: "12",
                blocks: "12",
                slamDunks: "7",
    },
     "Brook Lopez": {
            number: "11",
            shoe: "16",
            point: "17",
            rebounds: "19",
            assists: "10",
            steals: "3",
            blocks: "1",
            slamDunks: "15",
        },
        "Mason Plumlee": {
        number: "1",
        shoe: "19",
        point: "26",
        rebounds: "12",
        assists: "6",
        steals: "3",
        blocks: "8",
        slamDunks: "5",   
},
    "Jason Terry": {
        number: "31",
        shoe: "15",
        point: "19",
        rebounds: "2",
        assists: "2",
        steals: "4",
        blocks: "11",
        slamDunks: "1",
},
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: "Turquoise and Purple", 
        players: {
            name: "Jeff Adrien",
                        number: "4",
                        shoe: "18",
                        point: "10",
                        rebounds: "1",
                        assists: "1",
                        steals: "2",
                        blocks: "7",
                        slamDunks: "2" 
        },
        "Bismak Biyombo": {
            number: "0",
            shoe: "16",
            point: "12",
            rebounds: "4",
            assists: "7",
            steals: "7",
            blocks: "15",
            slamDunks: "10",
    },
         "Desagna Diop": {
            number: "2",
            shoe: "14",
            point: "24",
            rebounds: "12",
            assists: "12",
            steals: "4",
            blocks: "5",
            slamDunks: "5"
         },
         "Ben Gordon": {
             number: "8",
             shoe: "15",
             point: "33",
             rebounds: "12",
             assists: "12",
             steals: "1",
             blocks: "1",
             slamDunks: "0"
         },
        "Brendan Haywood": {
             number: "33",
             shoe: "15",
             point: "6",
             rebounds: "12",
             assists: "12",
             steals: "22",
             blocks: "5",
             slamDunks: "12"
        },
    console.log(gameObject());

function homeTeamName() {
    return gameObject()['home']['teamName']
}
console.log(homeTeamName());

let oo = { foo: 42, bar: 83, "key 2/ spaces": true};
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["kewy w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar);

let oo = { foo: 42, bar: 83, baz: 79 };
for (let key in oo) {
  let value = oo[key];
  console.log("key:", key, "value:", value);
}