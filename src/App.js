import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <div className="App">
    <nav className="navbar m-1 navbar-light bg-light">
      <div className="container-fluid">
        <span className='text-secondary fw-bold'>
          <i className="bi bi-egg-fried"></i>
          <a className="navbar-brand ms-1" href="#">Best In Bowls!!</a>
        </span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id='main-nav'></div>
      </div>
    </nav>
    </div>
  );
}

export default App;
