class CalculadoraFechaFija{
    estaDisponibleParaPagar(fecha){
        return fecha.dia === fecha.obtenerUltimoDiaMes();
    }
}
module.exports = CalculadoraFechaFija;