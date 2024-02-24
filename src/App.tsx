import {
  FormSection,
  Functioning,
  Hero,
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
        </div>
      </div>
    </>
  );
};

export default App;
