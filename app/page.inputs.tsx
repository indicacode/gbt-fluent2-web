import { badge_card } from "@/app/component-cards/badge"
import { button_card } from "@/app/component-cards/button"
import { dialog_card } from "@/app/component-cards/dialog"
import { dropdown_card } from "@/app/component-cards/dropdown"
import { ReactNode } from "react"
import { FaListUl } from "react-icons/fa6"
import { accordion_card } from "./component-cards/accordion"
import { avatar_card } from "./component-cards/avatar"
import { breadcrumb_card } from "./component-cards/breadcrumb"
import { card_card } from "./component-cards/card"
import { carousel_card } from "./component-cards/carousel"
import { checkbox_card } from "./component-cards/checkbox"
import { combobox_card } from "./component-cards/combobox"
import { datagrid_card } from "./component-cards/datagrid"
import { divider_card } from "./component-cards/divider"
import { drawer_card } from "./component-cards/drawer"
import { field_card } from "./component-cards/field"
import { fluentprovider_card } from "./component-cards/fluentprovider"
import { image_card } from "./component-cards/image"
import { infolabel_card } from "./component-cards/infolabel"
import { input_card } from "./component-cards/input"
import { label_card } from "./component-cards/label"
import { link_card } from "./component-cards/link"
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
import { list_card } from "./component-cards/list"
import { overflow_card } from "./component-cards/overflow"
import { portal_card } from "./component-cards/portal"
import { progressbar_card } from "./component-cards/progressbar"
import { rating_card } from "./component-cards/rating"
import { ratingdisplay_card } from "./component-cards/ratingdisplay"
import { searchbox_card } from "./component-cards/searchbox"
import { spinbutton_card } from "./component-cards/spinbutton"
import { spinner_card } from "./component-cards/spinner"
import { swatchpicker_card } from "./component-cards/swatchpicker"
import { tag_card } from "./component-cards/tag"
import { tagpicker_card } from "./component-cards/tagpicker"
import { teachingpopover_card } from "./component-cards/teachingpopover"
import { text_card } from "./component-cards/text"
import { toolbar_card } from "./component-cards/toolbar"
import { tooltip_card } from "./component-cards/tooltip"
import { tree_card } from "./component-cards/tree"
import { colorpicker_card } from "./component-cards/colorpicker"

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
  breadcrumb_card,
  button_card,
  badge_card,
  carousel_card,
  dropdown_card,
  field_card,
  portal_card,
  input_card,
  label_card,
  link_card,
  searchbox_card,
  text_card,
  list_card,
  image_card,
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
