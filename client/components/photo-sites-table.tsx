import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { PhotoSite } from '../types';

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
        cellRenderer: function NameCellRenderer(params: { value: any, data: any }) {
          const url = params.data.site_url;
          return url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {params.value}
            </a>
          ) : (
            params.value
          );
        },
      },
      { headerName: 'API Documentation Link', field: 'api_documentation_link', flex: 1 },
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