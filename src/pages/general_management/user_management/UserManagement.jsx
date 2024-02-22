import { Button, Flex, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { labelAddNewUser, searchUserHint } from "../../../constants/constants";
import CustomPagination from "../components/CustomPagination";
import { useState } from "react";
import { useEffect } from "react";
import { getListUserByPage } from "../../../redux/managementSlice";

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const defaultPageSize = 10

  useEffect(() => {
    getListUserByPage({pageId: currentPage, pageSize: defaultPageSize})
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      {/* search */}
      <Flex gap="small">
        <Input addonBefore={<SearchOutlined />} placeholder={searchUserHint} />

        <Button className="border-blue-600 text-blue-700">
          {labelAddNewUser}
        </Button>
      </Flex>
      <CustomPagination
        currentPage={currentPage}
        onSelectedPage={(pageId) => {
          setCurrentPage(pageId);
        }}
      />
    </div>
  );
}
