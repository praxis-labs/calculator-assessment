import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
    name: PropTypes.string,
    title: PropTypes.string,
  };

  state = {
    currName: "",
    value: null,
    nextValue: null,
  };

  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    this.setState({ currTitle: this.props.title });
  }

  handleButtonClick() {
    this.props.clickHandler(this.props.name);
  }

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  };

  renderButton = (name, { orange, wide }) => {
    let className = "component-button";
    if (this.props.orange) {
      className += " ";
      className += "orange";
    }
    if (this.props.wide) {
      className += " ";
      className += "wide";
    }

    return (
      <div className={className}>
        <button onClick={() => this.handleClick(name)}>{name}</button>
      </div>
    );
  };

  render() {
    const { currTitle } = this.state;
    return (
      <div className="component-button-panel">
        {currTitle}
        <div>
          {this.renderButton("AC", {})}
          {this.renderButton("+/-", {})}
          {this.renderButton("%", {})}
          {this.renderButton("÷", { orange: true })}
        </div>
        <div>
          {this.renderButton("7", {})}
          {this.renderButton("8", {})}
          {this.renderButton("9", {})}
          {this.renderButton("x", { orange: true })}
        </div>
        <div>
          {this.renderButton("4", {})}
          {this.renderButton("5", {})}
          {this.renderButton("6", {})}
          {this.renderButton("-", { orange: true })}
        </div>
        <div>
          {this.renderButton("1", {})}
          {this.renderButton("2", {})}
          {this.renderButton("3", {})}
          {this.renderButton("+", { orange: true })}
        </div>
        <div>
          {this.renderButton("0", { wide: true })}
          {this.renderButton(".", {})}
          {this.renderButton("=", { orange: true })}
        </div>
      </div>
    );
  }
}
