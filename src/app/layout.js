import "./globals.css";
import AuthProvider from "../provider/AuthProvider";
import ClientProvider from "../provider/ClientProvider";
import ExamProvider from "../provider/ExamProvider";
import { iranSanse } from "../lib/fonts";
import CartProvider from "../provider/CartProvider";
import GoogleAnalytics from '../components/google/GoogleAnalytics';
import Clarity from '../components/google/Clarity';


export const metadata = {
    title: {
        default: "گواهیتو",
        template: "گواهیتو | %s",
        description: "مرجع دریافت سوالات گواهینامه در ایران",
    },

    verification: {
        google: "BMirWVdqAMqqmoIcvbMoNfKcflQPOb7bFXsdzCvgjQ4",
    },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fa" dir='rtl' suppressHydrationWarning={true}  >
      <AuthProvider>
        <CartProvider>
          <ClientProvider>
            <ExamProvider>
              <body className={` ${iranSanse.className} `} >
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
                  <GoogleAnalytics ga_id=
                    {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
                ) : null}
                <Clarity />
                {/* {children} */}
              </body>
            </ExamProvider>
          </ClientProvider>
        </CartProvider>
      </AuthProvider>
    </html>
  )
}

export default RootLayout;
