/**
* This component represents the password retrieval feature.
* It allows users to enter their username and email to receive a password recovery email.
* Once the email is sent successfully, the user is redirected to the login page.
*/

import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import IconTitle from "../../components/IconTitle";
import hexagono from "../../../public/images/hexagono.png";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postEmailPassword } from "../../queries/queryApi";

/**
* RetrievePass component.
*/

const RetrievePass = () => {
  const methods = useForm();
  const navigate = useNavigate();

/**
* Handles the form submission when the user requests to retrieve their password.
* Sends a password recovery email with the user's username and email.
* Displays an alert when the email is sent successfully.
* Redirects the user to the login page.
* @param {Object} data - The form data containing the user's username and email.
*/

  const onSubmit = async (data) => {
    try {
      const emailData = {
        title: "Recuperar Contraseña",
        message: `<!DOCTYPE html>
<html>
<head>
  <title>Recuperación de Contraseña</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f7f7f7;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    h1 {
      color: #333;
    }
    
    p {
      margin-bottom: 10px;
    }
    
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }
    
    .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .logo img {
      max-width: 150px;
    }
  </style>
</head>
<body>
  <div class="container">
    
    <h1>Recuperación de Contraseña</h1>
    <p>Estimado/a,</p>
    
    <p>Hemos recibido una solicitud para recuperar la contraseña de tu cuenta. Si no realizaste esta solicitud, por favor ignora este correo.</p>
    
    <p>Pulsa el siguiente botón para ingresar a nuestra página de eventos Goméz Morín:</p>
    <p>
      <a class="button" href="http://eventos-ceceq.com" target="_blank">Eventos CECEQ</a>
    </p>
    
    
    <p>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
    
    <p>¡Gracias y que tengas un buen día!</p>
    
    <p>Tu nueva contraseña es: </p>`,
        email: data.email,
        username: data.username,
      };
      await postEmailPassword(emailData);
      alert("Correo enviado");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 ">
      <div className=" h-full  mx-14 mt-4">
        <div className=" flex lg:justify-start md:justify-center sm:justify-start lg:ml-32 ml-32 md:ml-5 mt-8">
          <IconTitle image={hexagono} headerText="Recuperar Contraseña" />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => onSubmit(data))}
            className="w-full max-w-md mx-auto"
          >
            <div className="mt-2">
              <InputForm
                label="Usuario"
                name="userName"
                type="text"
                placeholder="Ingresa tu usuario"
                defaultValue=""
              />
            </div>

            <div className="mt-6">
              <InputForm
                label="Correo"
                name="email"
                type="text"
                placeholder="Ingresa tu correo"
                defaultValue=""
              />
            </div>

            <div className="flex justify-center mt-10">
              <div className="w-full max-w-xs">
                <Button
                  text="Enviar correo"
                  type="submit"
                  colorBg="bg-light-blue-500"
                  colorHoverBg="hover:bg-light-blue-600"
                />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="lg:flex-1 lg:bg-login lg:bg-cover lg:bg-center lg:bg-no-repeat lg:h-screen"></div>
    </div>
  );
};

export default RetrievePass;
