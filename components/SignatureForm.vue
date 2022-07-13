<template>
  <section class="">
    <b-field
      horizontal
      label="Prénom et Nom"
      custom-class="w-150px"
    >
      <b-input
        :value="name"
        minlength="3"
        maxlength="200"
        @input="input({ attribute: 'name', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Photo (120x120px)"
      custom-class="w-150px"
    >
      <b-input
        :value="imageSrc"
        expanded
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'imageSrc', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Rôle"
      custom-class="w-150px"
    >
      <b-input
        :value="role"
        minlength="3"
        maxlength="200"
        @input="input({ attribute: 'role', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Entreprise"
      custom-class="w-150px"
    >
      <b-input
        :value="companyName"
        minlength="3"
        maxlength="200"
        @input="input({ attribute: 'companyName', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Logo Entreprise"
      custom-class="w-150px"
    >
      <b-input
        :value="companyImageSrc"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'companyImageSrc', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Lien Site"
      custom-class="w-150px"
    >
      <b-input
        :value="companyWebsiteUrl"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'companyWebsiteUrl', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Email"
      custom-class="w-150px"
    >
      <b-input
        :value="email"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'email', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Texte site"
      custom-class="w-150px"
    >
      <b-input
        :value="websiteLibelle"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'websiteLibelle', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Lien localisation"
      custom-class="w-150px"
    >
      <b-input
        :value="placeUrl"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'placeUrl', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Texte localisation"
      custom-class="w-150px"
    >
      <b-input
        :value="placeLibelle"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'placeLibelle', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Lien LinkedIn"
      custom-class="w-150px"
    >
      <b-input
        :value="linkedInUrl"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'linkedInUrl', value: $event})"
      />
    </b-field>

    <b-field
      horizontal
      label="Lien Site"
      custom-class="w-150px"
    >
      <b-input
        :value="companyWebsiteUrl"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'companyWebsiteUrl', value: $event})"
      />
    </b-field>
  </section>
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
    }
  },
  data () {
    return {
      hasError: false
    }
  },
  methods: {
    input (payload) {
      this.$emit('input', payload)
    }
  }
}
</script>

<style>
.w-150px{
  width:150px
}
</style>
