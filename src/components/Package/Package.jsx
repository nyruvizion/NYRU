import YTBFrame from "../YTBFrame/YTBFrame";
import ZServices from "../../services/services";
import "./Package.scss";
import config from "./data/data.json"
import { useEffect, useState } from "react";

/**
 * Used to showing content of page (video, image or text) on Package/ folder.
 * @param {object} props Components with properties.
 * @param {string} props.name Name of the page.
 * @param {object} props.data Data showing in page.
 * @param {boolean} props.isUniqueText If data contains only text props.data.
 * @return {React.Element}
 */
export default function Package({ name, data, isUniqueText = false }) {
    const [lang, setLang] = useState(ZServices.LANG.fr);

    useEffect(() => {
        const language = localStorage.getItem(ZServices.LANG.stocker_name);
        setLang(language || ZServices.LANG.fr);
    }, []);

    return (
        <div id="package-container">
            <span className="title-ft" id="package-title">
                {ZServices.isFrench(lang) ? name.fr : name.en}
            </span>

            {isUniqueText ? (
                <div id="unique-text-container">
                    {
                        <span id="unique-text">
                            {ZServices.isFrench(lang)
                                ? data.text.fr
                                : data.text.en}
                        </span>
                    }
                </div>
            ) : (
                <div id="package-content-list-container">
                    {data
                        ? Object.keys(data).map((i, k1) => (
                            <div className="package-content-list" key={k1}>
                                {data[i].is_img ? (
                                    <div className="package-content-list-video-container">
                                        <img
                                            src={data[i].url}
                                            alt={`Image of ${data[i].name_en}`}
                                        />
                                    </div>
                                ) : (
                                    <div className="package-content-list-video-container">
                                        <YTBFrame
                                            link={`${config["ytb-bypass"]}${data[i].url}`}
                                        />
                                    </div>
                                )}

                                <div className="package-content-list-desc-container">
                                    <div className="package-content-list-desc-name-container">
                                        <span className="title-sp package-content-list-desc-name">
                                            {ZServices.isFrench(lang)
                                                ? data[i].name_fr
                                                : data[i].name_en}
                                        </span>
                                    </div>

                                    {data[i] ? (
                                        <div className="package-content-list-desc-points-container">
                                            {Object.keys(
                                                ZServices.isFrench(lang)
                                                    ? data[i].desc_fr
                                                    : data[i].desc_en
                                            ).map((j, k2) => (
                                                <span
                                                    className="package-content-list-desc-points"
                                                    key={k2}
                                                >
                                                    -{" "}
                                                    {ZServices.isFrench(lang)
                                                        ? data[i].desc_fr[j]
                                                        : data[i].desc_en[j]}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))
                        : null}
                </div>
            )}
        </div>
    );
}
