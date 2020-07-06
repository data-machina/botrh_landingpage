const vm = new Vue({
    el: '#app',
    data: {
      form: {
        name: '',
        email: '',
        message: '',
        errors: []
      },
      errors: [],
      name: null,
      age: null,
      movie: null
    },
    mounted() {},
    methods: {
      sendEmail() {   
        if (!this.checkForms()) {
          console.log('Formulário incompleto')
          return
        } else {
          console.log('Enviando mensagem: ## INCOMPLETO ##')
          console.log(this.form)
        }
      },
      checkForms() {
        if (this.form.name && this.form.email && this.form.message) {
          if (this.form.email.indexOf('@') > 0) {
            return true
          }
        }
        return false
      }
    },
    filters: {},
    computed: {},
});