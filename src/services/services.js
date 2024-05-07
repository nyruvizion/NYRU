/**
 * Class with a multiple static function used in th all
 * of the code.
 * @contact General Zod (lalBi94 on GitHub)
 * @author General Zod (lalBi94 on GitHub)
 * @name ZServices
 */
export default class ZServices {
    /**
     * @typedef {Object} LANGData
     * @property {string} fr Label of french lang.
     * @property {string} en Label of english lang.
     * @property {string} stocker_name Name of the key in local storage.
     */

    /**
     * @type {LANGData}
     */
    static LANG = {
        fr: "FR",
        en: "EN",
        stocker_name: "nyru_lang",
    };

    /**
     * Get out of caller from an anther URL
     * @param {string} url Destination.
     * @param {boolean | null} refresh Reload component if target is a component.
     * @return {void}
     */
    static goTo(url, refresh = null) {
        window.location.href = url;
        if (refresh) window.location.reload();
    }

    /**
     * Change title of the page
     * @param {string} title The final title page.
     * @return {void}
     */
    static changeTitle(title) {
        document.title = title;
    }

    static isFrench(selectedLang) {
        return selectedLang === this.LANG.fr;
    }
}
