import React, { Component } from "react";
import Register from "../component/Register";


const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
];

export const login = (username, password) => {
  // Validar que username y password no estén vacíos
  if (!username || !password) return null;

  // Buscar el usuario
  const user = users.find(
    user => user.username === username && user.password === password
  );

  if (user) {
    // Almacenar el usuario en localStorage
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  // Si no se encuentra, devolver null
  return null;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  // Verificar si hay un usuario almacenado en localStorage antes de parsear
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};