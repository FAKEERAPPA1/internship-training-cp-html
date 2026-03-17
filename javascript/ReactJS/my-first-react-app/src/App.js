import logo from './logo.svg';
import './App.css';
import Test from './Component/Test';
import User from './Component/User';
import Greetings from './Component/Greetings';
function App() {
  return (
    <>
      <User/>
      <Greetings name="Jacob Dennis" age={25} />
    </>
  );
}

export default App;
