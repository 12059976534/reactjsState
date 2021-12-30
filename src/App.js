import logo from './logo.svg';
import React from 'react';
import './App.css';
import react from 'react';
import Todo from "./Todo/todo" ;

const App= ()=>{
  return (
    <div className="App">
     <Todo />
    </div>
  )
}

// //contoh class componen
// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>haii this is class componen </h1>
//       </div>
//     )
//   }
// }

// function App() {
//   //degan jsx biasa
//   return (
//     <div>
//        <h1 className="heelo">Hellow World</h1>
//        <h3>heloo dari jsx</h3>

//        {/* memangil componen Header */}
//        <Header/>
//     </div>
//     );

//   //degan react create elemen
//   // return react.createElement('h1',{class:"header"},"hello world from create elemen");
// }

export default App;
