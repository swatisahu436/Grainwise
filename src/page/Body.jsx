const Body = () => {
  const refs = {
    home: useRef(null),
    products: useRef(null),
    sustainability: useRef(null),
    caseStudies: useRef(null),
    endorsements: useRef(null),
    recipes: useRef(null),
    about: useRef(null),
    collaboration: useRef(null),
  };

  const scrollToSection = (key) => {
    const element = refs[key]?.current;
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header onNavClick={scrollToSection} />
      <div className="body-container" ref={refs.home}>...</div>
      <div ref={refs.products}><ProductPage /></div>
      <div ref={refs.sustainability}><SustainabilityPage /></div>
      <div ref={refs.caseStudies}><CaseStudy /></div>
      <div ref={refs.endorsements}><Taste /></div>
      <div ref={refs.about}><About /></div>
      <div ref={refs.collaboration}><SupplyChain /></div>
      <div ref={refs.recipes}><SpentGrain /></div>
    </>
  );
};
