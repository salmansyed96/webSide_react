import styled from "styled.components";

const HeroSection = () => {
  return( <Wrapper>
    <div className="container grid grid-two-column">
        <div className="section-here-data">
            <p className="hero-top-data">This is me</p>
            <h1 className="hero-heading">This is IT Service Web-side</h1>
            <p className="hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est similique iusto voluptates culpa voluptatem blanditiis dolorem iure aliquam reprehenderit!</p>
        </div>
        {/* for image section */}
        <div className="section-hero-image"></div>
    </div>
  </Wrapper>
  )

}




const Wrapper = styled.section``;

export default HeroSection
