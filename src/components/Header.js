import headerlogo from '../images/headerlogo.svg';


function Header() {
  return (
    <header class="header">
      <img class="header__logo" src={headerlogo} alt="Логотип сайта" />
    </header>
  );
}

export default Header;
