let personaBuscada = [];
const salariosDePersonita = [];

function searching (search){
    const personaObjetivo = salarios.find(
        (persona) => persona.name == search);
    personaBuscada.push(personaObjetivo);
    console.log(personaBuscada);
};
function obtenerSalarios(){
    const personita = personaBuscada[0];
    const trabajosDePersonita = personita.trabajos;
    for(trabajos of trabajosDePersonita){
        salariosDePersonita.push(trabajos.salario);
        console.log(salariosDePersonita);
    };
    PlatziMath.ordenarLista(salariosDePersonita);
    console.log(salariosDePersonita + ' Salarios ordenados');
};
function medianaSalarial(SalariosDePersona){
    const longitud = SalariosDePersona.length

    if(SalariosDePersona.length%2 == 0){
    arrayPar(SalariosDePersona)
    }else{
    arrayInPar(SalariosDePersona)
    };

    function arrayPar(array){
    const lon = longitud/2;
    const sumaMid = array[lon - 1] + array[lon];
    const Mediana = sumaMid / 2;
    console.log(Mediana + ' Esta es la mediana de salarios de la persona seleccionada')
    }
    function arrayInPar(array){
    const lon = ((longitud + 1) /2)-1;
    const Mediana = array[lon];
    console.log(Mediana + ' Esta es la mediana de salarios de la persona seleccionada')
    }
};
function proyeccionSalarial(){
    const porcentajesDeCrecimiento = [];
    for(let i = 1; i < salariosDePersonita.length; i++){
        const salarioActual = salariosDePersonita[i]
        const salarioAnterior = salariosDePersonita[i - 1]
        const crecimiento = salarioActual - salarioAnterior
        const porcentajeDeCrecimiento = crecimiento / salarioAnterior
        porcentajesDeCrecimiento.push(porcentajeDeCrecimiento)
        console.log(porcentajesDeCrecimiento)
    }
    let sumatoriaDeCrecimiento = 0;
    for(let porcentaje of porcentajesDeCrecimiento){
        sumatoriaDeCrecimiento += porcentaje
        console.log(sumatoriaDeCrecimiento)
    }
    const promedioDeCrecimiento = sumatoriaDeCrecimiento / (porcentajesDeCrecimiento.length);
    console.log(promedioDeCrecimiento + ' Este es el promedio de crecimiento anual del salario');
    const ultimoSalarioIndex = salariosDePersonita.length - 1;
    const aumentoSalarial = salariosDePersonita[ultimoSalarioIndex] * promedioDeCrecimiento;
    const proyeccionSalarialIndividual = salariosDePersonita[ultimoSalarioIndex] + aumentoSalarial;
    console.log(proyeccionSalarialIndividual + ' Este es el salario al q puedes aspirar el proximo año')
}

function run(){
    searching('Juanita');
    obtenerSalarios();
    medianaSalarial(salariosDePersonita)
    proyeccionSalarial()
}