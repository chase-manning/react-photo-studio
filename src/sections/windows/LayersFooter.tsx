import React from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import ContextIndicator from "../../styles/ContextIndicator";

import contrast from "../../assets/pngs/contrast.png";
import link from "../../assets/pngs/link.png";
import style from "../../assets/pngs/style.png";
import mask from "../../assets/pngs/mask.png";
import folder from "../../assets/svgs/layers/folder.svg";
import newLayer from "../../assets/pngs/new.png";
import trash from "../../assets/svgs/layers/trash.svg";

const Footer = styled.div`
  width: 100%;
  background-color: var(--panel);
  height: 2.4rem;
  border-top: solid 1px var(--section-line);
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  height: 100%;
  display: flex;
  width: 18rem;
  margin-right: 2rem;
`;

const Asset = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const LayersFooter = () => {
  return (
    <Footer>
      <div />
      <Buttons>
        <Button square>
          <Asset src={link} />
        </Button>
        <Button square>
          <Asset src={style} />
          <ContextIndicator />
        </Button>
        <Button square>
          <Asset src={mask} />
        </Button>
        <Button square>
          <Asset src={contrast} />
          <ContextIndicator />
        </Button>
        <Button square>
          <Asset src={folder} />
        </Button>
        <Button square>
          <Asset src={newLayer} />
        </Button>
        <Button square>
          <Asset src={trash} />
        </Button>
      </Buttons>
    </Footer>
  );
};

export default LayersFooter;
