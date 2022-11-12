// Optimized implementation of bubble sort Algorithm https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/ 

// ! Complexities
// ! Worst Case and Average case time complexity 
//  If the array is in reverse order then this condition is the worst case and its time complexity is O(n2) having 2 nested loops
 
// ! Best case time complexity
// If the array is already sorted then it is the best-case scenario and its time complexity is O(n) - linear time complexity (as input increases, so does time increase equal)
// ! Auxiliary Space: O(1) - constant complexity
// doesn't have to find new space for items whilst sorting


const arr = [243, 45, 23, 356, 3, 5346, 35, 5];

function bubbleSort(arr){

  let i, j;
  const len = arr.length;
  
  let isSwapped = false;
  
  for(i = 0; i < len; i++){
    
    isSwapped = false;
    
    for(j = 0; j < len; j++){
      if(arr[j] > arr[j + 1]){
      var temp = arr[j]
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      isSwapped = true;
      }
      console.log(isSwapped, temp, j, j+1)
      console.log(arr)
    }
    
    // IF no two elements were swapped by inner loop, then break
    
    if(!isSwapped){
    break;
    }
  }
  
  // Print the array
  console.log(arr)
}
  
// calling the bubbleSort Function
bubbleSort(arr)
  
// (8) [243, 45, 23, 356, 3, 5346, 35, 5]
// true 243 0 1 
// (8) [45, 243, 23, 356, 3, 5346, 35, 5]
// true 243 1 2
// (8) [45, 23, 243, 356, 3, 5346, 35, 5]
// true 243 2 3

// true 356 3 4
// (8) [45, 23, 243, 356, 3, 5346, 35, 5]
// true 356 4 5
// (8) [45, 23, 243, 3, 356, 5346, 35, 5]

// true 5346 5 6
// (8) [45, 23, 243, 3, 356, 5346, 35, 5]
// true 5346 6 7
// (8) [45, 23, 243, 3, 356, 35, 5346, 5]
// true 5346 7 8
// (8) [45, 23, 243, 3, 356, 35, 5, 5346]

// true 45 0 1
// (8) [45, 23, 243, 3, 356, 35, 5, 5346]
// true 45 1 2
// (8) [23, 45, 243, 3, 356, 35, 5, 5346]

// true 243 2 3
// (8) [23, 45, 243, 3, 356, 35, 5, 5346]
// true 243 3 4
// (8) [23, 45, 3, 243, 356, 35, 5, 5346]

// true 356 4 5
// (8) [23, 45, 3, 243, 356, 35, 5, 5346]
// true 356 5 6
// (8) [23, 45, 3, 243, 35, 356, 5, 5346]
// true 356 6 7
// (8) [23, 45, 3, 243, 35, 5, 356, 5346]
// true 356 7 8
// (8) [23, 45, 3, 243, 35, 5, 356, 5346]
// false 356 0 1
// (8) [23, 45, 3, 243, 35, 5, 356, 5346]

// true 45 1 2
// (8) [23, 45, 3, 243, 35, 5, 356, 5346]
// true 45 2 3
// (8) [23, 3, 45, 243, 35, 5, 356, 5346]

// true 243 3 4
// (8) [23, 3, 45, 243, 35, 5, 356, 5346]
// true 243 4 5
// (8) [23, 3, 45, 35, 243, 5, 356, 5346]
// true 243 5 6
// (8) [23, 3, 45, 35, 5, 243, 356, 5346]
// true 243 6 7
// (8) [23, 3, 45, 35, 5, 243, 356, 5346]
// true 243 7 8
// (8) [23, 3, 45, 35, 5, 243, 356, 5346]

// true 23 0 1
// (8) [23, 3, 45, 35, 5, 243, 356, 5346]
// true 23 1 2
// (8) [3, 23, 45, 35, 5, 243, 356, 5346]

// true 45 2 3
// (8) [3, 23, 45, 35, 5, 243, 356, 5346]
// true 45 3 4
// (8) [3, 23, 35, 45, 5, 243, 356, 5346]
// true 45 4 5
// (8) [3, 23, 35, 5, 45, 243, 356, 5346]
// true 45 5 6
// (8) [3, 23, 35, 5, 45, 243, 356, 5346]
// true 45 6 7
// (8) [3, 23, 35, 5, 45, 243, 356, 5346]
// true 45 7 8
// (8) [3, 23, 35, 5, 45, 243, 356, 5346]
// false 45 0 1
// (8) [3, 23, 35, 5, 45, 243, 356, 5346]
// false 45 1 2
// (8) [3, 23, 35, 5, 45, 243, 356, 5346]

// true 35 2 3
// (8) [3, 23, 35, 5, 45, 243, 356, 5346]
// true 35 3 4
// (8) [3, 23, 5, 35, 45, 243, 356, 5346]
// true 35 4 5
// (8) [3, 23, 5, 35, 45, 243, 356, 5346]
// true 35 5 6
// (8) [3, 23, 5, 35, 45, 243, 356, 5346]
// true 35 6 7
// (8) [3, 23, 5, 35, 45, 243, 356, 5346]
// true 35 7 8
// (8) [3, 23, 5, 35, 45, 243, 356, 5346]
// false 35 0 1
// (8) [3, 23, 5, 35, 45, 243, 356, 5346]

// true 23 1 2
// (8) [3, 23, 5, 35, 45, 243, 356, 5346]
// true 23 2 3
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// true 23 3 4
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// true 23 4 5
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// true 23 5 6
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// true 23 6 7
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// true 23 7 8
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// false 23 0 1
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// false 23 1 2
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// false 23 2 3
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// false 23 3 4
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// false 23 4 5
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// false 23 5 6
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// false 23 6 7
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]
// false 23 7 8
// (8) [3, 5, 23, 35, 45, 243, 356, 5346]

// FINAL --> (8) [3, 5, 23, 35, 45, 243, 356, 5346
