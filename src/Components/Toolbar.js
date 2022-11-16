import {React, useState} from "react";
import { Layout, Menu, Breadcrumb, Button, Divider } from "antd";
import styles from "../styles/Toolbar.less";
import YoutubeEmbed from "./screencomp";
import { Link } from "react-router-dom";
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
    label: 
      <Link to='/' style={{color: "white"}}>Home</Link>
      ,
    key: "Home",
    icon: <HomeOutlined />,
  },
  {
    label:   <Link to='/playlists' style={{color: "white"}}>Playlists</Link>,
    key: "Playlist",
    icon: <UnorderedListOutlined />,
  },
  {
    label: <Link to='/favorites' style={{color: "white"}}>Favorites</Link>,
    key: "Favorites",
    icon: <HeartOutlined />,
  },
];
const Toolbar = ({ items, playlists, updateVideoName, VideoName, setMyUsername, setUserId, setUserToken, setMyEmail, Token  }) => {
  const { videoId } = useParams();
  const [OpenModal, updateOpenModal] = useState(false)
  const [OpenLoginModal, setOpenLoginModal] = useState(false)
  const signOutHandler = ()=>{
      localStorage.removeItem("userToken")
      localStorage.removeItem("myUsername")
      localStorage.removeItem("userId")
      localStorage.removeItem("email")
      setMyEmail(null)
      setMyUsername(null)
      setUserToken(null)
      setUserId(null)
  }
  console.log(playlists, "playlists")


 
  return (
    <Layout
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      {OpenModal&&<RegisterModal 
      setUserToken ={setUserToken}
      setMyEmail ={setMyEmail}
      setMyUsername ={setMyUsername}
      setUserId ={setUserId}
      updateOpenModal={updateOpenModal}></RegisterModal>}
       {OpenLoginModal && <LoginModal
      setUserToken ={setUserToken}
      setMyEmail ={setMyEmail}
      setMyUsername ={setMyUsername}
      setUserId ={setUserId}
      setOpenLoginModal = {setOpenLoginModal}
        ></LoginModal>}

      <Header className="Header">
       
      
        {  !Token ? <div><Button onClick={()=>{updateOpenModal(true)}}>REGISTER</Button> <Button onClick={()=>setOpenLoginModal(true)}>Login</Button></div> : <div><Button onClick={()=>signOutHandler()}>SignOut</Button></div> } 
      
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
