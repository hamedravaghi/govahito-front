const SendCommentForm = () => {
    return (
        <div className="w-full flex flex-col gap-3">
            <h3 className="font-bold text-sm md:text-xl xl:text-2xl text-text-main">نظر خود را ارسال کنید</h3>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-0 gap-5">
                <div className="relative rounded-2xl border border-primary-main p-4">
                    <p className="text-sm md:text-base text-text-main font-normal leading-6 md:leading-10">
                        چی بهتر از یه گفتگوی دوستانه ؛
                        <br />
                        اگر مطلب یا موضوعی هست یا پیشنهاد و انتقادی داری و یا هنوز سوالی برات بدون پاسخ مونده اینجا برامون بنویس ما حتما در اسرع وقت جواب میدیم.
                    </p>
                    <div className="absolute top-0 right-7 opacity-50 -z-10 bg-secondary-main w-3/12 h-full before:content-[''] before:absolute before:w-full before:h-12 before:-top-12 before:right-0 before:rounded-t-2xl before:bg-secondary-main after:content-[''] after:absolute after:w-full after:h-10 after:-bottom-10 after:right-0 after:rounded-b-2xl after:bg-secondary-main"></div>
                </div>

                <div className="w-full h-32 relative md:h-full border border-primary-main rounded-2xl p-4 bg-secondary-background before:content-[''] before:opacity-50 before:absolute before:-top-5 md:before:-top-7 before:-z-10 before:left-0 before:w-7/12 before:h-7 md:before:h-10 before:rounded-t-2xl before:bg-secondary-main">
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        placeholder="اینجا بنویس..."
                        className="w-full h-full border-none outline-none text-text-second text-base placeholder:text-sm md:placeholder:text-base placeholder:text-text-second"
                    ></textarea>
                </div>
            </div>
            <button className="w-36 md:w-44 h-9 md:h-11 mr-auto text-xs md:text-base font-bold text-primary-text rounded-xl shadow-base bg-primary-main hover:bg-primary-hover transition-colors duration-300 ease-in-out">
                ارسال پیام
            </button>
        </div>
    );
};

export default SendCommentForm;
