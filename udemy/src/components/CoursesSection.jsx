import { useState } from 'react';
import { skillsData, courses } from '../data';
import './CoursesSection.css';

const CourseCard = ({ title, instructor, rating, reviewCount, price, badge, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <div className="course-content">
        <h3>{title}</h3>
        {instructor && <p className="instructor">{instructor}</p>}
        <div className="rating">
          <span className="rating-number">{rating}</span>
          <span className="stars">★★★★★</span>
          <span className="reviews">({reviewCount})</span>
        </div>
        <p className="price">{price}</p>
        {badge && <span className={`badge ${badge.toLowerCase().replace(/\s/g, '-')}`}>{badge}</span>}
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const selectedSkill = skillsData.tabs[activeTab].name;
  const filteredCourses = courses.filter(course => course.skill === selectedSkill);

  return (
    <section className="courses-section">
      <div className="courses-container">
        <h2>{skillsData.title}</h2>
        <p>{skillsData.description}</p>

        <div className="tabs">
          {skillsData.tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <button className="show-all-btn">
          Show all {selectedSkill} courses →
        </button>
      </div>
    </section>
  );
};

export default CoursesSection;
