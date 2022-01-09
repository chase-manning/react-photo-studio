import styled from "styled-components";
import logo from "../../assets/images/photoshop-logo-small.png";
import { ItemType, menuItems } from "./schema/menu-items";
import MenuItem from "./MenuItem";

import facebook from "../../assets/socials/facebook.svg";
import instagram from "../../assets/socials/instagram.svg";
import twitter from "../../assets/socials/twitter.svg";
import gitHub from "../../assets/socials/github.svg";

const StyledMenu = styled.div`
  width: 100%;
  height: 3rem;
  background-color: var(--panel);
  border-bottom: solid 1px var(--border);
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
`;

const Logo = styled.img`
  padding: 5px;
  height: 100%;
  margin-right: 1rem;
`;

const Socials = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Link = styled.a``;

const Social = styled.img`
  width: 1.7rem;
  margin-right: 0.9rem;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <Left>
        <Logo src={logo} alt="logo" />
        {menuItems.map((menuItem: ItemType) => (
          <MenuItem key={menuItem.name} menuItem={menuItem} />
        ))}
      </Left>
      <Socials>
        <Link
          id="twitter-link"
          href="https://twitter.com/pso_app"
          target="_blank"
        >
          <Social src={twitter} alt="twitter" />
        </Link>
        <Link
          id="facebook-link"
          href="https://www.facebook.com/photoshoponline.app.fb"
          target="_blank"
        >
          <Social src={facebook} alt="facebook" />
        </Link>
        <Link
          id="instagram-link"
          href="https://www.instagram.com/photoshoponline.app/"
          target="_blank"
        >
          <Social src={instagram} alt="instagram" />
        </Link>
        <Link
          id="github-link"
          href="https://github.com/chase-manning/photoshop-online"
          target="_blank"
        >
          <Social src={gitHub} alt="github" />
        </Link>
      </Socials>
    </StyledMenu>
  );
};

export default Menu;
