import Button from "@/components/done/button"
import { ToastAction } from "@/components/done/toast"
import { toast } from "@/components/reviewing/use-toast"

export const toast_card = {
  header: "Toast",
  subText: (
    <>
      A Toasts displays temporary content to the user. Toasts are rendered as a
      separate surface that can be dismissed by user action or a application
      timeout. Toasts are typically used in the following situations,to Update
      the user on the status of a task to Display the progress of a task, to
      Notify the user to take an action, or Notify the user of an application
      update, Warn the user of an error. The Fluent UI Toast component uses an
      imperative API. Once a Toaster has been rendered, you can use the
      useToastController hook to get access to imperative methods to dispatch a
      Toast. The Toast component itself is simply a layout component.
    </>
  ),
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <div className="flex gap-4">
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>{" "}
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </div>
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
      cardHeader: "Default Toast Options",
      cardSubtext:
        "Default options for all toasts can be configured on the Toaster. These options are only defaults and can be overridden using dispatchToast",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <div className="flex gap-4">
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>{" "}
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </div>
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
      cardHeader: "Update Toast",
      cardSubtext:
        "Use the updateToast imperative API to make changes to a Toast that is already visible. To do this you must provide an id when dispatching the toast. Almost all options of a Toast can be updated.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <div className="flex gap-4">
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>{" "}
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </div>
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
      cardHeader: "Dismiss Toast",
      cardSubtext:
        "Toasts can be dismissed imperatively using the dismissToast API. In order to imperatively dismiss a Toast, it's necessary to dispatch it with a user provided id. You can use the id to dismiss the toast. Don't use this API to dismiss toats when clicking on an action inside the toast, use the ToastTrigger instead.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <div className="flex gap-4">
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>{" "}
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </div>
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
      cardHeader: "Dismiss Toast With Action",
      cardSubtext:
        "By wrapping a button or link with a ToastTrigger, it`s possible to make that actionable element dismiss the toast with a click.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <div className="flex gap-4">
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>{" "}
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </div>
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
