import classNames from "classnames";
import React from "react";
import { Button, Nav } from "react-bootstrap";

export enum TabType {
  comments = "comments",
  info = "info",
}

interface Props {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const ProductDetailTabs = (props: Props) => {
  const { activeTab, setActiveTab } = props;

  return (
    <Nav className="tabs-list">
      <Button
        variant="outline-primary"
        className={classNames("tab-btn ", {
          active: activeTab === TabType.info,
        })}
        onClick={() => setActiveTab(TabType.info)}
      >
        Info
      </Button>
      <Button
        variant="outline-primary"
        className={classNames("tab-btn", {
          active: activeTab === TabType.comments,
        })}
        onClick={() => setActiveTab(TabType.comments)}
      >
        Comments
      </Button>
    </Nav>
  );
};

export default ProductDetailTabs;
