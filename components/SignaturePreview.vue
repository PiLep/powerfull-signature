<template>
  <div class="" style="padding: 50px;">
    <div ref="signatureEl" style="width: 560px; padding: 60px 0px;">
      <table style="color: rgb(0, 0, 0); font-family: Arial, sans-serif; width: 100%; padding-bottom: 24px; border-bottom: 1px solid rgb(231, 229, 247); border-collapse: separate;">
        <tbody>
          <tr>
            <td style="padding: 0px 20px 0px 0px; width: 140px;">
              <p style="margin: 0px; font-size: 0px;">
                <img :src="imageSrc" alt="" width="120" height="120" style="width: 120px; height: auto; border-radius: 50%;">
              </p>
            </td> <td style="padding: 0px 20px 0px 0px; vertical-align:middle;">
              <p style="margin: 0px; font-size: 18px; line-height: 21px; font-weight: 700;">
                {{ name }}
              </p> <p style="margin: 0px; font-size: 14px; line-height: 22px;">
                {{ role }} @ {{ companyName }}
              </p> <p style="margin: 0px; font-size: 14px; line-height: 22px;">
                {{ tagLine }}
              </p>
            </td> <td style="padding: 0px 0px 0px 40px; border-left: 1px solid rgb(231, 229, 247);">
              <p style="margin: 0px; font-size: 13px; line-height: 29px;">
                <img src="https://reply.io/wp-content/uploads/signature-generator-email.png" width="14" height="11" alt="" style="margin-right: 10px;"> <a href="mailto:pierre@kanta.fr" style="color: black;">pierre@kanta.fr</a>
              </p> <p style="margin: 0px; font-size: 13px; line-height: 29px;">
                <img src="https://reply.io/wp-content/uploads/signature-generator-website.png" width="14" height="14" alt="" style="margin-right: 10px;"> <a href="https://kanta.fr" style="color: black;">kanta.fr</a>
              </p> <p style="margin: 0px; font-size: 13px; line-height: 29px;">
                <img src="https://reply.io/wp-content/uploads/signature-generator-location.png" width="10" height="14" alt="" style="margin-right: 10px;"> <a href="https://www.moho.co/fr/moho-hq/" style="color: black;">MoHo, Caen</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="color: rgb(0, 0, 0); font-family: Arial, sans-serif; width: 100%; padding-top: 24px; border-collapse: separate;">
        <tbody>
          <tr>
            <td style="padding: 0px;">
              <p style="margin: 0px; font-size: 0px;">
                <a href="https://kanta.fr"><img src="https://kanta.fr/_nuxt/img/logo-2.99f0f56.svg" width="120" height="40" alt="" style="width: 120px; height: auto;"></a>
              </p>
            </td> <td style="padding: 0px; text-align: right;">
              <p style="margin: 0px;">
                <a href="https://www.linkedin.com/in/pilep/" style="display: inline-block; margin-right: 7px; font-size: 0px;"> <img src="https://cdn.cdnlogo.com/logos/l/78/linkedin-icon.svg" alt="" width="25" height="25" style="width: 25px;"></a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    tagLine: {
      type: String,
      required: true
    }
  }
}
</script>
