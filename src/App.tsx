import {
  FormSection,
  Functioning,
  Hero,
  Historysection,
  Housing,
  ImageSection,
  Intro,
  Mobilesection,
  Navbar,
  Sales,
 // ScrollSection,
} from "./components";

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
          {/*<ScrollSection /> */}
          <FormSection />
          <ImageSection />
          <Historysection />
        </div>
      </div>
    </>
  );
};

export default App;
