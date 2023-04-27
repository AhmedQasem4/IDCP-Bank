import "./App.css";

import {
  NavBar,
  Hero,
  CustomerExperience,
  BusinessParteners,
  About,
  BankServices,
  BankResults,
  NewsLetter,
  Footer,
} from "./containers";

import {
  NavMenu,
  ServiceCard,
  ValueList,
  YearResults,
  FooterMenu,
} from "./components";

function App() {
  return (
    <>
      <NavBar  />
      <NavMenu />
      <Hero />
      <CustomerExperience />
      <ValueList />
      <BusinessParteners /> 
      <About />
      <BankServices />
      <ServiceCard />
      <BankResults />
      <YearResults />
      <NewsLetter />
      <Footer />
      <FooterMenu />
    </>
  );
}

export default App;
