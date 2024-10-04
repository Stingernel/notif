import React from "react";
import { Page, Navbar, Block, Button } from "framework7-react";

const RequestLocation = () => {
  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(
            `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
          );
        },
        (error) => {
          alert(`Error accessing location: ${error.message}`);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Page>
      <Navbar title="Request Location Access" />
      <Block strong>
        <Button fill onClick={requestLocation}>
          Get Location
        </Button>
      </Block>
    </Page>
  );
};

export default RequestLocation;
