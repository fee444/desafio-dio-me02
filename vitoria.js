    let username = getFirstName("fee light luz")
        function getFirstName(name){
            let firstName = name.split(" ")[0]
                return firstName

}
    let saldo = vitorias (150, 5)
        let rank = ""
            function vitorias(n1, n2 ){
            let calculando = n1 - n2 
            return calculando
}
        if (saldo < 10 ){
        rank = "Ferro"
    } else if (saldo > 10 && saldo <= 20 ){
            rank = "Bronze"
    }  else if (saldo > 20 && saldo <= 50 ) {
            rank = "Prata"
    }  else if (saldo > 50 && saldo <= 80 ){
            rank = "Ouro"
    }  else if (saldo > 80 && saldo <= 90){
            rank = "Diamante"
    }  else if (saldo > 90 && saldo <= 100 ){
            rank = "Lendário "
    }  else{
            rank = "Imortal"
    }
        
    console.log(`O Herói de nome ${username} tem de saldo de ${saldo} e está no nível de ${rank}`)
