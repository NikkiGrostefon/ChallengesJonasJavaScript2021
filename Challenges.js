///////////////////////////////////////////////////////////////////////////#1

// //1 Store Mark's and John's mass and height in variables
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// //2 Calculate both their BMIs using the formula (you can even implement both versions)
// const BMIMark = massMark /heightMark ** 2;
// const BMIJohn = massJohn /(heightJohn * heightJohn);


// //3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI); 

//------------------------------------------------------------------------ JOHN'S SOLUTION #1
// const people = { john: { mass: 85, height: 1.76 }, mark: { mass: 95, height: 1.88 } }
// const calculateBmi = (person) => {
//   return person.mass / person.height ** 2;
// }
// const bmis = Object.keys(people).map((name) => {
//   return calculateBmi(people(name]);
// });
// const markIsHigher = bmis["mark"] > bmis["john"]
// console.log({ markIsHigher });

///////////////////////////////////////////////////////////////////////////#2

// //1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// const BMIMark = massMark /heightMark ** 2;
// const BMIJohn = massJohn /(heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn); 


// // if (BMIMark > BMIJohn) {
// //   console.log("Mark's BMI is higher than John's!")
// // } else {
// //   console.log("John's BMI is higher than Mark's!")
// // }

// //2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI is (${BMIMark}) higher than John's (${BMIJohn})!`)
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// }

///////////////////////////////////////////////////////////////////////////#3

// //1. Calculate the average score for each team, using the test data below

// // const dolphinsScores = (96 + 108 + 89) / 3;
// // const koalasScores = (88 + 91 + 110) / 3;
// // console.log(dolphinsScores, koalasScores);

// //2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// // if (dolphinsScores > koalasScores) {
// //     console.log("Dolphins with the trophy 🏆");
// // } else if (koalasScores > dolphinsScores) {
// //     console.log("Koalas win the trophy 🏆");
// // } else if (dolphinsScores === koalasScores) {
// //     console.log("Both win the trophy!");
// // }
// //Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �

// //4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// const dolphinsScores = (97 + 112 + 103) / 3;
// const koalasScores = (109 + 95 + 106) / 3;
// console.log(dolphinsScores, koalasScores);

// if (dolphinsScores > koalasScores && dolphinsScores >= 100) {
//     console.log("Dolphins with the trophy 🏆");
// } else if (koalasScores > dolphinsScores && dolphinsScores >= 100) {
//     console.log("Koalas win the trophy 🏆");
// } else if (dolphinsScores === koalasScores && dolphinsScores >= 100 && koalasScores >= 100) {
//     console.log("Both win the trophy!");
// } else {
//     console.log("No one wins the trophy! 😥");
// }
//------------------------------------------------------------------------ JOHN'S SOLUTION #3

// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];
// const calculateAverageScore = (scoresArray) => {
//   const totalScore = scoresArray.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, 0);
//   const avgScore = totalScore / scoresArray.length;
//   return avgScore;
// }
// //#1
// const dolphinsAvgScore = calculateAverageScore(dolphinsScores);
// const koalasAvgScore = calculateAverageScore(koalasScores);
// console.log({ dolphinsAvgScore, koalasAvgScore });
// //#2
// const result = dolphinsAvgScore === koalasAvgScore
//   ? "draw"
//   : dolphinsAvgScore > koalasAvgScore
//     ? "dolphins win"
//     : "koalas win";
// console.log(result);
// //#3
// const scoreIsValid = (score) => {
//   return score >= 100;
// }
// // returns 1, 0 , or -1.
// // 1 means score 1 wins.
// // -1 means draw.
// // 0 means score 2 wins.
// const validatedOutcome = (score1, score2) => {
//   const score1IsValid = scoreIsValid(score1);
//   const score2IsValid = scoreIsValid(score2);
//   if (score1IsValid && score2IsValid) {
//     const outcome = score1 === score2 ? -1 : score1 > score2 ? 1 : 0;
//     console.log(outcome);
//     return outcome;
//   } else {
//     if (!score1IsValid && !score2IsValid) {
//       return -1;
//     }
//     return score1IsValid ? 1 : 0;
//   }
// }
// const chickenDinnerWinner = validatedOutcome(koalasAvgScore, dolphinsAvgScore);
// if (chickenDinnerWinner === 1) {
//   console.log("Koalas WIN!!!");
// } else if (chickenDinnerWinner === 0) {
//   console.log("Dolphins WIN!!!");
// } else {
//   console.log("Draw");
// }

///////////////////////////////////////////////////////////////////////////#4