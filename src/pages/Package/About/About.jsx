import Package from "../../../components/Package/Package";
import config from "./data/about.json";
import Layout from "../../../layout/Layout";
import Footer from "../../../components/Footer/Footer";
import { useEffect, useState } from "react";
import data from "./data/data.json";
import ZServices from "../../../services/services";
import "./About.scss";

export default function About() {
    const [language, setLanguage] = useState(ZServices.LANG.fr);

    useEffect(() => {
        const lang = localStorage.getItem(ZServices.LANG.stocker_name);
        if (!lang) {
            localStorage.setItem(
                ZServices.LANG.stocker_name,
                ZServices.LANG.fr
            );
            lang = ZServices.LANG.fr;
        }

        setLanguage(lang);

        ZServices.changeTitle(
            ZServices.isFrench(lang) ? data.title.fr : data.title.en
        );
    }, []);

    return (
        <div id="about-container">
            <span className="title-ft" id="about-title">
                Contact
            </span>

            <div id="about-text-container">
                <span className="text-bs about-text">
                    {ZServices.isFrench(language)
                        ? config.text.fr[0]
                        : config.text.en[0]}
                </span>
                <span className="text-bs about-text">
                    {ZServices.isFrench(language)
                        ? config.text.fr[1]
                        : config.text.en[1]}
                </span>
                <span className="text-bs about-text">
                    {ZServices.isFrench(language)
                        ? config.text.fr[2]
                        : config.text.en[2]}
                </span>
                <span className="text-bs about-text">
                    {ZServices.isFrench(language)
                        ? config.text.fr[3]
                        : config.text.en[3]}
                </span>
            </div>
            <Footer />
        </div>
    );
}
