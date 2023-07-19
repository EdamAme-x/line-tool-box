import './App.css';
import Methods from './methods';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Methods />
      </div>
    </>
  );
}

export default App;
