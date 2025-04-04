// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: g22NpEkpt3JYcyPsqXfiy7
// Component: 0dff0RkiWsWX
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: g22NpEkpt3JYcyPsqXfiy7/projectcss
import sty from "./PlasmicFooterComponent.module.css"; // plasmic-import: 0dff0RkiWsWX/css

createPlasmicElementProxy;

export const PlasmicFooterComponent__VariantProps = new Array();

export const PlasmicFooterComponent__ArgProps = new Array();

const $$ = {};

function PlasmicFooterComponent__RenderFunc(props) {
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__pKk1T)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cgPv
          )}
        >
          {"Next monthly maintenance:"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cJolv
          )}
        >
          {"30d 23h"}
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__gNKmO)} />
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__mECkp
        )}
      >
        {"FAST CONVEYOR ANALYZER"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__dyC4
        )}
      >
        {"v1.0.0"}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__z9Vb8)} />
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__lw3U)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__yZyBd
          )}
        >
          {"Friday, 14.02.2025"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__fwFX
          )}
        >
          {"11:12:32"}
        </div>
      </Stack__>
    </Stack__>
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
          internalArgPropNames: PlasmicFooterComponent__ArgProps,
          internalVariantPropNames: PlasmicFooterComponent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterComponent";
  } else {
    func.displayName = `PlasmicFooterComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterComponent = Object.assign(
  // Top-level PlasmicFooterComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFooterComponent
    internalVariantProps: PlasmicFooterComponent__VariantProps,
    internalArgProps: PlasmicFooterComponent__ArgProps
  }
);

export default PlasmicFooterComponent;
/* prettier-ignore-end */
