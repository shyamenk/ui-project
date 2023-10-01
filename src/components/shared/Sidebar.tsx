import { Avatar, Layout, Menu } from "antd";
import { BiHome, BiGroup, BiTask, BiShareAlt } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiNotebookDuotone } from "react-icons/pi";
import Main from "./MainContent";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Layout>
      <Sider collapsible theme="light">
        <Menu
          mode="inline"
          items={[
            {
              label: "",
              key: "",
              icon: <Avatar size={26} />,
              style: { margin: "30px 0" },
            },
            {
              label: "Home",
              key: "home",
              icon: <BiHome size={26} />,
              style: { margin: "20px 0" },
            },
            {
              label: "Groups",
              key: "groups",
              icon: <BiGroup size={26} />,
              style: { margin: "20px 0" },
            },
            {
              label: "Candidates",
              key: "candidates",
              icon: <BiTask size={26} />,
              style: { margin: "20px 0" },
            },
            {
              label: "Policies",
              key: "policies",
              icon: <BiShareAlt size={26} />,
              style: { margin: "20px 0" },
            },
            {
              label: "Recruitment",
              key: "recruitment",
              icon: <IoDocumentTextOutline size={26} />,
              style: { margin: "20px 0" },
            },
            {
              label: "Assignments",
              key: "assignments",
              icon: <PiNotebookDuotone size={26} />,
              style: { margin: "20px 0" },
            },
          ]}
        ></Menu>
      </Sider>
      <Main />
    </Layout>
  );
};

export default Sidebar;
