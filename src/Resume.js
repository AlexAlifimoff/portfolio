import React, {Component} from 'react';

class Resume extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const workItems = [
            <ResumeItem title={"Software Developer at Gelber Group"} />
        ];

        const sections = [
            <SectionHeader name={'Work'} items={workItems} />,
            <SectionHeader name={'Education'} />
        ];
        return (
            <div className="Resume">
                <React.Fragment>
                    {sections}
                </React.Fragment>
            </div>
        );
    }
}

function SectionHeader(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            {props.items}
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
            </div>
        );
    };
}

export default Resume;
