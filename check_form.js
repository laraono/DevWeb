$(function () {
  $("#form-test").on("submit", function () {
    nome_input = $("input[name='nome']");
    email_input = $("input[name='email']");
    data_input = $("input[name='data']");
    pass_input = $("input[name='pass']");
    passcheck_input = $("input[name='passcheck']");
    anexo_input = $("input[name='anexo']");

    if (nome_input.val() == "" || nome_input.val() == null) {
      $("#erro-nome").html("O nome é obrigatorio");
      return false;
    }
    if (email_input.val() == "" || email_input.val() == null) {
      $("#erro-email").html("O e-mail é obrigatorio");
      return false;
    }
    if (data_input.val() == "" || data_input.val() == null) {
      $("#erro-data").html("A data de nascimento é obrigatoria");
      return false;
    }
    if (pass_input.val() == "" || pass_input.val() == null) {
      $("#erro-pass").html("A senha é obrigatoria");
      return false;
    }
    if (passcheck_input.val() == "" || passcheck_input.val() == null) {
      $("#erro-passcheck").html("A confirmação de senha é obrigatoria");
      return false;
    }
    if (pass_input.val() != passcheck_input.val()) {
      $("#erro-pass").html("");
      $("#erro-pass").html("As senhas não batem");
      return false;
    }
    if (anexo_input.val() == "" || anexo_input.val() == null) {
      $("#erro-passcheck").html("Avatar é obrigatorio");
      return false;
    }
    return true;
  });
});
