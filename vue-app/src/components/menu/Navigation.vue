<template>
    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#" @click="voltarPaginaPrincipal()">Controle de Vendas</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Fornecedor <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <nav class="text-center" ><router-link to="/cadastrofornecedor">Cadastrar</router-link></nav>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <div>
          <button type="submit" class="btn-lg btn-danger dropdown-toggle" @click="logout()">Sair</button>
          </div>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: 'NavigationComponent',
    methods:{
        logout:function(){
            this.$store.state.token = null;
            this.$router.push({name: 'Login'});
        },
        voltarPaginaPrincipal:function(){
          this.$router.push({name: 'Home'});
        }
    }
}
</script>
