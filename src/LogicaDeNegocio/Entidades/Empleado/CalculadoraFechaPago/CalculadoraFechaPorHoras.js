class CalculadoraFechaPorHoras {
    estaDisponibleParaPagar(fecha){  
        return fecha.esViernes();
    }

}

module.exports = CalculadoraFechaPorHoras;