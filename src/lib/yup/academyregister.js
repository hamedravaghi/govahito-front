import * as Yup from "yup";

export const academyRegisterSchema = Yup.object().shape({
    academyCertificate: Yup.string().required("انتخاب گواهینامه الزامی است."),
    academyDirectorName: Yup.string().required("نام مالک الزامی است."),
    academyName: Yup.string().required("نام آموزشگاه الزامی است."),
});
