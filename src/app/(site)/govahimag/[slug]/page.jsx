import CustomPadding from "@/src/components/common/CustomPadding";
import { getSingleArticle } from "@/src/services/endPoints";

const Article = async ({ params }) => {
  let content;
  await getSingleArticle(params.slug).then((res) => {
    if (Array.isArray(res)) {
      content = res[0];
    }
  });

  return (
    <CustomPadding className={"mt-5 flex flex-col gap-5"}>
      <h3 className="font-bold">{content?.title.rendered}</h3>
      <div dangerouslySetInnerHTML={{ __html: content?.content.rendered }} />
    </CustomPadding>
  );
};

export default Article;
