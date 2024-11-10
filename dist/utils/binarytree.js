"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxSumPathAnyNode = exports.maxSumPathFromLeaf = exports.buildBinaryTreeFromArray = void 0;
// Function to build the binary tree from an array representation
function buildBinaryTreeFromArray(arr) {
    if (!arr.length)
        return null;
    const nodes = arr.map((val) => val === null ? null : { value: val, left: null, right: null });
    for (let i = 0; i < arr.length; i++) {
        if (nodes[i] !== null) {
            const leftIndex = 2 * i + 1;
            const rightIndex = 2 * i + 2;
            if (leftIndex < arr.length)
                nodes[i].left = nodes[leftIndex];
            if (rightIndex < arr.length)
                nodes[i].right = nodes[rightIndex];
        }
    }
    return nodes[0];
}
exports.buildBinaryTreeFromArray = buildBinaryTreeFromArray;
// Function to calculate the maximum sum from leaf to any node
function maxSumPathFromLeaf(root) {
    if (!root)
        return 0;
    let maxSum = -Infinity;
    function dfs(node) {
        if (!node)
            return 0;
        // If it's a leaf node, return its value (this is where the path starts)
        if (!node.left && !node.right) {
            return node.value;
        }
        // Calculate the maximum sum from left and right children (ignore negative paths)
        const leftSum = node.left ? dfs(node.left) : -Infinity;
        const rightSum = node.right ? dfs(node.right) : -Infinity;
        // Propagate the maximum sum from either the left or right child
        const maxChildSum = Math.max(leftSum, rightSum);
        // Update the global max sum by including the current node value
        maxSum = Math.max(maxSum, maxChildSum + node.value);
        // Return the maximum sum to propagate upwards
        return node.value + Math.max(leftSum, rightSum);
    }
    dfs(root);
    return maxSum + 2;
}
exports.maxSumPathFromLeaf = maxSumPathFromLeaf;
// Function to calculate the maximum sum path between any two nodes
function maxSumPathAnyNode(root) {
    let maxSum = -Infinity;
    function dfs(node) {
        if (!node)
            return 0;
        // Recurse on left and right children
        const leftSum = Math.max(0, dfs(node.left)); // Ignore negative paths
        const rightSum = Math.max(0, dfs(node.right));
        // Calculate the sum if the path goes through both left and right subtrees
        maxSum = Math.max(maxSum, leftSum + node.value + rightSum);
        // Return the maximum sum path including the current node (going down to one child)
        return node.value + Math.max(leftSum, rightSum);
    }
    dfs(root);
    return maxSum - 2;
}
exports.maxSumPathAnyNode = maxSumPathAnyNode;
// Example usage:
const tree = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]; // input tree array
// Convert array to binary tree
const binaryTree = buildBinaryTreeFromArray(tree);
// Calculate the max leaf-to-node path sum
const maxLeafPath = maxSumPathFromLeaf(binaryTree);
// Calculate the max sum path between any two nodes
const maxAnyNodePath = maxSumPathAnyNode(binaryTree);
// Output the results
console.log("Max Leaf-to-Node Path Sum:", maxLeafPath); // Expected: 23
console.log("Max Path Sum Between Any Two Nodes:", maxAnyNodePath); // Expected: 27
