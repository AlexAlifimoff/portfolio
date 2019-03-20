import React, {Component} from 'react';
import resumeJson from './data/resume.json';

class Resume extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(resumeJson);

        const jobs = [];
        const educations = [];

        for(let i = 0; i < resumeJson.Education.length; i++)
        {
            const e = resumeJson.Education[i];
            educations.push(<ResumeItem title={`${e.Degree} in ${e.Major}`} 
                                        subtitle={`${e.School}, ${e.StartYear}-${e.EndYear}`}
                                        specialization={`Specialization: ${e.Specialization}`} />);
        }

        const jobSection = (
            <SectionHeader name={'Work Experience'}>
                {jobs}
            </SectionHeader>
        );

        const educationSection = (
            <SectionHeader name={'Education'}>
                {educations}
            </SectionHeader>
        );

        return (
            <div className={"Resume"}>
                <React.Fragment>
                    {jobSection}
                </React.Fragment>
                <React.Fragment>
                    {educationSection}
                </React.Fragment>
            </div>
        );
    }
}

function SectionHeader(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </div>
    );
}

class ResumeItem extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="ResumeItem">
                <h3 className="ResumeItem-title">
                    {this.props.title} 
                </h3>
                <h4 className="ResumeItem-subtitle">
                    {this.props.subtitle}
                </h4>
                <h5 className="ResumeItem-spec">
                    {this.props.specialization}
                </h5>

            </div>
        );
    };
}

export default Resume;
