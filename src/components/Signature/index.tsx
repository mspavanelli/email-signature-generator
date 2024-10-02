interface Props {
  name: string;
  jobTitle: string;
  phone: string;
  email?: string;
  linkedin?: string;
}

export function Signature({ email, jobTitle, linkedin, name, phone }: Props) {
  const logos_urls = {
    signature:
      "https://madeinweb.com.br/wp-content/uploads/2024/10/logo-assinatura.png",
    phone:
      "https://madeinweb.com.br/wp-content/uploads/2024/10/icon-telefone-assinatura-1.png",
    linkedin:
      "https://madeinweb.com.br/wp-content/uploads/2024/10/icon-in-assinatura-1.png",
    email:
      "https://madeinweb.com.br/wp-content/uploads/2024/10/icon-email-assinatura-1.png",
  };

  const template = `
  <div id=":1ql" class="a3s aiL ">
   <div dir="ltr">
      <div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature">
         <div dir="ltr">
            <div style="color:rgb(0,0,0);font-size:medium;float:left;font-family:Arial,Geneva,Tahoma,sans-serif;width:206px;padding:0px;vertical-align:top">
               <div style="display:inline-block;background-color:rgb(0,71,255);padding:50px 18px;margin-bottom:16px"><a href="https://www.madeinweb.com.br/" rel="noopener noreferrer" style="color:rgb(0,71,255)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.madeinweb.com.br/&amp;source=gmail&amp;ust=1705692041893000&amp;usg=AOvVaw2wU-MBpI_iNESoTwhqp-aQ"><img src="${logos_urls.signature}" alt="MadeinWeb" width="150px" class="CToWUd" data-bit="iit"></a></div>
            </div>
            <div style="color:black;float:left;font-family:Arial,Geneva,Tahoma,sans-serif;width:375px;padding:0px;vertical-align:top;font-size:12px;line-height:15px">
               <div style="display:inline-block;padding:0px 25px 0px 0px">
                  <span style="font-size:16px;line-height:16px;font-weight:bold;display:inline-block;width:350px;text-transform:uppercase;margin-bottom:2px">${name}</span><span style="display:inline-block;margin-bottom:16px;width:350px;color:rgb(0,71,255);line-height:11px">${jobTitle}</span><a href="tel:${phone}" rel="noopener noreferrer" style="color:black;display:inline-block;width:350px;line-height:20px" target="_blank"><img src="${logos_urls.phone}" alt="cel" width="16px" style="display:inline-block;margin-right:6px;vertical-align:middle" class="CToWUd" data-bit="iit">&nbsp;${phone}</a><a href="mailto:${email}" rel="noreferrer" style="color:black;display:inline-block;width:350px;line-height:20px" target="_blank"><img src="${logos_urls.email}" alt="mail" width="16px" style="display:inline-block;margin-right:6px;vertical-align:middle" class="CToWUd" data-bit="iit">&nbsp;${email}</a><a href="https://linkedin.com/in/${linkedin}" rel="noopener noreferrer" style="color:black;display:inline-block;width:350px;line-height:20px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://linkedin.com/in/danielbelmont&amp;source=gmail&amp;ust=1705692041893000&amp;usg=AOvVaw2mXBvIzvvFlTXvvvEQUabn"><img src="${logos_urls.email}" alt="linkedin" width="16px" style="display:inline-block;margin-right:6px;vertical-align:middle" class="CToWUd" data-bit="iit">&nbsp;in/${linkedin}</a>
                  <hr style="border-right:none;border-bottom:none;border-left:none;border-top-style:solid;border-top-color:transparent;margin:4px 0px;width:185px;color:rgb(96,99,103)">
                  <div style="color:rgb(96,99,103);line-height:15px"><a href="https://www.madeinweb.com.br/" rel="noopener noreferrer" style="color:rgb(96,99,103)" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.madeinweb.com.br/&amp;source=gmail&amp;ust=1705692041893000&amp;usg=AOvVaw2wU-MBpI_iNESoTwhqp-aQ">www.madeinweb.com.br</a></div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="yj6qo"></div>
   <div class="adL"></div>
</div>`;

  return <div dangerouslySetInnerHTML={{ __html: template }}></div>;
}
