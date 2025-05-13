import React, { useState } from 'react';
import './App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarMe, setLembrarMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, senha, lembrarMe });
    // Lógica de autenticação pode ser adicionada aqui
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Entrar</h2>

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <div className="login-options">
          <label>
            <input
              type="checkbox"
              checked={lembrarMe}
              onChange={() => setLembrarMe(!lembrarMe)}
            />{' '}
            Lembrar-me
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button type="submit">Entrar</button>

        <p className="register-link">
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
}
