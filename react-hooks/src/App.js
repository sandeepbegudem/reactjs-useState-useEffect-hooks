import logo from './logo.svg';
import './App.css';
import { Employee } from './myComponents/Employee';
import Company from './myComponents/Company';

function App() {

  // const employee = {
  //   name: "Josh",
  //   role:"Software Engineer"
  // }
  return (
    <div className="App">
      {/* <Employee 
      // employee = {employee}
      /> */}

      <Company />
    </div>
  );
}

export default App;
