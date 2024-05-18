import React from "react";

const InnerComponent = () => {
    return <hi> Inner Compu</hi>;
};




const PrintName = () => {
    return < InnerComponent />
};

const App = () => {
    const user = {
        firstNAme : "vivek",
        lastname : "naidu",
    };
    return (
        <secioin>
            <PrintName />
            <PrintName />
            <PrintName />
            <PrintName />
        </secioin>
    )
}


/*
const App = () => {
    return (
        <section className="container">
            <hi> hello {new Date().toLocaleTimeString()}</hi>
        </section>
    );
};
*/


/*
function App() {
    return <h1> u little noob , wtf !!!</h1>;
}

export default App;           // for exprting the component

*/


/*
function App() {
    return React.createElement("hi" , { className : "heading"} ,
        "hello world");
}

*/

/*
function App() {
    return React.createElement(
        "div",
        { className: "container"},
        React.createElement("h1", { className: "heading" }, "hello world")
    );
}
*/

export default App;
