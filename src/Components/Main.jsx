import { useState } from "react";

export default function Main() {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [listaContatos, setListaContatos] = useState([]);
    const [cpf, setCpf] = useState("");

    const registrar = (event) => {
        event.preventDefault();
        alert("Contato Registrado!");

        setListaContatos([...listaContatos,
        {
            NOME: nome,
            TELEFONE: telefone,
            CPF: cpf
        }]);
        
        setNome("");
        setTelefone("");
        setCpf("");
    }

    const removerContato = (index) => {
        const novaLista = listaContatos.filter((_, i) => i !== index);
        setListaContatos(novaLista);
    }

    console.table(listaContatos)

    return (
        <main>
            <form id="principal" action="" onSubmit={registrar}>
                <label htmlFor="nome">
                    Nome: ⠀
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={nome}
                        onChange={
                            (event) => setNome(event.target.value)
                        } />
                </label>

                <label className="inputas" htmlFor="telefone">
                    Telefone: ⠀
                    <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        value={telefone}
                        onChange={
                            (event) => setTelefone(event.target.value)
                        } />
                </label>

                <label className="inputas" htmlFor="cpf">
                    CPF: ⠀
                    <input
                        type="number"
                        name="cpf"
                        id="cpf"
                        value={cpf}
                        onChange={
                            (event) => setCpf(event.target.value)
                        } />
                </label>

                <button id="submitar">Registrar</button>

            </form>

            <h2 className="center">Lista de Contatos</h2>
            <div className="contato-div">
                {listaContatos.map((contato, index) => (
                    <div key={index} className="contato-item">
                        <p>{`Nome: ${contato.NOME}`}</p>
                        <p>{`Telefone: ${contato.TELEFONE}`}</p>
                        <p>{`CPF: ${contato.CPF}`}</p>
                        <button id ='remove' onClick={() => removerContato(index)}>Remover</button>
                    </div>
                ))}
            </div>
        </main>
    );
}
