/**
 * A Timer: in an email, a countdown GIF image, optionally linked.
 */
import { assetParts, linkParts, type Asset, type LinkValue } from "../../kinds";
import { h } from "../jsx";
import type { Component } from "./context";
import { fluidImage, PLACE, toNumber } from "./layout";

export const Timer: Component = ({ node, style, mobile, parent, fill }) => {
  const rawSrc = node.props.src ? assetParts(node.props.src as Asset) : { src: "https://cdn.tools.unlayer.com/countdown/countdown.gif" };
  const width = node.width ?? undefined;
  const height = style.height !== undefined ? toNumber(style.height) : undefined;
  const fluid = fluidImage(node, style, mobile, fill);
  const alt = (node.props.alt as string) ?? "Countdown";
  const title = node.props.title as string | undefined;
  const img = (
    <img
      id={node.props.href ? undefined : node.id}
      phone={fluid.phone}
      src={rawSrc.src}
      alt={alt}
      title={title}
      width={width}
      border="0"
      style={[
        { display: "block", ...fluid.style, height: height ?? "auto", border: "0" },
        { border: style.border, borderRadius: style.borderRadius },
        PLACE[style.alignSelf as string],
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
