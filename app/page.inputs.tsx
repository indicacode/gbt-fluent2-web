import { button_card } from "@/app/component-cards/button"
import { dialog_card } from "@/app/component-cards/dialog"
import { ReactNode } from "react"
import { FaListUl } from "react-icons/fa6"
import { accordion_card } from "./component-cards/accordion"
import { avatar_card } from "./component-cards/avatar"
import { card_card } from "./component-cards/card"
import { checkbox_card } from "./component-cards/checkbox"
import { combobox_card } from "./component-cards/combobox"
import { datagrid_card } from "./component-cards/datagrid"
import { divider_card } from "./component-cards/divider"
import { drawer_card } from "./component-cards/drawer"
import { infolabel_card } from "./component-cards/infolabel"
import { input_card } from "./component-cards/input"
import { menu_card } from "./component-cards/menu"
import { messagebar_card } from "./component-cards/messagebar"
import { persona_card } from "./component-cards/persona"
import { popover_card } from "./component-cards/popover"
import { radiogroup_card } from "./component-cards/radiogroup"
import { select_card } from "./component-cards/select"
import { skeleton_card } from "./component-cards/skeleton"
import { slider_card } from "./component-cards/slider"
import { switch_card } from "./component-cards/switch"
import { table_card } from "./component-cards/table"
import { tablist_card } from "./component-cards/tablist"
import { textarea_card } from "./component-cards/textarea"
import { toast_card } from "./component-cards/toast"

type ComponentsType = Array<{
  header: string
  subText: string
  cards: Array<{
    cardHeader: string
    cardSubtext: ReactNode
    cardComponent: ReactNode
  }>
}>

export const components = [
  button_card,
  input_card,
  combobox_card,
  divider_card,
  select_card,
  drawer_card,
  dialog_card,
  popover_card,
  tablist_card,
  datagrid_card,
  table_card,
  slider_card,
  accordion_card,
  avatar_card,
  skeleton_card,
  switch_card,
  textarea_card,
  radiogroup_card,
  card_card,
  checkbox_card,
  infolabel_card,
  menu_card,
  toast_card,
  messagebar_card,
  persona_card,
] as ComponentsType

export const sideBar = {
  Components: {
    icon: <FaListUl />,
    items: components.map((component) => component.header).sort(),
  },
} as const
