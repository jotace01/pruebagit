var idCliente;
var nombreCliente ;
var direccionCliente; 
var telefonoCliente;
var correoCliente;
var nombreProducto;
var precio;
var cantidad;
var total;
var subtotal;
var p=0;
var iva;
var subtotalP=0;
var fecha= new Date();
var imprimir;
var numero_Factura=0;
var numeroFactura = parseInt(prompt("ingrese el numero de factura actual:"));

// Crear una función para leer el archivo CSV
function leerCSV() {
    // Obtener el archivo CSV como una cadena
    const csvString = fs.readFileSync("compras_facturas.csv");
    // Crear un nuevo analizador CSV
    const parser = new CSVParser();
    // Analizar la cadena CSV
    const datos = parser.parse(csvString);
    // Devolver los datos
    return datos;
  }
  // Crear una función para mostrar las facturas de compra en la pantalla principal
  function mostrarFacturas() {
    // Obtener las facturas de compra del archivo CSV
    const facturas = leerCSV();
    // Crear una nueva tabla HTML
    const tabla = document.createElement("table");
    // Agregar la fila de encabezado a la tabla
    const filaEncabezado = tabla.insertRow(0);
    filaEncabezado.innerHTML = "<th>ID de factura</th><th>Fecha</th><th>Proveedor</th><th>Importe</th>";
    // Agregar las filas de datos a la tabla
    for (const factura of facturas) {
      const fila = tabla.insertRow(-1);
      fila.innerHTML = `<td>${factura.idFactura}</td><td>${factura.fecha}</td><td>${factura.proveedor}</td><td>${factura.importe}</td>`;
    }
    // Agregar la tabla a la pantalla principal
    document.body.appendChild(tabla);
  }
  // Llamar a la función mostrarFacturas
  mostrarFacturas();

  function changeWallpaperColor() {
    // Get the current background color.
    const currentColor = document.body.style.backgroundColor;
    // Generate a random new color.
    const newColor = Math.random().toString(16).substr(2, 6);
    // Set the background color to the new color.
    document.body.style.backgroundColor = newColor;
  }
  // Add the event listener to the button.
  document.getElementById("change-wallpaper-color").addEventListener("click", changeWallpaperColor);
  
function generarFactura(){



    
idCliente=document.getElementById("idCliente").value;
nombreCliente=document.getElementById("nombreCliente").value;
direccionCliente=document.getElementById("direccionCliente").value;
telefonoCliente=document.getElementById("telefonoCliente").value;
correoCliente=document.getElementById("correoCliente").value;

fecha.getDate() + "/" +( (fecha.getMonth() + 1) + "/" + fecha.getFullYear() + "</br>" + "</br>" + "</br>");


document.addEventListener("DOMContentLoaded", function () {
document.getElementById("consecutivoFactura").textContent = "Consecutivo de Factura: " + numeroFacturaActual;
});
document.write("Identificacion del Cliente:"+'&nbsp;'+idCliente+"<br>"+"<br>");
document.write("Nombre del Cliente:"+'&nbsp;'+nombreCliente+"<br>"+"<br>");
document.write("Direccion:"+'&nbsp;'+direccionCliente+"<br>"+"<br>");
document.write("Telefono:"+'&nbsp;'+telefonoCliente+"<br>"+"<br>"+"<br>");
document.write("Correo Cliente"+"&nbsp;" +correoCliente +"<br>"+"<br>"+"br");


for (subtotal=0; nombreProducto != "*"; subtotal++) {


nombreProducto=prompt('Ingrese Nombre del Producto');
document.write("Nombre Producto:  "+'&nbsp;'+nombreProducto+'&nbsp;'+'&nbsp;');

precio=parseFloat(prompt('Ingrese Precio'));
document.write("Precio:  "+'&nbsp;'+precio+'&nbsp;'+'&nbsp;');

cantidad=parseInt(prompt('Ingrese Cantidad'));
document.write("Cantidad:  "+'&nbsp;'+cantidad+'&nbsp;'+'&nbsp;');


nombreProducto=prompt('Ingrese "*" Para terminar o cualquier tecla para continuar');

subtotal=precio*cantidad;
subtotalP=subtotalP+parseInt(subtotal);
iva=subtotalP*0.19;
total=subtotalP+iva;


document.write("SubTotal :"+'&nbsp;'+subtotal+"<br>"+"<br>"+"<br>");

} 
            document.write("Subtotal : " + "&nbsp;" + subtotalP + "<br>" + "<br>");
            document.write("Iva 19% :" + "&nbsp;" + iva + "<br>" + "<br>");
            document.write("Total :" + "&nbsp;" + total + "<br>" + "<br>");
            document.write('<button onclick="window.print()">Imprimir Factura</button>');

            // Retroceder a la página anterior o limpiar los campos
            window.history.back();

            // Numerar facturas con consecutivo
            numero_Factura++;

            // Totalizar ventas diarias y mensuales
            // Puedes implementar esta funcionalidad utilizando una base de datos o almacenando los valores en variables/arrays en el backend.

            // Mensaje de gracias por su compra al final de la factura
            document.write("<br>Gracias por su compra!");

}

generarFactura()


