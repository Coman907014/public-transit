import { FunctionComponent } from "react";
import { MapForTable } from "../../util/stationsService";
import {
  TableWrapper,
  TableHead,
  TableRow,
  TableHeadElement,
  TableBody,
  TableData,
  TableComponent,
  NoResults
} from "./style";

interface TableInterface {
  headers: string[];
  body: MapForTable[] | undefined;
}

const Table: FunctionComponent<TableInterface> = ({ headers, body }) => {

  if(!body || body?.length < 1) {
    return (
      <TableWrapper>
        <NoResults>No Results Found</NoResults>
      </TableWrapper>
    );
  }
  
  if(body && headers.length !== Object.values(body[0]).length) {
    console.error('[Table]: Table Body count differs from Table Header count')
  }

  return (
    <TableWrapper>
      <TableComponent>
        <TableHead>
          <TableRow>
          {
            headers.map(header => <TableHeadElement key={header}>{ header }</TableHeadElement>)
          }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            body &&
            body.map((bodyContent, i) => (
              <TableRow key={i}>
                {
                  Object.values(bodyContent)
                    .map(data => <TableData data-test={`tableData:Table`} key={ data }>{ data }</TableData>)
                }
              </TableRow>
            ))
          }

        </TableBody>
      </TableComponent>
    </TableWrapper>
  )
}

export default Table;