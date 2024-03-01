import { Button, Flex } from "antd";
import React from "react";

import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

export default function CustomPagination({
  currentPage = 1,
  deltaPage = 3,
  pageSize = 10,
  totalRow = 292,
  onSelectedPage,
}) {
  const maxPageNumber = Math.ceil(totalRow / pageSize);
  const renderListPageNumber = () => {
    
    const defaultLengthPage = Math.min(maxPageNumber, 2 * deltaPage + 1);
    const end =
      currentPage + deltaPage <= maxPageNumber
        ? currentPage + deltaPage < defaultLengthPage
          ? defaultLengthPage
          : currentPage + deltaPage
        : maxPageNumber;
    let start = end - defaultLengthPage + 1;
    start = start < 1 ? 1 : start
    const toFirstStyle = currentPage === 1 ? "text-gray-400" : "";
    const toLastStyle = currentPage === maxPageNumber ? "text-gray-400" : "";

    return (
      <Flex gap="small">
        <DoubleLeftOutlined
          className={toFirstStyle}
          onClick={() => {
            onSelectedPage(1);
          }}
        />

        {Array.from({ length: end - start + 1 }, (_, i) => i + start).map(
          (pageId) => {
            let style = "";
            if (pageId === currentPage) {
              style += "bg-blue-200";
            }

            return (
              <Button
                className={style}
                onClick={() => {
                  onSelectedPage(pageId);
                }}
                key={pageId}
              >
                {pageId}
              </Button>
            );
          }
        )}
        <DoubleRightOutlined
          className={toLastStyle}
          onClick={() => {
            onSelectedPage(maxPageNumber);
          }}
        />
      </Flex>
    );
  };

  return <div>{renderListPageNumber()}</div>;
}
