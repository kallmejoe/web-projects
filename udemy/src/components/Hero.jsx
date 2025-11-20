import { heroData } from '../data';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{heroData.title}</h1>
            <p>{heroData.description}</p>
            <button className="hero-cta">{heroData.ctaText}</button>
          </div>
                  <div className="hero-image">
                    <img src={heroData.image} alt="Learning illustration" />
                  </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
