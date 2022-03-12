const Avatar = ({ width = 8, imgSrc, name = "User" }) => {
  return (
    <div
      className={`rounded-full text-white text-center leading-8 w-8 h-8 bg-orange-600`}
    >
      {imgSrc ? <img src={imgSrc} alt="" /> : <span>{name.charAt(0)}</span>}
    </div>
  );
};

export default Avatar;
