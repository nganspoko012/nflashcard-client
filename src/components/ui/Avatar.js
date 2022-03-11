const Avatar = ({ width = 8, imgSrc, name = "User" }) => {
  return (
    <div
      className={`rounded-full text-white text-center leading-${width} w-${width} h-${width}  bg-orange-600`}
    >
      {imgSrc ? <img src={imgSrc} alt="" /> : <span>{name.charAt(0)}</span>}
    </div>
  );
};

export default Avatar;
