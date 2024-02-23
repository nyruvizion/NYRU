import React, { useState, useEffect } from "react";
import "./YTBFrame.scss";

/**
 * Component showing a frame contains youtube video.
 * @param {object} props Component with properties.
 * @param {string} props.link Link of the bypassed youtube embed
 * @return {React.Element}
 */
export default function YTBFrame({ link }) {
    return (
        <iframe
            src={link}
            className="ytb-frame"
            title="YouTube video player"
            frameborder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    );
}
