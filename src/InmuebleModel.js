class InmuebleModel {
  constructor(data) {
    this.id = data.id;
    this.titulo = data.descripcion?.titulo || "Sin título";
    this.tipoOperacion = data.tipoOperacion || "No especificado";
    this.tipoPropiedad = data.tipoPropiedad || "No especificado";
    this.direccion = data.ubicacion?.direccionCompleta || "Sin dirección";
    this.precio = data.precio?.pen ? `S/ ${data.precio.pen}` : "No disponible";
    this.imagen = data.multimedia?.imagenes?.[0] || "https://via.placeholder.com/150";
  }
}

export default InmuebleModel;
