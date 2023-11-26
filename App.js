
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
import Navbar from './Components/Navbar';

import Main from './Components/Main';



function App() {
  return (
    <div>
      <Navbar />
      
      <Main count={2} />
      
      
    </div>
  );
}

export default App;
