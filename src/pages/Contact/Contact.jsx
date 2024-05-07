import "./Contact.scss";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import data from "./data/data.json";
import ZServices from "../../services/services";

export default function Contact() {
    useEffect(() => {
        let lang = localStorage.getItem(ZServices.LANG.stocker_name);
        if (!lang) {
            localStorage.setItem(
                ZServices.LANG.stocker_name,
                ZServices.LANG.fr
            );
            lang = ZServices.LANG.fr;
        }

        ZServices.changeTitle(
            ZServices.isFrench(lang) ? data.title.fr : data.title.en
        );
    }, []);

    return (
        <div id="contact-container">
            <span id="page-title" className="title-ft">
                Contact
            </span>

            <div id="links-container">
                <div className="links">
                    <div
                        className="links-img-container"
                        onClick={() => {
                            ZServices.goTo(data.links.insta);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="links-img bi bi-instagram"
                        >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                    </div>

                    <div className="links-txt-container">
                        <span className="text-bs links-txt">@nyruvizion</span>
                    </div>
                </div>

                <div className="links">
                    <div
                        className="links-img-container"
                        onClick={() => {
                            ZServices.goTo(data.links.twitter);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="links-img bi bi-twitter-x"
                        >
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                    </div>

                    <div className="links-txt-container">
                        <span className="text-bs links-txt">@nyruvizion</span>
                    </div>
                </div>

                <div className="links">
                    <div
                        className="links-img-container"
                        onClick={() => {
                            ZServices.goTo(data.links.mail);
                        }}
                    >
                        <svg
                            style={{ filter: "invert(100%)" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            className="links-img"
                            viewBox="0 0 24 24"
                        >
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                        </svg>
                    </div>

                    <div className="links-txt-container">
                        <span className="text-bs links-txt">
                            nyruvizion@gmail.com
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
