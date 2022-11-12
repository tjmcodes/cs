// Bubble sort Implementation using Javascript https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/ 


// ! Solution 1: Not optimized
// ! This code runs with O(n^2) TIME complexity - worst case TIME complexity (due to many iterations)
// ! Worst case SPACE complexity = 0(1) = Constant (no loops)
// ! Auxiliary Space: O(1) - (doesn't have to find new space for items whilst sorting)


// This is our unsorted array
const arr = [234, 43, 55, 63, 5, 6, 235, 549];
  

// Creating the bblSort function
function bblSort(arr){
	
  // sorting algorithm nested for loop
  for(i = 0; i < arr.length; i++){ 
    // console.log(i, arr.length) // for loop iteration starting from 0 and counting up to 8(elements in array). This will output 0 8 <nb> 1 8 <nb> 2 8 <nb> ... 7 8 <nb> This will count up the elements in the arr
    
    // Last i elements are already in place
    for(j = 0; j < ( arr.length - i -1 ); j++){
    console.log(j, i, arr.length) // nested for loop iteration starting from 0 and counting up to 6 but taking 1 off of i. Output = line 11 execution first = 0 8, then line 15 = 0 0 8 <nb> 1 0 8 <nb> 2 0 8 <nb> ... 6 0 8 <nb> line 11 execution first = 1 8, then line 15 = 0 1 8 <nb> 1 1 8 <nb> 2 1 8 <nb> ... 5 1 8 <nb> following suit until line 11 is run = 7 8
    
    // Checking if the item at present iteration
    // is greater than the next iteration
    if(arr[j] > arr[j+1]){
    // console.log(j, i) // position of the array item start

    // If the condition is true then swap them
    const temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j+1] = temp
    console.log(temp, j, j+1)
    }
  }
  }
  // Print the sorted array
  console.log(arr);
}
  
  
  
// Now pass this array to the bblSort() function
bblSort(arr);
console.log(bblSort(arr))

// [234, 43, 55, 63, 5, 6, 235, 549]

// 234 0 1 . (234 is the first element of array. Is this number in this element(j) bigger than the next array element(j+1)? Iterate through again)
// 234 1 2
// 234 2 3
// 234 3 4
// 234 4 5 (234 is not bigger than the next array element = 235)
// result is [43, 55, 63, 5, 6, 234, 235, 549]

// 63 2 3 (63 was the initially fourth element of array[3] but after 234 element was sorted, the value 63 is now is 3rd element in the array[2])
// 63 3 4 (after iteration, value 63 is now the 3rd element)
// result is [43, 55, 5, 6, 63, 234, 235, 549]

// 55 1 2 (55 was initially the third element in the array[2] but after 234, 63 has been moved it is now the first element in the array[1])
// 55 2 3
// result is [43, 5, 6, 55, 63, 234, 235, 549]

// 43 0 1 (43 was initially the second element in the array[1] but after 234, 63, 55 has been moved it is now the first element in the array[1] and moves up 2x)
// 43 1 2
// result is [5, 6, 43, 55, 63, 234, 235, 549]

// bubble.js:22 0 0

  // bubble.js:28 234 0 1
  // bubble.js:22 1 0
  // bubble.js:28 234 1 2
  // bubble.js:22 2 0
  // bubble.js:28 234 2 3
  // bubble.js:22 3 0
  // bubble.js:28 234 3 4
  // bubble.js:22 4 0
  // bubble.js:28 234 4 5
  // bubble.js:22 2 1
  // bubble.js:28 63 2 3
  // bubble.js:22 3 1
  // bubble.js:28 63 3 4
  // bubble.js:22 1 2
  // bubble.js:28 55 1 2
  // bubble.js:22 2 2
  // bubble.js:28 55 2 3
  // bubble.js:22 0 3
  // bubble.js:28 43 0 1
  // bubble.js:22 1 3
  // bubble.js:28 43 1 2