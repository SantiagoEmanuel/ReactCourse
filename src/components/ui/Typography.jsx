import PropTypes from "prop-types";

/**
 * Componente Typography
 *
 * Un componente flexible para aplicar estilos de texto a diferentes elementos HTML.
 *
 * @param {string} As - El tipo de elemento HTML a utilizar para el texto (por ejemplo, "h1", "h2", "p").
 * @param {node} children - El contenido de texto que se mostrará dentro del elemento.
 * @param {object} rest - Cualquier otra propiedad válida de React que se aplicará al elemento.
 *
 * @returns {JSX.Element} El componente Typography.
 */
export function Typography({ As, children, ...rest }) {
  return <As {...rest}>{children}</As>;
}

Typography.propTypes = {
  As: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
