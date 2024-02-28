import {
  FormSection,
  Functioning,
  Hero,
  CTASection,
  Housing,
  ImageSection,
  Intro,
  MeetSection,
  Mobilesection,
  Navbar,
  Sales,
  Footer,
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
          <FormSection />
          <ImageSection />
          <MeetSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
