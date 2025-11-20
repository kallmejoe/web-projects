import { categories } from '../data';
import './Categories.css';

const CategoryCard = ({ title, students, image }) => {
  return (
    <div className="category-card">
      <img src={image} alt={title} />
      <div className="category-info">
        <h3>{title}</h3>
        <p>{students}</p>
        <span className="arrow">→</span>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-container">
        <h2>Learn essential career and life skills</h2>
        <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>

        <div className="categories-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
