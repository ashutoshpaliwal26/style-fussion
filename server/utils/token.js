import jwt from 'jsonwebtoken';

const sec = "Ashutosh*12";

export const setToken = (user) =>{
  return jwt.sign(user, sec);
}

export const getToken = (token) =>{
  if(!token) return null;
  return jwt.verify(token, sec);
}