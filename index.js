//*
 * Função gera o numero de verificação do número unificado passado
 * @param  {String} numUnificado Numero unificado, contendo os pontos e traços
 * @return {Number}              Retorna o digito de verificação calculado a partir do parâmetro passado
 */
export function generateNum(numUnificado){
  var list = numUnificado.split(".");
  var part1 = list[0].split("-");
  var digitoVerificador = part1.pop();
  var trechos = part1.concat(list[1]+list[2]+list[3],list[4]+"00");
  var resto1 = Number(trechos[0]) %97;
  var resto2 = (Number(resto1+trechos[1])) %97
  var resto3 = (Number(resto2+trechos[2]))%97;
  var digito = 98-(resto3 % 97)
  return digito;
}
//*
 * Função verifica se o digito verificador do numero unificado é válido
 * @param  {String} numUnificado Numero unificado, contendo os pontos e traços
 * @return {Boolean}              Retorna true se válido, e false se inválido
 */
export function verifyDigit(numUnificado){
  var list = numUnificado.split(".");
  var part1 = list[0].split("-");
  var digitoVerificador = part1.pop();
  var trechos = part1.concat(list[1]+list[2]+list[3],list[4],digitoVerificador);
  return (Number(trechos.join(""))%97) === 1;
}
