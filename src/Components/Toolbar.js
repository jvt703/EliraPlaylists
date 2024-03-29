import { React, useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, Button, Divider } from "antd";
import styles from "../styles/Toolbar.less";
import YoutubeEmbed from "./screencomp";
import { Link, useMatch, useLocation, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UnorderedListOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Buttoncomp from "./buttoncomp";
import { useParams } from "react-router-dom";
import Playlistcomp from "./Playlistcomps";
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal";
const { Header, Content, Sider } = Layout;




const sidebarLabels = [
  {
    label: (
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
    ),
    key: "Home",
    icon: <HomeOutlined />,
  },
  {
    label: (
      <Link to="/playlists" style={{ color: "white" }}>
        Playlists
      </Link>
    ),
    key: "Playlist",
    icon: <UnorderedListOutlined />,
  },
  {
    label: (
      <Link to="/favorites" style={{ color: "white" }}>
        Favorites
      </Link>
    ),
    key: "Favorites",
    icon: <HeartOutlined />,
  },
];
const Toolbar = ({
  setPath,
  MyUsername,
  path,
  setPlaylists,
  playlists,
  setUserToken,
  setMyEmail,
  setMyUsername,
  setUserId,
  Token,
}) => {
  const { videoId } = useParams();
  const [OpenModal, updateOpenModal] = useState(false);
  const [OpenLoginModal, setOpenLoginModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const load = async () => {
    console.log(location.pathname)
    setPath(location.pathname)
    //we should be binding the playlist name not playlist ID as the key
  };
  useEffect(() => {
    setMyEmail(localStorage.getItem("email"));
    setMyUsername(localStorage.getItem("myUsername"));
    setUserId(localStorage.getItem("userId"));
    setUserToken(localStorage.getItem("userToken"));
  }, []);
  useEffect(() => load(), [location]);

  const signOutHandler = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("myUsername");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    setMyEmail(null);
    setMyUsername(null);
    setUserToken(null);
    setUserId(null);
    navigate("/")
  };

  return (
    <Layout
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      {OpenModal && (
        <RegisterModal
          setUserToken={setUserToken}
          setMyEmail={setMyEmail}
          setMyUsername={setMyUsername}
          setUserId={setUserId}
          updateOpenModal={updateOpenModal}
        ></RegisterModal>
      )}
      {OpenLoginModal && (
        <LoginModal
          setUserToken={setUserToken}
          setMyEmail={setMyEmail}
          setMyUsername={setMyUsername}
          setUserId={setUserId}
          setOpenLoginModal={setOpenLoginModal}
        ></LoginModal>
      )}

      <Header className="Header">
        {!Token ? (
          <div>
            <Button
              onClick={() => {
                updateOpenModal(true);
              }}
            >
              REGISTER
            </Button>{" "}
            <Button onClick={() => setOpenLoginModal(true)}>Login</Button>
          </div>
        ) : (
          <div>
            {MyUsername}
            <Button onClick={() => signOutHandler()}>SignOut</Button>
          </div>
        )}

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
                <span>Title: </span>
                <YoutubeEmbed className="contents" embedId={videoId} />
              </div>
            ) : (
              <Playlistcomp Token={Token} setPlaylists={setPlaylists} playlists={playlists} />
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Toolbar;
