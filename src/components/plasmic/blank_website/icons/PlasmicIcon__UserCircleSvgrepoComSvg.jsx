// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UserCircleSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".5"}
        d={
          "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16.807 19.011A8.46 8.46 0 0112 20.5a8.46 8.46 0 01-4.807-1.489c-.604-.415-.862-1.205-.51-1.848C7.41 15.83 8.91 15 12 15c3.09 0 4.59.83 5.318 2.163.35.643.093 1.433-.511 1.848zM12 12a3 3 0 100-6 3 3 0 000 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UserCircleSvgrepoComSvgIcon;
/* prettier-ignore-end */
