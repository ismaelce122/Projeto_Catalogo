import React, { useState } from 'react';

function Comentarios() {
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentariosEnviados, setComentariosEnviados] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && comentario) {
      setComentariosEnviados([
        ...comentariosEnviados,
        { nome, comentario }
      ]);
      setNome('');
      setComentario('');
    } else {
      alert("Por favor, preencha ambos os campos.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Comentários sobre o site</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={styles.input}
            placeholder="Digite seu nome"
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Comentário:</label>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            style={styles.textarea}
            placeholder="Digite seu comentário"
          />
        </div>
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
      
      <div style={styles.comentariosContainer}>
        <h3>Comentários:</h3>
        {comentariosEnviados.length === 0 ? (
          <p>Ainda não há comentários.</p>
        ) : (
          comentariosEnviados.map((comentario, index) => (
            <div key={index} style={styles.comentario}>
              <strong>{comentario.nome}</strong>
              <p>{comentario.comentario}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
   },
   form: {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  comentariosContainer: {
    marginTop: '30px',
    width: '100%',
    maxWidth: '400px',
  },
  comentario: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
  }
};

export default Comentarios;
