const CustomPadding = ({ children, className, ...otherProps }) => {
    return (
        <div className="w-full flex flex-col items-center">
            <div {...otherProps} className={`px-4 md:px-8 lg:px-[70px] flex flex-col ${className} w-full max-w-[1366px]`}>
                {children}
            </div>
        </div>
    );
};

export default CustomPadding;
