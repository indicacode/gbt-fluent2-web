import Button from "@/components/done/button"
import { Progress } from "@/components/not-done/progress"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/reviewing/popover"

export const popover_card = {
  header: "Popover",
  subText: <>A popover displays content on top of other content.</>,
  cards: [
    {
      cardHeader: "Default",
      cardSubtext: "",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      cardHeader: "Trapping Focus",
      cardSubtext:
        "When a Popover contains focusable elements, the modal dialog pattern will apply. By using the trapFocus prop, the component sets aria-hidden appropriately to parent elements in the document so that elements not contained in the focus trap are hidden to screen reader users. This focus trap is automatically removed when the Popover is closed.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
                <div className={"flex flex-row"}>
                  <Button className={"mt-1"} variant={"secondary"}>
                    Action
                  </Button>
                  <Button className={"mt-1 ml-2"} variant={"secondary"}>
                    Action
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      cardHeader: "Controlling Open And Close",
      cardSubtext:
        "The opening and close of the Popover can be controlled with your own state. The onOpenChange callback will provide the hints for the state and triggers based on the appropriate event.\n" +
        "\n" +
        "When controlling the open state of the Popover, extra effort is required to ensure that interactions are still appropriate and that keyboard accessibility does not degrade.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
                <div className={"flex flex-row"}>
                  <Button className={"mt-1"} variant={"secondary"}>
                    Action
                  </Button>
                  <Button className={"mt-1 ml-2"} variant={"secondary"}>
                    Action
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      cardHeader: "Nested Popovers",
      cardSubtext:
        "Popovers can be nested within each other. Too much nesting can result in extra accessibility considerations and are generally not a great user experience Since nested popovers will generally have an interactive PopoverTrigger to control the nested popover, make sure to combine their usage with the trapFocus prop for correct screen reader and keyboard accessibility Try and limit nesting to 2 levels Make sure to use trapFocus when nestingCreating nested popovers as separate components will result in more maintainable code ",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
                <div className={"flex flex-row"}>
                  <Button className={"mt-1"} variant={"secondary"}>
                    Action
                  </Button>
                  <Button className={"mt-1 ml-2"} variant={"secondary"}>
                    Action
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      cardHeader: "Anchor To Custom Target",
      cardSubtext:
        "A Popover can be used without a trigger and anchored to any DOM element. This can be useful if a Popover instance needs to be reused in different places.\n" +
        "\n" +
        "Not using a PopoverTrigger will require more work to make sure your scenario is accessible, such as, implementing accessible markup and keyboard interactions for your trigger.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
                <div className={"flex flex-row"}>
                  <Button className={"mt-1"} variant={"secondary"}>
                    Action
                  </Button>
                  <Popover>
                    <PopoverTrigger>Open Nested Popover</PopoverTrigger>
                    <PopoverContent
                      className={"rounded-md px-3 py-4"}
                      sideOffset={-11}
                    >
                      <div className={"h-full w-full"}>
                        <h2>This is a nested popover placed in this</h2>
                      </div>
                      <Popover>
                        <PopoverTrigger>
                          <Button variant={"primary"}>
                            Another nested popover!
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent sideOffset={-11}>
                          No More Popovers from here on
                        </PopoverContent>
                      </Popover>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      cardHeader: "Custom Trigger",
      cardSubtext:
        "Native elements and Fluent components have first class support as children of PopoverTrigger so they will be injected automatically with the correct props for interactions and accessibility attributes.  It is possible to use your own custom React component as a child of PopoverTrigger. These components should use ref forwarding with React.forwardRef",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
                <div className={"flex flex-row"}>
                  <Button className={"mt-1"} variant={"secondary"}>
                    Action 1{" "}
                  </Button>
                  <Button className={"mt-1 ml-2"} variant={"primary"}>
                    Action 2
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      cardHeader: "Without Trigger",
      cardSubtext:
        "When using a Popover without a PopoverTrigger, it is up to the user to make sure that the focus is restored correctly when the popover is closed. This can be done quite easily by using the useRestoreFocusTarget hook. The Popover already uses the useRestoreFocusSource hook directly, which will restore focus to the most recently focused target on close.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
                <div className={"flex flex-row"}>
                  <Button className={"mt-1"} variant={"secondary"}>
                    Action 1{" "}
                  </Button>
                  <Button className={"mt-1 ml-2"} variant={"primary"}>
                    Action 2
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      cardHeader: "Internal Update Content",
      cardSubtext: "",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
                <div className={"flex flex-row"}>
                  <Button className={"mt-1"} variant={"secondary"}>
                    Action 1{" "}
                  </Button>
                  <Button className={"mt-1 ml-2"} variant={"primary"}>
                    Action 2
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "When using a Popover without a PopoverTrigger, it is up to the user to make sure that the focus is restored correctly when the popover is closed. This can be done quite easily by using the useRestoreFocusTarget hook. The Popover already uses the useRestoreFocusSource hook directly, which will restore focus to the most recently focused target on close.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Popover>
            <PopoverTrigger>Popover Trigger</PopoverTrigger>
            <PopoverContent className={"rounded-md px-3 py-4"} sideOffset={-11}>
              <div>
                <h2 className={"mb-1 text-lg font-extrabold"}>
                  This is a Popover!
                </h2>
                <h3 className={"text-md pl-1"}>
                  ... And you can edit it to contain whatever you want!
                </h3>
                <div className={"flex flex-row"}>
                  <Button className={"mt-1"} variant={"secondary"}>
                    Action 1{" "}
                  </Button>
                  <Button className={"mt-1 ml-2"} variant={"primary"}>
                    Action 2
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      header: "ProgressBar",
      subText: (
        <>
          Progress bars allow users to not have the feeling that an action is
          not progressing, by giving them a visual cue of how close they are to
          completion, you retain the user`s attention with ease.
        </>
      ),
      cards: [
        {
          cardHeader: "Default Appearance",
          cardSubtext: "The normal progressbar.",
          cardComponent: (
            <div className="flex flex-col gap-2">
              <Progress></Progress>
            </div>
          ),
        },

        {
          cardHeader: "Appearance",
          cardSubtext: "",

          cardComponent: (
            <div className="flex flex-col gap-2">
              <Progress></Progress>
            </div>
          ),
        },
        {
          cardHeader: "Inline",
          cardSubtext: "",

          cardComponent: (
            <div className="flex flex-col gap-2">
              <Progress></Progress>
            </div>
          ),
        },
        {
          cardHeader: "Appearance",
          cardSubtext: "",

          cardComponent: (
            <div className="flex flex-col gap-2">
              <Progress></Progress>
            </div>
          ),
        },
        {
          cardHeader: "As Button",
          cardSubtext:
            "When the href property is not provided, the component is rendered as a html  <button/>",

          cardComponent: (
            <div className="flex flex-col gap-2">
              <Progress></Progress>
            </div>
          ),
        },
        {
          cardHeader: "As Span",
          cardSubtext:
            'A Link can be rendered as an html <span>, in which case it will have role="button" set. Links that render as a span wrap correctly between lines, behaving as inline elements as opposed to links rendered as buttons, which always behave as inline-block elements that do not wrap correctly.',

          cardComponent: (
            <div className="flex flex-col gap-2">
              <Progress></Progress>
            </div>
          ),
        },
      ],
    },
  ],
}
