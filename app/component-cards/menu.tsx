import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/not-done/menubar"
import { Copy16Filled } from "@fluentui/react-icons"
import { ClipboardPasteIcon, ScissorsIcon } from "lucide-react"
import Link from "next/link"

export const menu_card = {
  header: "Menu",
  subText: (
    <>
      A menu displays a list of actions. The Menu component handles the state
      management of the passed in list of actions.
    </>
  ),
  cards: [
    {
      cardHeader: "Default",
      cardSubtext: "",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>Toggle Menu</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Open File</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Open Folder</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Interaction",
      cardSubtext:
        "Each sub component of the Menu that renders DOM elements can be assigned HTML event listeners. You can simply add an onClick listener to individual MenuItem without needing to control the entire component. Special handling is required for checkboxes and radio items inside a Menu, read the further examples below to see how to handle those variants.",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>Edit content</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <ScissorsIcon size={18} /> Cut{" "}
                  <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <Copy16Filled /> Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <ClipboardPasteIcon size={15} />
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Menu Item Link Navigation",
      cardSubtext:
        "To implement a navigation menu, simply use the MenuItemLink component that provides the correct semantics for link based navigation.",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>Navigation</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link href={"/"}>Home Page</Link>
                </MenubarItem>
                <MenubarItem>
                  {" "}
                  <Link target={"_blank"} href={"https://grbtec.com.br"}>
                    Go to our company's home page
                  </Link>{" "}
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  {" "}
                  <Link href={"/?section=Button"}>Go to Button</Link>{" "}
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Menu Items With Icons",
      cardSubtext: "",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>Edit content</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <ScissorsIcon size={18} /> Cut{" "}
                  <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <Copy16Filled /> Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <ClipboardPasteIcon size={15} />
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Aligning With Icons",
      cardSubtext:
        "The hasIcons prop will align menu items if only a subset of menu items contain an icon. When separation of menu items is only for visual aesthetics, the MenuDivider component can be used by itself as it has no accessible markup features.The hasIcons prop will align menu items if only a subset of menu items contain an icon. When separation of menu items is only for visual aesthetics, the MenuDivider component can be used by itself as it has no accessible markup features.",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>Edit content</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <ScissorsIcon size={18} /> Cut{" "}
                  <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <Copy16Filled /> Copy <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <ClipboardPasteIcon size={15} />
                  Paste <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Aligning With Selectable Items",
      cardSubtext:
        "The hasCheckmarks prop will align menu items if only a subset of menu items are selectable.\n",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Secondary Content For Menu Items",
      cardSubtext: "",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Controlling Open And Close",
      cardSubtext: "",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Grouping Items",
      cardSubtext: "",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Visual Divider Only",
      cardSubtext: "",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Checkbox Items",
      cardSubtext:
        "A variant of MenuItem that handles checkbox like selection. The name and value props are are used similar to HTML checkboxes with input\n" +
        "\n" +
        '<input type="checkbox" name="name" value="value" />',
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Switch Item",
      cardSubtext:
        "A variant of MenuItemCheckbox that displays selection using a switch design. This is commonly used for menus that don't really have strong selection function but needs to support an exceptional selected option.",
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Radio Items",
      cardSubtext:
        "A variant of MenuItem that handles checkbox like selection. The name and value props are are used similar to HTML checkboxes with input\n" +
        "\n" +
        '<input type="checkbox" name="name" value="value" />',
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
    {
      cardHeader: "Checkbox Items",
      cardSubtext:
        "A variant of MenuItem that handles checkbox like selection. The name and value props are are used similar to HTML checkboxes with input\n" +
        "\n" +
        '<input type="checkbox" name="name" value="value" />',
      cardComponent: (
        <div className="flex gap-2">
          <Menubar onValueChange={(e) => console.log(e)}>
            <MenubarMenu value={"share"}>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      ),
    },
  ],
}
