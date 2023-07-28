function contar(){
    var inicio = document.getElementById('start')
    var fim = document.getElementById('stop')
    var passo = document.getElementById('step')
    var res = document.getElementById('msg')
    var msg = ''

    var ini = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        msg = 'Os campos precisam estar preenchidos com um número!'
        alert(msg)
    } else if(p <= 0){
        res.innerHTML = 'Não é possível contar com o passo menor ou igual a 0'
    } else if(ini > f){
        //Decrementar
        for(var i = ini; i >= f; i-=p){
            msg += `${i} \u{1F449} `
            res.innerHTML = msg
        }
        res.innerHTML += `Fim! \u{1F3C1}`
    } else if(ini < f){
        //Incrementar
        for(var i = ini; i <= f; i+=p){
            msg += `${i} \u{1F449} `
            res.innerHTML = msg
        }
        res.innerHTML += `Fim! \u{1F3C1}`
    } else{
        msg = `Não da pra contar do ${ini} até o ${f}, Informe novos valores!`
        alert(msg)
    }
}