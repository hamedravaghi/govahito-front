import SignCard from "@/src/components/cards/SignCard";
import { getCertificate } from "@/src/lib/data/certificate";
import { getSigns } from "@/src/services/endPoints";
import { toast } from "react-toastify";

export async function generateMetadata({ params }) {
  const signCategory = await getSigns(params.category);
  const certificate = getCertificate(params.slug);

  return {
    generator: "گواهیتو",
    title: `تمام تابلو های دسته بندی ${
      signCategory.signCategory
    } - ویژه آزمون گواهینامه ${certificate.title} ${
      "-" + certificate.subTitle
    } `,
    description: "",
    applicationName: "گواهیتو",
    author: "گواهیتو",
    referrer: "origin-when-cross-origin",
  };
}

const page = async ({ params }) => {
  let result;
  await getSigns(params.category)
    .then((res) => {
      result = res;
    })
    .catch((err) => toast.error(err.data.message || "خطایی رخ داده است"));

  return (
    <div className="w-full flex flex-col gap-4 mt-5">
      <h3>
        تابلو های گروه <span className="font-bold">{result?.signCategory}</span>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: result?.desc }} />
      <div className="w-full h-full ">
        {Array.isArray(result?.signs) ? (
          <div className="grid grid-flow-row gap-4   grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {result.signs.map((item) => (
              <SignCard title={item.title} image={item.image} key={item._id} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default page;
