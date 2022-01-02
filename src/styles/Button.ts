import styled from "styled-components";

interface Props {
  selected?: boolean;
  height?: string;
  width?: string;
  square?: boolean;
  disabled?: boolean;
}

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
  opacity: ${(props: Props) => (props.disabled ? "0.4" : "1")};
  cursor: ${(props: Props) => (props.disabled ? "not-allowed" : "auto")};

  background-color: ${(props: Props) =>
    props.selected ? "var(--selected)" : "var(--panel)"};
  border: solid 1px
    ${(props: Props) =>
      props.selected ? "var(--hover-border)" : "var(--panel)"};
  :hover {
    background-color: ${(props: Props) => {
      if (props.disabled) return "var(--panel)";
      if (props.selected) return "var(--selected)";
      return "var(--hover-bg)";
    }};
    border: ${(props: Props) =>
      props.disabled ? "solid 1px none" : "solid 1px var(--hover-border)"};
  }
`;

export default Button;
