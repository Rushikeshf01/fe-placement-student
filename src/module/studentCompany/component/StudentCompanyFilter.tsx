import React from "react";
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const filterItem = [
  {
    name: "Name (Ascending)",
    value: "name",
  },
  {
    name: "Name (Descending)",
    value: "-name",
  },
  {
    name: "Location (Ascending)",
    value: "location",
  },
  {
    name: "Location (Descending)",
    value: "-location",
  },
  {
    name: "Status (Ascending)",
    value: "isClosed",
  },
  {
    name: "Status (Descending)",
    value: "-isClosed",
  },
  {
    name: "Deadline (Ascending)",
    value: "deadline",
  },
  {
    name: "Deadline (Descending)",
    value: "-deadline",
  },
];

const StudentCompanyFilter = (props: {
  searchValue: string;
  filterValue: string;
  getCompanyList: any;
  setSearchValue: any;
  setFilterValue: any;
}) => {
  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    props.setSearchValue(value);
  };

  const handleFilterValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    props.setFilterValue(value);
  };

  return (
    <div className="m-2 flex items-center">
      <TextField
        value={props.searchValue}
        onChange={handleSearchValueChange}
        name="searchValue"
        className="w-[35%] mr-4"
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => props.getCompanyList()}
              type="button"
              size="small"
            >
              <Search />
            </IconButton>
          ),
        }}
        size="small"
        placeholder="Search Name, Description, Website, Location"
      />
      <FormControl size="small">
        <Select
          value={props.filterValue}
          onChange={(e: any) => handleFilterValueChange(e)}
        >
          {filterItem.map((item, index) => (
            <MenuItem
              value={item.value}
              key={`student-company-list-filter-sorting-index:${index}`}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default StudentCompanyFilter;
