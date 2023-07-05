import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { PhotoSite } from '@/types';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface PhotoSitesTableProps {
  photoSites: PhotoSite[];
}

export default function PhotoSitesTable({ photoSites }: PhotoSitesTableProps) {
  const columnDefs = useMemo(
    () => [
      {
        headerName: 'ID',
        field: 'id',
        width: 60,
        cellStyle: { textAlign: 'right' },
      },
      {
        headerName: 'Included',
        field: 'included',
        cellRenderer: function IncludedCellRenderer(params: { value: any }) {
          const included = params.value;
          return included ? (
            <span style={{ display: 'flex', justifyContent: 'center', color: 'green', fontWeight: 'bold' }}>&#10003;</span>
          ) : (
            <span style={{ display: 'flex', justifyContent: 'center', color: 'red', fontWeight: 'bold' }}>&#10007;</span>
          );
        },
        width: 96,
      },
      {
        headerName: 'Name',
        field: 'name',
        wrapText: false,
        autoHeight: true,
        width: 260,
        cellRenderer: function NameCellRenderer(params: { value: any, data: any }) {
          const url = params.data.site_url;
          return (
            <div>
              {params.value}
              {url && (
                <div className='-mt-4 text-[var(--color-content-400)]'>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </div>
              )}
            </div>
          );
        },
      },
      {
        headerName: 'API Documentation Link',
        field: 'api_documentation_link',
        flex: 1,
        cellRenderer: function ApiCellRenderer(params: { value: any, data: any }) {
          return (
            <p>
              {
                // Check if api_documentation_link starts with http:// or https://
                params.value.startsWith('http') ? (
                  <a href={params.value} target="_blank" rel="noopener noreferrer" className='text-[var(--color-content-400)]'>
                    {params.value}
                  </a>
                ) : (
                  <span className='text-[var(--color-content-700)]'>{params.value}</span>
                )
              }
            </p>
          );
        }
      },
      { headerName: 'Notes', field: 'notes', flex: 1 },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      // flex: 1,
      sortable: true,
    }),
    []
  );

  // Render AgGridReact component with columnDefs and photoSites data
  return (
    <div className="ag-theme-alpine ag-theme-customized">
      {/* Override default styles with CSS theme variables */}
      <style>
        {`
          .ag-theme-alpine.ag-theme-customized {
            --ag-primary-color: var(--color-content-800, red);
            --ag-secondary-color: var(--color-content-800, red);
            /* background: used for even rows and pagination background */
            --ag-background-color: transparent;
            --ag-foreground-color: var(--color-content-100, red);
            --ag-border-color: var(--color-content-800, red);
            --ag-hover-color: var(--color-content-800, red);
            --ag-selected-color: var(--color-content-800, red);
            /* header */
            --ag-header-background-color: var(--color-content-800, red);
            --ag-header-foreground-color: var(--color-content-400, red);
            --ag-header-border-color: var(--color-content-800, red);
            --ag-header-hover-color: var(--color-content-800, red);
            --ag-header-selected-color: var(--color-content-800, red);
            /* rows */
            --ag-row-background-color: red;
            --ag-odd-row-background-color: var(--color-content-900, red);
            --ag-row-foreground-color: red;
            --ag-row-border-color: var(--color-content-800, red);
            --ag-row-hover-color: var(--color-content-700, red);
            --ag-row-selected-color: red;
            --ag-selected-row-background-color: var(--color-content-700, red);

            /* Add some margin at the bottom of the table */
            margin-bottom: 2rem;

            /* Remove cell focus border when cell is focused */
            .ag-ltr .ag-cell-focus:not(.ag-cell-range-selected):focus-within {
              border: 1px solid transparent;
            }

            /* Make paging-panel background match header background */
            .ag-paging-panel {
              background-color: var(--color-content-800, red);
            }
          }
        `}
      </style>
      <AgGridReact
        // @ts-ignore
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={photoSites}
        domLayout={'autoHeight'}
        pagination={true}
        paginationPageSize={15}
        rowSelection="single"
        animateRows={true}
      />
    </div>
  );
}
