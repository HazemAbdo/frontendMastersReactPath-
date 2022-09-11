import {render} from "react-dom";
import Pet from "./Pet";
const App =()=>{
    return(
        <div>
            <h1>Adopt Me</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese"/>
            <Pet name="Pepper" animal="Bird" breed="Cockatiel"/>
            <Pet name="Doink" animal="Cat" breed="Mix"/>
        </div>
    )
}
render(<App/>, document.getElementById("root"));

// import React from "react";
// import Pet from './Pet';
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Cat",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Mix",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Dog",
//       breed: "Mix",
//     }),
//   ]);
// };
// render(React.createElement(App), document.getElementById("root"));
