
import Script from "next/script";

const Crisp = () => (


     <Script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="8b2a37bf-1505-46bb-b5be-bcbc3b32c472";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
     }} />




);
export default Crisp;

