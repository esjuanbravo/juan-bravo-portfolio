import "./App.css";
import Nav from "./components/Nav";
import Title from "./components/Title";
function App() {
  return (
    <>
      <main>
        <header>
          <Nav />
        </header>
        <section>
          <Title />
        </section>
      </main>
    </>
  );
}

export default App;
