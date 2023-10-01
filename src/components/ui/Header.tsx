import { Button, Card, Col, Input, Row, Select, Space, Typography } from "antd";
import {
  AiOutlineExclamationCircle,
  AiOutlineSearch,
  AiOutlineTag,
} from "react-icons/ai";
import { BiDownArrow, BiSolidArrowToBottom, BiUserVoice } from "react-icons/bi";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Header = () => {
  const styles = {
    styles: {
      backgroundColor: "white",
    },
    menu: {
      backgroundColor: "red",
    },
  };
  return (
    <div className="p-6">
      <Row>
        <Col span={8}>
          <Typography.Text className="text-[20px] font-semibold text-[#1D4ED8]">
            London Internship Program
          </Typography.Text>
          <p className="text-gray-600 mt-2">London</p>
        </Col>
        <Col span={6}>
          <Select
            style={{ width: 200 }}
            defaultValue="Opportunity Browsing"
            dropdownStyle={styles.styles}
            options={[
              { value: "applied", label: "Applied" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Col>
        <Col span={8}>
          <Space direction="horizontal">
            <Card size="small">
              <AiOutlineTag />
            </Card>
            <Card size="small">
              <FiUserX />
            </Card>
            <Card size="small">
              <FiUserCheck />
            </Card>
            <Card size="small">
              <BiUserVoice />
            </Card>
            <Card size="small">
              <CiMail />
            </Card>
            <Button type="primary" className="bg-[#1D4ED8] hover:bg-[#1D4ED8]">
              Move to video Interview
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
