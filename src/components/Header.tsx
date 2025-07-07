import React, { useState } from "react";
import {
  Row,
  Button,
  Space,
  Avatar,
  Typography,
  Modal,
  List,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const menuOptions = [
  { title: "Profile", action: () => alert("Profile clicked") },
  { title: "Settings", action: () => alert("Settings clicked") },
  { title: "Support", action: () => alert("Support clicked") },
  { title: "Logout", actionKey: "logout" },
];

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOptionClick = (item: any) => {
    if (item.actionKey === "logout") {
      localStorage.removeItem("authToken");
      navigate("/login");
    } else if (item.action) {
      item.action();
    }
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        style={{
          background: "#f0f2f5",
          paddingTop: 16,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <Row justify="space-between" align="middle" style={{ padding: "0 20px" }}>
          <Button icon={<MenuOutlined />} onClick={() => setIsModalVisible(true)} />
          <Space align="center" size="middle">
            <Text strong>Hello Aydin</Text>
            <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
          </Space>
        </Row>
      </div>

      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        closeIcon={false}
        bodyStyle={{
          padding: 0,
          backdropFilter: "blur(6px)",
          background: "rgba(255,255,255,0.85)",
          borderRadius: "12px",
        }}
      >
        <List
          dataSource={menuOptions}
          renderItem={(item) => (
            <List.Item
              onClick={() => handleOptionClick(item)}
              style={{
                padding: "20px",
                cursor: "pointer",
                fontWeight: 600,
                borderBottom: "1px solid #eee",
              }}
            >
              {item.title}
            </List.Item>
          )}
        />
      </Modal>
    </>
  );
};
