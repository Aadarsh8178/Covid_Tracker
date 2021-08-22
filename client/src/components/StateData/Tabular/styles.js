import styled from "styled-components";

export const TableWrapper = styled.div`
  background: #2a3338;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
`;
export const StyledTable = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  background-color: #2a3338;
  border-radius: 10px;
  max-width: 900px;
  margin: 0 auto;
  font-size: 14px;
  padding-bottom: 1rem;
  & tr {
    border: 1px solid rgb(61, 68, 73);
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    padding: 0.35em;
  }
  & th,
  & td {
    padding: 0.625em;
    text-align: left;
  }

  & th {
    font-size: 15px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: #9f7aea;
  }
  & tr:nth-child(even) {
    background-color: rgb(61, 68, 73);
  }

  @media (max-width: ${({ theme }) => theme.screens.tab}) {
    & {
      border: 0;
    }

    & caption {
      font-size: 1.3em;
    }

    & thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    & tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }
    & td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    & td::before {
      /*
    * aria-label has no advantage, it won't be read inside a &
    content: attr(aria-label);
    */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    & td:last-child {
      border-bottom: 0;
    }
  }

  /* general styling */
  body {
    font-family: "Open Sans", sans-serif;
    line-height: 1.25;
  }
`;

export const Header = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  & .search {
    width: 300px;
  }

  & .search .search-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    background-color: rgb(61, 68, 73);
    display: block;
    box-sizing: border-box;
    border: solid 1px rgb(61, 68, 73);
    color: #f5f7fa;
  }
  & .sort,
  .sortType {
    cursor: pointer;
  }
  & .sortType:hover {
    background: #198754 !important;
  }
  @media (max-width: ${({ theme }) => theme.screens.tab}) {
    & .search {
      width: 100%;
      margin-top: 0.5rem;
    }
    & .title {
      width: 100%;
      text-align: center;
    }
  }
`;
