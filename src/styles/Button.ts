import styled from "styled-components";

type Props = {
  selected?: boolean;
  height?: string;
  width?: string;
  square?: boolean;
};

const Button = styled.button`
  position: relative;
  height: ${(props: Props) => props.height || "100%"};
  width: ${(props: Props) => props.width || "100%"};
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props: Props) => (props.square ? "0" : "0.2rem")};
  padding: 0.4rem;

  background-color: ${(props: Props) =>
    props.selected ? "var(--selected)" : "var(--panel)"};
  border: solid 1px
    ${(props: Props) =>
      props.selected ? "var(--hover-border)" : "var(--panel)"};
  :hover {
    background-color: ${(props: Props) =>
      props.selected ? "var(--selected)" : "var(--hover-bg)"};
    border: solid 1px var(--hover-border);
  }
`;

export default Button;
