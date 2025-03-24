// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MacroFilledIcon(props) {
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
          "M17.994 2.888L18 3v3a6 6 0 01-5 5.916v4.186A6.98 6.98 0 0118 14a1 1 0 011 1 7 7 0 11-14 0 1 1 0 011-1c1.96 0 3.731.805 5.002 2.103L11 11.917A6 6 0 016 6V3a1 1 0 011.555-.832l2.317 1.544 1.42-1.42a1 1 0 011.32-.082l.095.083 1.42 1.419 2.318-1.544a1 1 0 011.55.72M7.13 16.128l.03.134a5.01 5.01 0 003.71 3.61 5 5 0 00-3.74-3.744zm9.742.002l-.134.03a5.01 5.01 0 00-3.61 3.71 5 5 0 003.744-3.74z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MacroFilledIcon;
/* prettier-ignore-end */
