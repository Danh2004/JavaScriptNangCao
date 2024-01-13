const game = {
    team1 : "Bayern Munich",
    team2 : "Dortmund",
    players : 
    [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",

        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Wigi",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],

    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2024",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

};

//Bai 1
const [players1, players2] = game.players;
console.log(players1,players2);

//Bai 2
const [gk, ...filePlayers] = players1;
console.log(gk, filePlayers);

//Bai 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//Bai 4
const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

//Bai 5
const {odds: team1, x : draw, team2} = game;

//Bai 6
const printGoals = function(...players){
    console.log(`${players.length} goals`)
}
printGoals(...game.scored);

//Bai 7
team1 < team2 && console.log("team1 win")
team1 > team2 && console.log("team2 win")