function mostrarDatos() {
    const formulario = document.getElementById("formulario");
    
    const nombres = formulario.elements["txt_Nombres"].value;
    const apellidos = formulario.elements["txt_Apellidos"].value;
    const telefono = formulario.elements["txt_Telefono"].value;
    const correo = formulario.elements["txt_Correo"].value;
    const fechaNacimiento = formulario.elements["txt_FN"].value;
    const mensaje = formulario.elements["txt_Mensaje"].value;
  
    alert("Tus Datos Ingresados:\n\n" +
          "Tus Nombres: " + nombres + "\n" +
          "Tus Apellidos: " + apellidos + "\n" +
          "Numero telefónico: " + telefono + "\n" +
          "Correo electrónico: " + correo + "\n" +
          "Fecha de nacimiento: " + fechaNacimiento + "\n" +
          "Mensaje: " + mensaje);
  }
  
  
  
  
  