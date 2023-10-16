import { getCertificate } from "@/src/lib/data/certificate";
import Modal from "../../Modal";
import Link from "next/link";

const StartModal = ({ onClose, show, examType, examName, certificateSlug,backLink }) => {
  const certificate = getCertificate(certificateSlug);

  return (
    <Modal onClose={() => {}} show={show}>
      <div className="w-full h-full md:h-[500px]   md:w-[500px] p-2 md:p-0">
        <div className="w-full  h-full   bg-background rounded-2xl shadow-base flex flex-col items-center p-2 bg-white gap-2">
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-center h-11">
              {certificate.icon}
            </div>
            <div className="w-full flex  justify-between items-center border-b pb-2">
              <p className="text-sm text-text-second">{certificate.title}</p>
              <p className="font-bold">{examName}</p>
              <p className="text-sm text-text-second">{examType}</p>
            </div>
          </div>
          <div className="flex  flex-1 w-full overflow-y-scroll no-scrollbar pr-6">
            <ul className="list-disc w-full  text-sm  text-text-third leading-10">
              <li>
                شما می بایست مشابه آزمون اصلی به{" "}
                <span className="font-bold text-text-main">30</span> سوال در مدت
                زمان <span className="font-bold text-text-main">20</span> دقیقه
                پاسخ دهید .
              </li>
              <li>
                برای قبول در آزمون به{" "}
                <span className="font-bold text-text-main">27</span> پاسخ صحیح
                نیاز دارید .
              </li>
              <li>
                شما می بایست حد اقل به 10 سوال پاسخ دهید تا نتیجه آزمون شما
                ذخیره شود .
              </li>
              <li>
                تا انتهای آزمون از دکمه{" "}
                <span className="font-bold text-text-main">بازگشت مرورگر</span>{" "}
                استفاده نکنید تا نتیجه آزمون ذخیره شود.
              </li>
              <li>برای ذخیره نتیجه آزمون حتما باید در سایت ثبت نام کنید .</li>
              <li>
                پایان آزمون یا هر زمان که از دکمه خروج از آزمون استفاده کنید می
                توانید تمام پاسخ ها را مشاهده کنید .
              </li>
            </ul>
          </div>
          <div className="flex gap-2 w-full justify-between">
            <div className="w-1/2">
              <button
                onClick={onClose}
                className="w-full h-10 rounded-2xl bg-primary-main text-sm text-white font-bold shrink-0  "
              >
                شروع آزمون
              </button>
            </div>
            <div className="w-1/2 flex items-center justify-center  border rounded-2xl h-10">
              <Link
                href={backLink}
                className="w-full h-full flex items-center justify-center font-bold"
              >
                خروج
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StartModal;
