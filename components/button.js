const Button = (props) => {
  return (
    <button
      {...props}
      className={`${"button"} ${props.className}`}
      style={{ width: "max-content" }}
    >
      {props.children}
    </button>
  );
};

export default Button;
