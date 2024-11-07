import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const CaretRightIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#4C51F7"
      d="M.875 11.125A.72.72 0 0 1 .65 10.6c0-.2.075-.375.225-.525L4.95 6 .875 1.925A.72.72 0 0 1 .65 1.4c0-.2.075-.375.225-.525A.72.72 0 0 1 1.4.65c.2 0 .375.075.525.225l4.5 4.5a.825.825 0 0 1 .188.287.943.943 0 0 1 0 .675.823.823 0 0 1-.188.288l-4.5 4.5a.72.72 0 0 1-.525.225.72.72 0 0 1-.525-.225Z"
    />
  </Svg>
);
