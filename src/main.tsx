import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

import App from "./App";

import "@cloudscape-design/global-styles/index.css";

ReactGA.initialize("G-6T2S8L4BB9");

import { AwsRum, AwsRumConfig } from "aws-rum-web";

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    guestRoleArn:
      "arn:aws:iam::135545621049:role/RUM-Monitor-us-west-2-135545621049-2668534883761-Unauth",
    identityPoolId: "us-west-2:b7ab33d0-32da-4e60-9012-79227d9acfd3",
    endpoint: "https://dataplane.rum.us-west-2.amazonaws.com",
    telemetries: [],
    allowCookies: true,
    enableXRay: false,
  };

  const APPLICATION_ID: string = "05b914d6-d34e-44d1-a547-ea63b332f10a";
  const APPLICATION_VERSION: string = "1.0.0";
  const APPLICATION_REGION: string = "us-west-2";

  const awsRum: AwsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
