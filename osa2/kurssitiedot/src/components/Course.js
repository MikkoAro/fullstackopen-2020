import React from 'react'

const Course = (props) => {
    return(
      <div>
        <Header name={props.name} />
        <Content parts={props.parts} />
        <Total exercise={props.parts} />
      </div>
    )
  }

const Header = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => (<Part key={part.name} part={part.name} exercise={part.exercises} />))}
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercise}
        </p>
      </div>
    )
  }
  
  const Total = (props) => {
    return (
      <div>
        <strong>Total of exercises {props.exercise.reduce((previous, current) => previous + current.exercises,0)}</strong>
      </div>
    )
  }
  
  export default Course