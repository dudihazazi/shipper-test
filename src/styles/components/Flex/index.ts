import styled from "styled-components";

import type { CSSProperties } from "styled-components";

interface IFlex {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  maxHeight: CSSProperties["maxHeight"];
  minHeight: CSSProperties["minHeight"];
  maxWidth: CSSProperties["maxWidth"];
  padding: CSSProperties["padding"];
  margin: CSSProperties["margin"];
  flexShrink: CSSProperties["flexShrink"];
  flexGrow: CSSProperties["flexGrow"];
  flexWrap: CSSProperties["flexWrap"];
  alignItems: CSSProperties["alignItems"];
  justifyContent: CSSProperties["justifyContent"];
  flexDirection: CSSProperties["flexDirection"];
}

const Flex = styled("div")<Partial<IFlex>>({}, (props) => ({
  display: "flex",
  width: props.width || "initial",
  height: props.height || "initial",
  maxHeight: props.maxHeight || "initial",
  minHeight: props.minHeight || "initial",
  maxWidth: props.maxWidth || "initial",
  padding: props.padding || "0",
  margin: props.margin || "0",
  flexWrap: props.flexWrap || "initial",
  flexGrow: props.flexGrow || "initial",
  flexShrink: props.flexShrink || "initial",
  alignItems: props.alignItems || "initial",
  justifyContent: props.justifyContent || "initial",
  flexDirection: props.flexDirection || "initial",
}));

export default Flex;
