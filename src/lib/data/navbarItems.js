import { AcademyBanner } from "../AcademyBanner";
import { CertificateBanner } from "../CertificateBanner";
import { ExamBanner } from "../ExamBanner";
import { LearnBanner } from "../LearnBanner";

const { Cycle, Car, Truck, Bus } = require("../svg");



class Link {
     constructor(icon, title, subtitle, link) {
          this.icon = icon;
          this.title = title;
          this.subtitle = subtitle;
          this.link = link
     }
}


const cycleLink = "/certificate/cycle"
const carLink = "/certificate/car"
const truckLink = "/certificate/truck"
const busLink = "/certificate/bus"



const cartificate = {
     title: "گواهینامه ها", banner: {
          icon: <CertificateBanner />, textArr: [
               "اطلاع از شرایط دریافت هر گواهینامه",
               "مدارک  لازم برای ثبت نام دریافت گواهینامه",
               " دریافت راحت و آسان گواهینامه",
          ]
     }, sections: [{
          title: "گواهینامه ها", subtitle: "",
          mobileSubtitle: false, mobileTitle: false,
          links: [new Link(<Cycle />, "موتور سیکلت", "", cycleLink),
          new Link(<Car />, "خودرو سواری", "پایه سه", carLink),
          new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", truckLink),
          new Link(<Bus />, "خودرو سنگین", "پایه یک", busLink),
          ]
     }]
}


const certificates = {
     title: "گواهینامه ها", subtitle: "",
     mobileSubtitle: false, mobileTitle: false,
     links: [new Link(<Cycle />, "موتور سیکلت", "", cycleLink),
     new Link(<Car />, "خودرو سواری", "پایه سه", carLink),
     new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", truckLink),
     new Link(<Bus />, "خودرو سنگین", "پایه یک", busLink),
     ]
}

const book = {
     title: "کتاب یار", subtitle: "موضوعات اصلی و مهم کتاب راهنمایی و رانندگی",
     mobileSubtitle: false, mobileTitle: true,
     links: [new Link(<Cycle />, "موتور سیکلت", "", `${cycleLink}/book`),
     new Link(<Car />, "خودرو سواری", "پایه سه", `${carLink}/book`),
     new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", `${truckLink}/book`),
     new Link(<Bus />, "خودرو سنگین", "پایه یک", `${busLink}/book`),
     ]
}


const questionCategory = {
     title: "سوالات موضوعی", subtitle: "سوالات دسته بندی شده به همراه پاسخ",
     mobileSubtitle: false, mobileTitle: true,
     links: [new Link(<Cycle />, "موتور سیکلت", "", `${cycleLink}/categories`),
     new Link(<Car />, "خودرو سواری", "پایه سه", `${carLink}/categories`),
     new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", `${truckLink}/categories`),
     new Link(<Bus />, "خودرو سنگین", "پایه یک", `${busLink}/categories`),
     ]
}



const testExam = {
     title: " آزمون آزمایشی", subtitle: "",
     mobileSubtitle: false, mobileTitle: true,
     links: [new Link(<Cycle />, "موتور سیکلت", "", `${cycleLink}/tests`),
     new Link(<Car />, "خودرو سواری", "پایه سه", `${carLink}/tests`),
     new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", `${truckLink}/tests`),
     new Link(<Bus />, "خودرو سنگین", "پایه یک", `${busLink}/tests`),
     ]
}

const goldExam = {
     title: "آزمون طلایی", subtitle: "",
     mobileSubtitle: false, mobileTitle: true,
     links: [new Link(<Cycle orange={true} />, "موتور سیکلت", "", `${cycleLink}/golds`),
     new Link(<Car orange={true} />, "خودرو سواری", "پایه سه", `${carLink}/golds`),
     new Link(<Truck orange={true} />, "خودرو نیمه سنگین", "پایه دو", `${truckLink}/golds`),
     new Link(<Bus orange={true} />, "خودرو سنگین", "پایه یک", `${busLink}/golds`),
     ]
}


const learn = {
     title: "آموزش", banner: {
          icon: <LearnBanner />, textArr: [
               "چکیده مطالب مهم و سرفصل های کتاب",
               "سوالات پرتکرار همراه جواب و راهنمایی",
               " یادگیری کامل و عمیق مباحث کتاب",
          ]
     }, sections: [{
          title: "کتاب یار", subtitle: "موضوعات اصلی و مهم کتاب راهنمایی و رانندگی",
          mobileSubtitle: false, mobileTitle: true,
          links: [new Link(<Cycle />, "موتور سیکلت", "", `${cycleLink}/book`),
          new Link(<Car />, "خودرو سواری", "پایه سه", `${carLink}/book`),
          new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", `${truckLink}/book`),
          new Link(<Bus />, "خودرو سنگین", "پایه یک", `${busLink}/book`),
          ]
     }, {
          title: "سوالات", subtitle: "سوالات دسته بندی شده به همراه پاسخ",
          mobileSubtitle: false, mobileTitle: true,
          links: [new Link(<Cycle />, "موتور سیکلت", "", `${cycleLink}/categories`),
          new Link(<Car />, "خودرو سواری", "پایه سه", `${carLink}/categories`),
          new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", `${truckLink}/categories`),
          new Link(<Bus />, "خودرو سنگین", "پایه یک", `${busLink}/categories`),
          ]
     }]
}

const exam = {
     title: "آزمون", banner: {
          icon: <ExamBanner />, textArr: [
               "آزمون هایی مشابه آزمون اصلی آیین نامه ",
               "آزمون های جدید و به روز",
               " سوالات پرتکرار و مهم",
          ]
     }, sections: [{
          title: " آزمایشی", subtitle: "",
          mobileSubtitle: false, mobileTitle: true,
          links: [new Link(<Cycle />, "موتور سیکلت", "", `${cycleLink}/tests`),
          new Link(<Car />, "خودرو سواری", "پایه سه", `${carLink}/tests`),
          new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", `${truckLink}/tests`),
          new Link(<Bus />, "خودرو سنگین", "پایه یک", `${busLink}/tests`),
          ]
     }, {
          title: "طلایی", subtitle: "",
          mobileSubtitle: false, mobileTitle: true,
          links: [new Link(<Cycle orange={true} />, "موتور سیکلت", "", `${cycleLink}/golds`),
          new Link(<Car orange={true} />, "خودرو سواری", "پایه سه", `${carLink}/golds`),
          new Link(<Truck orange={true} />, "خودرو نیمه سنگین", "پایه دو", `${truckLink}/golds`),
          new Link(<Bus orange={true} />, "خودرو سنگین", "پایه یک", `${busLink}/golds`),
          ]
     }]
}

const academy = {
     title: "آموزشگاه ها", banner: {
          icon: <AcademyBanner />, textArr: [
               "انتخاب نزدیکترین آموزشگاه رانندگی به محل زندگی",
               "نمایش مشخصات و جزییات هر آموزشگاه ",
               " مقایسه آموزشگاه ها و انتخاب بهترین آموزشگاه",
          ]
     }, sections: [{
          title: "آموزشگاه ها", subtitle: "",
          mobileSubtitle: false, mobileTitle: false,
          links: [new Link(<Cycle />, "موتور سیکلت", "", "/"),
          new Link(<Car />, "خودرو سواری", "پایه سه", "/"),
          new Link(<Truck />, "خودرو نیمه سنگین", "پایه دو", "/"),
          new Link(<Bus />, "خودرو سنگین", "پایه یک", "/"),
          ]
     }]
}



// export const BarArr = [cartificate, learn, exam, academy]

export const BarArr = [certificates, book, questionCategory, testExam, goldExam]