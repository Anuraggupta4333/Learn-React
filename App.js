import React from "react";
import ReactDOM from "react-dom/client";
/**  
 * 
// Creating a new HTML element of type 'h1'
const heading = document.createElement("h1");

// Setting the inner HTML of the 'h1' element to "Hello world from javascript"
heading.innerHTML = "Hello world from javascript";

// Getting the DOM element with the id 'root'
const root = document.getElementById("root");

// Appending the 'h1' element as a child to the 'root' element
root.appendChild(heading);

*/

/**     // Creating a React element (object) representing an h1 HTML element
const Heading = React.createElement(
    "h1",  // Type of the element (HTML tag)
    {id: "Heading", xyz: "abc"},  // Attributes of the HTML element (props)
    "Hello world by react!"  // Children (content inside the element)
);

// Logging the React element to the console to see its structure
console.log(Heading);  // Object

// Getting the root DOM node to mount the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the React element (Heading) inside the root DOM node
// This converts the React element object to an actual h1 HTML element and inserts it into the DOM
root.render(Heading);
*/


/**
 * <div id="parent">
 *   <div id="child1">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *   </div>
 * <div id="child2">
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *   </div>
 * </div>
 */

// Creating the React element structure
const Parent = React.createElement(
    "div", { id: "parent" }, // Parent div with id 'parent'
    [
    React.createElement(
        "div", { id: "child1" }, // Child div with id 'child'
        [
            React.createElement("h1", { id: "Heading-1" , key: "h1"}, "I'm h1 tag"), // h1 element
            React.createElement("h2", { id: "Heading-2" , key: "h2"}, "I'm h2 tag")  // h2 element
        ]
    ),
    React.createElement(
        "div", { id: "child2" }, // Child div with id 'child'
        [
            React.createElement("h1", { id: "Heading-1" , key: "h1"}, "I'm h1 tag"), // h1 element
            React.createElement("h2", { id: "Heading-2" , key: "h2"}, "I'm h2 tag")  // h2 element
        ]
    )]
);
// console.log(Parent);
// Getting the root DOM node to mount the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the React element (Parent) inside the root DOM node
root.render(Parent);


//to over come this messy we have jsx(make life easy)
//the react code is not only written in jsx
 