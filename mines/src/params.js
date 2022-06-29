import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //proporcção painel superior
    difficultLevel: 0.1,
    
    getColumnsAmount () { //Qtd colunas
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },

    getRowsAmount () { //Qtd linhas
        const totalHeight = Dimensions.get('window').height
        const borderHeight = totalHeight * ( 1 - params.headerRatio )
        return Math.floor (borderHeight / this.blockSize)
    }
}

export default params