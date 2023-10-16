import { getCertificate } from "@/src/lib/data/certificate";
import { getExamMetaData } from "@/src/services/endPoints";
import GoldClientExam from "@/src/components/exams/GoldClientExam";

export async function generateMetadata({ params }) {
  const certificate = getCertificate(params.slug);
  const exam = await getExamMetaData(params.exam);

  return {
    generator: "گواهیتو",
    title: `${exam.subTitle} `,
    description: ` ${exam.subTitle} شامل سوالات پر تکرار و مهم آزمون آیین نامه راهنمایی و رانندگی ویژه دریافت گواهینامه ${certificate.title} ${certificate.subTitle} `,
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const GoldExam = ({ params }) => {
  return (
    <GoldClientExam certificateSlug={params.slug} examSlug={params.exam} />
  );
};

export default GoldExam;
