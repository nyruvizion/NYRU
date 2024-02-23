import "./Button.scss";
import "hover.css";

/**
 * Default button used in this website.
 * @param {object} props Component with properties
 * @param {string} props.text Text of the button.
 * @param {string|React.Element} props.logo Logo in <svg>, <img> tags.
 * @param {function} props.handle Button onclick callback.
 * @param {string} props.fc - Color of text.
 * @param {string} props.bg - Color of background.
 * @param {object|null} [props.persostyle=null] - Personalized styles.
 * @return {React.Element}
 */
export default function Button({
    text,
    logo,
    handle,
    fc,
    bg,
    persostyle = null,
}) {
    return (
        <button
            persostyle={persostyle}
            style={{ color: fc || null, background: bg || null }}
            className="button-container hvr-grow"
            onClick={handle}
        >
            {text ? <span>{text}</span> : logo}
        </button>
    );
}
