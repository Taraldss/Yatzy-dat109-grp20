import { useState } from "react";

export default function index(){

    const [email, setEmail] = useState<string>();
    const [userName, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [password2, setPassword2] = useState<string>();
    return (
        <div>
            <form method="POST" action="">
                <h1>Registrer bruker</h1>
                <input type="text" placeholder="email..." onChange={(event) => setEmail(event.target.value)}/>
                <input type="text" placeholder="navn..." onChange={(event) => setUserName(event.target.value)}/>
                <input type="password" placeholder="passord..." onChange={(event) => setPassword(event.target.value)}/>
                <input type="password" placeholder="passord..." onChange={(event) => setPassword2(event.target.value)}/>
                <input type="submit" value={"registrer"}/>
            </form>
        </div>
    );
}