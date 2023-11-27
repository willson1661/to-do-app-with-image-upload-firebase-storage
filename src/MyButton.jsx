const MyButton = ({ to }) => {
    return (
      <div className="t_1111">
        <a  href={`/${to}`}>
          <div className="my-button">{to === "" ? "Back" : to}</div>
        </a>
      </div>
    );
  };
  
  export default MyButton;
  