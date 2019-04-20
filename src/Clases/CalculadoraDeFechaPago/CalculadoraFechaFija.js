export default class CalculadoraFechaFija{
    estaDisponibleParaPagar(fecha){
        return fecha.dia === fecha.obtenerUltimoDiaMes();
    }
}