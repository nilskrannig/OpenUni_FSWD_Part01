import { useState } from 'react'

const Title = ({ title }) => <h2>{title}</h2>;

const Button = ({ onClick, buttonText }) => {
  return <button onClick={onClick}>{buttonText}</button>
};

const StatisticLine = ({ name, value }) => {
  return <div>
    {name} {value}
  </div>
}

const Statistics = ({good, neutral, bad}) => {
  function getPositive() {
    return (good / getTotalNumberOfVotes()) * 100;
  }

  function getAverage() {
    return (good * 1 + neutral * 0 + bad * -1) / getTotalNumberOfVotes();
  }

  function getTotalNumberOfVotes() {
    return good + neutral + bad;
  }

  if(getTotalNumberOfVotes()) {
    return <div>
      <StatisticLine name='good' value={good} />
      <StatisticLine name='neutral' value={neutral} />
      <StatisticLine name='bad' value={bad} />
      <StatisticLine name='all' value={getTotalNumberOfVotes()} />
      <StatisticLine name='average' value={getAverage()} />
      <StatisticLine name='positive' value={getPositive() + ' %'} />
    </div>
  }

  return <div>
    <p>No feedback given</p>
  </div>

}


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const newValue = good + 1;
    setGood(newValue);
  }

  const handleNeutral = () => {
    const newValue = neutral + 1;
    setNeutral(newValue);
  }

  const handleBad = () => {
    const newValue = bad + 1;
    setBad(newValue);
  }

  return (
    <div>
      <Title title='give feedback' />
      <Button onClick={handleGood} buttonText='good' />
      <Button onClick={handleNeutral} buttonText='neutral' />
      <Button onClick={handleBad} buttonText='bad' />
      <Title title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
