import CustomPadding from "@/src/components/common/CustomPadding";
import ClientExam from "@/src/components/exams/ClientExam";
import { getCertificate } from "@/src/lib/data/certificate";
import { getSingleTestExam } from "@/src/services/endPoints";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);
  const exam = await getSingleTestExam(params.test);

  return {
    generator: "گواهیتو",
    title: `${exam.subTitle} `,
    description: ` ${exam.subTitle} شامل سوالات پر تکرار و مهم آزمون آیین نامه راهنمایی و رانندگی ویژه دریافت گواهینامه ${certificate.title} ${certificate.subTitle} `,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const Exam = async ({ params }) => {
  let exam;
  await getSingleTestExam(params.test).then((result) => {
    exam = result;
  });

  return (
    <CustomPadding>
      <ClientExam
        exam={exam}
        certificateSlug={params.slug}
        examSlug={params.test}
      />
    </CustomPadding>
  );
};

export default Exam;
