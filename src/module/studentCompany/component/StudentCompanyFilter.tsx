import React from "react";
import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

const StudentCompanyFilter = (props: {
  searchValue: string;
  getCompanyList: any;
  setSearchValue: any;
}) => {
  const handleSearchValueClick = () => {
    props.getCompanyList();
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    props.setSearchValue(value);
  };

  return (
    <div className="m-2">
      <Paper component="form" className="flex items-center p-[3px] rounded-sm">
        <InputBase
          value={props.searchValue}
          onChange={handleSearchValueChange}
          name="searchValue"
          className="ml-1 flex-1"
          placeholder="Search Comapny Name, Description, Website, Location"
        />
        <IconButton
          onClick={handleSearchValueClick}
          type="button"
          className="p-[10px]"
        >
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};

export default StudentCompanyFilter;
