import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, NavbarBrand, NavLink } from 'reactstrap';


function Nav() {
return (
    <>
<div>
  <Navbar
    color="secondary"
    dark
    expand="md"
    light
  >
    <NavbarBrand href="/">
      John Guzzetta IV
    </NavbarBrand>
    <NavLink href='www.publix.com'>
    Publix
    </NavLink>
  </Navbar>
</div>
</>
);
}

export default Nav;