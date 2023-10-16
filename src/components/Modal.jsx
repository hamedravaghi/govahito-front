const Modal = ({ children, onClose, show }) => {
  if (!show) return null;
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full z-50">
      <div className="w-full h-full relative flex items-center justify-center ">
        <div
          className="w-full h-full absolute top-0 right-0 left-0 bottom-0 bg-black opacity-40 z-50"
          onClick={onClose}
        />
        <div className="z-50 w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
