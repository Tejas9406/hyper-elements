import type { Meta } from "@storybook/react-vite";
import { args, argTypes, asEmailAndPage, type Args } from "../../../stories/SideBySide";
import { Column, Heading, Row, Section, Text, Timer } from "../../index";

const meta: Meta<Args> = {
  title: "Components/Timer",
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: "A countdown timer: an animated countdown clock image in emails and on web pages, optionally linked to a target URL. Each story is drawn as an Email and as a Page, from one template; \"Show code\" has it.",
      },
    },
  },
};
export default meta;

const story = asEmailAndPage;

const PAPER = "#FAFAF9";
const CARD = "#FFFFFF";
const INK = "#1C1917";
const MUTED = "#78716C";
const ACCENT = "#E11D48";
const BORDER = "#E7E5E4";

const root = {
  width: 600,
  lang: "en",
  style: {
    backgroundColor: PAPER,
    color: INK,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 16,
    lineHeight: 1.5,
  },
};

/** Default timer countdown GIF for demo */
const DEMO_TIMER = "https://cdn.tools.unlayer.com/countdown/countdown.gif";

/** Standard countdown timer with default settings. */
export const Default = story((Root) => (
  <Root {...root}>
    <Section style={{ padding: [48, 32], gap: 24, mobile: { padding: [32, 20] } }}>
      <Heading level={2} style={{ fontSize: 24, fontWeight: 700, textAlign: "center", color: INK }}>
        Flash Sale Ends Soon
      </Heading>
      <Text style={{ textAlign: "center", color: MUTED }}>
        Don&apos;t miss out on our biggest discounts of the season.
      </Text>
      <Timer src={DEMO_TIMER} alt="Flash Sale Countdown" />
    </Section>
  </Root>
));

/** Countdown timer linked to a promotional landing page. */
export const LinkedTimer = story((Root) => (
  <Root {...root}>
    <Section style={{ padding: [48, 32], gap: 24, mobile: { padding: [32, 20] } }}>
      <Heading level={2} style={{ fontSize: 24, fontWeight: 700, textAlign: "center", color: INK }}>
        Exclusive Member Preview
      </Heading>
      <Timer
        src={DEMO_TIMER}
        alt="Member Preview Countdown"
        href="https://example.com/sale"
        title="Claim your early access discount"
      />
      <Text style={{ textAlign: "center", fontSize: 14, color: ACCENT }}>
        Click the timer above to access the secret catalog.
      </Text>
    </Section>
  </Root>
));

/** Customized countdown timer with border, rounded corners, and constrained sizing. */
export const CustomizedTimer = story((Root) => (
  <Root {...root}>
    <Section style={{ padding: [48, 32], gap: 24, mobile: { padding: [32, 20] } }}>
      <Row style={{ backgroundColor: CARD, padding: 32, borderRadius: 12, border: `1px solid ${BORDER}` }}>
        <Column style={{ gap: 16, alignItems: "center" }}>
          <Heading level={3} style={{ fontSize: 20, fontWeight: 600, textAlign: "center" }}>
            Weekend Drop
          </Heading>
          <Timer
            src={DEMO_TIMER}
            alt="Weekend Drop Countdown"
            style={{
              maxWidth: 420,
              borderRadius: 8,
              border: `2px solid ${BORDER}`,
            }}
          />
        </Column>
      </Row>
    </Section>
  </Root>
));
