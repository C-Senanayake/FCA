// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: g22NpEkpt3JYcyPsqXfiy7
// Component: 12lq9MvIPQ3z
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: g22NpEkpt3JYcyPsqXfiy7/projectcss
import sty from "./PlasmicConveyorImageComponent.module.css"; // plasmic-import: 12lq9MvIPQ3z/css
import img from "../../../assets/7.png";
import { Progress } from "rsuite"; 
createPlasmicElementProxy;

export const PlasmicConveyorImageComponent__VariantProps = new Array();

export const PlasmicConveyorImageComponent__ArgProps = new Array();

const $$ = {};

function PlasmicConveyorImageComponent__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", color:"#FAB611"}}>
        {/* <div className={`${classNames(sty.or_spacer_vertical,sty.left)}`}>
          <div className={`${classNames(sty.mask)}`}/>
        </div> */}
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", color:"#FAB611"}}>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", color:"#FAB611"}}>
            <Progress.Line 
              percent={80} 
              vertical={true}
              showInfo={false}
              strokeColor="#FAB611" 
              strokeWidth={12}
              style={{color:"#FAB611", padding:"0 10px", height:80}}
            /> 
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__upEq6
              )}
            >
              {"836mm"}
            </div>
          </div>
          <div
            style={{width:"180px"}}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__upEq6
            )}
          >
            {"Material Level"}
          </div>
        </div>
        <img 
            src={img} 
            alt="Conveyor Image" 
            width={"25vw"} 
            height="100" 
            style={{width:"12vw"}}
        />
        {/* <div className={`${classNames(sty.or_spacer_vertical,sty.right)}`}>
          <div className={`${classNames(sty.mask)}`}/>
        </div> */}
      </div>
    </>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicConveyorImageComponent__ArgProps,
          internalVariantPropNames: PlasmicConveyorImageComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicConveyorImageComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConveyorImageComponent";
  } else {
    func.displayName = `PlasmicConveyorImageComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicConveyorImageComponent = Object.assign(
  // Top-level PlasmicConveyorImageComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicConveyorImageComponent
    internalVariantProps: PlasmicConveyorImageComponent__VariantProps,
    internalArgProps: PlasmicConveyorImageComponent__ArgProps
  }
);

export default PlasmicConveyorImageComponent;
/* prettier-ignore-end */
