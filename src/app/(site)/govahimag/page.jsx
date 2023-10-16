import CustomPadding from "@/src/components/common/CustomPadding";
import { getArticle } from "@/src/services/endPoints";
import Link from "next/link";

const page = async () => {
  let content = [];
  // await getArticle().then((res) => {
  //   console.log("this is from govahimag:", res);
  // });

  return (
    <div className="w-full flex flex-col flex-wrap gap-3 mt-5">
      <CustomPadding>
        {/* {Array.isArray(content) &&
          content.map((item) => (
            <Link href={`/govahimag/${item.slug}`} key={item.id}>
              {item.title.rendered}
            </Link>
          ))} */}
      </CustomPadding>
    </div>
  );
};

export default page;
