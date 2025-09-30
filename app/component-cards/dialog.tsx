import Button from "@/components/done/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/reviewing/dialog"

export const dialog_card = {
  header: "Dialog",
  subText: (
    <div className="inline">
      <code>Dialog</code> is a window overlaid on either the primary window or
      another dialog window. Windows under a modal dialog are inert. That is,
      users cannot interact with content outside an active dialog window. Inert
      content outside an active dialog is typically visually obscured or dimmed
      so it is difficult to discern, and in some implementations, attempts to
      interact with the inert content cause the dialog to close.
    </div>
  ),
  cards: [
    {
      cardHeader: "Alert",
      cardSubtext:
        "An alert Dialog is a modal dialog that interrupts the user's workflow to communicate an important message and acquire a response. Examples include action confirmation prompts and error message confirmations. The alert Dialog role enables assistive technologies and browsers to distinguish alert dialogs from other dialogs so they have the option of giving alert dialogs special treatment, such as playing a system alert sound. By default clicking on backdrop will not dismiss an alert Dialog.",
      cardComponent: (
        <Dialog>
          <DialogTrigger>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>This is a dialog.</DialogTitle>
            </DialogHeader>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              exercitationem cumque repellendus eaque est dolor eius expedita
              nulla ullam? Tenetur reprehenderit aut voluptatum impedit
              voluptates in natus iure cumque eaque?
            </h2>
            <div className="flex flex-row justify-end">
              <DialogTrigger className="mr-2" asChild>
                <Button variant={"secondary"}>Deny</Button>
              </DialogTrigger>
              <DialogTrigger className="" asChild>
                <Button variant={"primary"}>Agree</Button>
              </DialogTrigger>
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
    {
      cardHeader: "Scrolling Long Content",
      cardSubtext:
        "By default DialogContent should grow until it fits viewport size, overflowed content will be scrollable",
      cardComponent: (
        <Dialog>
          <DialogTrigger>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>This is a dialog.</DialogTitle>
            </DialogHeader>
            <h2 className={"max-h-20 overflow-y-scroll"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              exercitationem cumque repellendus eaque est dolor eius expedita
              nulla ullam? Tenetur reprehenderit aut voluptatum impedit
              voluptates in natus iure cumque eaque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam exercitationem cumque
              repellendus eaque est dolor eius expedita nulla ullam? Tenetur
              reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam exercitationem cumque repellendus eaque est dolor
              eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum
              impedit voluptates in natus iure cumque eaque?
            </h2>
            <div className="flex flex-row justify-end">
              <DialogTrigger className="mr-2">
                <Button variant={"secondary"}>Deny</Button>
              </DialogTrigger>
              <DialogTrigger className="">
                {" "}
                <Button variant={"primary"}>Agree</Button>
              </DialogTrigger>
            </div>
          </DialogContent>
        </Dialog>
      ),
    },
  ],
}
