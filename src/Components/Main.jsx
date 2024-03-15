import { useState } from "react";

export default function Main() {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    return (
        <main>
            <form>
                <label>
                    Nome: ⠀
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        onChange={
                            (event) => setNome(event.target.value)
                        } />
                </label>
                <button>Cadastrar</button>
                <br/>

                {nome}
                <br/>
                <br/>
                <br/>

                <label>
                    Telefone: ⠀
                    <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        onChange={
                            (event) => setTelefone(event.target.value)
                        } />
                <button>Cadastrar</button>
                <br/>
                    {telefone}

                </label>

            </form>
        </main>
    );
}