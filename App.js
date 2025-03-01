const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "Hey, I love React")
        ]
    )
);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello World from REACT"
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
