const Reader = require('./Reader')
const Writer = require('./writer')
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')

var leitor = new Reader()
var escritor = new Writer

async function main() {
    var dados = await leitor.Read('./users.csv')
    var dadosProcessados = Processor.Process(dados)
    var usuarios = new Table(dadosProcessados)
    var html = await HtmlParser.Parse(usuarios)

    //console.log(html)

    escritor.Write('htmlgerado.html', html)
}

main()