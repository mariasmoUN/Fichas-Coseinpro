function focus() {
  let input = document.getElementById("general_text");
  input.focus();
}

function value() {
  let input = document.getElementById("general_text");
  input.value = "";
}

function resumir() {
  let texto = document.getElementById("general_text").value;

  //const input = `02/03/2025	192102296	1603103	15666-3266556		Arriendo	Apartamento	Medellín	Calasanz	Calasanz parte alta	Cerros del Escorial	Calle 51 # 82 190	2.300.000			523	80	80	5	3	3	Integral	EPM	Salón - Comedor	Calentador, Closet, Zona de ropas, Alcoba de servicio, ventanal	Cubierto	1	Cerámica	Gimnasio, Juegos infantiles, Parqueadero para visitantes, Portería, Turco, Zonas verdes	Cerca a la calle colombia, la 80, parroquias, parques, colegios, tiendas, supermercados y buenas rutas de transporte público.	Propietaria							Apartamento para arriendo en Calasanz, con excelente ubicación cerca a la calle Colombia, la 80, parroquias, parques, colegios, tiendas, supermercados y buenas rutas de transporte público. Ubicado en un piso 5, el apartamento cuenta con un área de 80 m² aproximados y consta de 3 alcobas más una alcoba de servicio, 3 baños, closets, salón comedor, ventanal, cocina integral, calentador, zona de ropas y parqueadero cubierto. En unidad cerrada que cuenta con juegos infantiles, gimnasio, turco, parqueadero para visitantes, zonas verdes y portería 24 horas.`;

  const fields = texto.split("\t");

  // Asignar campos por índice para mayor claridad
  const fechaIngreso = fields[1];
  const fr = fields[2];
  const eu = fields[3];
  const cc = fields[4];
  const m2 = fields[5];
  const tipoOperacion = fields[6]; // Arriendo
  const tipoPropiedad = fields[7]; // Apartamento
  const ciudad = fields[8];
  const barrio = `${fields[9]} - ${fields[10]}`;
  const direccion = `${fields[11]} - ${fields[12]}`; // Calle 51 # 82 190
  const canon = fields[13];
  const apto = fields[16]; // 523
  const area = fields[17];
  const areatotal = fields[18];
  const estrato = fields[19];
  const alcobas = fields[20];
  const banos = fields[21];
  const cocina = `${fields[22]} con gas de ${fields[23]}`;
  const ambientes = fields[24];
  const detalles = fields[25]; // Calentador, Closet, Zona de ropas, Alcoba de servicio, ventanal
  const parqueadero = `${fields[27]} ${fields[26].toLowerCase()}`; // 1 cubierto
  const piso = fields[28];
  const areascomunes = fields[29];
  const cercanias = fields[30]; // Puedes ajustarlo si quieres usar el campo 30

  // Construcción del resumen
  const fichaResumen = `
    Fecha: ${fechaIngreso}

    ${tipoOperacion}\t: ${canon.replace(".", "'")}
    ${tipoPropiedad}
    ${ciudad} - ${barrio}
    ${direccion}
    ${apto}

    Área: ${area}
    Área Total: ${areatotal}
    Estrato: ${estrato}
    Alcobas: ${alcobas}
    Baños: ${banos}
    Cocina: ${cocina}
    ${ambientes}
    Otras comodidades: ${detalles}
    Parqueadero: ${parqueadero}
    Piso: ${piso}
    Áreas comunes: ${areascomunes}
    Cerca a : ${cercanias}

    FR: ${fr}
    EU: ${eu}
    CC: ${cc}
    M2: ${m2}
    `;

  document.getElementById("resumen_text").style.display = "inline-block";
  document.getElementById("resumen_text").innerHTML = fichaResumen;

  value();
}

function copiar() {
  let contenido = document.getElementById("resumen_text");
  contenido.select();
  document.execCommand("copy");
}

focus();
value();
