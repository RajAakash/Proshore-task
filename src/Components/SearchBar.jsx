import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;

function SearchBar({ onSearch }) {
  return (
    <Space direction="vertical">
      <Search placeholder="Username" onSearch={onSearch} enterButton />
    </Space>
  );
}

export default SearchBar;
