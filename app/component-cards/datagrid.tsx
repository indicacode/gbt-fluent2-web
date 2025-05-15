import { DataTable } from "@/components/reviewing/data-table"
import { columns } from "@/components/reviewing/data-table.components"
import { dataTableData } from "@/components/reviewing/data-table.input"

export const datagrid_card = {
  header: "DataGrid",
  subText: (
    <span className="inline">
      This component is a higher level extension of the <code>Table</code>
      primitive component <code>DataGrid</code> is a feature-rich, so there
      should always be full feature parity with what can be achieved with
      primitives. This component is <strong>opinionated</strong> and this is
      intentional. If the desired scenario can be achieved easily and does not
      vary too much from documented examples, it can be very convenient. If the
      desired scenario varies a lot from the documented examples please use the
      Table components with another state management solution of choice.
    </span>
  ),
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <DataTable
          data={dataTableData}
          columns={columns}
          features={{
            sorting: true,
            viewOptions: true,
            filtering: true,
            pagination: true,
            columnVisibility: false,
            rowSelection: true,
          }}
        />
      ),
    },
  ],
}
