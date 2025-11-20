import { trustedCompanies } from '../data';
import './TrustedCompanies.css';

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
      <div className="trusted-container">
        <h2>Trusted by over 16,000 companies and millions of learners around the world</h2>
        <div className="companies-logos">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="company-logo">
              {company.logo ? (
                <img src={company.logo} alt={company.name} />
              ) : (
                company.name
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
