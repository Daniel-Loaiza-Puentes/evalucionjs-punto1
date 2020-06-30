var motor;

motor = parseInt(prompt("Tipo de motor: Selecciona entre valores posibles 1,2,3,4"));

switch (motor)
{
    case 0:
        document.write("No hay establecido un valor definido para el tipo de bomba");
        break;
    case 1:
        document.write("La bomba es una bomba de " + ": Agua");
        break;
    case 2:
        document.write("La bomba es una bomba de " + ": Gasolina");
        break;
    case 3:
        document.write("La bomba es una bomba de " + ": Hormigón");
        break;
    case 4:
        document.write("La bomba es una bomba de " + ": pasta alimentada");
        break;
    default:
        document.write("No existe un valor válido para tipo de bomba");
}