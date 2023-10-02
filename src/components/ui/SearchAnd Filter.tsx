import { Card, Col, Input, Menu, Row, Space } from "antd";
import { AiOutlineExclamationCircle, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

const SearchInput = () => {
  return (
    <>
      <Row className="px-6">
        <Col span={8}>
          <Input
            size="large"
            style={{ width: 350 }}
            placeholder="Serach by name, edu, exp or #tag"
            prefix={
              <AiOutlineSearch
                size={20}
                style={{ opacity: 0.3, border: "none" }}
              />
            }
            suffix={
              <AiOutlineExclamationCircle
                size={20}
                style={{ opacity: 0.3, border: "none" }}
              />
            }
          />
        </Col>
      </Row>
      <Row className="px-6 mt-4">
        <Col>
          <Space direction="vertical">
            <Card
              title="Filters"
              extra="0 Selected"
              style={{ width: 350 }}
              bodyStyle={{ padding: "1px" }}
              size="small"
            ></Card>
            <Menu
              mode="inline"
              style={{
                width: 350,
                padding: "0px",
                marginInline: "1px",
                paddingInline: "1px",
                borderRadius: "10px",
                fontSize: "bold",
              }}
              className="font-semibold text-md mb-8"
              items={[
                {
                  key: "PersonalInfo",
                  label: "Personal Information",
                  icon: <HiOutlineDocumentText size={26} />,
                  children: [
                    {
                      label: "Sub Menu",
                      key: "submenu",
                    },
                  ],
                },
                { type: "divider" },

                {
                  key: "education",
                  label: "Education",
                  icon: <HiOutlineDocumentText size={26} />,
                  children: [
                    {
                      label: "Sub Menu",
                      key: "submenu",
                    },
                  ],
                },
                { type: "divider" },

                {
                  key: "experience",
                  label: "Work Experience",
                  icon: <HiOutlineDocumentText size={26} />,
                  children: [
                    {
                      label: "Sub Menu",
                      key: "submenu",
                    },
                  ],
                },
                { type: "divider" },

                {
                  key: "activityFilter",
                  label: "Activity Filter",
                  icon: <HiOutlineDocumentText size={26} />,
                  children: [
                    {
                      label: "Sub Menu",
                      key: "submenu",
                    },
                  ],
                },
                { type: "divider" },

                {
                  key: "advancedFilter",
                  label: "Advanced Filter",
                  icon: <HiOutlineDocumentText size={26} />,
                  children: [
                    {
                      label: "Sub Menu",
                      key: "submenu",
                    },
                  ],
                },
              ]}
            />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default SearchInput;
