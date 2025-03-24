// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AlienFilledIcon(props) {
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
          "M12.004 2c4.942 0 8.288 2.503 8.85 6.444a12.884 12.884 0 01-2.163 9.308 11.795 11.795 0 01-3.51 3.356c-1.982 1.19-4.376 1.19-6.373-.008a11.763 11.763 0 01-3.489-3.34 12.808 12.808 0 01-2.171-9.306C3.712 4.504 7.058 2 12.004 2zm1.913 14.6a1 1 0 00-1.317-.517l-.146.055a1.5 1.5 0 01-1.054-.055l-.11-.04a1 1 0 00-.69 1.874 3.5 3.5 0 002.8 0 1 1 0 00.517-1.317zm-5.304-6.39a1 1 0 00-1.32 1.497l2 2 .094.083a1 1 0 001.32-1.497l-2-2-.094-.083zm8.094.083a1 1 0 00-1.414 0l-2 2-.083.094a1 1 0 001.497 1.32l2-2 .083-.094a1 1 0 00-.083-1.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlienFilledIcon;
/* prettier-ignore-end */
