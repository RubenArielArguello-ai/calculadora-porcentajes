def calcular_porcentaje(porcentaje, total):
    return (porcentaje * total) / 100

print("🧮 Calculadora de Porcentajes")
print("--------------------------------")

while True:
    entrada = input("\nEscribí algo como '10 por ciento de 160' o 'salir': ")
    
    if entrada.lower() == "salir":
        print("¡Hasta luego!")
        break
    
    try:
        partes = entrada.split()
        porcentaje = float(partes[0])
        total = float(partes[4])
        resultado = calcular_porcentaje(porcentaje, total)
        print(f"✅ El {porcentaje}% de {total} es: {resultado}")
    except:
        print("❌ No entendí. Escribí así: '10 por ciento de 160'")
