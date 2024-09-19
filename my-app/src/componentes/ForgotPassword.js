import React from 'react';

const ForgotPassword = () => {
  return (
    <div className="container">
      <h2>Recuperar Contraseña</h2>
      <form>
        <input type="email" placeholder="Ingrese su correo" />
        <button type="submit" className="btn btn-primary">Enviar Enlace</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
