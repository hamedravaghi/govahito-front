
import { getAllCertificates, getCertificateBook, getCertificateQuestioncategories, getCertificateTestExam } from "../services/endPoints"

export default async function sitemap() {
     const baseUrl = "https://www.govahito.ir"

     let certificateDetail = { book: [], bookSeasons: [], questionCategory: [], testExam: [] }

     const allCertificate = await getAllCertificates()
     await Promise.all(allCertificate.map(async cer => {
          const book = await getCertificateBook(cer.slug)
          const questionCategoris = await getCertificateQuestioncategories(cer.slug)
          const testExams = await getCertificateTestExam(cer.slug)
          if (book) {
               certificateDetail.book.push({ slug: book.slug, certificate: cer.slug })
               book.seasons.map(season => { certificateDetail.bookSeasons.push({ bookSlug: book.slug, seasonSlug: season.slug, certificateSlug: cer.slug }) })
          }
          if (questionCategoris) {
               questionCategoris.map(category => {
                    certificateDetail.questionCategory.push({ categorySlug: category.slug, certificateSlug: cer.slug })
               })
          }
          if (testExams) {
               testExams.map(test => {
                    certificateDetail.testExam.push({ certificateSlug: cer.slug, testSlug: test.slug })
               })
          }
     }))

     const bookUrl = certificateDetail?.book?.map(book => {
          return { url: `${baseUrl}/certificate/${book.certificate}/book/${book.slug}`, lastModified: new Date() }
     })
     const bookSeasonUrl = certificateDetail.bookSeasons?.map(season => {
          return { url: `${baseUrl}/certificate/${season.certificateSlug}/book/${season.bookSlug}/${season.seasonSlug}`, lastModified: new Date() }

     })
     const baseQuestionCategoriesUrl = allCertificate?.map(certificate => {
          return { url: `${baseUrl}/certificate/${certificate.slug}/categories`, lastModified: new Date() }
     })

     const allQuestionCategoriesUrls = certificateDetail.questionCategory?.map(category => {
          return ({ url: `${baseUrl}/certificate/${category.certificateSlug}/categories/${category.categorySlug}`, lastModified: new Date() })
     })

     const baseTestExamUrls = allCertificate?.map(certificate => {
          return { url: `${baseUrl}/certificate/${certificate.slug}/tests`, lastModified: new Date() }
     })
     const testExamUrls = certificateDetail?.testExam?.map(test => {
          return { url: `${baseUrl}/certificate/${test.certificateSlug}/tests/${test.testSlug}`, lastModified: new Date() }
     })
     const ViewQuestionTestExamUrls = certificateDetail?.testExam?.map(test => {
          return { url: `${baseUrl}/certificate/${test.certificateSlug}/tests/view/${test.testSlug}`, lastModified: new Date() }
     })


     return [{
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 1,
     },
     ...bookUrl,
     ...bookSeasonUrl,
     ...baseQuestionCategoriesUrl,
     ...allQuestionCategoriesUrls,
     ...baseTestExamUrls,
     ...testExamUrls,
     ...ViewQuestionTestExamUrls

     ]
}