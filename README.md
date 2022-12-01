# JavaScript Review
### Notes from Eloquent JavaScript 3rd Ed. - [Link](https://eloquentjavascript.net)

## Values, Types, and Operators
### Special Numbers
- Infinity
- -Infinity
- NaN

### Unary Operators
- Some operators are not symbols [e.g. &, *, |, +, %]
- `typeof` for example

### Empty Values
- undefined <-- doesn't exist yet
- null <-- instantiated, but holds no value

---

## Program Structure
### Expressions
- A fragment of code that produces a value is called an expression. 
- Every value that is written literally (22 or "psychoanalysis") is an expression.

### Statements
- A computer program is a list of "instructions" to be "executed" by a computer.
- In a programming language, these programming instructions are called **statements**.
- *JavaScript statements are composed of:*
    - **Values, Operators, Expressions, Keywords, and Comments**

### Bindings
- To catch and hold values, JavaScript provides a thing called a **binding**, or variable:
    - `let caught = 5 * 5;`
- A single let statement may define multiple bindings. The definitions must be separated by commas.
    - `let one = 1, two = 2;`
- **Binding names:**
    - must not start with a digit
    - may include dollar signs ($) or underscores (_)
    - no other punctuation or special characters.

### The Environment
- The collection of bindings and their values that exist at a given time is called the environment.
- When a program starts up, this environment is not empty. It always contains bindings that are part of the language standard.
- Has bindings that provide ways to interact with the surrounding system.

---

## JavaScript and the Browser
### Networks and the Internet
- A network protocol describes a style of communication over a network.
- **Hypertext Transfer Protocol (HTTP)**
    - protocol for retrieving named resources (chunks of information, such as web pages or pictures). 
    - It specifies that the side making the request should start with a line like this, naming the resource and the version of the protocol that it is trying to use:
        - `GET /index.html HTTP/1.1`

- **The Transmission Control Protocol (TCP)** 
    - All Internet-connected devices “speak” it, and most communication on the Internet is built on top of it.
    - one computer must be waiting, or listening, for other computers to start talking to it. To be able to listen for different kinds of communication at the same time on a single machine, each listener has a number (called a port) associated with it. 
        - *Most protocols specify which port should be used by default.* 
    - Another computer can then establish a connection by connecting to the target machine using the correct port number. 
    - If the target machine can be reached and is listening on that port, the connection is successfully created. 
        - *The listening computer is called the **server**, and the connecting computer is called the **client**.*8*

### The Web
- The World Wide Web (not to be confused with the Internet as a whole) is a set of protocols and formats that allow us to visit web pages in a browser. 
- To become part of the Web, all you need to do is connect a machine to the Internet and have it listen on port 80 with the HTTP protocol so that other computers can ask it for documents.
- Each document on the Web is named by a Uniform Resource Locator (URL), which looks something like this:
  http://eloquentjavascript.net/13_browser.html
 |      |                      |               |
 protocol       server               path
 
---

## The Document Object Model
### Document structure
- You can imagine an HTML document as a nested set of boxes. 
- Tags such as <body> and </body> enclose other tags, which in turn contain other tags or text. Here’s the example document from the previous chapter:
<!doctype html>
<html>
  <head>
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Marijn and this is my home page.</p>
    <p>I also wrote a book! Read it
      <a href="http://eloquentjavascript.net">here</a>.</p>
  </body>
</html>

### Trees
- We call a data structure a tree when it has a branching structure, has no cycles (a node may not contain itself, directly or indirectly), and has a single, well-defined root. 
- In the case of the DOM, document.documentElement serves as the root.
![Visualization of Document Tree:](https://eloquentjavascript.net/img/html-tree.svg)

### Finding elements
- If we want to find a specific node in the document, reaching it by starting at document.body and following a fixed path of properties is a bad idea.
- It’d be better if we could say “Get the first link in the document”. And we can.
    - `let link = document.body.getElementsByTagName("a")[0];`
- To find a specific single node, you can give it an id attribute and use document.getElementById instead:
    - `<img id="gertrude" src="img/ostrich.png"></p>`
    - `let ostrich = document.getElementById("gertrude");`

### Changing the Document
- Almost everything about the DOM data structure can be changed.
- To add a child node to an element node:
    -  *appendChild* puts it at the end of the list of children
    - *insertBefore* inserts the node given as the first argument before the node given as the second argument.
        - `let paragraphs = document.body.getElementsByTagName("p");`
        - `document.body.insertBefore(paragraphs[2], paragraphs[0]);`

### Creating nodes
- write a script that replaces all images (<img> tags) in the document with the text held in their alt attributes, which specifies an alternative textual representation of the image.
- This involves not only removing the images but adding a new text node to replace them. 
- Text nodes are created with the document.createTextNode method:
<p>The <img src="img/cat.png" alt="Cat"> in the
  <img src="img/hat.png" alt="Hat">.</p>

<p><button onclick="replaceImages()">Replace</button></p>

<script>
  function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
      let image = images[i];
      if (image.alt) {
        let text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }
</script>

