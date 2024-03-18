import { ReactElement } from "react"
import {
  DocumentPdfRegular,
  DocumentRegular,
  EditRegular,
  FolderRegular,
  OpenRegular,
  PeopleRegular,
  VideoRegular,
} from "@fluentui/react-icons"

type RowItem = {
  file: { icon: ReactElement; label: string }
  author: { label: string; status: string }
  lastUpdated: { label: string; timestamp: number }
  lastUpdate: { icon: ReactElement; label: string }
}

type ColumnItem = { columnKey: string; label: string }

const fontSize = 22
export const rowItems: Array<RowItem> = [
  {
    file: {
      label: "Meeting notes",
      icon: <DocumentRegular fontSize={fontSize} />,
    },
    author: { label: "Max Mustermann", status: "online" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <EditRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Thursday presentation",
      icon: <FolderRegular fontSize={fontSize} />,
    },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Training recording",
      icon: <VideoRegular fontSize={fontSize} />,
    },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <OpenRegular fontSize={fontSize} />,
    },
  },
  {
    file: {
      label: "Purchase order",
      icon: <DocumentPdfRegular fontSize={fontSize} />,
    },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <PeopleRegular fontSize={fontSize} />,
    },
  },
]

export const columnItems: Array<ColumnItem> = [
  { columnKey: "file", label: "File" },
  { columnKey: "author", label: "Author" },
  { columnKey: "lastUpdated", label: "Last updated" },
  { columnKey: "lastUpdate", label: "Last update" },
]

export const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export const components = [
  "Button",
  "Inputs",
  "Search",
  "Select",
  "Drawer",
  "Dialog",
  "Tabs",
  "Table",
  "DataTable",
  "Slider",
  "Accordion",
  "Avatar",
  "Switch",
  "Test",
] as const
