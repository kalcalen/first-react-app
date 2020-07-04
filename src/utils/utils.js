export default class utils {
   static add(input1, input2) {
      // A1: any JavaScript value
      // A2: any JavaScript value
      // R: a single JavaScript value
      return input1 + input2;
   }

   static subtract(firstNumber, secondNumber) {
      // A1: a number
      // A2: a number
      // R: a number
      return secondNumber - firstNumber;
   }

   static multiply(firstNumber, secondNumber) {
      // A1: a Number
      // A2: a Number
      // R: a Number
      return firstNumber * secondNumber;
   }

   static divide(firstNumber, secondNumber) {
      // A1: a Number
      // A2: a Number
      // R: a Number
      return firstNumber / secondNumber;
   }

   static Increment(firstNumber) {
      // A1: a Number
      // R: a Number added buy 1 using +
      return ++firstNumber;
   }

   static Decrement(firstNumber) {
      // A1: a Number
      // R: a Number subtracted by 1 using -
      return --firstNumber;
   }

   static multiplyDecimal(firstNumber, secondNumber) {
      // A1: a decimal number
      // A2: a decimal number
      // R: a decimal number
      return firstNumber * secondNumber;
   }

   static divideDecimal(firstNumber, secondNumber) {
      // A1: a decimal Number
      // A2: a decimal Number
      // R: a decimal Number
      return firstNumber / secondNumber;
   }

   static Concatenating(firstNumber, secondNumber) {
      // A1: a number or word
      // A2: a number or word
      // R: a number or word
      // Concatenation does not add spaces between concatenated strings
      return firstNumber + " " + secondNumber;
   }

   static concatenatingPlusEquals(firstNumber, secondNumber) {
      // A1: a number or word
      // A2: a number or word
      // R: a number or word
      // Concatenation does not add spaces between concatenated strings
      return (firstNumber += secondNumber);
   }

   static ConcatenatingStringsVariables(myName, myHobby) {
      // A1: My name
      // A2: My favorite hobby
      // R: Concatenated both words into sentence using operator (+)

      return "Hello my name is " + myName + " and I like " + myHobby + ".";
   }

   static findLengthString(input1) {
      // input1: String
      // R: The number of characters in varible

      input1 = input1.length;
      return input1;
   }

   static bracketNotation(input1) {
      // input1: Word or number
      // R: Beginning character of input
      // Bracket reads from 0
      input1 = input1[0];
      return input1;
   }

   static bracketNotationNth(input1, inputNumber) {
      // input1: Character
      // inputNumber: position of character you are looking for
      // R: Position of inputNumber
      // Bracket reads from 0
      input1 = input1[inputNumber];
      return input1;
   }

   static bracketNotationLast(input) {
      // input1: Character
      // R: Last position of input
      // Bracket reads from 0
      input = input[input.length - 1];
      return input;
   }

   static bracketNotationNth2Last(input, inputNumber) {
      // input1: Character
      // R: Position of Nth from end of character

      input = input[input.length - inputNumber];
      return input;
   }

   static arrayPush(inputPush) {
      var array1 = ["10,55,23"];
      array1.push(inputPush);
      return array1;
   }

   static arrayPop() {
      // R: Last position

      var array2 = [10, 55, 23];
      var removedVar = array2.pop();
      return removedVar;
   }

   static arrayShift() {
      // R: Element at the end of the array

      var array3 = [10, 55, 23];
      var removedVar = array3.shift();
      return removedVar;
   }

   static arrayUnshift() {
      // R: Element at the beginning of array

      var array4 = [10, 55, 23];
      var removedVar = array4.shift();
      return removedVar;
   }

   static shoppingList(item1, numItems) {
      // R: both items in shopping list

      var myShoppingList = [];
      myShoppingList.push(item1, numItems);
      return myShoppingList;
   }

   static standInLine(nextInLine, inLine) {
      // array5: Line
      // nextInLine: Disired number to put in line
      // R: Array with new number in line, nextInLine stored in console

      var array5 = [1, 2, 3, 4, 5];
      console.log(array5);

      array5.push(nextInLine);
      console.log(array5);

      array5.shift(inLine);
      return array5;
   }

   //typeOf

   static typeOf(val) {
      var typeOfVar = val;
      console.log(typeOfVar);

      return typeof spiderMan;
   }

   // indexOf

   static indexOf(inputIndexOf) {
      const arr = [12, 43, 27, 74];

      return arr.indexOf(inputIndexOf) !== -1;
   }

   // spliceAdd

   static spliceAdd(inputSpliceAdd) {
      const arr = ["LeBron James is", "than Michael Jordan"];
      arr.splice(1, 0, inputSpliceAdd);
      return arr;
   }

   // spliceRemove
   static spliceRemove(inputSpliceRem) {
      const arr = [2, 5, 7, 9, 2, 4, 1];
      arr.splice(inputSpliceRem);

      return arr;
   }
   // randomRange

   static randomRange(myMin, myMax) {
      return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
   }

   // profileLookUp
   // Activating a function to look up name and prop
   static lookUpProfile(name, prop) {
      // Setup
      var contacts = [
         {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
         },
         {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
         },
         {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
         },
      ];
      //Input any of the following names :Harry, Akira, Sherlock, Kristian
      // Followed by: lastName, number, or likes to receive profiles value

      // Loop through the array of contacts to find each object
      for (var index = 0; index < contacts.length; index++) {
         //  console.log(contacts[i].firstName)

         // Verifies first Name of lookUpProfile
         // Takes current index, then accesses the key (firstName) and checks to see if it is equal to the name passed into the function (name)
         if (contacts[index].firstName === name) {
            // Returns contact with value , or (||) "No such property" if prop doesn't correspond with the key of prop
            return contacts[index][prop] || "No such property";
         }
      } //
      return "No such contact";
   }

   // Counting cards function
   static countingCards(card) {
      // Global variable, Will not be manipulated
      var count = 0;
      // Card parameter, will either increawe or descrease count variable
      // Checks card value, In the case of 2,3,4,5,6, Increment value
      switch (card) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;
         // In the case of 10,J,Q,K,A, Decrement value
         // In the case of 7,8,9 Decrement value as well
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
         default:
      }

      // Variable that tells player to either "Hold" or "Bet"
      var output = count;

      // If count is more than 0, will return Bet
      if (count > 0) {
         output += " Bet";
         // If count is negative, will return Hold
      } else {
         output += " Hold";
      }

      // Console log to return see counting results
      console.log(output);

      return output;

      // Results of function. cc = card count
      // cc(2);
      // cc(3);
      // cc(7);
      // cc("K");
      // cc("A");
   }

   // Includes Method
   static includesMethod(inputIncludes) {
      let superHeros = ["Batman", "Superman", "Aquaman"];

      return superHeros.includes(inputIncludes);
   }

   // Map Method

   static mapMethod(inputMap) {
      let nbaPlayers = [
         {
            name: "Carmelo Anthony",
            team: "Knicks",
            position: "Small Forward",
         },
         {
            name: "John Stockton",
            team: "Jazz",
            position: "Point Guard",
         },
         {
            name: "Joel Embiid",
            team: "Sixers",
            position: "Center",
         },
         {
            name: "Donovan Mitchell",
            team: "Jazz",
            position: "Shooting Guard",
         },
         {
            name: "Kemba Walker",
            team: "Celtics",
            position: "Point Guard",
         },
      ];
      if (inputMap === "name") {
         const nba = nbaPlayers.map((playerObj) => playerObj.name);
         return nba;
      } else if (inputMap === "team") {
         const nba = nbaPlayers.map((playerObj) => playerObj.team);
         return nba;
      } else if (inputMap === "position") {
         const nba = nbaPlayers.map((playerObj) => playerObj.position);
         return nba;
      }
   }

   // Some Method

   static someMethod(inputSome) {
      let result = inputSome.some(function (value) {
         return value > 50;
      });

      return result;
   }

   // Every Method

   static everyMethod(inputEvery) {
      let result = inputEvery.every(function (value) {
         // 'Every' goes through the array to see if value is bigger than zero
         return value > 0;
      });

      return result;
   }

   // Join Method

   static joinMethod(inputJoin) {
      // Breaks dashes

      let sepResult = inputJoin.split(/\W/);
      // Separates string
      let newResult = sepResult.join(" ");

      return newResult;

      // Can also be written as: return inputJoin.split(/\W/).join(" ");
   }

   // Split Method

   static splitMethod(inputSplit) {
      return inputSplit.split(/\W/);
   }

   // Concat Instead of push
   static concatNoPush(inputConcatNoPush) {
      var chicagoBulls = ["Dennis Rodman", "Scottie Pippin", "Steve Kerr"];
      return chicagoBulls.concat(inputConcatNoPush);
   }

   // Concat Method
   static combineConcat(concatInput1, concatInput2) {
      let newConcatArray = concatInput1.concat(concatInput2);
      return newConcatArray;
   }

   // Remove elements from an array using slice instead of splice
   static sliceNoSplice(inputSlice) {
      var actionMovies = [
         "Rush Hour",
         "Drunken Master",
         "Bad Boys",
         "The Warriors",
         "Deadpool",
      ];
      // Returns array of movies from the 0 index to inputted number using slice
      return actionMovies.slice(0, inputSlice);
   }

   // Slice method
   static sliceMethod(inputSliceArr1, inputSliceArr2) {
      // Two inputs for this function to determine which parts of the array will be cut
      var stonerFoods = ["Pizza", "Burgers", "Ice Cream", "HotDogs", "Tacos"];
      var newArray = stonerFoods.slice(inputSliceArr1, inputSliceArr2);

      return newArray;
   }

   //    // Impletment the filter method on a prototype
   //    static filterMethod(input) {
   //       var randomArr = [35, 87, 22, 96, 22, 66, 8, input];

   //       Array.prototype.userFilter = function (oddNumbers) {
   //          var newArray = [];

   //          // Empty array that numbers will be pushed into
   //          for (let i = 0; i <= this.length; i++) {
   //             if (oddNumbers(this[i])) {
   //                newArray.push(this[i]);
   //             }
   //          }
   //          return newArray;
   //       };
   //       // filteredArray takes array filters out all odd numbers
   //       var filteredArray = randomArr.userFilter(function (item) {
   //          return item % 2 === 1;
   //       });
   //       return filteredArray;
   //    }
}
