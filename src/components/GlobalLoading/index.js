import { CircularProgress } from "@material-ui/core";
import React from "react";

const loadingGlobalOpacity = props => {
  return props.loading ? (
    <div
      style={{
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        opacity: 0.8,
        position: "fixed",
        zIndex: 999999,
        textAlign: "center"
      }}
    >
      <CircularProgress style={{ color: "#7d5886", marginTop: "17%" }} />
    </div>
  ) : null;
};

export default loadingGlobalOpacity;
