import { Avatar, AvatarFallback, AvatarImage } from "@/components/done/avatar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/reviewing/table"
import {
  DocumentPdfRegular,
  DocumentRegular,
  EditRegular,
  FolderRegular,
  OpenRegular,
  PeopleRegular,
  VideoRegular,
} from "@fluentui/react-icons"
import { ReactElement } from "react"

type RowItem = {
  file: { icon: ReactElement; label: string }
  author: {
    label: string
    status: "online" | "busy" | "away" | "offline" | "do-not-disturb"
  }
  lastUpdated: { label: string; timestamp: number }
  lastUpdate: { icon: ReactElement; label: string }
}

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

export const table_card = {
  header: "Table",
  subText: (
    <>
      <blockquote>
        💡 This component is considered <strong>low-level</strong> and should be
        used when there is a need for more <strong>customization</strong>
        and support for <strong>non-standard features</strong>. Please check out
        the <strong>DataGrid component</strong> if you don't need lots of
        customization and rely on common features. There is less work involved
        and you will benefit from first class Microsoft design and accessibility
        support.
      </blockquote>
      A Table displays sets of two-dimensional data. The primitive components
      can be fully customized to support different feature sets.
    </>
  ),
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rowItems.map(({ file, author, lastUpdated, lastUpdate }, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">
                  <span className="flex items-center gap-2">
                    <>{file.icon}</>
                    <>{file.label}</>
                  </span>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <Avatar
                      aria-label={author.label}
                      status={author.status}
                      size="sm"
                      // name={author.label}
                    >
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback size="sm">{author.label}</AvatarFallback>
                    </Avatar>

                    <>{author.label}</>
                  </span>
                </TableCell>
                <TableCell>
                  <>{lastUpdated.label}</>
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-2">
                    <>{lastUpdate.icon}</>
                    <>{lastUpdate.label}</>
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Edits</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ),
    },
  ],
}
