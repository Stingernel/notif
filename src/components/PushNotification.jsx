import React, { useEffect } from "react";
import { Page, Navbar, Block, Button } from "framework7-react";

const PushNotification = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("sw.js")
        .then(function (swReg) {
          console.log("Service Worker is registered", swReg);
        })
        .catch(function (error) {
          console.error("Service Worker Error", error);
        });
    }
  }, []);

  const subscribeUser = () => {
    navigator.serviceWorker.ready.then(function (swReg) {
      swReg.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: "<YOUR_PUBLIC_VAPID_KEY>",
        })
        .then(function (subscription) {
          console.log("User is subscribed:", subscription);
        })
        .catch(function (err) {
          console.log("Failed to subscribe the user: ", err);
        });
    });
  };

  return (
    <Page>
      <Navbar title="Push Notification" />
      <Block strong>
        <Button fill onClick={subscribeUser}>
          Subscribe for Notifications
        </Button>
      </Block>
    </Page>
  );
};

export default PushNotification;
