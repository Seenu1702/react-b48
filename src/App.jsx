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

  const appHeaderStyle = 
    { 
      color:'white', 
      background:'red'
    };
  return (
    <div>
      <h1 style={appHeaderStyle}>Greetings</h1>
      <Hello name='Seenu' age='24'/>
      <Hello name='Seenu' age='24'/>
      {/* <Hello /> this will be reusabele componenet same like functions  */}
    </div>
  )

} 

export default App;