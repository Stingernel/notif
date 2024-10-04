import React from "react";
import { Page, Navbar, Block, Button } from "framework7-react";
import PushNotification from "../components/PushNotification";

const RequestNotification = () => {
  const requestNotification = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Notification enabled!");
        } else {
          alert("Notification permission denied.");
        }
      });
    } else {
      alert("This browser does not support notifications.");
    }
  };

  return (
    <Page>
      <Navbar title="Request Notification Access" />
      <Block strong>
        <Button fill onClick={requestNotification}>
          Enable Notification
        </Button>
      </Block>
    </Page>
  );
};

export default RequestNotification;
