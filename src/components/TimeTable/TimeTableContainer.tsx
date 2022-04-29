import React, { FunctionComponent, useCallback, useMemo, useState } from "react"
import { PageChangeTypes } from "../../enum/PageChangeTypes";
import stationsService, { MapForTable } from "../../util/stationsService";
import Backdrop, { BackdropProps } from "../backdrop/Backdrop"
import Pagination from "../pagination/Pagination";
import Table from "../table/Table";

interface TimeTableContainerProps extends BackdropProps {
  tableBody: MapForTable[] | undefined;
}

const TimeTableContainer: FunctionComponent<TimeTableContainerProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageLength, setPageLength] = useState<number>(15);

  const currentTableBody:  MapForTable[] | undefined =
  stationsService.getStationsForCurrentPage(props.tableBody, pageLength, currentPage);

  const handlePageChange = useCallback((changeType: PageChangeTypes) => {
    const higherPage: number = currentPage + 1;
    const lowerPage: number = currentPage - 1;

    if(changeType === PageChangeTypes.INCREASE) {
      return setCurrentPage(higherPage)
    };


    if(changeType === PageChangeTypes.DECREASE) {
      return setCurrentPage(lowerPage)
    }

    console.error('[Pagination]: No page change took place');

  }, [currentPage]);

  const handlePageLengthChange = useCallback((newValue: number) => {
    setPageLength(newValue)
    setCurrentPage(1)
  }, []);

  const getLastElementIndex = useMemo(() => {
    if(!props.tableBody?.length) {
     return currentPage * pageLength; 
    }

    if(currentPage * pageLength >= props.tableBody?.length) {
      return props.tableBody?.length;
    }

    return currentPage * pageLength;
  }, [props.tableBody, currentPage, pageLength]);

  return (
    <Backdrop {...props}>
      <Table headers={[' ', 'Departure', 'Destination']} body={ currentTableBody }/>
      <Pagination
        currentPage={ currentPage }
        pageSize={ pageLength }
        possiblePageSizes={ [5, 10, 15, 20] }
        firstElementIndex={ (currentPage - 1) * pageLength }
        lastElementIndex={ getLastElementIndex }
        totalElements={ props.tableBody?.length || 0 }
        handlePageChange={ handlePageChange }
        handlePageLengthChange={ handlePageLengthChange }
      />
    </Backdrop>
  )
}

export default TimeTableContainer;