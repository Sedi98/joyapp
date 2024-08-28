import React, { useEffect, useState } from "react";
import CardComponent from "../../Components/Card/Card";
import ButtonComponent from "../../Components/Button/Button";
import { getData, getImage } from "../../Api/Api";
import CustomizedProgressBars from "../../Components/LoadingIndicator/LoadingIndicator";

const Main = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    if (!loading) {
      setLoading(true);
      dataRender();
    }
  };

  useEffect(() => {
    dataRender();
  }, []);

  const dataRender = async () => {
    const imgData = await getImage();
    const apiData = await getData();

    setData(apiData);
    setImage(imgData);
    setLoading(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ButtonComponent title={"Randomize"} onClicking={handleClick} />

      {loading ? (
        <CustomizedProgressBars />
      ) : (
        <CardComponent
          src={image.url}
          title={data.setup}
          text={data.punchline}
        />
      )}
      {/* <CustomizedProgressBars />
      <CardComponent src={image.url} title={data.setup} text={data.punchline} /> */}
    </div>
  );
};

export default Main;
