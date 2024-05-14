import Title from "./components/Title.tsx";
import FirstGet from "./examples/1-first-request.tsx"
import SetHeaders from "./examples/2-headers.tsx";
import "./App.css";

function App() {

  return (
    <>
      <main>
        <Title />
        <FirstGet />
        <SetHeaders />
      </main>
    </>
  );
}

export default App;
