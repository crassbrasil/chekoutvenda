import React, { useState } from 'react';

export default function PainelAdmin() {
  const [abaAtiva, setAbaAtiva] = useState('clientes');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Painel Administrativo</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setAbaAtiva('clientes')}>Dados do Cliente</button>
        <button onClick={() => setAbaAtiva('integracao')}>Integração</button>
      </div>
      {abaAtiva === 'clientes' && (
        <div>
          <h2>Clientes</h2>
          <p>Cadastro e gerenciamento de clientes aqui.</p>
        </div>
      )}
      {abaAtiva === 'integracao' && (
        <div>
          <h2>Integração</h2>
          <p>Configuração de integração com gateways de pagamento.</p>
        </div>
      )}
    </div>
  );
}