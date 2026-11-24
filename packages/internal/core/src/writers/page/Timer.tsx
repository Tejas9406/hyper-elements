/** A Timer: on a page, a countdown image, optionally linked. */
import { assetParts, linkParts, type Asset, type LinkValue } from "../../kinds";
import { h } from "../jsx";
import type { Component } from "./context";

export const Timer: Component = ({ node, style, parent, placement, classes }) => {
  const rawSrc = node.props.src ? assetParts(node.props.src as Asset) : { src: "https://cdn.tools.unlayer.com/countdown/countdown.gif" };
  const alt = (node.props.alt as string) ?? "Countdown";
  const title = node.props.title as string | undefined;
  const img = (
    <img
      id={node.props.href ? undefined : node.id}
      class={classes()}
      src={rawSrc.src}
      alt={alt}
      title={title}
      width={typeof style.width !== "string" && node.width !== null ? node.width : undefined}
      style={[
        placement,
        {
          display: "block",
          maxWidth: style.maxWidth ?? "100%",
          width: parent.type === "Row" ? undefined : style.width,
          height: style.height ?? "auto",
          alignSelf: style.alignSelf,
          border: style.border,
          borderRadius: style.borderRadius,
        },
      ]}
    />
  );
  if (node.props.href && parent.type !== "Link") {
    const { href, target } = linkParts(node.props.href as LinkValue);
    return (
      <a id={node.id} href={href} target={target} title={title} style={{ display: "inline-block", textDecoration: "none" }}>
        {img}
      </a>
    );
  }
  return img;
};
