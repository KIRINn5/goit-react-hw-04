// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ message }) => {
  const errorStyle = {
    margin: "auto",
  };
  return (
    <div className={errorStyle}>
      <p>{message}</p>
    </div>
  );
};
export default ErrorMessage;
