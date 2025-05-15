'use client'

import {
  ColumnDef,
  Row,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { TableCell, TableHead, TableRow } from '@/components/ui/table'
import { HTMLAttributes, forwardRef } from 'react'
import { TableVirtuoso } from 'react-virtuoso'
import { cn } from '@/lib/utils'

// Original Table is wrapped with a <div> (see https://ui.shadcn.com/docs/components/table#radix-:r24:-content-manual),
// but here we don't want it, so let's use a new component with only <table> tag
const TableComponent = forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn('w-full caption-bottom text-sm', className)}
    {...props}
  />
))
TableComponent.displayName = 'TableComponent'

const TableRowComponent = <TData,>(rows: Row<TData>[]) =>
  function getTableRow(props: HTMLAttributes<HTMLTableRowElement>) {
    // @ts-expect-error data-index is a valid attribute
    const index = props['data-index']
    const row = rows[index]

    if (!row) {
      return null
    }

    return (
      <TableRow
        key={row.id}
        data-state={row.getIsSelected() && 'selected'}
        {...props}
      >
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    )
  }

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  height: number
}

export function DataTable<TData, TValue>({
  columns,
  data,
  height,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const { rows } = table.getRowModel()

  return (
    <div>
      <TableVirtuoso
        style={{ height }}
        totalCount={rows.length}
        components={{
          Table: TableComponent,
          TableRow: TableRowComponent(rows),
        }}
        fixedHeaderContent={() =>
          table
            .getHeaderGroups()
            .filter((headerGroup) =>
              headerGroup.headers.some(
                (header) =>
                  !header.isPlaceholder && header.column.columnDef.header,
              ),
            )
            .map((headerGroup) => (
              <TableRow className="bg-card" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{
                        width: header.getSize(),
                      }}
                    >
                      <div
                        className="flex items-center"
                        {...{
                          style: header.column.getCanSort()
                            ? {
                                cursor: 'pointer',
                                userSelect: 'none',
                              }
                            : {},
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    </TableHead>
                  )
                })}
              </TableRow>
            ))
        }
        fixedFooterContent={() =>
          table
            .getFooterGroups()
            .filter((footerGroup) =>
              footerGroup.headers.some(
                (header) =>
                  !header.isPlaceholder && header.column.columnDef.footer,
              ),
            )
            .map((footerGroup) => (
              <TableRow key={footerGroup.id} className="bg-card">
                {footerGroup.headers.map((footer) => (
                  <TableHead
                    key={footer.id}
                    colSpan={footer.colSpan}
                    style={{
                      width: footer.getSize(),
                    }}
                  >
                    <div className="flex items-center">
                      {flexRender(
                        footer.column.columnDef.footer,
                        footer.getContext(),
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))
        }
      />
    </div>
  )
}
