/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               role:
 *                 type: string
 *                 example: "user"
 *     responses:
 *       200:
 *         description: User created successfully
 *       404:
 *         description: Email already exists or signup failed
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       404:
 *         description: Email does not exist or invalid password
 */

/**
 * @swagger
 * /api/user/output/substring:
 *   post:
 *     summary: Calculate the longest substring without repeating characters
 *     security:
 *       - userAuth: []  # This endpoint requires user authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               input:
 *                 type: string
 *                 example: "abcabcbb"
 *     responses:
 *       200:
 *         description: Successfully calculated the substring
 *       404:
 *         description: Invalid input or calculation error
 */

/**
 * @swagger
 * /api/user/output/binarytree:
 *   post:
 *     summary: Calculate binary tree path sums
 *     security:
 *       - userAuth: []  # This endpoint requires admin authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tree:
 *                 type: array
 *                 items:
 *                   type: number
 *                   nullable: true
 *                 example: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]
 *     responses:
 *       200:
 *         description: Successfully calculated the binary tree path sums
 *       404:
 *         description: Invalid input or calculation error
 */
