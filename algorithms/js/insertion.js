// Javascript program for insertion sort https://www.geeksforgeeks.org/insertion-sort/--This code is contributed by Mayank Tyagi


// Example given is imagine taking a card from a deck one at a time and sorting them in numerical order in your hand. You insert the card in the relevant position.

// Driver code
let arr = [50, 2, 13, 5, 6 ];
let n = arr.length;

// Function to sort an array using insertion sort
function insertionSort(arr, n)  // 2 arguments array and length of the array (n)
{
	let i, key, j; 
	for (i = 1; i < n; i++) // i = 1, n = 5 n is number of elements in the array
	{
		key = arr[i]; // index 1 of array = 11
		j = i - 1; // j is the referencing position (-1)
    console.log(key, i, j) // key=value of the array position, i=index value of array, j=value of array index-1

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key) // is j less than 0? Is the value of arr[j] less than key? Do the following... 
		{
			arr[j + 1] = arr[j];  // move array element plus 1 (note this shows the same value that has been moved, showing duplicates in the array.)
			j-- // j - 1 (iterate check)
      console.log(key, j, arr[j]);
		}
		arr[j + 1] = key;
    console.log(key)
    console.log(arr)
	}
}

// A utility function to print an array of size n
function printArray(arr, n)
{
	let i;
	for (i = 0; i < n; i++)
		document.write(arr[i] + " ");
	document.write("<br>");
}



	insertionSort(arr, n);
	printArray(arr, n);
	


  // 2 1 0
  // 2 -1 undefined
  // 2
  // (5) [2, 50, 13, 5, 6]
  
  // 13 2 1
  // 13 0 2
  // 13
  // (5) [2, 13, 50, 5, 6]
  
  // 5 3 2
  // 5 1 13
  // 5 0 2
  // 5
  // (5) [2, 5, 13, 50, 6]
  
  // 6 4 3
  // 6 2 13
  // 6 1 5
  // 6
  // (5) [2, 5, 6, 13, 50]