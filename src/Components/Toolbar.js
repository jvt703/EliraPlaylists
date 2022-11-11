import React from "react";
import { Layout, Menu, Breadcrumb, Button, Divider } from "antd";
import styles from "../styles/Toolbar.less";
import YoutubeEmbed from "./screencomp";
import {
  HomeOutlined,
  UnorderedListOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Buttoncomp from "./buttoncomp";
import { useParams } from "react-router-dom";
import Playlistcomp from "./Playlistcomps";

const { Header, Content, Sider } = Layout;
const videos = ["gywvR9Erfl8"];
// ,'nCQ_zZIiGLA', '9KVH2ZP060c', '5J7dshcivGg', '-vOjy-igzhk'

const items = [
  {
    label: "EliraPage",
    key: "EliraPage",
  },
];

const sidebarLabels = [
  {
    label: (
      <a
        href="/favorites"
        target="_self"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        Favorites
      </a>
    ),
    key: "Home",
    icon: <HomeOutlined />,
  },
  {
    label: "Playlist",
    key: "Playlist",
    icon: <UnorderedListOutlined />,
  },
  {
    label: (
      <a
        href="/favorites"
        target="_self"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        Favorites
      </a>
    ),
    key: "Favorites",
    icon: <HeartOutlined />,
  },
];
const Toolbar = ({ items, playlists, updateVideoName, VideoName }) => {
  const { videoId } = useParams();
  return (
    <Layout
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <Header className="Header">
        
        <Buttoncomp></Buttoncomp>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            className="sideBar"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
              marginLeft: "auto",
            }}
            items={sidebarLabels}
          />
        </Sider>

        <Layout
          // style={{
          //   padding: "0 24px 24px",
          //   backgroundColor: "#001529",
          // }}
          className="MainContent"
        >
          <Content
            style={{
              padding: 24,
              margin: "0 15px",
            }}
          >
            {videoId ? (
              <div
                style={{
                  color: "#fff9",
                }}
                className="SoloVideoDescription"
              >
                <span>Title: {VideoName}</span>
                <YoutubeEmbed className="contents" VideoName={VideoName} embedId={videoId} />
              </div>
            ) : (
              <Playlistcomp playlists={playlists} VideoName={VideoName} updateVideoName={updateVideoName} />
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Toolbar;
