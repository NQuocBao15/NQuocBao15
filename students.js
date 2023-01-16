let test = [
    {
        name: "Nguyen Van A",
        birthday: "11/1/1999",
        gender: true,
        score: { mathematics: 7, physics: 5, chemistry: 3 },
    },
    {
        name: "Nguyen Thi B",
        birthday: "11/1/1999",
        gender: true,
        score: { mathematics: 6, physics: 8, chemistry: 5 },
    },
    {
        name: "Tran Quoc C",
        birthday: "11/1/1999",
        gender: true,
        score: { mathematics: 9, physics: 9, chemistry: 7 },
    }
]

for (i=0; i < test.length; i++ ) {
    console.log(test[i].name + " - Mathematics " + test[i].score.mathematics + " - Physics " + test[i].score.physics + " - Chemistry " + test[i].score.chemistry)
    console.log();
}
