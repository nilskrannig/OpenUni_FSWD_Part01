const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.numberOfExercises}
    </p>
  );
}

const Content = (props) => {
  const parts = props.course.parts;
  return (
    <>
      <Part name={parts[0].name} numberOfExercises={parts[0].exercises} />
      <Part name={parts[1].name} numberOfExercises={parts[1].exercises} />
      <Part name={parts[2].name} numberOfExercises={parts[2].exercises} />
    </>
  );
}

const Total = (props) => {
  const parts = props.course.parts;
  return (
    <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;