import * as Yup from "yup";

const reg = /^\d+$/;
const phoneRegExp = /(09)(10|11|12|13|14|15|16|17|18|19|90|91|92|93|94|30|33|35|36|37|38|39|00|01|02|03|04|05|41|42|20|21|22|32|31|34)\d{7}/;

export const academyRegisterSchema = Yup.object().shape({
    academyCertificate: Yup.string().required("انتخاب گواهینامه الزامی است."),
    academyDirectorName: Yup.string().required("نام مالک الزامی است."),
    academyName: Yup.string().required("نام آموزشگاه الزامی است."),
    academyFullAddress: Yup.string().required("آدرس کامل آموزشگاه الزامی است."),
    academyLongitude: Yup.string().required("طول جغرافیایی اجباری است"),
    academyLatitude: Yup.string().required("عرض جغرافیایی اجباری است"),
    academyEmail: Yup.string().email("فرمت ایمیل وارد شده معتبر نیست."),
    academyFaxNumber: Yup.string()
        .matches(reg, "شماره فکس نمی تواند شامل حروف . کارکتر باشد.")
        .min(8, "شماره فکس نمی تواند کم تر از 8 کارکتر باشد.")
        .max(8, "شماره فکس نمی تواند بیشتر از 8 کارکتر باشد."),
    academyPhoneNumbers: Yup.array()
        .of(
            Yup.object().shape({
                mobile: Yup.string().matches(phoneRegExp, "شماره موبایل معتبر نیست").max(11, "تعداد ارقام بیش از حد مجاز است.").required("شماره موبایل الزامی است"),
                title: Yup.string().required("عنوان شماره موبایل الزامی است"),
            })
        )
        .required("حداقل یک شماره موبایل و عنوان مرتبط الزامی است."),
});
