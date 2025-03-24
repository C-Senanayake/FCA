// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: g22NpEkpt3JYcyPsqXfiy7
// Component: e_5O9Bi7EuOT
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseOverlayArrow } from "@plasmicpkgs/react-aria/skinny/registerOverlayArrow";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: g22NpEkpt3JYcyPsqXfiy7/projectcss
import sty from "./PlasmicOverlayArrow.module.css"; // plasmic-import: e_5O9Bi7EuOT/css
import TriangleFilledIcon from "./icons/PlasmicIcon__TriangleFilled"; // plasmic-import: ffdSY5E0o9SK/icon

createPlasmicElementProxy;

export const PlasmicOverlayArrow__VariantProps = new Array("dark");

export const PlasmicOverlayArrow__ArgProps = new Array();

const $$ = {};

function PlasmicOverlayArrow__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "dark",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.dark
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [$ccVariants, setDollarCcVariants] = React.useState({
    placementTop: false,
    placementLeft: false,
    placementRight: false
  });
  const updateVariant = React.useCallback(changes => {
    setDollarCcVariants(prev => {
      if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
        return prev;
      }
      return { ...prev, ...changes };
    });
  }, []);
  return (
    <BaseOverlayArrow
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootdark]: hasVariant($state, "dark", "dark") }
      )}
      plasmicUpdateVariant={updateVariant}
    >
      <TriangleFilledIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgdark]: hasVariant($state, "dark", "dark")
        })}
        role={"img"}
      />
    </BaseOverlayArrow>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicOverlayArrow__ArgProps,
          internalVariantPropNames: PlasmicOverlayArrow__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOverlayArrow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOverlayArrow";
  } else {
    func.displayName = `PlasmicOverlayArrow.${nodeName}`;
  }
  return func;
}

export const PlasmicOverlayArrow = Object.assign(
  // Top-level PlasmicOverlayArrow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicOverlayArrow
    internalVariantProps: PlasmicOverlayArrow__VariantProps,
    internalArgProps: PlasmicOverlayArrow__ArgProps
  }
);

export default PlasmicOverlayArrow;
/* prettier-ignore-end */
