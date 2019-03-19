import React, { Component } from 'react';
import Resume from './Resume.js';

class PortfolioHome extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false, move_to_top: false, activeView: null};
    }

    render() {
        const navItems = ["Resume", "Projects", "Funny Jokes", "Unfunny Jokes", "Mediocre Jokes"];

        const portfolioNameClasses = ["PortfolioName"];

        if(this.state.visible)
            portfolioNameClasses.push("fade-in");
        if(this.state.move_to_top)
            portfolioNameClasses.push("move-to-top");

        const activeViewElem = this.getActiveViewElem();

        return (
            <div className="PortfolioHome">
                <div className={portfolioNameClasses.join(' ')}>
                Alex Alifimoff
                </div>
                <PortfolioNav navItems={navItems} 
                              activateNavView={this.activateNavView.bind(this)} 
                              moveToTop={this.state.move_to_top}
                              setActiveNavItem={this.setActiveView.bind(this)} />
                {activeViewElem}
            </div>
        );
    }

    componentDidMount() {
        setInterval(() => this.setState({visible: true}),
            200);
    }

    activateNavView() {
        this.setState({move_to_top: true});
    }

    setActiveView(viewName) {
        this.setState({activeView: viewName});
    }

    getActiveViewElem() {
        console.log(this.state.activeView);
        if(this.state.activeView == 'Resume')
        {
            return <Resume />;
        }
        return null;
    }
}

class PortfolioNav extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false, activeItem: null};
    }

    render() {
        const navItems = [];
        this.props.navItems.map((x) => {
            navItems.push(<NavItem name={x} onClick={this.handleNavClick.bind(this)}
                                   isActive={this.state.activeItem == x}/>);
        });

        const classes = ["PortfolioNav"];

        if(this.state.visible)
            classes.push("fade-in");

        if(this.props.moveToTop)
            classes.push("move-nav");

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

    handleNavClick(evt, itemName) {
        this.setState({activeItem: itemName});
        this.props.setActiveNavItem(itemName);
        this.props.activateNavView();
    }
}

class NavItem extends Component  {
    render() {
        const classes = ["NavItem"];

        if(this.props.isActive)
            classes.push("active-nav-item"); 

        return (
            <span className={classes.join(' ')} onClick={this.handleClick.bind(this)}>
                {this.props.name}
            </span>
        );
    }

    handleClick(evt) {
        this.props.onClick(evt, this.props.name);
    }
}

export default PortfolioHome;
