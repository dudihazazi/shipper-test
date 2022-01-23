import styled from "styled-components";
import type { CSSProperties } from "styled-components";

import { white } from "../../variables/colors";

interface ICard {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  padding: CSSProperties["padding"];
  margin: CSSProperties["margin"];
  borderRadius: CSSProperties["borderRadius"];
  backgroundColor: CSSProperties["backgroundColor"];
}

const Card = styled("div")<Partial<ICard>>({}, (props) => ({
  width: props.width || "initial",
  height: props.height || "initial",
  padding: props.padding || "0",
  margin: props.margin || "0",
  borderRadius: props.borderRadius || "0",
  backgroundColor: props.backgroundColor || white,
}));

export default Card;
