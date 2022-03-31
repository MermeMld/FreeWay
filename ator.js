//código do ator
var xAtor = 100;
var yAtor = 366;
var colisao = false;
var meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3;
    }  
  }
}
function verificaColisao(){
  for(var i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    
    if (colisao){
      voltaPosicaoInicial();
      somDaColisao.play();
    if (pontosMaiorQueZero()){
      meusPontos -= 1;
    }  
    }
  }
}

function voltaPosicaoInicial(){
  yAtor = 366;
}


function incluiPonto(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27)
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}















