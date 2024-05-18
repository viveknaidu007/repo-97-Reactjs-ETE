# repo-97-Reactjs-ETE
* react from scratch

# Hy , this is vivek. here im giving my own documentaion of React , that anyone can understand.

# reactjs documentation:
* https://react.dev/

## why react 🤔?
* React is an javascript libarary for building user-interfaces.
* single page applications 
* if we click on link in website wholepage no need to reload , only the component wil reload

## but why we already have html ,css etc. then why React 😒?
* we can tell its an resuable.
* if we created one time , we can use multiple times , so we are going to create components.
* we can use on html template for many things , so we just change content of the words , but template will be same
* using same html for different components , we use react

## who created react?
* it was created by facebook , for themselves 
* later many developers started using it , so it became popular.
* hence , they made react as an open-source

## Tools:
* chrome
* VScode 
* NOdejs / NPM
* Git / Github

* Chrome DEv Tools
* NPM node package manager
* Linux / Terminal

## linux commands:
* cd
* cd ..
* pwd
* mkdir folder_name
* rm -r folder_name 
* touch file.txt
* 

## fro linux tips
* npm init 
* npm install react-toastify --save

## create react app
* npx create-react-app my-first-app
* cd my-first-app
* npm start

## tips:
* src folder is for devlopers , we will do all 

## webpack
* webpack.in we can use this for conveting many html , css ,javascript into one file (one html , one css ,one javascript)

## fro creating a component:
* function PrintName() {

}

* we must give return for the component
* the first should be Capital for the component name
* jSX = JavaScript XML

## JSX (java scipt xml) rules:
1. return single element
2. "return" if we have multiple statements , we can keep return () paranthesis for writing in next line
3. we can use semantic html , but not giving always "div" , etc if we can create nav bar 
4. fragments : React.Fragment , if we dony need container , we can use this fragment for no need of sections
5. we are adding the function name to root children "id = root"
6. normal functions , arrow functions 
* for arrow functions : const App = () => {}
* for normal fuinction : function App () {}
7. if we want ot givee attributes , we should give in camel case only "className={}" 
8. if we want o give class to html element  < section class="container"> , we should not use "class" , we have class keyword , so it will give some warning , but not error <sections classNAme="container">
9. we have to give closing tags , or it wil show eroors 
10. In JSX we can write Java Script also by giving curly brakets {} , const firstNAme = "emma; , <h1> hello {first name + " " + lastname}</h1> , we can create objects and functions we can sue. 


## some things we should know :
1. for components : we always give first letter as capital like const App = () {} ,
2. for functions : we alwasy should give function printNAme() {}
3. it is not possible to write JS code in html , but in react JSX it is possible by mentioning {} , we can write JS code inside the curly brackets in html
4. in React we have , function components and class components

## so , documentation is best place to learn :
* https://legacy.reactjs.org/docs/introducing-jsx.html


<!--
    Virtual DOM: React uses a virtual DOM, which is a lightweight copy of the actual DOM. This allows React to update only the parts of the DOM that have changed, rather than re-rendering the entire page. This results in significant performance improvements, especially in complex applications.

    Component-Based Architecture: React's architecture is based on reusable components. Each component encapsulates its own structure, style, and behavior, promoting modularity and code reusability. This makes development faster and more manageable, especially for large-scale applications.

    Efficient Updates: React's reconciliation algorithm efficiently updates the DOM, minimizing the number of operations needed. When the state of an object changes, React updates only the necessary parts of the DOM, ensuring fast rendering and improved performance.

    React Fiber: React Fiber, a reimplementation of the React core algorithm, enhances the ability to prioritize updates, pause and resume work, and reuse previously completed work. This leads to smoother and more responsive user interfaces.

    Server-Side Rendering (SSR): React supports server-side rendering, which can improve the performance of web applications by rendering components on the server before sending them to the client. This results in faster initial page loads and better SEO performance.

    Developer Tools: React comes with a robust set of developer tools that help in debugging and optimizing applications. The React Developer Tools extension for browsers allows developers to inspect React component hierarchies, props, and state.

    Rich Ecosystem: React has a rich ecosystem of libraries and tools that enhance its capabilities, such as Redux for state management, React Router for navigation, and various UI component libraries. This ecosystem facilitates the development of complex applications with high performance.

    Community and Support: React has a large and active community, which means continuous improvements, a wealth of tutorials, and a vast pool of shared knowledge. This community support contributes to the rapid development and optimization of React applications.
-->