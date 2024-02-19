import { Hero, Intro, Navbar } from "./components";

const App = () => {
  return (
    <>
      <div className="App relative">
        <Navbar />
        <div className="Content overflow-hidden">
          <Hero />
          <Intro />
        </div>
      </div>
    </>
  );
};

export default App;
