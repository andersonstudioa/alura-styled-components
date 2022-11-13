import React from "react"
import alimentacao from "../assets/images/alimentacao.svg"
import bank_logo from "../assets/images/bank_logo.svg"
import dinheiro from "../assets/images/dinheiro.svg"
import olho from "../assets/images/olho.svg"
import outros from "../assets/images/outros.svg"
import privado from "../assets/images/privado.svg"
import saude from "../assets/images/saude.svg"
import themeOff from "../assets/images/themeOff.svg"
import themeOn from "../assets/images/themeOn.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/utilidades.svg"
import { IconeTema } from "../Components/UI"

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
        Saude: <IconeTema src={saude} alt="Saude" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        default: <IconeTema src={outros} alt="Outro" />
    }

    return Images[type] || Images.default
}