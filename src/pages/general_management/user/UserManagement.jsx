import { Button, Flex, Input } from "antd";
import React from "react";
import { labelAddNewUser, searchUserHint } from "../../../constants/constants";
import CustomPagination from "../components/CustomPagination";
import { useState } from "react";
import { useEffect } from "react";
import { getListUserByPage } from "../../../redux/managementSlice";
import ListUser from "./ListUser";

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listUser, setListUser] = useState([]);
  const [totalRow, setTotalRow] = useState(undefined);
  const [keyword, setKeyword] = useState("");

  const updateListUser = ({ pageId, keyword = "" }) => {
    getListUserByPage({ pageId: pageId, keyword: keyword })
      .then((result) => {
        setTotalRow(result.totalRow);
        setListUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateListUser({ pageId: 1 });
  }, []);

  const onSearch = (value, _) => {
    setKeyword(value);
    updateListUser({ pageId: currentPage, keyword: value });
  };

  return (
    <div className="container">
      <Flex gap="small">
        <Input.Search placeholder={searchUserHint} onSearch={onSearch} />

        <Button className="border-blue-600 text-blue-700">
          {labelAddNewUser}
        </Button>
      </Flex>

      <div className="my-3">
        <ListUser
          listUser={listUser}
          onListChanged={() => {
            updateListUser({ pageId: currentPage, keyword: keyword });
          }}
        />
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalRow={totalRow}
        onSelectedPage={(pageId) => {
          setCurrentPage(pageId);
          updateListUser({ pageId: pageId, keyword: keyword });
        }}
      />
    </div>
  );
}
