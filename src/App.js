import logo from './logo.svg';
import './App.css';
import React from 'react';


class InnerComponent extends React.Component

{
  render()
  {
    return <div>Inner component is here </div>
  }
   
  componentDidMount()
  {
    console.log("####Mounting InnerComponent####")
  }

  componentWillUnmount()
  {
    console.log("****Unmounting InnerComponent####")
  }

}



class App extends React.Component

      

{
  state ={counter:0, InnerComponent:<InnerComponent/>}
  constructor(props)


  {
    super(props)
    console.log("I am inside constructer")
  }

   static getDerivedStateFromProps()

  {
    console.log("I am inside getDerivedStateFromProps")
    return true
  }

  shouldComponentUpdate()
  {
    console.log("Inside ShouldComponentUpdate")
    return true
  }



  incrementCounter = () =>
  {
    this.setState({counter:this.state.counter+1})
    if(this.state.counter % 2==0)
    {
      this.setState({innerComponent:<InnerComponent/>})
    }
    else
    {
      this.setState({innerComponent:<div>Unmounted</div>})
    }
  }

render()
{
  console.log("Inside The Render Method")
  console.log(this.props)
  return (
    <div>
      <button onClick={this.incrementCounter}>Click ME</button>
      <br/>
      counter:{this.state.counter}
      <br/>
      <div>{this.state.innerComponent}</div>
    </div>
  )
}

getSnapshotBeforeUpdate(prevProps, prevState)
{
  console.log("Inside getSnapshotBeforeUpdate")
    console.log("Previous Prop:")
    console.log(prevProps)
    console.log("Previous State:")
    console.log(prevState)
    console.log("--------------------")
    console.log("Updated Prop:")
    console.log(this.props)
    console.log("Update State:")
    console.log(this.state)
    return true
}
componentDidMount()
  {
    console.log("I am inside componentDidMount")
  }
}



/*

{
  return <button onClick={this.props.clickEvent}>Click me</button>
}




/*
function App(props) {
  console.log(props.color)
  console.log(props.size)
  console.log(props.clickEvent)
  return (
    <div className='App'>
      <button
    </div>
  )


  /*
  return React.createElement
  (
    "div",
    null,
    React.createElement("h1",null,"This is heading"),
    React.createElement("p",null,"Text is here for Para"),
    React.createElement("ul",null,""),
    React.createElement("li",null,"List item 1"),
    React.createElement("li",null,"List item 2")
  );
}

{
  class MyClassComponent extends React.Component
  {
    render()
    {
      return<h1>This is my heading from class component</h1>
    }

  }
}


 /* console.log("hello")

  class Student {
    Name 
    Nge
    RollNo
    Email
    constructor(Name,Age,RollNo,Email)

    {
      this.Name=Name;
      this.Age=Age;
      this.RollNo=RollNo;
      this.Email=Email;

    }

    printStudent()

    {
      console.log("Name: "+this.Name)
      console.log("Age: "+this.Age)
      console.log("RollNo: "+this.RollNo)
      console.log("Email: "+this.Email)
    }

  }
  let student=new Student
  student.age=11
  student.Name="Aditya"
  student.RollNo=111
  student.Email="abs@student.com"

  let adityaa=new Student("Gupta",22,101,"email@gmail.com")
  adityaa.printStudent()
  console.log("student :"+student )


  /*
  let firstVariable=5
  console.log("firstVariable :"+ firstVariable)

  firstVariable=6
  console.log("firstVariable :"+ firstVariable)

  var secondVariable=5
  console.log("secondVariable :"+secondVariable)

  secondVariable=6
  console.log("secondVariable :"+secondVariable)

  const thirdVariable=5
  console.log("thirdVariable :"+thirdVariable)

  thirdVariable=6
  console.log("thirdVariable :"+thirdVariable)
  */

  /*
   function sayHello()
   { console.log("ES5 functiona - Hello World") }
   sayHello();

   const sayHello2 = ()=> console.log("ES5 functiona - Hello World")

   const sayHello3 = ()=> console.log("ES5 functiona - Hello World")
   setTimeout(sayHello3,1000)

   const sayHello4 =(name)=> console.log("Hello "+name)
   setTimeout(sayHello4("Aman"),1000)

   const sayHello5=(firstName,lastName)=> console.log("Hello "+firstName+" "+lastName)
   setTimeout(sayHello5("Aman","Choudhary"),1000)
  */




  /*return ( 

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;

