
const Popup = props => {
  return (
    <div className="bg-black h-screen fixed top-0 left-0 w-full">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;