import { Functioning, Hero,  Housing,  Intro, Mobilesection, Navbar, Sales, } from "./components";

const App = () => {
  return (
    <>
      <div className="App relative">
        <Navbar />
        <div className="Content   overflow-hidden ">
          <Hero />
          <Intro />
          <Sales />
          <Functioning />
          <Housing />
          <Mobilesection />
         
        </div>
      </div>
    </>
  );
};

export default App;
