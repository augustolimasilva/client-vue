<template>
<div class="container" id="cadfornec">
<form class="well form-horizontal" method="post" @submit.prevent="cadastrarFornecedor"  id="contact_form">
<fieldset>
<legend class="text-center">Cadastrar Novo Fornecedor</legend>
<div class="form-group">
  <label class="col-md-4 control-label">Nome</label>  
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input name="nome" v-model="fornecedor.nome" autocomplete='name' pattern="[a-zA-Z\s]+$" data-toggle="tooltip" title="Informe um nome para o fornecedor" placeholder="Nome" class="form-control" type="text" required>
    </div>
  </div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">CNPJ</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="cnpj" v-model="fornecedor.cnpj" placeholder="CNPJ - 00.000.000/0000-00" data-toggle="tooltip" title="Informe o CNPJ do fornecedor. Formato: 00.000.000/0000-00" class="form-control"  type="text" required>
    </div>
</div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">Cep</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="cep" placeholder="CEP" autocomplete="postal-code" pattern="/^[0-9]{8}$/" v-model="fornecedor.cep" size="8" data-toggle="tooltip" title="Informe o CEP. Ex: 00000000" class="form-control" type="number" required>
    </div>
</div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">Endereço</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="endereco" ref="endereco" required id="endereco" placeholder="Endereco" autocomplete="street-address" v-model="fornecedor.endereco" data-toggle="tooltip" title="Informe um endereço" class="form-control" type="text">
    </div>
  </div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">Número</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="numero" placeholder="Número" required v-model="fornecedor.numero" data-toggle="tooltip" title="Informe um número" class="form-control" type="number">
    </div>
  </div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">Cidade</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="cidade" id="cidade" required placeholder="Cidade" autocomplete="address-level2" v-model="fornecedor.cidade" class="form-control" data-toggle="tooltip" title="Informe uma cidade"  type="text">
    </div>
  </div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">Bairro</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="bairro" id="bairro" required placeholder="Bairro" v-model="fornecedor.bairro" class="form-control" data-toggle="tooltip" title="Informe um bairro"  type="text">
    </div>
  </div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">Estado</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
  <input name="estado" id="estado" required placeholder="Estado" autocomplete="address-level1" v-model="fornecedor.estado" class="form-control" data-toggle="tooltip" title="Informe um estado"  type="text">
    </div>
  </div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">E-Mail</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
  <input name="email" placeholder="E-Mail" autocomplete="email" required v-model="fornecedor.email" class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" ata-toggle="tooltip" title="Informe um e-mail" type="email">
    </div>
  </div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label">Contato</label>  
    <div class="col-md-4 inputGroupContainer">
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
  <input name="phone" placeholder="Contato" autocomplete="tel-national" required ata-toggle="tooltip" title="Informe um contato" v-model="fornecedor.contato" class="form-control" type="number">
    </div>
  </div>
</div>
<div class="form-group">
  <label class="col-md-4 control-label"></label>
  <div class="col-md-4">
    <button type="submit" class="btn btn-warning center-block">Salvar <span class="glyphicon glyphicon-send"></span></button>
  </div>
</div>
</fieldset>
</form>
</div>
</template>

<script>
export default {
    name: 'CadastroFornecedorComponent',
    data(){
        return{
            fornecedor:{
                nome: "",
                endereco:"",
                cidade: "",
                bairro: "",
                cep:"",
                estado:"",
                email:"",
                contato:"",
                cnpj:"",
                numero:""
            }
        }
    },
    methods:{
      showAlert(msg) {
          const options = {title: 'Alerta', size: 'sm'}
          this.$dialogs.alert(msg, options)
          .then(res => {
            //this.submitBtnDisabled = false
            //console.log(res) // {ok: true|false|undefined}
          })
        },
      cadastrarFornecedor: function () {
        let token = this.$store.state.token.substring(1,37);

          this.$http.post('http://localhost:9094/providers/api', this.fornecedor,{
                  headers: {
                      'Content-Type':'application/json',
                      'Authorization':'Bearer ' + token
                  }
              })
              .then((response) => {
                      this.showAlert(JSON.stringify(response.body.mensagem));
                      
                      this.fornecedor.nome = "";
                      this.fornecedor.endereco = "";
                      this.fornecedor.cidade = "";
                      this.fornecedor.bairro = "";
                      this.fornecedor.cep = "";
                      this.fornecedor.estado = "";
                      this.fornecedor.email = "";
                      this.fornecedor.contato = "";
                      this.fornecedor.cnpj = "";
                      this.fornecedor.numero = "";
                  }, err => {
                      this.showAlert(JSON.stringify(response.body.mensagem));
                  }
              );
          }
    }
}
</script>