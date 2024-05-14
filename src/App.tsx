import Title from "./components/Title.tsx";
import FirstGet from "./examples/1-first-request.tsx";
import SetHeaders from "./examples/2-headers.tsx";
import PostRequest from "./examples/3-post-request.tsx";

import "./App.css";

function App() {
  return (
    <main>
      <Title />
      <FirstGet />
      <SetHeaders />
      <PostRequest />
    </main>
  );
}

export default App;
