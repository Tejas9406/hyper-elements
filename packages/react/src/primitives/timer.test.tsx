import { describe, expect, it } from "vitest";
import React from "react";
import { Email, Page, Timer, render, validate } from "./index";

describe("<Timer>", () => {
  it("renders a timer in an Email as an image", async () => {
    const { html, text, diagnostics } = await render(
      <Email>
        <Timer src="https://cdn.tools.unlayer.com/countdown/countdown.gif" alt="Sale ends in 24h" />
      </Email>,
    );

    expect(diagnostics.filter((d) => d.severity === "error")).toEqual([]);
    expect(html).toContain('src="https://cdn.tools.unlayer.com/countdown/countdown.gif"');
    expect(html).toContain('alt="Sale ends in 24h"');
    expect(text).toContain("[Sale ends in 24h]");
  });

  it("renders a linked timer in an Email with an anchor tag and plain text link", async () => {
    const { html, text, diagnostics } = await render(
      <Email>
        <Timer
          src="https://cdn.tools.unlayer.com/countdown/countdown.gif"
          alt="Sale ends in 24h"
          href="https://example.com/flash-sale"
          title="Flash Sale"
        />
      </Email>,
    );

    expect(diagnostics.filter((d) => d.severity === "error")).toEqual([]);
    expect(html).toContain('href="https://example.com/flash-sale"');
    expect(html).toContain('title="Flash Sale"');
    expect(html).toContain('src="https://cdn.tools.unlayer.com/countdown/countdown.gif"');
    expect(text).toContain("[Sale ends in 24h] (https://example.com/flash-sale)");
  });

  it("renders a timer in a Page with styles", async () => {
    const { html, text, diagnostics } = await render(
      <Page>
        <Timer
          src="https://cdn.tools.unlayer.com/countdown/countdown.gif"
          alt="Countdown"
          style={{ width: 320, maxWidth: 400, borderRadius: 8, border: "2px solid #333333" }}
        />
      </Page>,
    );

    expect(diagnostics.filter((d) => d.severity === "error")).toEqual([]);
    expect(html).toContain('src="https://cdn.tools.unlayer.com/countdown/countdown.gif"');
    expect(html).toContain('alt="Countdown"');
    expect(html).toContain("border:2px solid #333");
    expect(html).toContain("border-radius:8px");
    expect(text).toContain("[Countdown]");
  });

  it("renders a linked timer in a Page", async () => {
    const { html, diagnostics } = await render(
      <Page>
        <Timer
          src="https://cdn.tools.unlayer.com/countdown/countdown.gif"
          alt="Countdown"
          href="https://example.com/deal"
        />
      </Page>,
    );

    expect(diagnostics.filter((d) => d.severity === "error")).toEqual([]);
    expect(html).toContain('<a href="https://example.com/deal"');
    expect(html).toContain('src="https://cdn.tools.unlayer.com/countdown/countdown.gif"');
  });

  it("validates without diagnostic errors", () => {
    const result = validate(
      <Email>
        <Timer src="https://cdn.tools.unlayer.com/countdown/countdown.gif" alt="Ends soon" />
      </Email>,
    );
    expect(result.diagnostics.filter((d) => d.severity === "error")).toEqual([]);
  });
});
