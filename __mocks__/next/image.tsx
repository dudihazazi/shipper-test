//mock next/Image for testing. see: https://github.com/vercel/next.js/issues/26749
import * as React from "react";

const mock = (props: { children: React.ReactElement }): React.ReactElement => {
  return <>{props.children}</>;
};

export default mock;
