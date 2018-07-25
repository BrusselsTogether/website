import React from 'react';
import { Link } from 'react-router';
import { rhythm, fontSizeToMS } from '../utils/typography'
import { prefixLink } from 'gatsby-helpers'

const sections = ['Manifesto', 'Services', 'FAQ', 'About'];

class Nav extends React.Component {

  createNavItem(text, idx) {
    return (
      <li key={idx} className="nav-item__item">
        <Link to={prefixLink(`/${text.toLowerCase()}/`)} className="text-link__decorate">{text}</Link>
      </li>
    );
  }

  render() {
    const items = sections.map((s, idx) => this.createNavItem(s, idx));

    return (
      <ul className="nav-menu">
        {items}
      </ul>
    );
  }
}

export default Nav;
