Wait For
=========

A small library that provides an utility method to wait for DOM elements.

## Installation

```
npm install @skyrpex/waitfor --save
```

## Usage

```javascript
import waitFor from "@skyrpex/waitfor";
waitFor(".container")
	.then($container => $container.append("<h1>Hello</h1>"));
```

```javascript
import waitFor from "@skyrpex/waitfor";
let parent = document.querySelector(".container");
waitFor("h1", { parent })
	.then($h1 => $h1.html("Hello"));
```
