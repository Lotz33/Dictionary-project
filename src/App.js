import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="px-4 my-5 text center">
        <h1 className="Title">
          <strong>Word Definitions</strong>
        </h1>

        <Dictionary />
      </div>
      <div class="footer text-center py-3">
        {" "}
        Coded by
        <a href="https://github.com/Lotz33/Dictionary-project"> Lottie</a>
      </div>
    </div>
  );
}

export default App;
