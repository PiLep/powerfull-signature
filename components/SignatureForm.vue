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
      label="Accroche"
      custom-class="w-150px"
    >
      <b-input
        :value="tagLine"
        minlength="3"
        maxlength="30"
        @input="input({ attribute: 'tagLine', value: $event})"
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
      label="Téléphone"
      custom-class="w-150px"
    >
      <b-input
        :value="phone"
        minlength="3"
        maxlength="255"
        @input="input({ attribute: 'phone', value: $event})"
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

    <b-field
      horizontal
      label="Couleur Texte"
      custom-class="w-150px"
    >
      <b-colorpicker :value="textColor" @input="input({ attribute: 'textColor', value: $event})" />
    </b-field>

    <b-field
      horizontal
      label="Icones orange"
      custom-class="w-150px"
    >
      <b-switch :value="orangeIcon" @input="input({ attribute: 'orangeIcon', value: $event})" />
    </b-field>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
    imageSrc: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: null
    },
    companyName: {
      type: String,
      default: null
    },
    companyImageSrc: {
      type: String,
      default: null
    },
    companyWebsiteUrl: {
      type: String,
      default: null
    },
    tagLine: {
      type: String,
      default: null
    },
    email: {
      type: String,
      default: null
    },
    phone: {
      type: String,
      default: null
    },
    websiteLibelle: {
      type: String,
      default: null
    },
    placeUrl: {
      type: String,
      default: null
    },
    placeLibelle: {
      type: String,
      default: null
    },
    linkedInUrl: {
      type: String,
      default: null
    },
    textColor: {
      type: String,
      required: true
    },
    orangeIcon: {
      type: Boolean,
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
