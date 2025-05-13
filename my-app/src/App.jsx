import { useState } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrar, setLembrar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Lembrar-me:', lembrar);
    // Aqui você pode adicionar a lógica de autenticação
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <div className="checkbox-row">
          <label>
            <input
              type="checkbox"
              checked={lembrar}
              onChange={(e) => setLembrar(e.target.checked)}
            />
            Lembrar-me
          </label>
          <a href="#" className="esqueceu">Esqueceu a senha?</a>
        </div>

        <button type="submit">Entrar</button>

        <p className="cadastro">
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
}