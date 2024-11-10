window.jest_html_reporters_callback__({"numFailedTestSuites":5,"numFailedTests":4,"numPassedTestSuites":1,"numPassedTests":6,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":3,"numTodoTests":0,"numTotalTestSuites":6,"numTotalTests":10,"startTime":1731239457472,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":2,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1731239465857,"runtime":8017,"slow":true,"start":1731239457840},"testFilePath":"/home/thinkpad/Documents/calculator-db/tests/substring.test.ts","failureMessage":null,"testResults":[{"ancestorTitles":["Longest Substring Logic"],"duration":9,"failureMessages":[],"fullName":"Longest Substring Logic findLongestSubstring returns correct length","status":"passed","title":"findLongestSubstring returns correct length"},{"ancestorTitles":["Longest Substring Logic"],"duration":2,"failureMessages":[],"fullName":"Longest Substring Logic findUniqueSubstrings returns all unique substrings","status":"passed","title":"findUniqueSubstrings returns all unique substrings"}]},{"numFailingTests":2,"numPassingTests":4,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1731239465872,"runtime":8096,"slow":true,"start":1731239457776},"testFilePath":"/home/thinkpad/Documents/calculator-db/tests/binaryTree.test.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mBinary Tree Utilities › maxSumPathFromLeaf returns correct max path sum from leaf\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m23\u001b[39m\n    Received: \u001b[31m18\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 31 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 32 |\u001b[39m     \u001b[90m// The max path sum from leaf nodes is: 5 + 10 + (-3) + 11 = 23\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 33 |\u001b[39m     expect(maxSumPathFromLeaf(tree))\u001b[33m.\u001b[39mtoBe(\u001b[35m23\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                      \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 34 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 35 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 36 |\u001b[39m   test(\u001b[32m\"maxSumPathAnyNode returns correct max path sum between any nodes\"\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtests/binaryTree.test.ts\u001b[39m\u001b[0m\u001b[2m:33:38)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mBinary Tree Utilities › maxSumPathAnyNode returns correct max path sum between any nodes\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m23\u001b[39m\n    Received: \u001b[31m26\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 39 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 40 |\u001b[39m     \u001b[90m// The maximum sum path between any two nodes is: 5 + 10 + (-3) + 11 = 23\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 41 |\u001b[39m     expect(maxSumPathAnyNode(tree))\u001b[33m.\u001b[39mtoBe(\u001b[35m23\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                     \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 42 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 43 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 44 |\u001b[39m   test(\u001b[32m\"maxSumPathFromLeaf handles edge case with single node\"\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtests/binaryTree.test.ts\u001b[39m\u001b[0m\u001b[2m:41:37)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Binary Tree Utilities"],"duration":33,"failureMessages":[],"fullName":"Binary Tree Utilities buildBinaryTreeFromArray creates correct binary tree structure","status":"passed","title":"buildBinaryTreeFromArray creates correct binary tree structure"},{"ancestorTitles":["Binary Tree Utilities"],"duration":10,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m23\u001b[39m\nReceived: \u001b[31m18\u001b[39m\n    at Object.<anonymous> (/home/thinkpad/Documents/calculator-db/tests/binaryTree.test.ts:33:38)\n    at Promise.then.completed (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/utils.js:298:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/utils.js:231:10)\n    at _callCircusTest (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:316:40)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at _runTest (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:252:3)\n    at _runTestsForDescribeBlock (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:126:9)\n    at _runTestsForDescribeBlock (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:121:9)\n    at run (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:71:3)\n    at runAndTransformResultsToJestFormat (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)\n    at jestAdapter (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)\n    at runTestInternal (/home/thinkpad/Documents/calculator-db/node_modules/jest-runner/build/runTest.js:367:16)\n    at runTest (/home/thinkpad/Documents/calculator-db/node_modules/jest-runner/build/runTest.js:444:34)\n    at Object.worker (/home/thinkpad/Documents/calculator-db/node_modules/jest-runner/build/testWorker.js:106:12)"],"fullName":"Binary Tree Utilities maxSumPathFromLeaf returns correct max path sum from leaf","status":"failed","title":"maxSumPathFromLeaf returns correct max path sum from leaf"},{"ancestorTitles":["Binary Tree Utilities"],"duration":1,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m23\u001b[39m\nReceived: \u001b[31m26\u001b[39m\n    at Object.<anonymous> (/home/thinkpad/Documents/calculator-db/tests/binaryTree.test.ts:41:37)\n    at Promise.then.completed (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/utils.js:298:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/utils.js:231:10)\n    at _callCircusTest (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:316:40)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at _runTest (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:252:3)\n    at _runTestsForDescribeBlock (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:126:9)\n    at _runTestsForDescribeBlock (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:121:9)\n    at run (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/run.js:71:3)\n    at runAndTransformResultsToJestFormat (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:122:21)\n    at jestAdapter (/home/thinkpad/Documents/calculator-db/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)\n    at runTestInternal (/home/thinkpad/Documents/calculator-db/node_modules/jest-runner/build/runTest.js:367:16)\n    at runTest (/home/thinkpad/Documents/calculator-db/node_modules/jest-runner/build/runTest.js:444:34)\n    at Object.worker (/home/thinkpad/Documents/calculator-db/node_modules/jest-runner/build/testWorker.js:106:12)"],"fullName":"Binary Tree Utilities maxSumPathAnyNode returns correct max path sum between any nodes","status":"failed","title":"maxSumPathAnyNode returns correct max path sum between any nodes"},{"ancestorTitles":["Binary Tree Utilities"],"duration":0,"failureMessages":[],"fullName":"Binary Tree Utilities maxSumPathFromLeaf handles edge case with single node","status":"passed","title":"maxSumPathFromLeaf handles edge case with single node"},{"ancestorTitles":["Binary Tree Utilities"],"duration":0,"failureMessages":[],"fullName":"Binary Tree Utilities maxSumPathAnyNode handles edge case with single node","status":"passed","title":"maxSumPathAnyNode handles edge case with single node"},{"ancestorTitles":["Binary Tree Utilities"],"duration":0,"failureMessages":[],"fullName":"Binary Tree Utilities buildBinaryTreeFromArray returns null for empty array","status":"passed","title":"buildBinaryTreeFromArray returns null for empty array"}]},{"numFailingTests":0,"numPassingTests":0,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":0,"runtime":0,"slow":false,"start":0},"testFilePath":"/home/thinkpad/Documents/calculator-db/tests/allRouteFuctionMiddleware.test.ts","failureMessage":"  \u001b[1m● \u001b[22mTest suite failed to run\n\n    Cannot find module '../utils/statusCodeResponse' from 'tests/allRouteFuctionMiddleware.test.ts'\n\n    \u001b[0m \u001b[90m 13 |\u001b[39m\n     \u001b[90m 14 |\u001b[39m \u001b[90m// Mocking the sendResponse function\u001b[39m\n    \u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 15 |\u001b[39m jest\u001b[33m.\u001b[39mmock(\u001b[32m\"../utils/statusCodeResponse\"\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m ({\n     \u001b[90m    |\u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n     \u001b[90m 16 |\u001b[39m   sendResponse\u001b[33m:\u001b[39m jest\u001b[33m.\u001b[39mfn()\u001b[33m,\u001b[39m\n     \u001b[90m 17 |\u001b[39m }))\u001b[33m;\u001b[39m\n     \u001b[90m 18 |\u001b[39m\u001b[0m\n\n      \u001b[2mat Resolver._throwModNotFoundError (\u001b[22mnode_modules/jest-resolve/build/resolver.js\u001b[2m:427:11)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[0m\u001b[36mtests/allRouteFuctionMiddleware.test.ts\u001b[39m\u001b[0m\u001b[2m:15:6)\u001b[22m\n","testResults":[]},{"numFailingTests":0,"numPassingTests":0,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":0,"runtime":0,"slow":false,"start":0},"testFilePath":"/home/thinkpad/Documents/calculator-db/tests/calculatorController.test.ts","failureMessage":"  \u001b[1m● \u001b[22mTest suite failed to run\n\n    Cannot find module '../service/userService' from 'tests/calculatorController.test.ts'\n\n    \u001b[0m \u001b[90m 11 |\u001b[39m\n     \u001b[90m 12 |\u001b[39m \u001b[90m// Mocking the services\u001b[39m\n    \u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 |\u001b[39m jest\u001b[33m.\u001b[39mmock(\u001b[32m\"../service/userService\"\u001b[39m)\u001b[33m;\u001b[39m\n     \u001b[90m    |\u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n     \u001b[90m 14 |\u001b[39m jest\u001b[33m.\u001b[39mmock(\u001b[32m\"../utils/statusCodeResponse\"\u001b[39m)\u001b[33m;\u001b[39m\n     \u001b[90m 15 |\u001b[39m\n     \u001b[90m 16 |\u001b[39m describe(\u001b[32m\"CalculatorControllerController\"\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\n      \u001b[2mat Resolver._throwModNotFoundError (\u001b[22mnode_modules/jest-resolve/build/resolver.js\u001b[2m:427:11)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[0m\u001b[36mtests/calculatorController.test.ts\u001b[39m\u001b[0m\u001b[2m:13:6)\u001b[22m\n","testResults":[]},{"numFailingTests":0,"numPassingTests":0,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":0,"runtime":0,"slow":false,"start":0},"testFilePath":"/home/thinkpad/Documents/calculator-db/tests/userService.test.ts","failureMessage":"  \u001b[1m● \u001b[22mTest suite failed to run\n\n    Cannot find module '../model/userModel' from 'tests/userService.test.ts'\n\n    \u001b[0m \u001b[90m 23 |\u001b[39m\n     \u001b[90m 24 |\u001b[39m \u001b[90m// Mock dependencies\u001b[39m\n    \u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m jest\u001b[33m.\u001b[39mmock(\u001b[32m\"../model/userModel\"\u001b[39m)\u001b[33m;\u001b[39m\n     \u001b[90m    |\u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n     \u001b[90m 26 |\u001b[39m jest\u001b[33m.\u001b[39mmock(\u001b[32m\"../model/calculator\"\u001b[39m)\u001b[33m;\u001b[39m\n     \u001b[90m 27 |\u001b[39m jest\u001b[33m.\u001b[39mmock(\u001b[32m\"../utils/jsonToken\"\u001b[39m)\u001b[33m;\u001b[39m\n     \u001b[90m 28 |\u001b[39m jest\u001b[33m.\u001b[39mmock(\u001b[32m\"../utils/substring\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\n      \u001b[2mat Resolver._throwModNotFoundError (\u001b[22mnode_modules/jest-resolve/build/resolver.js\u001b[2m:427:11)\u001b[22m\n      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[0m\u001b[36mtests/userService.test.ts\u001b[39m\u001b[0m\u001b[2m:25:6)\u001b[22m\n","testResults":[]},{"numFailingTests":2,"numPassingTests":0,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1731239469814,"runtime":11995,"slow":true,"start":1731239457819},"testFilePath":"/home/thinkpad/Documents/calculator-db/tests/api.test.ts","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mPOST /api/user/output/substring › should return longest substring length and unique substrings\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m3\u001b[39m\n    Received: \u001b[31mundefined\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 10 |\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 11 |\u001b[39m     expect(response\u001b[33m.\u001b[39mstatusCode)\u001b[33m.\u001b[39mtoBe(\u001b[35m200\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 12 |\u001b[39m     expect(response\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mlongestSubstring)\u001b[33m.\u001b[39mtoBe(\u001b[35m3\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 13 |\u001b[39m     expect(response\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39muniqueSubstrings)\u001b[33m.\u001b[39mtoContain(\u001b[32m\"abc\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 14 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 15 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtests/api.test.ts\u001b[39m\u001b[0m\u001b[2m:12:44)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mPOST /api/user/output/binary-tree › should return max sum paths for binary tree\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m200\u001b[39m\n    Received: \u001b[31m404\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 20 |\u001b[39m     \u001b[36mconst\u001b[39m response \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m request(app)\u001b[33m.\u001b[39mpost(\u001b[32m\"/api/binary-tree\"\u001b[39m)\u001b[33m.\u001b[39msend({ tree })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 21 |\u001b[39m\u001b[22m\n\u001b[2m    \u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 22 |\u001b[39m     expect(response\u001b[33m.\u001b[39mstatusCode)\u001b[33m.\u001b[39mtoBe(\u001b[35m200\u001b[39m)\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m    |\u001b[39m                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 23 |\u001b[39m     expect(response\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mmaxLeafPath)\u001b[33m.\u001b[39mtoBe(\u001b[35m23\u001b[39m)\u001b[33m;\u001b[39m \u001b[90m// example expected value\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 24 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[22m\n\u001b[2m     \u001b[90m 25 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.<anonymous> (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtests/api.test.ts\u001b[39m\u001b[0m\u001b[2m:22:33)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["POST /api/user/output/substring"],"duration":372,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m3\u001b[39m\nReceived: \u001b[31mundefined\u001b[39m\n    at Object.<anonymous> (/home/thinkpad/Documents/calculator-db/tests/api.test.ts:12:44)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"POST /api/user/output/substring should return longest substring length and unique substrings","status":"failed","title":"should return longest substring length and unique substrings"},{"ancestorTitles":["POST /api/user/output/binary-tree"],"duration":6,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m200\u001b[39m\nReceived: \u001b[31m404\u001b[39m\n    at Object.<anonymous> (/home/thinkpad/Documents/calculator-db/tests/api.test.ts:22:33)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"POST /api/user/output/binary-tree should return max sum paths for binary tree","status":"failed","title":"should return max sum paths for binary tree"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"/home/thinkpad/Documents/calculator-db/coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["/home/thinkpad/Documents/calculator-db/node_modules/jest-html-reporters/index.js",{}]],"rootDir":"/home/thinkpad/Documents/calculator-db","runTestsByPath":false,"seed":1913190721,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"/home/thinkpad/Documents/calculator-db/node_modules/@jest/test-sequencer/build/index.js","updateSnapshot":"new","useStderr":false,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1731239470352,"_reporterOptions":{"publicPath":"/home/thinkpad/Documents/calculator-db","filename":"jest_html_reporters.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})