import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040'
  },
  {
    id: 2,
    name: 'Taina',
    number: '050'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)
