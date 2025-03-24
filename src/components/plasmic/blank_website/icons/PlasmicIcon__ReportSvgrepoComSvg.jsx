// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ReportSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 60 60"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M56.5 49V1c0-.6-.4-1-1-1h-45c-.6 0-1 .4-1 1v14h2V2h43v46h-9c-.6 0-1 .4-1 1v9h-33V43h-2v16c0 .6.4 1 1 1h35c.3 0 .5-.1.7-.3l10-10c.1-.1.1-.2.2-.3v-.1c.1-.1.1-.2.1-.3zm-10 1h6.6l-3.3 3.3-3.3 3.3V50z"
        }
      ></path>

      <path
        d={
          "M16.5 38h10v-2h-3V17c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v6h-5c-.6 0-1 .4-1 1v4h-5c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h12zm1-20h4v18h-4V18zm-6 7h4v11h-4V25zm-6 5h4v6h-4v-6zm45-6V7c0-.6-.4-1-1-1h-21c-.6 0-1 .4-1 1v17c0 .6.4 1 1 1h21c.6 0 1-.4 1-1zm-2-12h-12V8h12v4zm-14-4v4h-5V8h5zm-5 6h5v9h-5v-9zm7 9v-9h12v9h-12zm-8 5h21v2h-21zm0 5h21v2h-21zm0 5h21v2h-21zm-14-32h6v2h-6zm0 5h9v2h-9zm0 32h7v2h-7zm10 0h7v2h-7zm10 0h7v2h-7zm-20 5h7v2h-7zm10 0h7v2h-7zm10 0h7v2h-7zm-20 5h7v2h-7zm10 0h7v2h-7zm10 0h7v2h-7z"
        }
      ></path>
    </svg>
  );
}

export default ReportSvgrepoComSvgIcon;
/* prettier-ignore-end */
