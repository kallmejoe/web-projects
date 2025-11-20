import { aiSectionData } from '../data';
import './AISection.css';

const AISection = () => {
  return (
    <section className="ai-section">
      <div className="ai-container">
        <div className="ai-content">
          <h2>{aiSectionData.title}</h2>
          <p>{aiSectionData.description}</p>

          <ul className="ai-features">
            {aiSectionData.features.map((feature, index) => (
              <li key={index}>
                <span className="check-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <button className="ai-cta">{aiSectionData.ctaText}</button>
          <p className="ai-price">{aiSectionData.startingPrice}</p>
        </div>

        <div className="ai-image">
          <img src={aiSectionData.image} alt="AI Learning" />
        </div>
      </div>
    </section>
  );
};

export default AISection;
