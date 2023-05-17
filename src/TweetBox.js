import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Ezequiel Jumilla",
      username: "ezequieljumilla",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media.licdn.com/dms/image/C4D03AQHeERf8naZxNw/profile-displayphoto-shrink_800_800/0/1661893704089?e=1689811200&v=beta&t=YAVgW14avO5QqxirZKm7_-otFSf_M2lQuywIP5cXQ1g",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media.licdn.com/dms/image/C4D03AQHeERf8naZxNw/profile-displayphoto-shrink_800_800/0/1661893704089?e=1689811200&v=beta&t=YAVgW14avO5QqxirZKm7_-otFSf_M2lQuywIP5cXQ1g" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Opcional : ingresar una url"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;