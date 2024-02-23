import Package from "../../../components/Package/Package";
import config from "./data/sfx.json";
import Layout from "../../../layout/Layout";
import Footer from "../../../components/Footer/Footer";
import { useEffect } from "react";
import data from "./data/data.json";
import ZServices from "../../../services/services";

export default function Sfx() {
    useEffect(() => {
        const lang = localStorage.getItem(ZServices.LANG.stocker_name);
        if(!lang) {
            localStorage.setItem(ZServices.LANG.stocker_name, ZServices.LANG.fr)
            lang = ZServices.LANG.fr
        }

        ZServices.changeTitle(
            ZServices.isFrench(lang) ? data.title.fr : data.title.en
        );
    }, []);

    return (
        <Layout>
            <Package name={data.title} data={config} isUniqueText={false} />
            <Footer />
        </Layout>
    );
}
