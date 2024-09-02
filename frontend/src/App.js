import Navbar from './components/Navbar.jsx';
import MyRouter from './router/index.js';
// import Student from './components/Student';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRouter />
      {/* <Student /> */}
    </div>
  );
}

export default App;
