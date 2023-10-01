import { Content } from "antd/es/layout/layout";
import Header from "../ui/Header";
import SearchInput from "../ui/SearchAnd Filter";
import { Button, Space } from "antd";

const Main = () => {
  return (
    <Content className="h-screen">
      <Header />
      <SearchInput />
    </Content>
  );
};

export default Main;
