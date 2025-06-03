import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/done/drawer"

export const drawer_card = {
  header: "Drawer",
  subText: (
    <div className="mt-4 flex flex-col">
      <div>
        The Drawer gives users a quick entry point to configuration and
        information. It should be used when retaining context is beneficial to
        users.
      </div>
      <br />
      <div>There are three main components to represent a Drawer:</div>
      <ul className="list-disc pl-8">
        <li>
          <code>OverlayDrawer</code>: An overlay Drawer renders on top of the
          whole page. By default blocks the screen and will require the user's
          full attention. Uses Dialog component under the hood.
        </li>
        <li>
          <code>InlineDrawer</code>: An inline Drawer renders within a container
          and can be placed next to any content.
        </li>
        <li>
          <code>Drawer</code>: A combination of OverlayDrawer and InlineDrawer.
          Used when toggling g between the two modes is necessary. Often used
          for responsiveness.
        </li>
      </ul>
    </div>
  ),
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <Drawer defaultOpen={true} position="bottom">
          <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
            Open drawer
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center">
              <DrawerTitle>Im the header!</DrawerTitle>
            </DrawerHeader>
            <DrawerDescription className={"text-slate-50"}>
              And i the content
            </DrawerDescription>
            <DrawerFooter>aaaaaaa</DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
    },
    {
      cardHeader: "Overlay",
      cardSubtext:
        "OverlayDrawer contains supplementary content and is used for complex creation, edit, or management experiences. For example, viewing details about an item in a list or editing settings. By default, drawer is blocking and signifies that the user's full attention is required when making configurations.",
      cardComponent: (
        <Drawer defaultOpen={false} position="bottom">
          <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
            Open drawer
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center">
              <DrawerTitle>Im the header!</DrawerTitle>
            </DrawerHeader>
            <DrawerDescription className={"text-slate-50"}>
              And i the content
            </DrawerDescription>
            <DrawerFooter>aaaaaaa</DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
    },
    {
      cardHeader: "Overlay No Modal",
      cardSubtext:
        "An overlay is optional depending on whether or not interacting with the background content is beneficial to the user's context/scenario. By setting the modalType prop to non-modal, the Drawer will not be blocking and the user can interact with the background content.",
      cardComponent: (
        <Drawer defaultOpen={false} position="bottom">
          <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
            Open drawer
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center">
              <DrawerTitle>Im the header!</DrawerTitle>
            </DrawerHeader>
            <DrawerDescription className={"text-slate-50"}>
              And i the content
            </DrawerDescription>
            <DrawerFooter>aaaaaaa</DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
    },
    {
      cardHeader: "Inline",
      cardSubtext:
        "InlineDrawer is often used for navigation that is not dismissible. As it is on the same level as the main surface, users can still interact with other UI elements. This could be useful for swapping between different items in the main surface.",
      cardComponent: (
        <Drawer defaultOpen={false} inline={true} position="left">
          <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
            Open drawer
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center">
              <DrawerTitle>Im the header!</DrawerTitle>
            </DrawerHeader>
            <DrawerDescription className={"text-slate-50"}>
              And i the content
            </DrawerDescription>
            <DrawerFooter>aaaaaaa</DrawerFooter>
          </DrawerContent>
        </Drawer>
      ),
    },
    {
      cardHeader: "Position",
      cardSubtext:
        "When a Drawer is invoked, it slides in from either the left or right side, or bottom of the screen. This can be specified by the position prop.",
      cardComponent: (
        <div>
          <Drawer defaultOpen={false} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer from the bottom
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer from the right
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} position="left">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary mt-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open drawer from the left
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "The size prop controls the width of the drawer. The default is small.",
      cardComponent: (
        <div>
          <Drawer defaultOpen={false} size="sm" position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open small drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open medium drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} size={"lg"} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open large drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ),
    },
    {
      cardHeader: "Separator",
      cardSubtext:
        "The separator prop adds a line separator between the drawer and the content. Its placement will be determined by the position prop",
      cardComponent: (
        <div className={""}>
          <Drawer defaultOpen={false} size={"sm"} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open small drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open medium drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} size={"lg"} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open large drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ),
    },
    {
      cardHeader: "With Title",
      cardSubtext:
        "DrawerHeaderTitle is a component that provides a structured heading for a Drawer and can be used to display a title and an action. Although it works as a standalone component, it is intended to be used within a DrawerHeader. The title renders an h2 element by default but it can be customized using the heading prop.",
      cardComponent: (
        <div>
          <Drawer defaultOpen={false} size={"sm"} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open small drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open medium drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} size={"lg"} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open large drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ),
    },

    {
      cardHeader: "With Navigation",
      cardSubtext:
        " Drawers can have any type of content and one great case is to have a toolbar in the header. Drawer ships with a DrawerHeaderNavigation component that can be used to display a toolbar in the header of the drawer. This can be combined with DrawerHeaderTitle to display a title in the header.",
      cardComponent: (
        <div>
          <Drawer defaultOpen={false} size={"sm"} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open small drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open medium drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} size={"lg"} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open large drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ),
    },
    {
      cardHeader: "With Scroll",
      cardSubtext:
        "By default, the drawer will not scroll its content when it overflows. To enable this behavior, the DrawerBody component can be used to wrap the content of the drawer.\n" +
        "\n" +
        "Important note: if the drawer content does not contain any focusable elements, the DrawerBody itself needs a tabIndex of 0 to ensure keyboard scroll access.",
      cardComponent: (
        <div className={""}>
          <Drawer defaultOpen={false} size={"sm"} position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open small drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} position="bottom">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open medium drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
          <Drawer defaultOpen={false} size="lg" position="right">
            <DrawerTrigger className="dark:text-whitesmoke active:gray-200 bg-brand-primary active:border-brand-secondary ml-2 rounded-md px-4 py-1 text-white duration-400 hover:bg-[#115EA3] active:bg-[#0C3B5E] disabled:bg-[#F0F0F0] disabled:text-black data-[selected=true]:before:bg-white">
              Open large drawer
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader className="flex flex-col items-center">
                <DrawerTitle>Im the header!</DrawerTitle>
              </DrawerHeader>
              <DrawerDescription className={"text-slate-50"}>
                And i the content
              </DrawerDescription>
              <DrawerFooter>aaaaaaa</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ),
    },
  ],
}
