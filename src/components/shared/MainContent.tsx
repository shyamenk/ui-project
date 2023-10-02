import { Content } from "antd/es/layout/layout";
import Header from "../ui/Header";
import { Col, Row } from "antd";
import TableView from "../ui/TableView";
import SearchInput from "../ui/SearchAnd Filter";

const Main = () => {
  return (
    <Content className="max-h-full">
      <Header />
      <Row gutter={20}>
        <Col span={24} lg={8}>
          <SearchInput />
        </Col>
        <Col span={24} lg={16}>
          <TableView />
        </Col>
      </Row>
    </Content>
  );
};

export default Main;
