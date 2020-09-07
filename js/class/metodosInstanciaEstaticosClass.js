class ControleRemoto {
    constructor(tv = 'LG'){
        this.tv = tv;
        this.volume = 0;
    }
      // INSTANCIA, esse metodo é referente a instancia criada.    
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }
      // ESTÁTICO , esse metodo e referente a class.
    static trocaPilha(){
        console.log('Trocado filhão!')
    }

}

const controle1 = new ControleRemoto('Philco');
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha()