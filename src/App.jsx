const Hello = () =>
{
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

const App = () =>{
  return (
    
    <div>
      <h1>Greetings</h1>
      <Hello />
      {/* <Hello /> this will be reusabele componenet */}
    </div>
  )

} 

export default App;