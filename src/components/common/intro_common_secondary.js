import React from "react";

function IntroCommonSecondary(props) {
  return (
    <div className="intro_common_secondary d-flex justify-content-center align-items-center">
        <div className="v-line"></div>
        <div className="title">{props.title ?? ""}</div>
        <div className="h-line"></div>
    </div>
  );
}

export default IntroCommonSecondary;
