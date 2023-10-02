import { Avatar, Checkbox, Divider, List, Tag, Typography } from "antd";
import { getInitials, tableData } from "../../utils/utils";

const TableView = () => {
  return (
    <>
      <List
        header={
          <div className="flex items-center mb-4">
            <Checkbox className="mr-4" />
            <span className="font-semibold text-lg text-[#1D4ED8]">
              247 Candidates
            </span>
            <div className="ml-auto flex items-center">
              <span className="font-semibold text-lg text-[#1D4ED8]">
                Qualified{" "}
              </span>
              <Divider type="vertical" />
              <span className="font-semibold text-lg text-black">
                Task{" "}
                <Tag className="rounded-full border-none bg-[#F7F8FD]">10</Tag>
              </span>
              <Divider type="vertical" />
              <span className="font-semibold text-lg text-black">
                Disqualifies{" "}
                <Tag className="rounded-full border-none bg-[#F7F8FD]">10</Tag>
              </span>
            </div>
          </div>
        }
        itemLayout="horizontal"
        className="bg-white p-6 rounded-lg"
        pagination={{
          position: "bottom",
          align: "center",
        }}
        dataSource={tableData}
        renderItem={(item, index) => (
          <List.Item className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox className="mr-4" />
              <Avatar
                size={60}
                className="bg-[#edf4ff] text-[#69b1ff] font-semibold  mr-4"
              >
                {getInitials(item.title)}
              </Avatar>
              <div>
                <Typography.Title
                  level={4}
                  className="mb-0 font-bold text-[14px]"
                >
                  {item.title}
                </Typography.Title>
                <p className="text-md mb-1 font-semibold">{item.location}</p>
                <p className=" mb-2">{item.education}</p>
                <Tag className="text-[#1D4ED8] mb-2  font-semibold">
                  {item.hashtags}
                </Tag>
                <div>
                  {item.tags.split(", ").map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      bordered={false}
                      className="rounded-full mr-2 py-1 px-3 bg-[#F3FAFC] font-semibold text-[#037092]"
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </>
  );
};

export default TableView;
