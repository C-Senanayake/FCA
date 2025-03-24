// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ChessRookFilledIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 3a1 1 0 01.993.883L15 4v2h1.652l.362-2.164A1 1 0 0118.048 3l.116.013A1 1 0 0119 4.048l-.013.116-.5 3a1 1 0 01-.865.829L17.5 8h-1.383l.877 7.89a1 1 0 01-.877 1.103L16 17H8a1 1 0 01-1-.993l.006-.117L7.883 8H6.5a1 1 0 01-.96-.718l-.026-.118-.5-3a1 1 0 011.947-.442l.025.114L7.347 6H9V4a1 1 0 011.993-.117L11 4v2h2V4a1 1 0 011-1zm4 15H6a1 1 0 00-1 1 2 2 0 002 2h10a2 2 0 001.987-1.768l.011-.174A1 1 0 0018 18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChessRookFilledIcon;
/* prettier-ignore-end */
