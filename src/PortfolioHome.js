import React, { Component } from 'react';

class PortfolioHome extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    render() {
        const navItems = ["Resume", "Projects", "Funny Jokes", "Unfunny Jokes", "Mediocre Jokes"];

        const portfolioNameClasses = ["PortfolioName"];

        if(this.state.visible)
            portfolioNameClasses.push("fade-in");

        return (
            <div className="PortfolioHome">
                <div className={portfolioNameClasses.join(' ')}>
                Alex Alifimoff
                </div>
                <PortfolioNav navItems={navItems}/>
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => this.setState({visible: true}),
            200);
    }
}

class PortfolioNav extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    render() {
        const navItems = [];
        this.props.navItems.map((x) => {
            navItems.push(<NavItem name={x} />);
        });

        const classes = ["PortfolioNav"];

        if(this.state.visible)
            classes.push("fade-in");

        return (
            <div className={classes.join(' ')}>
                {navItems}
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => this.setState({visible: true}),
            800);
    }
}

class NavItem extends Component  {
    render() {
        return (
            <span className="NavItem">{this.props.name}</span>
        );
    }
}

export default PortfolioHome;
