# Node.js Server Hang on Long-Running Tasks
This repository demonstrates a common issue in Node.js where long-running operations in request handlers can cause the server to hang, making it unresponsive to further requests. The `bug.js` file showcases this problem, while `bugSolution.js` provides a solution using asynchronous operations and proper event handling.

## Problem
Node.js is single-threaded.  When a long-running task blocks the main thread (like in `bug.js`), no other requests can be processed until the task completes. This leads to a hung server.

## Solution
The solution involves moving long-running operations to separate threads or using asynchronous programming techniques (as shown in `bugSolution.js`). This allows Node.js to handle multiple requests concurrently without blocking the main event loop.