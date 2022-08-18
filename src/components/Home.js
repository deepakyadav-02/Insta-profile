import { async } from "@firebase/util";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import InstagramEmbed from "react-instagram-embed";
import axios from "axios";

// FEED

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [dd, setDd] = useState();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchDAta = async () => {
    const mediaid = "5461332850598784";
    const access_token =
      "IGQVJVeVctQk5fTjBGS1FqNE5BdXpCSms3clp6VGFvZA3lsYzFmUXRDemYyNzZAPemRxZAE9QdU1pSTBRUHo2MHlDRVd4RkNoY3hUT3o4RGlqY0RjVmlfd0FfUXNSMnMyT0w2MnFkUURuSldaSk9fbW0tWgZDZD";

    const { data } = await axios.get(
      `https://graph.instagram.com/${mediaid}?fields=id,media_type,media_url,username,timestamp&access_token=${access_token}`
    );

    console.log(data);
    setDd(data);
  };

  useEffect(() => {
    fetchDAta();
  });

  return (
    <>
      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div> */}
      <div>
        {dd.map((d) => {
          <div>{d.image}</div>;
        })}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
