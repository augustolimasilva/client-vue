<template>
  <div class="container" id="app2">
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title text-center">Registrar Novo Usuário</h3>
          </div>
          <div class="panel-body">
            <form @submit.prevent="cadastrarUsuario" action="/cadastrarUsuario" method="POST">
              <div class="form-group">
                <input ref="txtUsuario" v-model="usuario.username" data-toggle="tooltip" title="Informe um novo usuário." type="text" class="form-control" id="usuario" placeholder="Usuário" autofocus required>
              </div>
              <div class="form-group">
                <input ref="txtEmail" v-model="usuario.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" data-toggle="tooltip" title="Informe um E-mail válido." type="email" class="form-control" id="email" placeholder="Email" autofocus required>
              </div>
              <div class="form-group">
                <input ref="txtSenha" v-model="usuario.password" type="password" pattern=".{5,}" data-toggle="tooltip" title="Informe uma senha com no mínimo 5 caracteres." class="form-control" id="senha" placeholder="Senha" required>
              </div>
              <div class="form-group">
                <button class="btn btn-md btn-primary btn-block">Registrar</button>
              </div>
            </form>
            <div class="button">
                <button class="btn btn-md btn-danger btn-block" @click="voltarParaLogin">Voltar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CadastroUsuarioComponent',
    data(){
      return{
        usuario:{
          username: "",
          password: "",
          email: ""
        }
      }
    },
    methods:{
        voltarParaLogin: function(){
         this.$router.push({name: 'Login'});
        },
        showAlert(msg) {
          const options = {title: 'Alerta', size: 'sm'}
          this.$dialogs.alert(msg, options)
          .then(res => {
            //this.submitBtnDisabled = false
            //console.log(res) // {ok: true|false|undefined}
          })
        },
        cadastrarUsuario: function () {
          this.$http.post('http://localhost:9092/oauth/register', this.usuario,{
                  headers: {
                      'Content-Type':'application/json'
                  }
              })
              .then((response) => {
                      this.showAlert(JSON.stringify(response.body.mensagem));
                      this.usuario.username = "";
                      this.usuario.password = "";
                      this.usuario.email = "";
                      //this.$router.push({name: 'Login'});
                  }, err => {
                      this.showAlert(JSON.stringify(response.body.mensagem));
                  }
              );
          }
      }
}
</script>

<style>
#app2{
  margin-top: 60px;
}
</style>