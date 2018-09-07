// var removeVowels = require("../02-remove-vowels/remove-vowels");

// function removeVowelsForWords(words) {
//   var result = words.map(function(word) {
//     return removeVowels(word);
//   });

//   return result;
// }

// var words = ["Irina", "Etza", "Daniel"];
// console.log(removeVowelsForWords(words));
// module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "dnl"]
*/

var result;

function getMentorInfo(mentors, name) {
  var greeting = "Hello ";

  result = mentors.find(function(person) {
    return person.name === name;
  });

  var mentorTitle = "Junior Developer";

  if (result.yearsOfExp > 10) {
    mentorTitle = "Senior Developer";
  } else if (result.yearsOfExp > 20) {
    mentorTitle = "Very Senior Developer";
  }

  result.jobTitle = mentorTitle;
  result.fullName = result.title + " " + result.name;

  return result;
}

var mentors = [
  {
    name: "Irina",
    title: "Dr.",
    yearsOfExperience: 10
  },
  {
    name: "Ashleigh",
    title: "Dame",
    yearsOfExperience: 20
  },
  {
    name: "Etza",
    title: "Professor",
    yearsOfExperience: 30
  }
];

var result = getMentorInfo(mentors, "Etza");
// Trace the value of "result"
console.log(result);
