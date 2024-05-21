export function ShowAvatar({ avatar = null, alt, ...styles }) {
  if (avatar) {
    return <img src={avatar} alt={alt} {...styles} />;
  } else {
    return (
      <img
        src="/user-no-avatar.png"
        alt="User Avatar is no available"
        {...styles}
      />
    );
  }
}
