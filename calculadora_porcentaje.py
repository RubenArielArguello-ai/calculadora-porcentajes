def calculadora_porcentaje(porcentaje, total)
    resultado = (porcentaje * total)/100
    print = ("calculadora de porcentajes")
    print = ("Ejemplo: '20 por ciento de 150'")
 porcentaje = float(input("¿Cuál es el porcentaje que deseas calcular? "))
 total = float(input("¿de cuanto ? "))
 resultado = calcular_porcentaje(porcentaje, total)
print(f"{porcentaje}% de {total} es igual a {resultado}")