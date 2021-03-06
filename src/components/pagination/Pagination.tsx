import { FunctionComponent } from "react";
import { PageChangeTypes } from "../../enum/PageChangeTypes";
import {
  PaginationWrapper,
  Select,
  Option,
  ArrowRight,
  ArrowLeft,
  ArrowWrapper,
  ElementsCount,
  Title } from "./styles";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  possiblePageSizes: number[];
  firstElementIndex: number;
  lastElementIndex: number;
  totalElements: number;
  handlePageChange: (changeType: PageChangeTypes) => void;
  handlePageLengthChange: (newValue: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  pageSize,
  currentPage,
  possiblePageSizes,
  firstElementIndex,
  lastElementIndex,
  totalElements,
  handlePageChange,
  handlePageLengthChange
}) => {
  const isFirstPage: boolean = currentPage === 1;
  const isLastPage: boolean = 
  Math.ceil(totalElements ? totalElements / pageSize : 0) <= currentPage;

  return (
    <PaginationWrapper data-test="container:pagination">
      <Title data-test="text:pagination:title">Rows per page:</Title>
      <Select
        data-test="select:pagination:pageSize"
        value={ pageSize }
        onChange={ (e) => handlePageLengthChange(+e.target.value) }>
        {
          possiblePageSizes.map(size => <Option key={ size }>{ size }</Option>)
        }
      </Select>
      <ElementsCount data-test="text:pagination:elementsCount">
        { firstElementIndex + 1 } - { lastElementIndex } of { totalElements }
      </ElementsCount>
      <ArrowWrapper data-test="icon:pagination:rightArrow">
      {
        !isFirstPage &&
          <ArrowLeft onClick={ () => handlePageChange(PageChangeTypes.DECREASE)} />
      }
      </ArrowWrapper>

      <ArrowWrapper data-test="icon:pagination:rightArrow">
      {
        !isLastPage &&
          <ArrowRight onClick={ () => handlePageChange(PageChangeTypes.INCREASE)} />
      }
      </ArrowWrapper>

    </PaginationWrapper>
  );
}

export default Pagination;