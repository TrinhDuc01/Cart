import './App.css';
import { ContextFirst } from './Context/ContextFirst';
import Nav from './component/Nav';
function App() {
  return (
    <div className="container">
      <ContextFirst>
        <Nav></Nav>
      </ContextFirst>
    </div>
  );
}

export default App;
