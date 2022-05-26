const microondas = (prato, segundo)=>{

if(prato !== 'pipoca' && prato !== 'macarrao' && prato !== 'carne' && prato !== 'jeicao' && prato !== 'brigadeiro') console.log('prato invalido');
//Tempos pré-definido
const segundoPipoca = 10;
const segundoMacarrao = 8;
const segundoCarne = 15;
const segundoFeijao = 12;
const segundoBrigadeiro = 8;
// Pipoca
if(prato === 'pipoca' && segundo === segundoPipoca){
    return console.log('Prato pronto, bom apetite!!!');
}else if(prato === 'pipoca' && segundo >= segundoPipoca * 3){
    return console.log('Kabumm');
}else if(prato === 'pipoca' && segundo >= segundoPipoca * 2){
    return console.log('Prato queimou');
}else if(prato === 'pipoca' && segundo < segundoPipoca){
    return console.log('Tempo insuficiente!!!');
}
//Macarrão
if(prato === 'macarrao' && segundo === segundoMacarrao){
    return console.log('Prato pronto, bom apetite!!!');
}else if(prato === 'macarrao' && segundo >= segundoMacarrao * 3){
    return console.log('Kabumm');
}else if(prato === 'macarrao' && segundo >= segundoMacarrao * 2){
    return console.log('Prato queimou');
}else if(prato === 'macarrao' && segundo < segundoMacarrao){
    return console.log('Tempo insuficiente!!!');
}
//Carne
if(prato === 'carne' && segundo === segundoCarne){
    return console.log('Prato pronto, bom apetite!!!');
}else if(prato === 'carne' && segundo >= segundoCarne * 3){
    return console.log('Kabumm');
}else if(prato === 'carne' && segundo >= segundoCarne * 2){
    return console.log('Prato queimou');
}else if(prato === 'carne' && segundo < segundoCarne){
    return console.log('Tempo insuficiente!!!');
}
//Feijão
if(prato === 'jeicao' && segundo === segundoFeijao){
    return console.log('Prato pronto, bom apetite!!!');
}else if(prato === 'jeicao' && segundo >= segundoFeijao * 3){
    return console.log('Kabumm');
}else if(prato === 'jeicao' && segundo >= segundoFeijao * 2){
    return console.log('Prato queimou');
}else if(prato === 'jeicao' && segundo < segundoFeijao){
    return console.log('Tempo insuficiente!!!');
}
//Brigadeiro
if(prato === 'brigadeiro' && segundo === segundoBrigadeiro){
    return console.log('Prato pronto, bom apetite!!!');
}else if(prato === 'brigadeiro' && segundo >= segundoBrigadeiro * 3){
    return console.log('Kabumm');
}else if(prato === 'brigadeiro' && segundo >= segundoBrigadeiro * 2){
    return console.log('Prato queimou');
}else if(prato === 'brigadeiro' && segundo < segundoBrigadeiro){
    return console.log('Tempo insuficiente!!!');
}
}

microondas('brigadeiro',3);