// UNIBIT GAMES ASSIGNMENT
// It's a recursive function to Generate all possible combination of doubleTarget
function AllPossibleSet(id,sum,mergedArray,combinations,current,doubleTarget){
    if(id===mergedArray.length){
        if(sum===doubleTarget){
            combinations.push([...current]);
        }
        return;
    }
    AllPossibleSet(id+1,sum,mergedArray,combinations,current,doubleTarget)
    current.push(mergedArray[id]);
    sum = sum+mergedArray[id];
    AllPossibleSet(id+1,sum,mergedArray,combinations,current,doubleTarget);
    current.pop();
    sum = sum-mergedArray[id];
}

// This function to Generate all pairs whose sum is target
function AllPossiblePairs(arr,target){
     let pairs = [];
     let alreadyVisited = new Set();
     for(let i = 0; i<arr.length; i++){
         let d = target-arr[i];
          if (alreadyVisited.has(d)) {
           pairs.push([d, arr[i]]);
          }
        alreadyVisited.add(arr[i]);
     }
     return pairs;
}

//It's a  main function to call both the functions like AllPossiblePairs and AllPossibleSet
function FindCombinations(arr, target) {
    
     // this function to Generate all pairs whose sum is target
     let pairs = AllPossiblePairs(arr,target);
     
     // sorting and merging all the pairs of combinations
     let mergedArray  = pairs.flat().sort((a, b) => a - b);
     
     // Doubling the target value
     doubleTarget = 2*target;
     let combinations = []; // Array to store all possible combinations 
     let current = [];
     
     // function to Generate all possible combinations whose sum is doubleTarget
     AllPossibleSet(0,0,mergedArray,combinations,current,doubleTarget)

  return { pairs, mergedArray, combinations };
}

// Sample first input
const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

// Find pairs, sort and merge the array
const { pairs, mergedArray, combinations } = FindCombinations(arr, target);


console.log(`First Combination For ${target}:`, pairs);
console.log("Merge Into a single Array:", mergedArray);
// Sample second input
console.log(`Second Combination For ${target * 2}:`, combinations);









// It's a recursive function to Generate all possible combination of doubleTarget
// function AllPossibleSet(id,sum,mergedArray,combinations,current,doubleTarget){
//     if(id===mergedArray.length){
//         if(sum===Math.abs(doubleTarget)){
//             combinations.push([...current]);
//         }
//         return;
//     }
//     AllPossibleSet(id+1,sum,mergedArray,combinations,current,doubleTarget)
//     current.push(mergedArray[id]);
//     sum = sum+mergedArray[id];
//     AllPossibleSet(id+1,sum,mergedArray,combinations,current,doubleTarget);
//     current.pop();
//     sum = sum-mergedArray[id];
// }

// // function to Generate all pairs whose sum is target
// function AllPossiblePairs(arr,target){
//      let pairs = [];
//      let alreadyVisited1 = new Set();
//      let alreadyVisited2 = new Set();
//      for(let i = 0; i<arr.length; i++){
         
//          // taking positve target
//          let d1 = target-arr[i];
//           if (alreadyVisited1.has(d1)) {
//            pairs.push([d1, arr[i]]);
//           }
//          alreadyVisited1.add(arr[i]);
         
//          // taking negative target
//            let d2 = -target-arr[i];
//           if (alreadyVisited1.has(d2)) {
//            pairs.push([d2, arr[i]]);
//           }
//        alreadyVisited2.add(arr[i]);
//      }
//      return pairs;
// }

// // It's a main function to call both the functions like AllPossiblePairs and AllPossibleSet
// function FindCombinations(arr, target) {
    
//      // this function to Generate all pairs whose sum is target
//      let pairs = AllPossiblePairs(arr,target);
     
//      // merging all the pairs of combinations
//      let mergedArray  = pairs.flat().sort((a, b) => a - b);
     
//      // Doubling the target value
//      doubleTarget = 2*target;
//      let combinations = []; // Array to store all possible combinations 
//      let current = [];
     
//      // function to Generate all possible combinations whose sum is doubleTarget
//      AllPossibleSet(0,0,mergedArray,combinations,current,doubleTarget)

//   return { pairs, mergedArray, combinations };
// }

// // Sample first input
// const arr = [1, 3, 2, 2, -4, -6, -2, 8];
// const target = 4;

// // Find pairs and merge the array
// const { pairs, mergedArray, combinations } = FindCombinations(arr, target);

// console.log(`First Combination For ${target}:`, pairs);
// console.log("Merge Into a single Array:", mergedArray);
// // Sample second input
// console.log(`Second Combination For ${target * 2}:`, combinations);