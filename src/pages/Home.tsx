import React, { useState } from "react";
import { Button, Card, Select, Typography,  List, Space, Row, Col } from "antd";
import { QrcodeOutlined,  FireOutlined, CreditCardOutlined, TransactionOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
const { Option } = Select;

const cards = [
  { type: "VISA", balance: 5400.55, last4: "4558" },
  { type: "VISA", balance: 2300.35, last4: "2212" },
  { type: "MASTERCARD", balance: 1234.56, last4: "7788" },
];

const transactions = [
  { id: 1, title: "Starbucks", category: "Shopping", amount: -120.0, date: "12 Mar 2019" },
  { id: 2, title: "Salary", category: "Income", amount: 3200.0, date: "1 Mar 2019" },
  { id: 3, title: "Amazon", category: "Shopping", amount: -59.99, date: "10 Mar 2019" },
];

const Home: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [timeFilter, setTimeFilter] = useState("Last month");
  const navigate = useNavigate();

  return (
    <div style={{ background: "#f0f2f5", minHeight: "100vh", padding: 16, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
     

      {/* Cards Section */}
      <div style={{ marginBottom: 32 }}>
        <Title level={4}>My Cards</Title>
        <Space size="middle" className="flex w-100 flex-row overflow-x-auto whitespace-nowrap py-[31px] w-[calc(100vw-30px)]">
          {cards.map((card, i) => (
            <Card
              key={i}
              style={{
                width: 300,
                height: 180,
                cursor: "pointer",
                borderRadius: 20,
                background: i === activeCardIndex
                  ? "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
                  : "linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)",
                color: i === activeCardIndex ? "#fff" : "#000",
                boxShadow: i === activeCardIndex ? "0 8px 20px rgba(30, 60, 114, 0.6)" : "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                userSelect: "none",
                position: "relative",
                overflow: "hidden",
              }}
              onClick={() => setActiveCardIndex(i)}
              bodyStyle={{
                padding: "20px 24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >


              {/* Card Details */}
              <div>
                <Text
                  style={{
                    color: i === activeCardIndex ? "#fff" : "#444",
                    fontSize: 12,
                    letterSpacing: 1,
                  }}
                >
                  {card.type.toUpperCase()}
                </Text>
                <Title
                  level={4}
                  style={{
                    color: i === activeCardIndex ? "#fff" : "#000",
                    margin: "4px 0",
                    letterSpacing: 2,
                    fontFamily: "monospace",
                    fontWeight: 500,
                  }}
                >
                  **** **** **** {card.last4}
                </Title>
                <Text
                  style={{
                    color: i === activeCardIndex ? "#ddd" : "#666",
                    fontSize: 12,
                  }}
                >
                  Balance
                </Text>
                <Title
                  level={2}
                  style={{
                    color: i === activeCardIndex ? "#fff" : "#000",
                    margin: 0,
                  }}
                >
                  AED {card.balance.toLocaleString()}
                </Title>
              </div>
            </Card>

          ))}
        </Space>
      </div>

{/* Quick Actions */}
<Card style={{ marginBottom: 32, borderRadius: 12 }}>
  <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
    <Title level={4} style={{ margin: 0 }}>
      Quick Actions
    </Title>
  </Row>

  <Row gutter={[12, 12]} justify="space-around" wrap>
    <Col>
      <Button
        type="primary"
        icon={<FireOutlined />}
        size="large"
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          whiteSpace: "normal",
          fontSize: 12,
          padding: 4,
        }}
        onClick={() => alert("Quick Cash Transaction clicked!")}
      >
        Hot Cash
      </Button>
    </Col>

    <Col>
      <Button
        type="primary"
        icon={<QrcodeOutlined />}
        size="large"
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          whiteSpace: "normal",
          fontSize: 12,
          padding: 4,
        }}
          onClick={() => navigate('/cardless')}
      >
        Cardless
      </Button>
    </Col>

    <Col>
      <Button
        type="primary"
        icon={<CreditCardOutlined />}
        size="large"
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          whiteSpace: "normal",
          fontSize: 12,
          padding: 4,
        }}
        onClick={() => alert("Mini Statement clicked!")}
      >
        Mini Statement
      </Button>
    </Col>

    <Col>
      <Button
        type="primary"
        icon={<TransactionOutlined />}
        size="large"
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          whiteSpace: "normal",
          fontSize: 12,
          padding: 4,
        }}
        onClick={() => alert("Fund Transfer clicked!")}
      >
        Fund Transfer
      </Button>
    </Col>

    <Col>
      <Button
        type="primary"
        icon={<SettingOutlined />}
        size="large"
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          whiteSpace: "normal",
          fontSize: 12,
          padding: 4,
        }}
        onClick={() => alert("Settings clicked!")}
      >
        ATM Settings
      </Button>
    </Col>
    <Col>
      <Button
        type="primary"
        icon={<TeamOutlined  />}
        size="large"
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          whiteSpace: "normal",
          fontSize: 12,
          padding: 4,
        }}
        onClick={() => alert("Settings clicked!")}
      >
        KYC Update
      </Button>
    </Col>
  </Row>
</Card>




      {/* Balance & Cardless */}
      <Card style={{ marginBottom: 32, borderRadius: 12 }}>
        <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
          <Title level={4} style={{ margin: 0 }}>
            Balance
          </Title>
          <Select value={timeFilter} onChange={setTimeFilter} style={{ width: 140 }}>
            <Option value="Last month">Last month</Option>
            <Option value="Last week">Last week</Option>
            <Option value="Last year">Last year</Option>
          </Select>
        </Row>

        <Title level={1} style={{ color: "#1890ff" }}>
          AED {cards[activeCardIndex].balance.toLocaleString()}
        </Title>

        <Row justify="space-around" style={{ marginBottom: 24 }}>
          <Col style={{ textAlign: "center" }}>
            <Text type="success" strong>
              + AED 3,200.15
            </Text>
            <br />
            <Text>Income</Text>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Text type="danger" strong>
              - 919.60
            </Text>
            <br />
            <Text>Expense</Text>
          </Col>
        </Row>

        <Button
          type="primary"
          block
          icon={<QrcodeOutlined />}
          size="large"
          style={{ borderRadius: 8 }}
          onClick={() => navigate('/cardless')}
        >
          Cardless Transaction
        </Button>
      </Card>

      {/* Transactions */}
      <div>
        <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
          <Title level={4} style={{ margin: 0 }}>
            Latest Transactions
          </Title>
          <Button type="link" onClick={() => alert("Check all clicked!")}>
            Check all
          </Button>
        </Row>

        <List
          itemLayout="horizontal"
          dataSource={transactions}
          renderItem={({ id, title, category, amount, date }) => (
            <List.Item
              key={id}
              style={{
                borderRadius: 12,
                marginBottom: 12,
                padding: 10,
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
              onClick={() => alert(`Clicked transaction ${title}`)}
            >
              <List.Item.Meta
                title={<Text strong>{title}</Text>}
                description={<Text type="secondary">{category}</Text>}
              />
              <div style={{ minWidth: 100, textAlign: "right" }}>
                <Text type={amount < 0 ? "danger" : "success"} strong>
                  {amount < 0 ? "-" : "+"} AED {Math.abs(amount).toFixed(2)}
                </Text>
                <br />
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {date}
                </Text>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Home;
