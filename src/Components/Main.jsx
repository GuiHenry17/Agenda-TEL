import { useState } from "react";
import "../global.css";

export default function Main() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [listaContatos, setListaContatos] = useState([]);

  const registrar = (event) => {
    if(nome && telefone  && cpf) {
    event.preventDefault();
    alert("Contato Registrado!");

    setListaContatos([
      ...listaContatos,
      {
        NOME: nome,
        TELEFONE: telefone,
        CPF: cpf,
      },
    ]);

    setNome("");
    setTelefone("");
    setCpf("");
  }else{
    event.preventDefault()
    setNome("");
    setTelefone("");
    setCpf("");
    alert("Preencha todos os campos!");
  }
}

  const removerContato = (index) => {
    const novaLista = listaContatos.filter((_, i) => i !== index);
    setListaContatos(novaLista);
  };

  return (
    <main>
      <form id="principal" onSubmit={registrar}>
        <div className="input-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            name="telefone"
            id="telefone"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="number"
            name="cpf"
            id="cpf"
            value={cpf}
            maxLength={11}
            onChange={(event) => setCpf(event.target.value)}
          />
        </div>

        <button id="submitar">Registrar</button>
      </form>

      <h2 className="center">Lista de Contatos</h2>
      <div className="contato-div">
        {listaContatos.map((contato, index) => (
          <div key={index} className="contato-item">
            <p>{`Nome: ${contato.NOME}`}</p>
            <p>{`Telefone: ${contato.TELEFONE}`}</p>
            <p>{`CPF: ${contato.CPF}`}</p>
            <button id="remove" onClick={() => removerContato(index)}>
              Remover
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
