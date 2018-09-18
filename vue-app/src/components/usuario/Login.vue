<template>
  <div class="container" id="app1">
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title text-center">Controle de Vendas</h3>
          </div>
          <div class="panel-body">
            <form @submit.prevent="submitLogin" action="/login" method="POST">
              <div class="form-group">
                <input ref="txtUsuario" data-toggle="tooltip" autocomplete="username" title="Informe seu usuário." type="text" class="form-control" id="usuario" placeholder="Usuário" autofocus required>
              </div>
              <div class="form-group">
                <input ref="txtSenha" type="password" autocomplete="current-password" data-toggle="tooltip" title="Informe sua senha." class="form-control" id="senha" placeholder="Senha" required>
              </div>
              <div class="form-group">
                <button :disabled="submitBtnDisabled" class="btn btn-md btn-primary btn-block">Login</button>
              </div>
            </form>
            <div class="button">
                <button class="btn btn-md btn-primary btn-block" @click="cadastrarUsuario()">Cadastre-se</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginComponent',
    props: {
      errorMessage: {
        type: String,
        required: false,
        default: ''
      },
      senhaMessage: {
        type: String,
        required: false,
      },
      senhaPattern: {
        type: String,
        required: false,
        default: '.{5,200}'
      }
    },
    data() {
      return {
        usuarioSuccessClass: '',
        senhaSuccessClass: '',
        usuarioIconClass: '',
        senhaIconClass: '',
        submitBtnDisabled: false,
      }
    },
    methods: {
      habilitarBotaoLogin:function(){
        if(this.$refs.txtUsuario != "") {
          if(this.$refs.txtSenha != ""){
            this.submitBtnDisabled = false
          }
        }else{
          this.submitBtnDisabled = true
        }
      },
      checkUsuarioValidation: function () {
        if (this.$refs.txtUsuario.checkValidity()) {
          this.usuarioSuccessClass = 'has-success'
          this.usuarioIconClass = 'glyphicon glyphicon-ok form-control-feedback'
          if(this.$refs.txtSenha.checkValidity()) this.submitBtnDisabled = false
        } else {
          this.usuarioSuccessClass = 'has-error'
          this.usuarioIconClass = 'glyphicon glyphicon-remove form-control-feedback'
          this.submitBtnDisabled = true
        }
      },
      cadastrarUsuario: function(){
        this.$router.push({name: 'CadastroUsuario'});
      },
      checkSenhaValidation: function () {
        if (this.$refs.txtSenha.checkValidity()) {
          this.senhaSuccessClass = 'has-success'
          this.senhaIconClass = 'glyphicon glyphicon-ok form-control-feedback'
          if(this.$refs.txtUsuario.checkValidity()) this.submitBtnDisabled = false
        } else {
          this.senhaSuccessClass = 'has-error'
          this.senhaIconClass = 'glyphicon glyphicon-remove form-control-feedback'
          this.submitBtnDisabled = true
        }
      },
      showAlert() {
        const options = {title: 'Erro', size: 'sm'}
        this.$dialogs.alert('Usuário ou senha inválidos.', options)
        .then(res => {
          this.submitBtnDisabled = false
        })
      },
      submitLogin: function() {
        let usuario = this.$refs.txtUsuario.value.trim()
        let senha = this.$refs.txtSenha.value.trim()
        
        var formData = new FormData();
        formData.append('username', usuario);
        formData.append('password', senha);
        formData.append('grant_type', 'password');

        this.$http.post('http://localhost:9092/oauth/token', formData, {
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Authorization':'Basic Y29kZXJlZjokMmEkMTAkcDlQazBmUU5BUVNlc0k0dnV2S0EwT1phbkREMg=='
                }
            })
            .then((response) => {
                    this.$store.state.token = JSON.stringify(response.body.access_token);
                    this.$router.push({name: 'Home'});
                }, err => {
                  this.submitBtnDisabled = true

                  this.showAlert();
                }
            );
      }
    }
  }
</script>
<style>
#app1{
  margin-top: 60px;
}
</style>