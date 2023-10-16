"use client";
import Image from "next/image";
import ProfileCard from "../ProfileCard";
import Button from "../../Button";
import { useFormik } from "formik";
import { editProfileValidation } from "@/src/lib/yup/registerUser";
import { useContext, useEffect } from "react";
import { authContext } from "@/src/provider/AuthProvider";
import TextField from "../../TextField";
import { toast } from "react-toastify";
import { editProfile } from "@/src/services/endPoints";

const EditProfileSection = () => {
  const { user, handleSetTokenAndUser } = useContext(authContext);
  const formik = useFormik({
    initialValues: { userId: "", firstName: "", lastName: "" },
    validationSchema: editProfileValidation,
    onSubmit: (values) => {
      handleEditProfile(values);
    },
  });

  const handleEditProfile = async (values) => {
    try {
      const res = await editProfile(values);
      toast.success(res.message);
      handleSetTokenAndUser(res.accessToken);
    } catch (err) {
      const message = err.message || "خطایی رخ داده است";
      toast.error(message);
    }
  };

  useEffect(() => {
    if (user) {
      formik.setValues(user);
    }
  }, [user]);
  return (
    <ProfileCard>
      <div className="w-full flex justify-between">
        <form
          onSubmit={formik.handleSubmit}
          className="px-8 flex flex-col gap-8 flex-1 max-w-[442px]"
        >
          <TextField
            name={"firstName"}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            label={"نام"}
            placeholder={"نام"}
            border={"second"}
            className={"font-bold"}
            error={formik.errors.firstName}
            touched={formik.touched.firstName}
          />
          <TextField
            name={"lastName"}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            label={"نام خانوادگی"}
            placeholder={"نام خانوادگی"}
            border={"second"}
            className={"font-bold"}
            error={formik.errors.lastName}
            touched={formik.touched.lastName}
          />

          <div className="w-auto flex justify-end">
            <Button variant="fill" type={"submit"}>
              ویرایش
            </Button>
          </div>
        </form>
        <Image
          src={"/images/PeopleWorking.png"}
          width={300}
          height={244}
          alt="editProfile"
          className="ml-[74px] hidden md:flex"
        />
      </div>
    </ProfileCard>
  );
};

export default EditProfileSection;
