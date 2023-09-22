import styled from "styled-components";
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
        
        {menuItems.map((menuItem: ItemType) => (
          <MenuItem key={menuItem.name} menuItem={menuItem} />
        ))}
      </Left>
     
    </StyledMenu>
  );
};

export default Menu;
