
const Popup = props => {
  return (
    <div className="bg-black h-full w-full fixed top-0 left-0 right-0 bottom-0">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;