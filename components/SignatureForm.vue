<template>
  <section>
    <b-field
      label="Rôle"
      :type="{ 'is-danger': hasError }"
      :message="{ 'Username is not available': hasError }"
    >
      <b-input :value="role" minlength="3" maxlength="200" @input="input({ attribute: 'role', value: $event})" />
    </b-field>

    <b-field
      label="Nom"
      :type="{ 'is-danger': hasError }"
      :message="{ 'Username is not available': hasError }"
    >
      <b-input :value="name" minlength="3" maxlength="200" @input="input({ attribute: 'name', value: $event})" />
    </b-field>

    <b-field label="Message">
      <b-input maxlength="200" type="textarea" />
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
    tagLine: {
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
