  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

/*************************************************************************** */
// Summing an array of numbers:

/*  const nums =[0, 1, 2, 3, 4];
    let sum = nums.reduce((acc, curr) => {
      console.log(
      "Accumulator:", acc,
      "Current Value:", curr,
      "Total:", acc + curr
      );
      return acc + curr;
      });
    console.log(sum);
*/ 
/*  const nums =[0, 1, 2, 3, 4];
    let sum = nums.reduce((acc, curr) => {
      console.log(
      "Accumulator:", acc,
      "Current Value:", curr,
      "Total:", acc + curr
      );
      return acc + curr;
      } 10); // This is the specified start of the acc process. starting with 10 would log 20.
    console.log(sum); 
 */


const nums =[0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); //specified start of 0
console.log(sum);

/*The parameters the callback function takes are typically called acc, for accumulator, 
and curr for current value. The accumulator represents the value that will ultimately be 
returned from the reduce method. In this case it will accumulate and keep track of the sum 
as the callback function is executed on each array element. So here, the accumulator will 
be an integer because we’re calculating a sum, but we could also be accumulating items into 
an array, an object or something else.The other parameter, current value, represents the 
current array item that the callback function is being run on. */



/*************************************************************************** */
const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];



/*************************************************************************** */
// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

/*The only real difference is that each time the callback function executes, it’s executing on  
an object now instead of an individual number, so instead of adding the element itself, we need 
to dive into it using dot notation to get the yrsExperience. We’re just adding curr.yrsExperience 
to the accumulator on each pass of the callback function.*/


/*************************************************************************** */
// Grouping by a property, and totaling it too
// {Developer:12, Designer: 4} <-- this is the result we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if(!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {}); // curly braces after the comma is our initial value, an empty object. This is what the accumulator will be on the first pass. 

console.log(experienceByProfession)
