import Link from "@/components/done/link"

export const link_card = {
  header: "Link",
  subText:
    "Links allow users to navigate between different locations. They can be used as standalone controls or inline with text.",
  cards: [
    {
      cardComponent: <Link href="/?section=Accordion">This is a link</Link>,
    },
    {
      cardHeader: "Appearance",
      cardComponent: (
        <Link appearance="subtle" href="/?section=Accordion">
          Subtle link
        </Link>
      ),
    },
    {
      cardHeader: "Inline",
      cardComponent: (
        <div>
          This is an
          <Link inline href="/?section=Accordion">
            {" "}
            inline link{" "}
          </Link>
          used alongside other text.
        </div>
      ),
    },
    {
      cardHeader: "Disabled",
      cardComponent: (
        <Link disabled href="/?section=Accordion">
          Disabled link
        </Link>
      ),
    },
    {
      cardHeader: "Disabled Focusable",
      cardComponent: (
        <Link disabledFocusable href="/?section=Accordion">
          Disabled but still focusable
        </Link>
      ),
    },
    {
      cardHeader: "As Button",
      cardSubtext:
        "When the href property is not provided, the component is rendered as an html <button>",
      cardComponent: (
        <Link
          onClick={() => (window.location.href = "/?section=Accordion")}
          as="button"
        >
          Render as a button
        </Link>
      ),
    },
    {
      cardHeader: "As Span",
      cardSubtext:
        "A Link can be rendered as an html <span>, in which case it will have role=button set. Links that render as a span wrap correctly between lines, behaving as inline elements as opposed to links rendered as buttons, which always behave as inline-block elements that do not wrap correctly.",
      cardComponent: (
        <div>
          The following link renders as a span.
          <Link
            onClick={() => (window.location.href = "/?section=Accordion")}
            as="span"
          >
            {" "}
            Links that render as a span wrap correctly between lines when their
            content is very long.{" "}
          </Link>
          This is because they behave as regular inline elements.
        </div>
      ),
    },
  ],
}
