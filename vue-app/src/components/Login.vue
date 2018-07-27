<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Controle de Vendas</h3>
          </div>
          <div class="panel-body">
            <form @submit.prevent="submitLogin" action="/login" method="POST">
              <div class="form-group has-feedback" v-bind:class="[habilitarBotaoLogin]">
                <label for="usuario" class="control-label sr-only">Informe seu Usuário.</label>
                <input ref="txtUsuario" type="text" class="form-control" @input="habilitarBotaoLogin" id="usuario" placeholder="Usuário" autofocus>
                
              </div>
              <div class="form-group has-feedback" v-bind:class="[habilitarBotaoLogin]">
                <label for="senha" class="control-label sr-only">Informe sua senha.</label>
                <input ref="txtSenha" type="password" class="form-control" @input="habilitarBotaoLogin" id="senha" placeholder="Senha"
                       :pattern="senhaPattern" aria-describedby="senhaHelpSpan">
              </div>
              <div class="button">
                <button :disabled="submitBtnDisabled" class="btn btn-md btn-primary btn-block" >Login</button>
              </div>
            </form>
            <br/>
            <div class="button">
                <button @click="teste" class="btn btn-md btn-primary btn-block">Cadastre-se</button>
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
        //default: "A senha deve ter entre 5 e 20 caracteres."
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
        submitBtnDisabled: true
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
      teste: function(){
        location.href = '/cadastrousuario';
        this.$router.push({name: 'CadastroUsuario'});
        //VueRouter.push({name: 'CadastroUsuario'})
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
      submitLogin: function () {
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
                    //sessionStorage.setItem('authorization', JSON.stringify(response.body.access_token));
                    this.$store.state.token = JSON.stringify(response.body.access_token);
                }, err => {
                    alert("Usuário ou senha inválidos.")
                }
            );
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>