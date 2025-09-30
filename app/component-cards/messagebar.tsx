import Button from "@/components/done/button"
import { ToastAction } from "@/components/reviewing/toast"
import { toast } from "@/components/reviewing/use-toast"

export const messagebar_card = {
  header: "MessageBar",
  subText: <></>,
  cards: [
    {
      cardHeader: "Default",
      cardSubtext: "",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                messageBar: true,
                variant: "error",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </>
                ),
              })
            }}
          >
            Add to calendar
          </Button>
        </div>
      ),
    },
    {
      cardHeader: "Intent",
      cardSubtext:
        "MessageBar components come built-in with preset intents that determine the design and aria live announcement, While it is recommended to use the preset intents, it's possible to configure the aria live politeness with the politeness prop.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                messageBar: true,
                variant: "error",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </>
                ),
              })
            }}
          >
            Add to calendar
          </Button>
        </div>
      ),
    },

    {
      cardHeader: "Shape",
      cardSubtext:
        "MessageBar can have either rounded-sm or square corners, please follow the usage guidance for these shapes:\n" +
        "\n" +
        "    rounded-sm used for component level message bars\n" +
        "    square used for page/app level message bars",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                messageBar: true,
                variant: "error",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </>
                ),
              })
            }}
          >
            Add to calendar
          </Button>
        </div>
      ),
    },
    {
      cardHeader: "Actions",
      cardSubtext: "The MessageBar can have different actions.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                messageBar: true,
                variant: "error",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </>
                ),
              })
            }}
          >
            Add to calendar
          </Button>
        </div>
      ),
    },
    {
      cardHeader: "Dismiss",
      cardSubtext:
        "MessageBar components should be used in a MessageBarGroup when possible to enable exit animations. Once inside a MessageBarGroup component, the default exit animation will trigger automatically when the component is unmounted from DOM.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                messageBar: true,
                variant: "error",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </>
                ),
              })
            }}
          >
            Add to calendar
          </Button>
        </div>
      ),
    },
    {
      cardHeader: "Animation",
      cardSubtext:
        "Enter animations are also handled within the MessageBarGroup. However avoid entry animations for MessageBar components on page load. However, MessageBar components that are mounted during the lifecycle of an app can use enter animations.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                messageBar: true,
                variant: "error",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </>
                ),
              })
            }}
          >
            Add to calendar
          </Button>
        </div>
      ),
    },

    {
      cardHeader: "Reflow",
      cardSubtext:
        "The MessageBar will reflow by default once the body content wraps to a second line. This changes the layout of the actions in the MessageBar.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                messageBar: true,
                variant: "error",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </>
                ),
              })
            }}
          >
            Add to calendar
          </Button>
        </div>
      ),
    },

    {
      cardHeader: "Manual Layout",
      cardSubtext:
        "It's possible to opt out of automatic reflow with the layout prop. This can be useful if an application has an existing responsive design mechanism.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                messageBar: true,
                variant: "error",
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </>
                ),
              })
            }}
          >
            Add to calendar
          </Button>
        </div>
      ),
    },
  ],
}
