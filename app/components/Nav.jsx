var React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get weather</IndexLink>
        </li>
        <li>
          <Link to="about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
        </li>
        <li>
          <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
        </li>
      </ul>
    </div>
  );
}

module.exports = Nav;
