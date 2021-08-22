import React, { useEffect, useState } from "react";
import { convertToIndianNumberSystem } from "../../../utilities";
import Filters from "./Filters";
import { StyledTable, TableWrapper } from "./styles";

function Tabular({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(Object.values(data));
  }, []);

  return (
    <TableWrapper>
      <Filters
        originalData={Object.values(data)}
        setFilteredData={setFilteredData}
      />
      <StyledTable>
        <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">Recovered</th>
            <th scope="col">Active</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((state) => (
            <tr key={state.name}>
              <td data-label="State">{state.name}</td>
              <td data-label="Recovered">
                {convertToIndianNumberSystem(state.recovered)}
              </td>
              <td data-label="Active">
                {convertToIndianNumberSystem(state.active)}
              </td>
              <td data-label="Deaths">
                {convertToIndianNumberSystem(state.deaths)}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

export default Tabular;
