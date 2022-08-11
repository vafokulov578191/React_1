import './App.css';
import Main from './components/main/Main.jsx'
import Header from './components/header/Header.jsx'

function App() {
  return (
    <div className="countainer">
        <div className="top_block">
          <Header/>
        </div>
        <div className="top_main">
          <Main/>
          <Main/>
          <Main/>
        </div>
    </div>
  );
}

export default App;
