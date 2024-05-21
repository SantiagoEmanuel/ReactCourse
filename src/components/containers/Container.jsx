export function Container({ children, ...styles }) {
  return <section {...styles}>{children}</section>;
}
