import { Button, Flex, Input } from "antd";
import React from "react";
import { labelAddNewUser, mode, searchUserHint } from "../../../constants/constants";
import CustomPagination from "../components/CustomPagination";
import { useState } from "react";
import { useEffect } from "react";
import { getListUserByPage } from "../../../redux/managementSlice";
import ListUser from "./ListUser";
import UserInfoModal from "./UserInfoModal";

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
    <div >
      <Flex gap="small">
        <Input.Search placeholder={searchUserHint} onSearch={onSearch} />

        <UserInfoModal onUpdateSuccess={()=>{
          updateListUser({ pageId: 1 });
        }} label={labelAddNewUser} mode={mode.add}/>
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
