import { Avatar, Button, Space, Table } from "antd";
import React from "react";
import {
  fieldKey,
  labelAction,
  labelAvatar,
  labelDelete,
  labelEdit,
  labelEmail,
  labelRole,
  mode,
  userRole,
} from "../../../constants/constants";
import { UserOutlined } from "@ant-design/icons";
import { deleteUser } from "../../../redux/managementSlice";
import UserInfoModal from "./UserInfoModal";
import moment from "moment";

export default function ListUser({ listUser, onListChanged }) {
  const columns = [
    {
      title: labelAvatar,
      dataIndex: fieldKey.avatar,
      key: fieldKey.avatar,
      render: (_, record) => (
        <div className="w-[150px]">
          <Avatar
            size={64}
            src={record.avatar && record.avatar}
            icon={!record.avatar && <UserOutlined />}
          />
          <div className="mt-3">{record.name}</div>
        </div>
      ),
    },
    {
      title: labelEmail,
      dataIndex: fieldKey.email,
      key: fieldKey.email,
    },
    {
      title: labelRole,
      dataIndex: fieldKey.role,
      key: fieldKey.role,
    },
    {
      title: labelAction,
      key: fieldKey.action,
      render: (_, record) => {
        return (
          <Space>
            <UserInfoModal
              mode={mode.edit}
              label={labelEdit}
              onUpdateSuccess={onListChanged}
              initValue={{
                key: record.key,
                avatar: record.avatar,
                name: record.name,
                email: record.email,
                role: record.role,
                phone: record.phone,
                gender: record.gender,
                password: record.password,
              }}
            />

            <Button
              danger={true}
              onClick={() => {
                deleteUser(record.key)
                  .then((result) => {
                    onListChanged();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              {labelDelete}
            </Button>
          </Space>
        );
      },
    },
  ];

  const getData = () => {
    if (listUser) {
      return listUser.map((user, _) => {
        return {
          key: user.id,
          avatar: user.avatar,
          name: user.name,
          email: user.email,
          role: user.role,
          phone: user.phone,
          gender: user.gender,
          password: user.password,
        };
      });
    }
    return undefined;
  };

  return (
    <div>
      <Table columns={columns} dataSource={getData()} pagination={false} />
    </div>
  );
}
