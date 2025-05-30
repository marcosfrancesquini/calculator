from gtts import gTTS
import os

audios = {
    # "0.mp3": "zero",
    # "1.mp3": "um",
    # "2.mp3": "dois",
    # "3.mp3": "três",
    # "4.mp3": "quatro",
    # "5.mp3": "cinco",
    # "6.mp3": "seis",
    # "7.mp3": "sete",
    # "8.mp3": "oito",
    # "9.mp3": "nove",
    # "porcento.mp3": "por cento",
    # "menos.mp3": "menos",
    # "mais.mp3": "mais",
    # "divide.mp3": "dividido por",
    # "multiplica.mp3": "multiplicado por",
    # "igual.mp3": "igual a",
    # "limpa.mp3": "limpar",
    # "ponto.mp3": "ponto",
    # "negativo.mp3": "negativo positivo",
    # "arrow.mp3": "corrigi"
}

os.makedirs("audios", exist_ok=True)

for filename, text in audios.items():
    tts = gTTS(text=text, lang='pt-br')
    tts.save(f"audios/{filename}")
    print(f"✅ {filename} gerado!")