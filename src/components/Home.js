import { async } from "@firebase/util";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import InstagramEmbed from "react-instagram-embed";

// FEED

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div> */}
      <InstagramEmbed
        url="https://instagr.am/p/Zw9o4/"
        clientAccessToken="407198014833921|IGQVJVeVctQk5fTjBGS1FqNE5BdXpCSms3clp6VGFvZA3lsYzFmUXRDemYyNzZAPemRxZAE9QdU1pSTBRUHo2MHlDRVd4RkNoY3hUT3o4RGlqY0RjVmlfd0FfUXNSMnMyT0w2MnFkUURuSldaSk9fbW0tWgZDZD"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
