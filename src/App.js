import ToDo from "./components/ToDo/ToDo";


function App() {
    return (
      <div className="main-page" >
        <div className="main-page-container">
          <h1 className="main-page-h1"> <i className="fas fa-stream list-icon"> </i>To Do</h1>
          <ToDo />
        </div>
      </div>
    );
}

export default App;