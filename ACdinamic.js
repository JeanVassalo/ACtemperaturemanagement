class person { //CRIANDO A CLASSE PEESOA
  constructor(name, temperature_preference, turnon_when) { //CONSTUTOR DA CLASSE, CADA ATRIBUTO DA CLASSE TEM SEU OBJETIVO
    this.name = name; //NOME DE CADA PESSOA QUE SER� INSTANCIADA
    this.temperature_preference = temperature_preference; //TEMPERATURA QUE A PESSOA PREFERE NO AC
    this.turnon_when = turnon_when; //TEMPERATURA QUE A PESSOA QUER QUE LIGUE O AC
  }
}
class room { //CRIANDO A CLASSE SALA
  constructor(room_number, room_temperature, people_in, ac_temperature, on_off) {
    //CONSTUTOR DA CLASSE, CADA ATRIBUTO DA CLASSE TEM SEU OBJETIVO
    this.room_number = 121; //NESSE ATRIBUTO FOI INSTANCIADO ESTATICAMENTE POIS S� EXISTIR� UMA SALA NO PROBLEMA
    this.room_temperature = parseInt(prompt("Insira a temperatura do ambiente")); //A TEMPERATURA DA SALA ESTA SENDO INSTANCIADA MAS NESTE PONTO, PODERIA SER RECEBIDA A TEMPERATURA DE UM SENSOR
    this.people_in = []; //UM VETOR QUE GUARDA AS PESSOAS QUE ESTAO NA SALA
    this.people_in_preference = []; //UM VETOR QUE GUARDA A PREFERENCIA DE CADA PESSOA QUE ESTA NA SALA
    this.people_in_turnon = []; //UM VETOR QUE GUARDA QUANDO AS PESSOAS QUEREM QUE LIGUE O AC
    this.ac_temperature = ac_temperature; //UMA VARIAVEL PARA SABER A TEMPERATURA EM QUE O AC SERA LIGADO
    this.on_off = on_off; //UMA VARIAVEL PARA SABER SE O AC ESTA LIGADO OU NAO
  }
}

var sala121 = new room(); // INSTANCIANDO A SALA

var options = 1; // VARIAVEL PARA OPERAR O MENU

var i = 0; //VAR PARA ARRAY

do { //INICIANDO O MENU
  var options = prompt("1- Para adicionar aluno; 2- Verificar quem est� na sala; 3- Status do AC; 4- Temperatura do AC; 5- Entrar na sala; 6-Sair da sala; 0-Finalizar") //O USUARIO DIGITA A OP��O DESEJADA
  if (options == 1) { //ESTA OP��O ADICIONA UM ALUNO
    var pessoa1 = new person(prompt("digite seu nome"), parseInt(prompt("digite a temperatura do AC que te agrada")), parseInt(prompt("digite a temperatura que deseja que o AC ligue"))); //INSTANCIANDO A NOVA PESSOA
    sala121.people_in[i] = pessoa1.name; //INSERINDO A NOVA PESSOA NA SALA
    sala121.people_in_preference[i] = pessoa1.temperature_preference; //GUARDANDO AS PREFERENCIAS DA PESSOA
    sala121.people_in_turnon[i] = pessoa1.turnon_when; //GUARDANDO AS PREFERENCIAS DA PESSOA
    i = i + 1; //INCREMENTAR O CONTADOR PARA SER POSSIVEL ADICIONAR NOVAS PESSOAS

  } else if (options == 2) { //OP��O PARA VER QUEM ESTA NA SALA
    if (sala121.people_in[0] != null) //SE HOUVER ALGUEM NA SALA, SERA MOSTRADO
      document.write(sala121.people_in + "<br/>");
    else //SE NAO HOUVER NINGUEM NA SALA, ESSA MENSAGEM APARECER�
      document.write("A sala est� vazia <br/>")

  } else if (options == 6) { //OP��O PARA REMOVER PESSOAS DA SALA
    var cont = 0;
    var sair = prompt("Digite quem sair� da sala.") //USUARIO DIGITA QUEM SAIRA DA SALA
    while (sala121.people_in[cont] != sair) { //ENQUANTO NAO ENCONTRAR A PESSOA Q VAI SAIR, INCREMENTA O CONTADOR
      cont++;
      if (sala121.people_in[cont] == null) { // SE N�O ENCONTRAR A PESSOA PROCURADA, APARECE UMA MENSAGEM E DA BREAK NO WHILE
        document.write('Esta pessoa n�o est� na sala' + "<br/>");
        break;
      }
    }
    if (sala121.people_in[cont] == sair) { //SE ENCONTRAR A PESSOA, REMOVE ELA DA SALA E SEUS ATRIBUTOS TAMBEM
      sala121.people_in.splice(cont, 1); //A FUN��O SPLICE RETIRA A PESSOA DO VETOR, DEVEMOS INSERIR A POSI��O DELA E A UNIDADE
      sala121.people_in_turnon.splice(cont, 1);
      sala121.people_in_preference.splice(cont, 1);
    }

  } else if (options == 3) { //VERIFICA SE LIGA O AC
    var cont = 0;
    var aux = 0;
    while (sala121.people_in_turnon[cont] != null) {
      aux = (sala121.people_in_turnon[cont] + aux);
      cont++;
    }
    if ((aux / cont) < sala121.room_temperature) {
      document.write("A temperatura est� acima de " + aux / cont + "�C, por isso o AC ser� ligado. <br/>");
      sala121.on_off = "ligado";
    } else {
      document.write("A temperatura est� abaixo de " + aux / cont + "�C, por isso o AC n�o ser� ligado. <br/>");
      sala121.on_off = "desligado";
    }


  } else if (options == 4) { //CONFERE A TEMPERATURA DO AC
    if (sala121.on_off == "ligado") {
      var cont = 0;
      var aux = 0;
      while (sala121.people_in_preference[cont] != null) { //SOMA TODAS AS TEMPERATURAS DESEJADAS

        aux = (sala121.people_in_preference[cont] + aux);
        cont++; //CONTADOR PARA SABER QUANTAS PESSOAS ESTAO NA SALA
      }
      sala121.ac_temperature = (aux / cont); //DIVIDE PELA QUANTIDADE DE PESSOAS NA SALA
      document.write("O AC est� ligado na temperatura de " + sala121.ac_temperature + "�C <br/>");
    } else {
      document.write("O AC est� desligado <br/>");
    }

  } else if (options == 5) { //INSERE PESSOAS NA SALA QUE JA ESTAO NO 'BANCO DE DADOS'

    var entrar = prompt("Digite o nome da pessoa que entrar� na sala")
    if (entrar == 'Jean') {
      var jean = new person('Jean', 20, 25);
      sala121.people_in[i] = jean.name;
      sala121.people_in_preference[i] = jean.temperature_preference;
      sala121.people_in_turnon[i] = jean.turnon_when;
      i = i + 1;
    } else if (entrar == 'Ralf') {
      var ralf = new person('Ralf', 24, 28);
      sala121.people_in[i] = ralf.name;
      sala121.people_in_preference[i] = ralf.temperature_preference;
      sala121.people_in_turnon[i] = ralf.turnon_when;
      i = i + 1;
    } else if (entrar == 'Mateus') {
      var mateus = new person('Mateus', 26, 26);
      sala121.people_in[i] = mateus.name;
      sala121.people_in_preference[i] = mateus.temperature_preference;
      sala121.people_in_turnon[i] = mateus.turnon_when;
      i = i + 1;
    } else if (entrar == 'Annabell') {
      var annabell = new person('Annabell', 24, 26);
      sala121.people_in[i] = annabell.name;
      sala121.people_in_preference[i] = annabell.temperature_preference;
      sala121.people_in_turnon[i] = annabell.turnon_when;
      i = i + 1;
    } else {
      document.write("Esta pessoa n�o est� cadastrada")//CASO TENTEM INSERIR ALGUEM QUE NAO ESTA NO BD
    }

  }
} while (options != 0);