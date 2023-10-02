import {
  Button,
  Card,
  Col,
  Divider,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import { AiOutlineTag } from "react-icons/ai";
import { BiUserVoice } from "react-icons/bi";
import { FiUserCheck, FiUserX } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const { Option } = Select;

const Header = () => {
  const customOptions = [
    { value: "applied", label: "Applied" },
    { value: "shortListed", label: "Shortlisted" },
    { value: "technicalInterview", label: "Technical Interview" },
    { value: "opportunityBrowsing", label: "Opportunity Browsing" },
    { value: "videoInterview I", label: "Video Interview I" },
    { value: "videoInterview II", label: "Video Interview II" },
    { value: "videoInterview III", label: "Video Interview III" },
    { value: "offer", label: "Offer" },
    { value: "withdraw", label: "Withdraw" },
  ];

  return (
    <div className="p-6">
      <Row gutter={10}>
        <Col span={8}>
          <Typography.Text className="text-[20px] font-semibold text-[#1D4ED8]">
            London Internship Program
          </Typography.Text>
          <p className="text-gray-400 mt-2 font-semibold">London</p>
        </Col>
        <Col span={6}>
          <Select
            style={{ width: "100%", height: 40 }}
            className="font-extrabold"
            defaultValue="Opportunity Browsing"
            optionLabelProp="label"
            dropdownStyle={{ background: "#fffff", fontSize: 20 }}
            suffixIcon={
              <RiArrowDropDownLine size={30} style={{ color: "#1D4ED8" }} />
            }
          >
            {customOptions.map((option) => (
              <Option key={option.value} value={option.label}>
                <div className="flex justify-between items-center hover:bg-transparent decoration-white">
                  <span className="font-semibold text-black">
                    {option.label}
                  </span>
                  <Tag className="font-semibold bg-[#F8F8F8]" bordered={false}>
                    1200
                  </Tag>
                </div>
                <Divider />
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={10}>
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
