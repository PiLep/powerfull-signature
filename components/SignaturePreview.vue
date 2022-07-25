<template>
  <div class="" style="padding: 50px;">
    <div id="signature" ref="signatureEl" style="width: 560px; padding: 60px 0px;" :style="'color: '+textColor+';'" @focus="$event.target.select()">
      <table style="font-family: Arial, sans-serif; width: 100%; padding-bottom: 24px; border-bottom: 1px solid rgb(231, 229, 247); border-collapse: separate;">
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
                <img
                  :src="orangeIcon?'https://signature.kanta.fr/mail-orange.png':'https://reply.io/wp-content/uploads/signature-generator-email.png'"
                  width="14"
                  height="11"
                  alt=""
                  style="margin-right: 10px;"
                > <a :href="'mailto:'+email" :style="'color: '+textColor+';'">{{ email }}</a>
              </p>
              <p v-if="phone" style="margin: 0px; font-size: 13px; line-height: 29px;">
                <img
                  :src="orangeIcon?'https://signature.kanta.fr/phone-orange.png':'https://reply.io/wp-content/uploads/signature-generator-phone.png'"
                  width="14"
                  height="14"
                  alt=""
                  style="margin-right: 10px;"
                > <a :href="'tel:'+phone" :style="'color: '+textColor+';'">{{ phone }}</a>
              </p>
              <p v-if="companyWebsiteUrl && websiteLibelle" style="margin: 0px; font-size: 13px; line-height: 29px;">
                <img
                  :src="orangeIcon?'https://signature.kanta.fr/website-orange.png':'https://reply.io/wp-content/uploads/signature-generator-website.png'"
                  width="14"
                  height="14"
                  alt=""
                  style="margin-right: 10px;"
                > <a :href="companyWebsiteUrl" :style="'color: '+textColor+';'">{{ websiteLibelle }}</a>
              </p>
              <p v-if="placeUrl && placeLibelle" style="margin: 0px; font-size: 13px; line-height: 29px;">
                <img
                  :src="orangeIcon?'https://signature.kanta.fr/location-orange.png':'https://reply.io/wp-content/uploads/signature-generator-location.png'"
                  width="10"
                  height="14"
                  alt=""
                  style="margin-right: 10px;"
                > <a :href="placeUrl" :style="'color: '+textColor+';'">{{ placeLibelle }}</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="font-family: Arial, sans-serif; width: 100%; padding-top: 24px; border-collapse: separate;">
        <tbody>
          <tr>
            <td style="padding: 0px;">
              <p style="margin: 0px; font-size: 0px;">
                <a :href="companyWebsiteUrl"><img :src="companyImageSrc" width="120" height="40" alt="" style="width: 120px; height: auto;"></a>
              </p>
            </td> <td style="padding: 0px; text-align: right;">
              <p style="margin: 0px;">
                <a :href="linkedInUrl" style="display: inline-block; margin-right: 7px; font-size: 0px;"> <img src="https://kanta.fr/assets/images/linkedin-logo-64.png" alt="" width="25" height="25" style="width: 25px;"></a>
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
    companyImageSrc: {
      type: String,
      required: true
    },
    companyWebsiteUrl: {
      type: String,
      required: true
    },
    tagLine: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    websiteLibelle: {
      type: String,
      required: true
    },
    placeUrl: {
      type: String,
      required: true
    },
    placeLibelle: {
      type: String,
      required: true
    },
    linkedInUrl: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    },
    orangeIcon: {
      type: Boolean,
      required: true
    }
  }
}
</script>
