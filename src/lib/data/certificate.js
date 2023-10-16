import { BigBus, BigCar, BigCycle, BigTruck, Book, Category, GoldExam, MainExam } from "@/src/lib/svg";
export const certificate = [
  { title: "موتور سیکلت", slug: "cycle", subTitle: "", icon: <BigCycle /> },
  {
    title: "خودرو سواری",
    slug: "car",
    subTitle: "پایه سه",
    icon: <BigCar className={"md:w-10 md:h-10 lg:w-14 lg:h-14"} />,
  },
  {
    title: "خودرو نیمه سنگین",
    slug: "truck",
    subTitle: "پایه دو",
    icon: <BigTruck />,
  },
  { title: "خودرو سنگین", slug: "bus", subTitle: "پایه یک", icon: <BigBus /> },
];
export const getCertificate = (slug) => {
  if (slug) {

    return certificate.find((item) => item.slug === slug);
  } else {
    return certificate
  }
};

const featureGroup = [{ id: "book", icon: <Book />, title: "کتاب یار", desc: "( منتخب مباحث کتاب )", free: true },
{ id: "categories", icon: <Category />, title: "سوالات موضوعی", desc: "( دسته بندی شده )", free: true },
{ id: "tests", icon: <MainExam />, title: "آزمون آزمایشی", desc: "", free: true },
{ id: "golds", icon: <GoldExam />, title: "آزمون طلایی", desc: "", free: false },
]

export const getFeatur = (id) => {
  if (id) {
    return featureGroup.find(item => item.id === id)
  } else {

    return featureGroup
  }

}


export const getCertificateFeature = (slug) => {
  return [{ id: "book", icon: <Book />, title: "کتاب یار", desc: "( منتخب مباحث کتاب )", free: true, link: `/certificate/${slug}/book` },
  { id: "categories", icon: <Category />, title: "سوالات موضوعی", desc: "( دسته بندی شده )", free: true, link: `/certificate/${slug}/categories` },
  { id: "tests", icon: <MainExam />, title: "آزمون آزمایشی", desc: "", free: true, link: `/certificate/${slug}/tests` },
  { id: "golds", icon: <GoldExam />, title: "آزمون طلایی", desc: "", free: false, link: `/certificate/${slug}/golds` },
  ]
}