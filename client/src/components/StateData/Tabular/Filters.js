import React, { useEffect, useState } from "react";
import { Header } from "./styles";

const sortingType = ["state", "recovered", "active", "deaths"];

function Filters({ originalData, setFilteredData }) {
  const [sortOrder, setSortOrder] = useState("Asc");
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    let data = [...originalData];
    if (search) {
      data = data.filter((state) =>
        state.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (sortType) {
      data.sort((a, b) => a[sortType] - b[sortType]);
      if (sortOrder === "Desc") {
        data.reverse();
      }
    }
    setFilteredData(data);
  }, [sortType, search, sortOrder]);

  const changeSortOrder = () => {
    setSortOrder((p) => {
      if (p == "Asc") return "Desc";
      return "Asc";
    });
  };
  return (
    <Header>
      <div className="d-flex flex-wrap sort">
        <p className="me-2 sort" onClick={changeSortOrder}>
          Sort <span className="badge bg-info ms-2">{sortOrder}</span>
        </p>
        <div>
          {sortingType.map((sortT) => (
            <span
              className={`badge sortType text-dark m-1 ${
                sortType === sortT ? "bg-success" : "bg-light"
              }`}
              key={sortT}
              onClick={() => setSortType(sortT)}
            >
              {sortT}
            </span>
          ))}
        </div>
      </div>
      <div className="search">
        <input
          type="search"
          className="search-input"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </Header>
  );
}

export default Filters;
