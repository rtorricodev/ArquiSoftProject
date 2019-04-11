export default class CalculadoraFechaFija{
    estaDisponibleParaPagar(fecha){
        let ultimoDiaMes = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
        return fecha.getDate() === ultimoDiaMes.getDate();
    }
}