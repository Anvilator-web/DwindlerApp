import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavItem extends React.Component {
  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}
