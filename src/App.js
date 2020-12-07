import "./App.css";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import axios from "axios";
import React, { useState } from "react";
import FileSaver from "file-saver";
import { Grid } from "@material-ui/core";
import RadioGroupFormat from "./components/Buttons/RadioGroupFormat";
import ResolutionSelect from "./components/Buttons/ResolutionSelect";
import InputFeild from "./components/Buttons/InputFeild";
import Header from "./components/LayoutComponents/Header";

const devices = [
  { id: 1, name: "Full width", title: "Highest" },
  { id: 2, name: "1920x1080", title: "Highest", width: 1920, height: 1080 },
  { id: 3, name: "1366x768", title: "Laptop-1", width: 1366, height: 768 },
  {
    id: 4,
    name: "1280x800",
    title: "Small-Desktop-1",
    width: 1280,
    height: 800,
  },
  { id: 5, name: "768x1024", title: "Ipad-Tab", width: 768, height: 1024 },
  { id: 6, name: "360x640", title: "Android", width: 360, height: 640 },
  { id: 7, name: "375x667", title: "Iphone", width: 375, height: 667 },
];

function App() {
  const [urlValue, setUrlValue] = useState("");
  const [resolution, setResolution] = useState(1);
  const [imageFormat, setImageFormat] = useState("jpeg");
  const [responseStatus, setResponseStatus] = useState({
    isError: false,
    isLoading: false,
  });

  const handleInputChange = (e) => {
    setUrlValue(e.target.value);
  };

  const handleScreenshotClick = async () => {
    setResponseStatus({
      ...responseStatus,
      isLoading: true,
      isError: false,
    });
    try {
      const resolutionSettings = devices.find((item) => item.id === resolution);
      const uri =
        resolutionSettings.width && resolutionSettings.height
          ? `/api/screenshot?weburi=${urlValue}&imagetype=${imageFormat}&width=${resolutionSettings.width}&height=${resolutionSettings.height}`
          : `/api/screenshot?weburi=${urlValue}&imagetype=${imageFormat}`;
      const reponse = await axios.get(uri, {
        responseType: "arraybuffer",
      });
      FileSaver.saveAs(new Blob([reponse.data]), `download.${imageFormat}`);
      setResponseStatus({
        ...responseStatus,
        isLoading: false,
        isError: false,
      });
      setUrlValue("");
    } catch (error) {
      console.log("Errpr", error);
      setResponseStatus({
        ...responseStatus,
        isError: true,
      });
    }
  };

  const handleRadioChange = (e) => {
    setImageFormat(e.target.value);
  };

  const handleResolutionChange = (e) => {
    const currentValue = Number(e.target.value);
    setResolution(currentValue);
  };

  return (
    <>
      <Header />
      <Grid container justify="center" alignItems="center">
        <Grid className="input-container" item xs={8} md={6} lg={3} xl={2}>
          <InputFeild
            value={urlValue}
            title="Paste a URL"
            handleChange={handleInputChange}
          />
          <RadioGroupFormat
            currentValue={imageFormat}
            handleChange={handleRadioChange}
          />
          <ResolutionSelect
            title="Resolution"
            value={resolution}
            handleChange={handleResolutionChange}
            menuItems={devices}
          />
          <PrimaryButton
            title={responseStatus.isLoading ? "Taking a screenshot..." : "Take a screenshot"}
            handleClick={handleScreenshotClick}
            disabled={!urlValue || responseStatus.isLoading}
          />
          {responseStatus.isError && (
            <span className="error">Error while taking the screenshot</span>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
