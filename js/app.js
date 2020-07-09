const vm = new Vue({
    el: '#app',
    data: {
      form: {
        name: '',
        email: '',
        message: '',
      },
      loading: false,
      newsletter: ''
    },
  mounted() {},
  methods: {
    sendNewsletter() {
      var self = this
      this.loading = true
      if (!this.checkNewsletter()) {
        this.$message({ message: 'Preencha corretamente seu email.', type: 'warning' })
        this.loading = false
        return
      } else {

        let body = '<h3>[NEWSLETTER] Mensagem recebida pela DATASQUAD Landingpage:</h3><hr/>'
        body += `<p><b>Email</b>: ${this.newsletter}</p>`
        body += '<hr/><b>Porfavor, não responda à este email.</b>'

        let subject = `[DATASQUAD Landingpage - Newsletter] - ${this.newsletter}`
        
        // INSEGURO
        Email.send({
          Host: "smtp.gmail.com",
          Username : "noreplydatamachina@gmail.com",
          Password : "contato123",
          To : 'contato@datamachina.com.br',
          From : "noreplydatamachina@gmail.com",
          Subject : subject,
          Body : body,
        }).then(
          message => {
            this.$message({ message: 'Email registrado com sucesso!', type: 'success' })
            self.newsletter = ''
            self.loading = false
            setTimeout(function(){ location.reload(); }, 1000);
          }
        ).catch((e) => {
          this.$message({ message: 'Ocorreu um problema no envio do email, tente novamente mais tarde.', type: 'warning' })
          self.loading = false
        })
      }
    },

    sendEmail() { 
      var self = this
      this.loading = true
      if (!this.checkForms()) {
        this.$message({ message: 'Formulário incompleto, preencha todos os campos corretamente.', type: 'warning' })
        this.loading = false
        return
      } else {

        let body = '<h3>Mensagem recebida pela DATASQUAD Landingpage:</h3><hr/>'
        body += `<p><b>Nome</b>: ${this.form.name}</p>`
        body += `<p><b>Email</b>: ${this.form.email}</p>`
        body += `<p><b>Mensagem</b>: ${this.form.message}</p>`
        body += '<hr/><b>Porfavor, não responda à este email.</b>'

        let subject = `[DATASQUAD Landingpage] - ${this.form.name}`
        
        // INSEGURO
        Email.send({
          Host: "smtp.gmail.com",
          Username : "noreplydatamachina@gmail.com",
          Password : "contato123",
          To : 'contato@datamachina.com.br',
          From : "noreplydatamachina@gmail.com",
          Subject : subject,
          Body : body,
        }).then(
          message => {
            this.$message({ message: 'Mensagem enviada com sucesso!', type: 'success' })
            self.form = {
              'name': '',
              'email': '',
              'message': ''
            }
            self.loading = false
            setTimeout(function(){ location.reload(); }, 1000);
            
          }
        ).catch((e) => {
          this.$message({ message: 'Ocorreu um problema no envio da mensagem, tente novamente mais tarde.', type: 'warning' })
          self.loading = false
        })
      }
    },
    checkForms() {
      if (this.form.name && this.form.email && this.form.message) {
        if (this.form.email.indexOf('@') > 0 && this.form.email.indexOf('@') < this.form.email.length-1) {
          return true
        }
      }
      return false
    },
    checkNewsletter() {
      if (this.newsletter.indexOf('@') > 0 && this.newsletter.indexOf('@') < this.newsletter.length-1) {
        return true
      }
      return false
    }
  },
  filters: {},
  computed: {},
});