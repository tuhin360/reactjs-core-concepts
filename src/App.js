import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers =[
  {name: 'James', job: 'Singer'},
  {name: 'Asif', job: 'Singer2'},
  {name: 'Imram', job:'Singer3'}
]

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Joshim', 'Riyaz', 'Razzak', 'Manna'];
  return (
    <div className="App">
      {
        nayoks.map(nayok =><li>Name: {nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New Component!!!!!!</h5>
      <Friend job="Businessman" phone="01777"></Friend>
      <Friend job="Student" phone="01999"></Friend>
    </div>
  );
}

function Person(props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  ) 
}

function Friend(props){
  console.log(props);
  return (
    <div className='container'>
      <h3>Reyad</h3>
      <h4>Job: {props.job}</h4>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
