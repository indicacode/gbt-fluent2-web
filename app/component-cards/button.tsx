import Button from "@/components/done/button"

export const button_card = {
  header: "Button",
  subText: "Button triggers an action or event when activated.",
  cards: [
    {
      cardHeader: "Variants",
      cardSubtext: (
        <div className="inline">
          <code>(undefined)</code>: the button appears with the default style
          <br />
          <code>primary</code>: emphasizes the button as a primary action.
          <br />
          <code>outline</code>: removes background styling.
          <br />
          <code>subtle</code>: minimizes emphasis to blend into the background
          until hovered or focused
          <br />
          <code>transparent</code>: removes background and border styling.
          <br />
        </div>
      ),
      cardComponent: (
        <div className="flex gap-4">
          <Button shape="rounded" variant="primary">
            Primary
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button shape="circular" variant="outline">
            Outline
          </Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="transparent">Transparent</Button>
        </div>
      ),
    },
    {
      cardHeader: "Toggle",
      cardSubtext:
        "Button has an icon slot that, if specified, renders an icon either before or after the children, as specified by the iconPosition prop.",
      cardComponent: (
        <div className="flex gap-4">
          <Button toggle />
          <Button toggle variant="secondary" />
          <Button toggle variant="outline" />
          <Button toggle variant="subtle" />
          <Button toggle variant="transparent" />
        </div>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext: (
        <div className="inline">
          A button can be <code>disabled</code> or{" "}
          <code>disabledFocusable</code>. <code>disabledFocusable</code> is used
          in scenarios where it is important to keep a consistent tab order for
          screen reader and keyboard users. The primary example of this pattern
          is when the disabled button is in a menu or a commandbar and is seldom
          used for standalone buttons.
        </div>
      ),
      cardComponent: (
        <div className="flex gap-4">
          <Button disabled>Primary</Button>
          <Button disabled variant="secondary">
            Secondary
          </Button>
          <Button disabled variant="outline">
            Outline
          </Button>
          <Button disabled variant="subtle">
            Subtle
          </Button>
          <Button disabled variant="transparent">
            Transparent
          </Button>
        </div>
      ),
    },
  ],
}
