let vitorias = 92
let derrotas = 16
let heroi ="Th"

function getRanking (vitorias, derrotas)
{
    saldoDeVitorias = vitorias-derrotas
    return saldoDeVitorias
}
resultado = getRanking (vitorias, derrotas)
if(saldoDeVitorias <=10)
    nivel ="Ferro"
}
else if (saldoDeVitorias > 10 && saldoDeVitorias <=20)
{
   nivel = "Bronze"
}

else if (saldoDeVitorias > 20 && saldoDeVitorias <=50)
    {
       nivel = "Prata"
    }
    else if (saldoDeVitorias > 50 && saldoDeVitorias <=80)
        {
           nivel = "Ouro"
        }
        else if (saldoDeVitorias > 80 && saldoDeVitorias <=90)
            {
               nivel = "Diamante"
            }
            else if (saldoDeVitorias > 90 && saldoDeVitorias <=100)
                {
                   nivel = "Lendário"
                }
                else if (saldoDeVitorias >=100)
                    {
                       nivel = "Imortal"
                    }
                    
                    console.log(`O Herói ${heroi} tem ${vitorias} vitórias e ${derrotas} derrotas, 
                        com saldo final de ${saldoDeVitorias} pontos, e está no nível de
                         ${nivel.toUpperCase()}.`)