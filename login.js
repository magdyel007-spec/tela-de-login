const swup = new Swup({ plugins: [new SwupOverlayTheme()] })

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

const botão = document.getElementById("login");
//cria uma variavel com o id cadastrar//

botão.addEventListener("click", async function() {
const email = document.getElementById("email").value
const senha = document.getElementById("senha").value
//cria variaveis com as inputs para o js receber o conteudo delas e passar pro banco de dados//

if (email === "" || senha === "") {
    alert("Preencha todos os campos!")
    return
}

const { data, error } = await supabaseClient.from("usuarios").select("*").eq("email", email).eq("senha", senha)
//garante o js espera os dados serem salvos no banco de dados antes de continuar//

if (error) {
  alert("Erro ao cadastrar!")
  return
}
//garante que n continue se der erro e caso de erro avise ao usuario//

if (data.length === 0) {
  alert("Email ou senha incorretos!")
  return
}



sessionStorage.setItem("nome", data[0].nome)
window.location.href = "home.html"
// faz o nome aparecer junto com o bem vindo no html//
})
