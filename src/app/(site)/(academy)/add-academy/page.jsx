"use client";
import { Fragment } from "react";

import { useFormik } from "formik";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

import { CustomPadding } from "@/src/components/common";
import { academyRegisterSchema } from "@/src/lib/yup";

const certificates = [
    { name: "انتخاب گواهینامه", value: "" },
    { name: "گواهینامه پایه اول", value: "paye-aval" },
    { name: "گواهینامه پایه دوم", value: "paye-dovom" },
    { name: "گواهینامه پایه سوم", value: "paye-sevom" },
    { name: "گواهینامه موتورسیکلت", value: "motor-cycle" },
];

const AddAcademy = () => {
    const { errors, touched, values, handleSubmit, handleChange, setValues, setFieldValue } = useFormik({
        initialValues: {
            academyCertificate: "",
            academyDirectorName: "",
            academyName: "",
        },
        validationSchema: academyRegisterSchema,
        onSubmit: (values) => console.log(values),
    });

    const { academyCertificate, academyDirectorName, academyName } = values;

    return (
        <CustomPadding>
            <form onSubmit={handleSubmit} className="w-full py-7 flex flex-col gap-5 items-end">
                <div id="academy-information" className="w-full flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-1 text-base text-text-main font-bold" id="academy-information-header">
                        <h3>اطلاعات آموزشگاه</h3>
                        <span className="w-full rounded h-0.5 bg-primary-main" />
                    </div>
                    <div className="grid lg:grid-cols-2 place-items-start gap-x-7 gap-y-3">
                        <Listbox
                            value={academyCertificate}
                            as="div"
                            name="academyCertificate"
                            className="w-full flex flex-col gap-1.5"
                            id="academyCertificate"
                            onChange={(e) => setFieldValue("academyCertificate", e)}
                        >
                            <div className="relative mt-1">
                                <Listbox.Button className="rounded-lg w-full border border-border-main overflow-hidden flex justify-between items-center text-base font-normal text-text-third cursor-default p-2">
                                    {academyCertificate ? certificates.find((certify) => certify.value === academyCertificate).name : "انتخاب گواهینامه"}
                                    <BsChevronDown />
                                </Listbox.Button>
                                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1.5 text-base ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {certificates.map(({ name, value }, index) => (
                                            <Listbox.Option
                                                key={index}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none p-1.5 rounded-lg transition-all duration-300 ease-in-out ${
                                                        active && "bg-primary-main text-text-main font-bold"
                                                    }`
                                                }
                                                value={value}
                                            >
                                                {name}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                            {errors.academyCertificate && touched.academyCertificate ? <p className="text-xs text-red-500">{errors.academyCertificate}</p> : null}
                        </Listbox>
                        <div className="w-full flex flex-col gap-1.5">
                            <input
                                type="text"
                                name="academyName"
                                id="academyName"
                                placeholder="نام آموزشگاه"
                                onChange={handleChange}
                                value={academyName}
                                className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                            />
                            {errors.academyName && touched.academyName ? <p className="text-xs text-red-500">{errors.academyName}</p> : null}
                        </div>
                        <div className="w-full flex flex-col gap-1.5">
                            <input
                                type="text"
                                name="academyDirectorName"
                                id="academyDirectorName"
                                placeholder="نام مالک"
                                onChange={handleChange}
                                value={academyDirectorName}
                                className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                            />
                            {errors.academyDirectorName && touched.academyDirectorName ? <p className="text-xs text-red-500">{errors.academyDirectorName}</p> : null}
                        </div>
                    </div>
                </div>
                <input
                    type="submit"
                    value="ذخیره اطلاعات"
                    className="rounded-lg w-36 cursor-pointer text-text-main font-normal bg-primary-main hover:bg-primary-hover transition-all duration-300 ease-in-out py-2 px-4 shadow-base"
                />
            </form>
        </CustomPadding>
    );
};

export default AddAcademy;
