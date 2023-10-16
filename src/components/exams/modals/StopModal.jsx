import { ExitExam } from "@/src/lib/svg";
import Modal from "../../Modal";

const StopModal = ({ show, onClose, handleEndExam }) => {
  return (
    <Modal onClose={onClose} show={show}>
      <div className="w-[328px] min-w-[328px]  bg-background rounded-2xl shadow-base flex flex-col items-center pt-10 pb-14 bg-white">
        <ExitExam />
        <p className="w-full text-center mt-6 ">از آزمون خارج می شی ؟ </p>

        <div className="w-full mt-12 flex px-8 justify-between">
          <button
            className="w-[120px] h-12 rounded-2xl bg-primary-main text-sm text-white font-bold shrink-0  "
            onClick={handleEndExam}
          >
            بله
          </button>
          <button
            className="w-[120px] h-12 rounded-2xl text-sm font-bold shrink-0 border border-border-main "
            onClick={onClose}
          >
            نه ، منصرف شدم
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default StopModal;
