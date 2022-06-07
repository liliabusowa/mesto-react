import headerlogo from '../images/headerlogo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerlogo} alt="Логотип сайта" />
    </header>
  );
}

export default Header;