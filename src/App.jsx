const Hello = (props) =>
// console.log(props);
{
  return (
    <div>
      <p>Hello { props.name}, your age is { props.age}</p>
    </div>
  )
}

const App = () =>{
  return (
    
    <div>
      <h1 style={{ color:'white', background:'red'}}>Greetings</h1>
      <Hello name='Seenu' age='24'/>
      <Hello name='Seenu' age='24'/>
      {/* <Hello /> this will be reusabele componenet same like functions  */}
    </div>
  )

} 

export default App;