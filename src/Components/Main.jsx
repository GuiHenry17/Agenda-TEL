import { useState } from "react";

export default function Main() {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    const [listaContatos, setListaContatos] = useState([]);

    const registrar = (event) => {
        event.preventDefault();
        alert("Contato Registrado!");

        setListaContatos([...listaContatos,
        {
            NOME: nome,
            TELEFONE: telefone,
            CPF: cpf
        }
      ]);
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
                        onChange={
                            (event) => setTelefone(event.target.value)
                        } />
                </label>

                <label className ="inputas" htmlFor="cpf">
                    CPF: ⠀
                    <input
                        type="number"
                        name="cpf"
                        id="cpf"
                        onChange={
                            (event) => setCpf(event.target.value)
                        } />
                </label>

                <button id="submitar">Registrar</button>

            </form>

            {
            listaContatos.map((contato, index) => 
            <div className="mapdiv" key={index}> 
                <p className="mapnome">{contato.NOME}</p>
                <p className="maptel">{contato.TELEFONE}</p>
                <p className="mapcpf">{contato.CPF}</p>
            </div>
            )}
        </main>
    );
}