import { Hero, Intro, Navbar } from "./components";

const App = () => {
  return (
    <>
      <div className="App relative">
        <Navbar />
        <div className="Content">
          <Hero />
          <Intro />
        </div>
      </div>
    </>
  );
};

export default App;
