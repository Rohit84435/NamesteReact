// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World From JavaScript !!!!";

// document.getElementById("root").appendChild(heading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "xyz" },
//   "Hello World From React!!! "
// );
// console.log(heading); // Type of : Object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // Render method converting heading object into h1 tag

/* 
        <div>
            <div>
                <h1> I am H1 Tag </h1>
                <h2> I am H1 Tag </h2>
            </div>
        </div>
        ReactElement(OBJECT) => HTML(Browser Understands)
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
]);

console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
