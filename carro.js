//código do carro

var xCarros = [600, 600, 600, 600, 600, 600];
var yCarros = [40, 96, 150, 210, 270, 318]; 
var velocidadeCarros = [5, 3.5, 3.0, 4, 3.3, 2.3];
var comprimentoCarro = 50;
var alturaCarro = 40;

function mostraCarro(){
    for(var i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
    for(var i = 0; i < imagemCarros.length; i = i + 1){
        xCarros[i] -= velocidadeCarros[i];
        }
}

function voltaPosicaoInicialDoCarro(){
    for(var i = 0; i < imagemCarros.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}