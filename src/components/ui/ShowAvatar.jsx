export function ShowAvatar({ avatar = null, alt, className }) {
  return (
    <img
      src={avatar || "/user-no-avatar.png"}
      alt={alt || "User Avatar is no available"}
      className={className}
    />
  );
}
