"use client";
import { Fragment, useEffect } from "react";

import { useFormik } from "formik";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown, BsPlus } from "react-icons/bs";

import { CustomPadding } from "@/src/components/common";
import { academyRegisterSchema } from "@/src/lib/yup";
import { MapBox } from "@/src/components/common";

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
            academyFullAddress: "",
            academyLongitude: "",
            academyLatitude: "",
            academyEmail: "",
            academyFaxNumber: "",
            academyPhoneNumbers: [{ mobile: "", title: "" }],
        },
        validationSchema: academyRegisterSchema,
        onSubmit: (values) => console.log(values),
    });

    const { academyCertificate, academyDirectorName, academyName, academyFullAddress, academyLongitude, academyLatitude, academyEmail, academyFaxNumber, academyPhoneNumbers } = values;

    const handleAddMobileNumber = () => {
        setValues({
            ...values,
            academyPhoneNumbers: [...academyPhoneNumbers, { mobile: "", title: "" }],
        });
    };

    return (
        <CustomPadding>
            <form noValidate onSubmit={handleSubmit} className="w-full py-7 flex flex-col gap-5 items-end">
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
                <div id="academy-address" className="w-full flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-1 text-base text-text-main font-bold" id="academy-information-header">
                        <h3>آدرس آموزشگاه</h3>
                        <span className="w-full rounded h-0.5 bg-primary-main" />
                    </div>
                    <div className="w-full grid grid-cols-12 place-items-start gap-x-7 gap-y-3">
                        <Listbox
                            value={academyCertificate}
                            as="div"
                            name="academyCertificate"
                            className="w-full col-span-4 flex flex-col gap-1.5"
                            id="academyCertificate"
                            onChange={(e) => setFieldValue("academyCertificate", e)}
                        >
                            <div className="relative mt-1">
                                <Listbox.Button className="rounded-lg w-full border border-border-main overflow-hidden flex justify-between items-center text-base font-normal text-text-third cursor-default p-2">
                                    {academyCertificate ? certificates.find((certify) => certify.value === academyCertificate).name : "استان"}
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
                        <Listbox
                            value={academyCertificate}
                            as="div"
                            name="academyCertificate"
                            className="w-full col-span-4 flex flex-col gap-1.5"
                            id="academyCertificate"
                            onChange={(e) => setFieldValue("academyCertificate", e)}
                        >
                            <div className="relative mt-1">
                                <Listbox.Button className="rounded-lg w-full border border-border-main overflow-hidden flex justify-between items-center text-base font-normal text-text-third cursor-default p-2">
                                    {academyCertificate ? certificates.find((certify) => certify.value === academyCertificate).name : "شهر"}
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
                        <Listbox
                            value={academyCertificate}
                            as="div"
                            name="academyCertificate"
                            className="w-full col-span-4 flex flex-col gap-1.5"
                            id="academyCertificate"
                            onChange={(e) => setFieldValue("academyCertificate", e)}
                        >
                            <div className="relative mt-1">
                                <Listbox.Button className="rounded-lg w-full border border-border-main overflow-hidden flex justify-between items-center text-base font-normal text-text-third cursor-default p-2">
                                    {academyCertificate ? certificates.find((certify) => certify.value === academyCertificate).name : "منطقه شهری"}
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
                        <div className="w-full col-span-12">
                            <textarea
                                name="academyFullAddress"
                                id="academyFullAddress"
                                rows="1"
                                onChange={handleChange}
                                value={academyFullAddress}
                                placeholder="آدرس کامل آموزشگاه"
                                className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                            ></textarea>
                            {errors.academyFullAddress && touched.academyFullAddress ? <p className="text-xs text-red-500">{errors.academyFullAddress}</p> : null}
                        </div>
                        <div className="w-full col-span-5 flex flex-col gap-1.5">
                            <input
                                type="text"
                                name="academyLongitude"
                                id="academyLongitude"
                                placeholder="طول جغرافیایی"
                                onChange={handleChange}
                                value={academyLongitude}
                                className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                            />
                            {errors.academyLongitude && touched.academyLongitude ? <p className="text-xs text-red-500">{errors.academyLongitude}</p> : null}
                        </div>
                        <div className="w-full col-span-5 flex flex-col gap-1.5">
                            <input
                                type="text"
                                name="academyLatitude"
                                id="academyLatitude"
                                placeholder="عرض جغرافیایی"
                                onChange={handleChange}
                                value={academyLatitude}
                                className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                            />
                            {errors.academyLatitude && touched.academyLatitude ? <p className="text-xs text-red-500">{errors.academyLatitude}</p> : null}
                        </div>
                        <div className="w-full col-span-12 h-80 rounded-lg overflow-hidden">
                            <MapBox latitude={35.80291400035104} longitude={51.47847354412079} />
                        </div>
                    </div>
                </div>
                <div id="academy-address" className="w-full flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-1 text-base text-text-main font-bold" id="academy-information-header">
                        <h3>اطلاعات تماس آموزشگاه</h3>
                        <span className="w-full rounded h-0.5 bg-primary-main" />
                    </div>
                    <div className="w-full grid grid-cols-12 place-items-start gap-x-7 gap-y-3">
                        {academyPhoneNumbers.map((phoneNumber, index) => (
                            <div key={index} className="w-full col-span-12 grid grid-cols-12 gap-7">
                                <div className="w-full col-span-6 flex flex-col gap-1.5">
                                    <input
                                        type="tel"
                                        name={`academyPhoneNumbers[${index}].title`}
                                        id={`academyPhoneNumbers[${index}].title`}
                                        placeholder="عنوان شماره تماس"
                                        onChange={handleChange}
                                        value={phoneNumber.title}
                                        className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                                    />
                                    {Array.isArray(errors.academyPhoneNumbers) &&
                                    Array.isArray(touched.academyPhoneNumbers) &&
                                    errors.academyPhoneNumbers[index]?.title &&
                                    touched.academyPhoneNumbers[index]?.title ? (
                                        <p className="text-xs text-red-500">{errors.academyPhoneNumbers[index]?.title}</p>
                                    ) : null}
                                </div>
                                <div className="w-full col-span-6 flex flex-col gap-1.5">
                                    <input
                                        type="tel"
                                        name={`academyPhoneNumbers[${index}].mobile`}
                                        id={`academyPhoneNumbers[${index}].mobile`}
                                        placeholder="شماره تماس"
                                        onChange={handleChange}
                                        value={phoneNumber.mobile}
                                        className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                                    />
                                    <div className="w-full flex items-start">
                                        {Array.isArray(errors.academyPhoneNumbers) &&
                                        Array.isArray(touched.academyPhoneNumbers) &&
                                        errors.academyPhoneNumbers[index]?.mobile &&
                                        touched.academyPhoneNumbers[index]?.mobile ? (
                                            <p className="text-xs text-red-500">{errors.academyPhoneNumbers[index]?.mobile}</p>
                                        ) : null}
                                        {index == academyPhoneNumbers.length - 1 && (
                                            <button
                                                type="button"
                                                onClick={handleAddMobileNumber}
                                                className="rounded-xl text-2xl bg-primary-main hover:bg-primary-hover transition-colors duration-300 ease-in-out p-1.5 mr-auto"
                                            >
                                                <BsPlus />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="w-full col-span-6 flex flex-col gap-1.5">
                            <input
                                type="tel"
                                name="academyFaxNumber"
                                id="academyFaxNumber"
                                placeholder="فکس (اختیاری)"
                                onChange={handleChange}
                                value={academyFaxNumber}
                                className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                            />
                            {errors.academyFaxNumber && touched.academyFaxNumber ? <p className="text-xs text-red-500">{errors.academyFaxNumber}</p> : null}
                        </div>
                        <div className="w-full col-span-6 flex flex-col gap-1.5">
                            <input
                                type="email"
                                name="academyEmail"
                                id="academyEmail"
                                placeholder="ایمیل (اختیاری)"
                                onChange={handleChange}
                                value={academyEmail}
                                className="w-full rounded-lg outline-none p-2 border border-border-main text-base text-text-third font-normal placeholder:text-base placeholder:text-text-third placeholder:font-normal"
                            />
                            {errors.academyEmail && touched.academyEmail ? <p className="text-xs text-red-500">{errors.academyEmail}</p> : null}
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
