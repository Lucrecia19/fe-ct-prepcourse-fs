/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   //var gato = {
   //   nombre: nombre,
   //   edad: edad,
   //   meow: function() {
   //      return 'Meow!';
   //   }
   //return gato;
   //}
   var objeto = {
      nombre: nombre,
      edad: edad,
   };
   objeto.meow = function () {
      return 'Meow!';
   }
   return objeto;
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var objeto = {
      nombre: nombre,
      email: email,
      password: password,
   };
   return objeto;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   var nuevo = objeto ;
    nuevo [propiedad] = null;
    return nuevo;
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto [metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
  //RESOLUCION1
  // return objetoMisterioso.numeroMisterioso * 5;
  //RESOLUCION2
  return objetoMisterioso['numeroMisterioso'] *5;
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   //RESOLUCION1
   //if(objetoUsuario.email !== undefined && objetoUsuario.email != null){
   //   return true;
   //}else return false;

   //RESOLUCION2
   //if(objetoUsuario.email){
    //  return true;
   //} else return false;

   //RESOLUCION3
   return !!objetoUsuario.email;
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   //RESOLUCION1
   //if (objeto.hasOwnProperty(propiedad)){
   //   return true;
   //} else return false;

   //RESOLUCION2
   return objeto.hasOwnProperty(propiedad)
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   //RESOLUCION1
   //if(objetoUsuario.password === password){
   //   return true;
   //} else return false;

   //RESOLUCION2
   return objetoUsuario.password === password;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   
   //DOTNOTATION
   //objetoUsuario,password = nuevaPassword
   //return objetoUsuario

   objetoUsuario['password'] = nuevaPassword
   return objetoUsuario
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);{
      return objetoUsuario
   }
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   
   //RESOLUCION1
   for(usuario of objetoMuchosUsuarios) {
      usuario.esPremium = true;
   }
   return objetoMuchosUsuarios;

   //REOLUCION2
   //objetoMuchosUsuarios.forEach(usuario => usuario.esPremium = true);
   
   //RESOLUCION3
   // var usuarios = objetoMuchosUsuarios.map(usuario => usuario.esPremium = true)
   // return usuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   
   //RESOLUCION1
   //var acumulador = 0 
   //for ( usuario of objetoUsuario.posts) {
   //   acumulador += usuario.likes
   //}
   //return acumulador;

   //RESOLUCION2
   //var acumulador = 0
   //objetoUsuario.posts.forEach(usuario =>acumulador += usuario.likes)
   //return acumulador;

   //RESOLUCION3
   var acumulador = 0 
   for(var i = 0; i < objetoUsuario.posts.length; i++) {
      acumulador = acumulador + objetoUsuario.posts[i].likes
   }
   return acumulador;
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:

   //BRACKETNOTATION
   objetoProducto['calcularPrecioDescuento'] = function() {
      var descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento
      var total = objetoProducto.precio - descuento 
      return total;
   }
   return objetoProducto
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
