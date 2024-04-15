import PropTypes from "prop-types";

/**
 * Componente CustomLink
 *
 * Un componente de enlace personalizado para renderizar enlaces.
 *
 * @param {string} to - La URL a la que enlaza el enlace.
 * @param {string} label - El texto visible del enlace.
 * @param {object} [..rest] - Cualquier otro atributo válido de <a> puede ser pasado al componente.
 *
 * @returns {JSX.Element} El componente CustomLink.
 */
export function CustomLink({ to, label, ...rest }) {
  return (
    <a href={to} {...rest}>
      {label}
    </a>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
