<h1>1. What is Middleware in Node</h1>
The middleware in node. js is a function that will have all the access for requesting an object, responding to an object,
and moving to the next middleware function in the application request-response cycle.

<h3>Middleware functions can perform the following tasks:</h3>
<ol>
  <li>Execute any code.</li>
  <li>Make changes to the request and the response objects.</li>
  <li>End the request-response cycle.</li>
  <li>Call the next middleware function in the stack.</li>
</ol>

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.
Otherwise, the request will be left hanging.

<h3>An Express application can use the following types of middleware:</h3>
<ul>
  <li>Application-level middleware</li>
  <li>Router-level middleware</li>
  <li>Error-handling middleware</li>
  <li>Built-in middleware</li>
  <li>Third-party middleware</li>
</ul>
