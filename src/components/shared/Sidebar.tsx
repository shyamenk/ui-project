import { Avatar, Layout, Menu, Space } from "antd";
import { BiHome, BiGroup, BiTask, BiShareAlt } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiNotebookDuotone } from "react-icons/pi";
import Main from "./MainContent";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Layout>
      <Sider collapsible theme="light" width={60}>
        <Menu
          mode="inline"
          items={[
            {
              key: "logo",
              icon: <Avatar size={26} />,
              style: { margin: "20px 0", paddingLeft: "15px" },
            },
            {
              key: "home",
              icon: <BiHome size={20} />,
              style: { margin: "20px 0", paddingLeft: "15px" },
            },
            {
              key: "groups",
              icon: <BiGroup size={20} />,
              style: { margin: "20px 0", paddingLeft: "15px" },
            },
            {
              key: "candidates",
              icon: <BiTask size={20} />,
              style: { margin: "15px 0", paddingLeft: "15px" },
            },
            {
              key: "policies",
              icon: <BiShareAlt size={20} />,
              style: { margin: "20px 0", paddingLeft: "15px" },
            },
            {
              key: "recruitment",
              icon: <IoDocumentTextOutline size={20} />,
              style: { margin: "20px 0", paddingLeft: "15px" },
            },
            {
              key: "assignments",
              icon: <PiNotebookDuotone size={20} />,
              style: { margin: "20px 0", paddingLeft: "15px" },
            },
          ]}
        ></Menu>
      </Sider>
      <Main />
    </Layout>
  );
};

export default Sidebar;
