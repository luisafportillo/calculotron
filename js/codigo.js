
  function areaRectangulo() {
    var base,altura,area;
    base=document.getElementById("cajaBase").value;
    altura=document.getElementById("cajaAltura").value;
    area=base*altura; 
    document.getElementById("cajaSalida").value = area;
  }

  function areaCuadrado() {
  //se crean las variables que se necesitan para el proceso  
  var lado, area;

  //se obtiene el valor que tiene el input con ide cajaLado y se le envia a la nueva variable lado
  lado = document.getElementById("cajaLado").value;

  // se hace el calculo del area 
  area = lado * lado;

  //se le envia la respuesta al input con id cajaSalida
  document.getElementById("cajaSalida").value = area;
  }


  function areaTriangulo(){
    var base,altura,area;
    base=document.getElementById("cajaBase").value;
    altura=document.getElementById("cajaAltura").value;
    area=(base*altura)/2; 
    document.getElementById("cajaSalida").value = area;
  }