# Express Server Unresponsive Bug

This repository demonstrates a common yet subtle bug in Express.js applications where the server starts successfully but fails to respond to incoming HTTP requests. The root cause is often a blocking synchronous operation within a middleware function or route handler.

## Bug Description

The `bug.js` file contains a simple Express.js server.  However, it includes a deliberately introduced issue (a long-running synchronous operation) preventing it from responding to requests.

## Solution

The `bugSolution.js` demonstrates how to fix the issue, highlighting how asynchronous operations are crucial for preventing blocking and maintaining server responsiveness. 

## How to Reproduce the Bug

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`.
4. Try to access the server in your browser or with a tool like `curl`. You'll likely find the server unresponsive.
5. Now run `node bugSolution.js` and repeat step 4. You should see a successful response.
