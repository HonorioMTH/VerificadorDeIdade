function verificar() {

   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('ano')
   var res = document.querySelector('div#res')
   var fund = document.querySelector('body#fundo')



   if (fano.value.lenght == 0 || fano.value > ano) {
      window.alert('[ERROR] Verifique os dados digitados!')
   } else {
      var fsex = document.getElementsByName('sexo')
      var idade = ano - Number(fano.value)
      //  res.innerHTML = `Idade calculada ${idade}`
      var gen = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if(fsex[0].checked){
         gen = 'Homem'
         if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'BebeMenino.png')
         }else if(idade < 20){
            //adolescente
            img.setAttribute('src', 'AdolescenteHomem.png')
         }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'adulto.png')
         }else{
            //idoso
            img.setAttribute('src', 'idoso.png')
         }
      }else if(fsex[1].checked){
         gen = 'Mulher'
         if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'marissol.png')
         }else if(idade < 20){
            //adolescente
            img.setAttribute('src', 'adolescenteMulher.png')
         }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'adulta.png')
         }else{
            //idoso
            img.setAttribute('src', 'idosa.png')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
      res.appendChild(img)

      if(fsex[0].checked){
         fund.style.background = 'blue'
   }else{
      fund.style.background = 'pink'
   }


   }

}

