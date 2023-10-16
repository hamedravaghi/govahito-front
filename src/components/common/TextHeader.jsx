
const TextHeader = ({ children, ...otherProps }) => {

  return (
    <h3
    className=""
      fontWeight={"bold"}
      lineHeight={1.5}
      sx={{ wordSpacing: "2px" }}
      fontSize={isNonMobile ? 24 : 18}
      {...otherProps}
    >
      {children}
    </h3>
  );
};

export default TextHeader;
