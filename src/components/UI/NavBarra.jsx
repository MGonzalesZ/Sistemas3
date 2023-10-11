import './btnstyle.css';
// import Link from 'next/link';

function Navbarra(props) {
  const { title, links } = props;
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-title">{title}</span>
      </div>
      <div className="navbar-links">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbarra;
