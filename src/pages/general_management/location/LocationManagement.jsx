import { Button, Flex, Input } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  labelAddNewLocation,
  searchLocationHint,
} from "../../../constants/constants";
import { getListLocationByPage } from "../../../redux/locationSlice";
import ListLocation from "./ListLocation";
import CustomPagination from "../components/CustomPagination";

export default function LocationManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listLocation, setListLocation] = useState([]);
  const [totalRow, setTotalRow] = useState(undefined);
  const [keyword, setKeyword] = useState("");

  const updateListLocation = ({ pageId, keyword = "" }) => {
    getListLocationByPage({ pageId: pageId, keyword: keyword })
      .then((result) => {
        setTotalRow(result.totalRow);
        setListLocation(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    updateListLocation({ pageId: 1 });
  }, []);

  const onSearch = (value, _) => {
    setKeyword(value);
    updateListLocation({ pageId: currentPage, keyword: value });
  };

  return (
    <div className="container">
      <Flex gap="small">
        <Input.Search placeholder={searchLocationHint} onSearch={onSearch} />

        <Button className="border-blue-600 text-blue-700">
          {labelAddNewLocation}
        </Button>
      </Flex>

      <div className="my-3">
        <ListLocation
          listLocation={listLocation}
          onListChanged={() => {
            updateListLocation({ pageId: currentPage, keyword: keyword });
          }}
        />
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalRow={totalRow}
        onSelectedPage={(pageId) => {
          setCurrentPage(pageId);
          updateListLocation({ pageId: pageId, keyword: keyword });
        }}
      />
    </div>
  );
}
