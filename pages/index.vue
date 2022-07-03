<template>
  <section class="section">
    <div class="columns">
      <card title="Informations">
        <signature-form
          :name="name"
          :image-src="imageSrc"
          :role="role"
          :company-name="companyName"
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
          :tag-line="tagLine"
        />
      </card>
    </div>

    <div class="columns">
      <div class="column" />
      <div class="column is-one-quarter">
        <b-button
          size="is-large"
          icon-left="content-copy"
          @click="copySign"
        >
          Copier la signature
        </b-button>
      </div>
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
      name: 'John Silver',
      imageSrc: 'https://pierrelepetit.com/pierre.jpeg',
      role: 'CTO & Co-founder',
      companyName: 'Kanta',
      tagLine: 'Test'
    }
  },

  methods: {
    input (payload) {
      console.log(payload)
      this[payload.attribute] = payload.value
    },
    copySign () {
      navigator.clipboard.writeText(this.$refs.signaturePreview.$refs.signatureEl.outerHTML)
    }
  }
}
</script>

<style>
body {
  min-height: 100vh;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}
</style>
