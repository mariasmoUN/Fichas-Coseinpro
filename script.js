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

  const fields = texto.split("\t");

  // Asignar campos por índice para mayor claridad
  const fechaIngreso = fields[2];
  const fr = fields[3];
  const eu = fields[4];
  const cc = fields[5];
  const m2 = fields[6];
  const tipoOperacion = fields[7]; // Arriendo
  const tipoPropiedad = fields[8]; // Apartamento
  const ciudad = fields[9];
  const barrio = `${fields[10]} - ${fields[11]}`;
  const direccion = `${fields[12]} - ${fields[13]}`; // Calle 51 # 82 190
  const canon = fields[14];
  const apto = fields[17]; // 523
  const area = fields[18];
  const areatotal = fields[19];
  const estrato = fields[20];
  const alcobas = fields[21];
  const banos = fields[22];
  const cocina = `${fields[23]} con gas de ${fields[24]}`;
  const ambientes = fields[25];
  const detalles = fields[26]; // Calentador, Closet, Zona de ropas, Alcoba de servicio, ventanal
  const parqueadero = `${fields[28]} ${fields[27].toLowerCase()}`; // 1 cubierto
  const piso = fields[29];
  const areascomunes = fields[30];
  const cercanias = fields[31]; // Puedes ajustarlo si quieres usar el campo 30

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
