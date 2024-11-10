"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUniqueSubstrings = exports.findLongestSubstring = void 0;
function findLongestSubstring(s) {
    let maxLen = 0;
    let start = 0;
    const charIndexMap = {};
    for (let end = 0; end < s.length; end++) {
        if (charIndexMap[s[end]] !== undefined) {
            start = Math.max(start, charIndexMap[s[end]] + 1);
        }
        charIndexMap[s[end]] = end;
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}
exports.findLongestSubstring = findLongestSubstring;
// Function to find all unique substrings of length <= 10
function findUniqueSubstrings(s) {
    const result = [];
    const n = s.length;
    for (let i = 0; i < n; i++) {
        const uniqueChars = new Set();
        for (let j = i; j < Math.min(i + 10, n); j++) {
            if (uniqueChars.has(s[j]))
                break;
            uniqueChars.add(s[j]);
            result.push(s.slice(i, j + 1));
        }
    }
    return result;
}
exports.findUniqueSubstrings = findUniqueSubstrings;
