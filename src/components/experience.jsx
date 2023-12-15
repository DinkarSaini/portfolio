import React from 'react';
import './experience.css'
import ph1 from '../assets/img/vendify.png';
import ph2 from '../assets/img/simpana.png'

const ExperienceComponent = () => {
    return (
        <div className="experience-container">
            <h1 className="experience-heading">Experience</h1>
            <div className="experience">
                <JobInfo
                    imageSrc={ph1}
                    title="Senior Software Engineer"
                    dateRange="May 2022 - Present"
                />
                <JobInfo
                    imageSrc={ph2}
                    title="React Developer"
                    dateRange="Aug 2020 - May 2022"
                />
            </div>
        </div>
    );
};

const JobInfo = ({ imageSrc, title, dateRange }) => {
    return (
        <div className="job-info">
            <img src={imageSrc} alt={title} />
            <div className="job-title">{title}</div>
            <div className="date-range">{dateRange}</div>
        </div>
    );
};

export default ExperienceComponent;
