import React, { Component } from 'react'
import Tab from './Tab'
import TabContent from './TabContent'

class Tabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.tabName,
            activeTabIndex: 0,
            showNexButton: true,
            showPreviousButton: false,
            showSubmitButton: false
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTabIndex: tab }, () => {
            this.updateStates()
        });
    }

    nextClickHandler = () => {
        this.setState({ activeTabIndex: this.state.activeTabIndex + 1 }, () => {
            this.updateStates()
        });

    }

    previousClickHandler = () => {
        this.setState({ activeTabIndex: this.state.activeTabIndex - 1 }, () => {
            this.updateStates()
        });
    }

    updateStates = () => {
        if (this.state.activeTabIndex > 0) {
            this.setState({ showPreviousButton: true });
        }
        else {
            this.setState({ showPreviousButton: false });
        }

        if (this.state.activeTabIndex == this.props.children.length - 1) {
            this.setState({ showNexButton: false });
            this.setState({ showSubmitButton: true });
        }
        else {
            this.setState({ showNexButton: true });
            this.setState({ showSubmitButton: false });
        }
    }

    buttons = () => {

    }

    render() {

        let buttons = null;

        if (this.props.showButtons) {
            buttons = (
                <div className='buttonsContainer' >
                    {
                        this.state.showPreviousButton ? <button onClick={this.previousClickHandler}> Previous</button> : ''
                    }
                    {
                        this.state.showNexButton ? <button onClick={this.nextClickHandler}> Next </button> : ''
                    }
                    {
                        this.state.showSubmitButton ? <button> Submit </button> : ''
                    }
                </div>
            )
        }

        return (
            <div className="tabs">
                <div className='tabsContainer'>
                    <ol className="tab-list">
                        {
                            this.props.children.map((child, index) => {

                                return (
                                    <Tab
                                        activeTabIndex={this.state.activeTabIndex}
                                        key={index}
                                        currentIndex={index}
                                        tabName={child.props.tabName}
                                        onClick={this.onClickTabItem.bind(this, index)}
                                    />
                                );
                            })
                        }

                    </ol>

                    <div className="tab-content">
                        {/* <TabContent tabContent={this.props.children[this.state.activeTabIndex].props.children} /> */}

                        {
                            this.props.children.map((child, index) => {

                                return (
                                    <TabContent key={index}
                                        show={index == this.state.activeTabIndex}
                                        tabContent={this.props.children[index].props.children} />

                                );
                            })
                        }
                    </div>

                </div>

                {buttons}

            </div>
        );
    }
}

export default Tabs
