<template>
  <section class="hero is-fullheight p-6">
    <div class="columns">
      <card title="Informations">
        <signature-form
          :key="'form_'+renderKey"
          :name="name"
          :image-src="imageSrc"
          :role="role"
          :company-name="companyName"
          :company-image-src="companyImageSrc"
          :company-website-url="companyWebsiteUrl"
          :email="email"
          :phone="phone"
          :website-libelle="websiteLibelle"
          :place-url="placeUrl"
          :place-libelle="placeLibelle"
          :linked-in-url="linkedInUrl"
          :tag-line="tagLine"
          :text-color="textColor"
          :icon-color="iconColor"
          @input="input"
        />
      </card>

      <card v-if="!loading" title="Apercu de la signature">
        <signature-preview
          :key="'preview_'+renderKey"
          ref="signaturePreview"
          :name="name"
          :image-src="imageSrc"
          :role="role"
          :company-name="companyName"
          :company-image-src="companyImageSrc"
          :company-website-url="companyWebsiteUrl"
          :email="email"
          :phone="phone"
          :website-libelle="websiteLibelle"
          :place-url="placeUrl"
          :place-libelle="placeLibelle"
          :linked-in-url="linkedInUrl"
          :tag-line="tagLine"
          :text-color="textColor"
          :orange-icon="orangeIcon"
        />
        <div class="card-footer pt-4">
          <b-field grouped position="is-right">
            <p class="control has-text-grey-darker">
              <b-button
                size="is-large"
                :class="copiedSignature?'has-text-success-dark':'has-text-grey-darker'"
                :icon-left="copiedSignature?'check':'content-copy'"
                @click="copySign"
              >
                {{ copiedSignature ? 'Copiée':'Copier la signature' }}
              </b-button>
            </p>
            <p class="control has-text-grey-darker">
              <b-button
                size="is-large"
                :class="copiedHtml?'has-text-success-dark':'has-text-grey-darker'"
                :icon-left="copiedHtml?'check':'content-copy'"
                @click="copyHtml"
              >
                {{ copiedHtml ? 'Copiée':'Copier en HTML' }}
              </b-button>
            </p>
          </b-field>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import SignaturePreview from '../components/SignaturePreview.vue'
import Card from '~/components/Card'
import SignatureForm from '~/components/SignatureForm.vue'

export default {
  name: 'IndexPage',
  components: {
    Card,
    SignatureForm,
    SignaturePreview
  },
  data () {
    return {
      loading: true,

      copiedHtml: false,
      copiedSignature: false,
      renderKey: 0,

      name: null,
      imageSrc: null,
      role: null,
      companyName: null,
      companyImageSrc: null,
      companyWebsiteUrl: null,
      email: null,
      phone: null,
      websiteLibelle: null,
      placeLibelle: null,
      placeUrl: null,
      linkedInUrl: null,
      tagLine: null,
      textColor: null,
      orangeIcon: null,

      attributeArray: [
        'name', 'imageSrc', 'role', 'companyName', 'companyImageSrc', 'companyWebsiteUrl', 'email', 'phone', 'websiteLibelle', 'placeLibelle', 'placeUrl', 'linkedInUrl', 'tagLine', 'textColor', 'iconColor'
      ],
      defaultValues: {
        name: 'Nicolas Cage',
        imageSrc: 'https://www.placecage.com/g/120/120',
        role: 'Actor',
        companyName: 'Universal Pictures',
        companyImageSrc: 'https://kanta.fr/assets/images/logo-kanta-128.png',
        companyWebsiteUrl: 'https://www.universalpictures.fr/',
        email: 'nicolas@cage.com',
        phone: '06 12 45 25 65',
        websiteLibelle: 'Universal Pictures',
        placeLibelle: 'Hollywood',
        placeUrl: 'https://goo.gl/maps/yYVwG5EwDBgoAdNB9',
        linkedInUrl: 'https://www.linkedin.com/in/nicolas-cage-2344461aa/',
        tagLine: 'I\'m Nicolas FRIGGIN\' Cage!',
        textColor: 'red',
        orangeIcon: false
      }
    }
  },

  mounted () {
    this.loading = true

    this.attributeArray.forEach((attribute) => {
      const value = localStorage.getItem('powerfull-signature-' + attribute)
      if (value) { this[attribute] = value } else { this[attribute] = this.defaultValues[attribute] }
    })

    this.loading = false
  },

  methods: {
    input (payload) {
      this[payload.attribute] = payload.value

      localStorage.setItem('powerfull-signature-' + payload.attribute, payload.value)
      // this.renderKey++
    },
    copySign () {
      if (window.getSelection) {
        const range = document.createRange()
        range.selectNode(this.$refs.signaturePreview.$refs.signatureEl)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
        document.execCommand('copy')

        this.copiedSignature = true
        setTimeout(() => { this.copiedSignature = false; window.getSelection().removeAllRanges() }, 2000)
      }
    },
    copyHtml () {
      navigator.clipboard.writeText(this.$refs.signaturePreview.$refs.signatureEl.outerHTML)
      this.copiedHtml = true
      setTimeout(() => { this.copiedHtml = false }, 2000)
    }
  }
}
</script>

<style>
div#__nuxt,
#__layout,
#__layout > div,
#app {
  min-height: 100vh;
}
body {
  /* min-height: 100vh; */
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgb(235, 222, 255) 0%, rgb(249, 252, 255) 100%);
}
</style>
