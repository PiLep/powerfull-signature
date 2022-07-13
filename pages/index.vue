<template>
  <section class="hero is-fullheight p-6">
    <div class="columns">
      <card title="Informations">
        <signature-form
          :name="name"
          :image-src="imageSrc"
          :role="role"
          :company-name="companyName"
          :company-image-src="companyImageSrc"
          :company-website-url="companyWebsiteUrl"
          :email="email"
          :website-libelle="websiteLibelle"
          :place-url="placeUrl"
          :place-libelle="placeLibelle"
          :linked-in-url="linkedInUrl"
          :tag-line="tagLine"
          @input="input"
        />
      </card>

      <card title="Apercu de la signature">
        <signature-preview
          ref="signaturePreview"
          :name="name"
          :image-src="imageSrc"
          :role="role"
          :company-name="companyName"
          :company-image-src="companyImageSrc"
          :company-website-url="companyWebsiteUrl"
          :email="email"
          :website-libelle="websiteLibelle"
          :place-url="placeUrl"
          :place-libelle="placeLibelle"
          :linked-in-url="linkedInUrl"
          :tag-line="tagLine"
        />
      </card>
    </div>

    <div>
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
      copiedHtml: false,
      copiedSignature: false,
      name: 'Nicolas Cage',
      imageSrc: 'https://www.placecage.com/g/120/120',
      role: 'Actor',
      companyName: 'Universal Pictures',
      companyImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Universal-Pictures-Logo.svg',
      companyWebsiteUrl: 'https://www.universalpictures.fr/',
      email: 'nicolas@cage.com',
      websiteLibelle: 'Universal Pictures',
      placeLibelle: 'Hollywood',
      placeUrl: 'https://goo.gl/maps/yYVwG5EwDBgoAdNB9',
      linkedInUrl: 'https://www.linkedin.com/in/nicolas-cage-2344461aa/',
      tagLine: 'I\'m Nicolas FRIGGIN\' Cage!'
    }
  },

  methods: {
    input (payload) {
      this[payload.attribute] = payload.value
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
