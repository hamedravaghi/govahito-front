import { PauseExam } from "@/src/lib/svg";
import Modal from "../../Modal";

const PauseModal = ({ onClose, show }) => {
  return (
    <Modal onClose={onClose} show={show}>
      <div className="w-[328px] min-w-[328px]  bg-background rounded-2xl shadow-base flex flex-col items-center pt-10 pb-14 bg-white">
        <PauseExam />
        <p className="w-full text-center mt-6 ">آزمون متوقف شده است </p>

        <div className="w-full mt-12 flex px-8 justify-between">
          <button className="w-full h-12 rounded-2xl bg-primary-main  text-white font-bold shrink-0  " onClick={onClose}>
            ادامه آزمون
          </button>
          
        </div>
      </div>
    </Modal>
  );
};

export default PauseModal;
