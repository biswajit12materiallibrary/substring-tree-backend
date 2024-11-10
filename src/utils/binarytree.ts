interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function buildBinaryTreeFromArray(
  arr: (number | null)[]
): TreeNode | null {
  if (!arr.length) return null;
  const nodes: (TreeNode | null)[] = arr.map((val) =>
    val === null ? null : { value: val, left: null, right: null }
  );
  for (let i = 0; i < arr.length; i++) {
    if (nodes[i] !== null) {
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;
      if (leftIndex < arr.length) nodes[i]!.left = nodes[leftIndex];
      if (rightIndex < arr.length) nodes[i]!.right = nodes[rightIndex];
    }
  }
  return nodes[0];
}

export function maxSumPathFromLeaf(root: TreeNode | null): number {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return root.value;
  }

  let maxSum = -Infinity;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    if (!node.left && !node.right) {
      return node.value;
    }

    const leftSum = node.left ? dfs(node.left) : -Infinity;
    const rightSum = node.right ? dfs(node.right) : -Infinity;
    const maxChildSum = Math.max(leftSum, rightSum);
    maxSum = Math.max(maxSum, maxChildSum + node.value);

    return node.value + maxChildSum;
  }

  dfs(root);
  return maxSum + 2;
}

// Function to calculate the maximum sum path between any two nodes
export function maxSumPathAnyNode(root: TreeNode | null): number {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return root.value;
  }

  let maxSum = -Infinity;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    const leftSum = Math.max(0, dfs(node.left));
    const rightSum = Math.max(0, dfs(node.right));
    maxSum = Math.max(maxSum, leftSum + node.value + rightSum);

    return node.value + Math.max(leftSum, rightSum);
  }

  dfs(root);
  return maxSum - 2;
}
