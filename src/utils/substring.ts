export function findLongestSubstring(s: string): number {
  let maxLen = 0;
  let start = 0;
  const charIndexMap: { [key: string]: number } = {};

  for (let end = 0; end < s.length; end++) {
    if (charIndexMap[s[end]] !== undefined) {
      start = Math.max(start, charIndexMap[s[end]] + 1);
    }
    charIndexMap[s[end]] = end;
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

// Function to find all unique substrings of length <= 10
export function findUniqueSubstrings(s: string): string[] {
  const result: string[] = [];
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const uniqueChars = new Set<string>();
    for (let j = i; j < Math.min(i + 10, n); j++) {
      if (uniqueChars.has(s[j])) break;
      uniqueChars.add(s[j]);
      result.push(s.slice(i, j + 1));
    }
  }
  return result;
}
