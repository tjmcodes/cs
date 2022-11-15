// https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/ 
// )(n) with min height. 
/* 
- Traverse BST > store result in an array -> 0(n) time
- Build balanced BST using sorted array using recursive approach -> 0(n) due to traversing every element once and processing an elment take 0(1) time.
*/

// JavaScript program to convert a left
// unbalanced BST to a balanced BST
class Node
{
  constructor(data) {
  this.left = null;
  this.right = null;
  this.data = data;
  }
}

let root;

/* This function traverse the skewed binary tree and
stores its nodes pointers in vector nodes[] */
function storeBSTNodes(root, nodes)
{
  // Base case
  if (root == null)
    return;

  // Store nodes in Inorder (which is sorted
  // order for BST)
  storeBSTNodes(root.left, nodes);
  nodes.push(root);
  storeBSTNodes(root.right, nodes);
}

/* Recursive function to construct binary tree */
function buildTreeUtil(nodes, start, end)
{
  // base case
  if (start > end)
    return null;

  /* Get the middle element and make it root */
  let mid = parseInt((start + end) / 2, 10);
  let node = nodes[mid];

  /* Using index in Inorder traversal, construct
  left and right subtress */
  node.left = buildTreeUtil(nodes, start, mid - 1);
  node.right = buildTreeUtil(nodes, mid + 1, end);

  return node;
}

// This functions converts an unbalanced BST to
// a balanced BST
function buildTree(root)
{
  // Store nodes of given BST in sorted order
  let nodes = [];
  storeBSTNodes(root, nodes);
  
  // Constructs BST from nodes[]
  let n = nodes.length;
  return buildTreeUtil(nodes, 0, n - 1);
}

/* Function to do preorder traversal of tree */
function preOrder(node)
{
  if (node == null)
    return;
  document.write(node.data + " ");
  preOrder(node.left);
  preOrder(node.right);
}

/* Constructed skewed binary tree is
10
/
8
/
7
/
6
/
5 */
root = new Node(10);
root.left = new Node(8);
root.left.left = new Node(7);
root.left.left.left = new Node(6);
root.left.left.left.left = new Node(5);

root = buildTree(root);
document.write("Preorder traversal of balanced BST is :" + "</br>");
preOrder(root);
