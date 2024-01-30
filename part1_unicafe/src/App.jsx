import { useState } from 'react'

const Title = ({ title }) => <h2>{title}</h2>;

const Button = ({ onClick, buttonText }) => {
  return <button onClick={onClick}>{buttonText}</button>
};

const StatisticLine = ({ name, value }) => {
  return <tr>
    <td>
      {name}
    </td>
    <td>
      {value}
    </td>
  </tr>
}

const Statistics = ({ good, neutral, bad }) => {
  function getPositive() {
    const percentageOfPositiveVotes = (good / getTotalNumberOfVotes()) * 100;
    return percentageOfPositiveVotes.toFixed(2);
  }

  function getAverage() {
    const average = (good * 1 + neutral * 0 + bad * -1) / getTotalNumberOfVotes();
    return average.toFixed(1);
  }

  function getTotalNumberOfVotes() {
    return good + neutral + bad;
  }

  if (getTotalNumberOfVotes()) {
    return <table>
      <tbody>
        <StatisticLine name='good' value={good} />
        <StatisticLine name='neutral' value={neutral} />
        <StatisticLine name='bad' value={bad} />
        <StatisticLine name='all' value={getTotalNumberOfVotes()} />
        <StatisticLine name='average' value={getAverage()} />
        <StatisticLine name='positive' value={getPositive() + ' %'} />
      </tbody>
    </table>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
