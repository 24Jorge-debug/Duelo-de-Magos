# Duelo de Magos

<h2>1. Introducción</h2>
Duelo de Magos, es un juego por turnos en el que participan 3 jugadores que se enfrentan entre sí. El objetivo, es eliminar a todos los oponentes hasta ser el último jugador en quedar en pie y alzarse con la victoria. 

<h2>1.2 Objetivo</h2>
El objetivo del juego, es intentar eliminar a los demás oponentes con tus ataques(porcentajes), donde deberas aprovechar oportunidades o crear tus estrategias. Quién consiga ser el último con vida, ganará la partida.

<h2>1.3 Manual de instrucciones</h2>
<ul>
  <li>1. Jugadores: </li>
    <p>Los jugadores tienen un porcentaje fijo de posibilidad de daño, mientras que el Jugador 1, puede  elegir entre las cantidades de 60%, 80%, 100%. Es el único jugador capaz de poder elegir su daño.</p>
  <li>2. Turnos: </li>
    <p>En cuanto a los turnos, giran en sentido de las agujas del reloj. Luego entraria en juego, el factor de ataques, que explicaré en el siguiente apartado.</p>
  <li>3. Ataque: </li>
    <p>En cuanto a los ataques, tenemos que por norma general los turnos giran en sentido de las agujas del reloj, como ya explique anteriormente, pero existe la posibilidad de que cada jugador pueda elegir su objetivo, con el botón desplegable.</p>
  <li>4. Probabilidad: </li>
    <p>Cada jugador cuenta con sus porcentajes fijos, menos como el jugador 1, dependiendo del jugador que te toque, tendrás que intentar sobrevivir con las circustancias que te toquen.</p>
  <li>5. Victoria: </li>
    <p>Para conseguir la victoria es muy sencillo, conoces el Fortnite? Pues lo mismo, si eres el último jugador vivo, ganaste crack.</p>
</ul>

<h2>2. Explicación del código HTML</h2>
<p>En cuanto al código, he creado la estructura con div, donde cada uno, representa a un jugador. Cada uno incluye sus div y class, para poder indentificarlos más adelante en los archivos de CSS y JS.
<p>Para cada jugador he creado table, donde he añadido celdas para introducir los botones de atacar, pasas y los desplegables de elegir jugador. También abajo de cada tabla, tengo el estado de cada jugador para saber tu vida durante la partida, un botón  y por último, un recuadro, donde se puede ver que pasa en cada acción del juego.</p>

```html
<div class="bloque-jugador">
    <section class="jugador-3">
        <p><b>Jugador 3 (70%)</b></p>

        <table class="tabla-3">
            <thead>
                <tr>
                    <td><button id="Atacar-3" class="Atacar-3" onclick="jugador3ataca()">Atacar</button>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><button id="Pasar-3" class="Pasar-3" onclick="pasarAtaque3()">Pasar</button></td>
                </tr>
                <tr>
                    <td>
                        <form class="Elegir-jugador">
                            <select id="objetivo-jugador3">
                                <option value="1">Jugador 1</option>
                                <option value="2">Jugador 2</option>
                            </select>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    <p class="estado-jugador3" id="estado-jugador3">Vivo</p>
</div>
```


<img width="627" height="558" alt="image" src="https://github.com/user-attachments/assets/6853407f-9407-42a8-b41a-bb9e48579e65" />

<h2>3. Explicación del código JS</h2>
<p>En cuanto al código, he declarado las variables que queria que tuvieran ese valor desde el inicio, básicamente todo reiniciado y desactivado, para que hasta que no le diera al botoón empezar, no se pueda hacer nada.</p> 

```JavaScript
    document.getElementById("Atacar-1").disabled = true;
    document.getElementById("Atacar-2").disabled = true;
    document.getElementById("Pasar-1").disabled = true;
    document.getElementById("Pasar-2").disabled = true;
    document.getElementById("Pasar-3").disabled = true;
    document.getElementById("Atacar-3").disabled = true;
    document.getElementById("objetivo-jugador1").disabled = true;
    document.getElementById("objetivo-jugador2").disabled = true;
    document.getElementById("objetivo-jugador3").disabled = true;
    document.getElementById("selec-opciones").disabled = true;

    let vida_restante_jugador_1 = 1;
    let vida_restante_jugador_2 = 1;
    let vida_restante_jugador_3 = 1;
```
<p>Una vez, clickamos el botón de empezar, habilitamos solamente al jugador 1 para que pueda empezar a jugar, al resto nada, porque aún no es su turno.</p>

```JavaScript
function empezarFuncion() {
        document.getElementById("Atacar-1").disabled = false;
        document.getElementById("Pasar-1").disabled = false;
        document.getElementById("Atacar-2").disabled = true;
        document.getElementById("Pasar-2").disabled = true; 
        document.getElementById("Atacar-3").disabled = true;
        document.getElementById("Pasar-3").disabled = true;
        document.getElementById("estado-jugador2").innerHTML = "Vivo";
        document.getElementById("estado-jugador1").innerHTML = "Vivo";
        document.getElementById("estado-jugador3").innerHTML = "Vivo";
        vida_restante_jugador_1 = 1;
        vida_restante_jugador_2 = 1;
        vida_restante_jugador_3 = 1;
        document.querySelector(".contenedor-resultado").innerHTML = "";
        document.getElementById("objetivo-jugador1").disabled = false;
        document.getElementById("objetivo-jugador2").disabled = true;
        document.getElementById("objetivo-jugador3").disabled = true;
        document.getElementById("selec-opciones").disabled = false;
    }
```
<p>Para que un jugador pueda atacar, voy a explicar el jugador 1, que es el más interesante. Primero, generamos un número aleatorio y obtenemos el objetivo seleccionado, mediante id, y el porcentaje de acierto. Comprobamos si el objetivo sigue vivo, para poder si se puede atacar a ese objetivo o no, si esta eliminado muestra un mensaje en el recuadro de resultado, y nos vuelve a pedir para volver a atacar. </p>
<p>Ahora definimos el porcentaje que decida el usuario 1, depende cual eliga, la probabilidad será diferente. Si acierta, elimina al jugador y comprobamos si hay mas jugadores vivos o si ha ganado, si falla, pasa el turno al siguiente</p>

```JavaScript
function jugador1ataca(){
        let ataque = Math.random();
        let objetivo = document.getElementById("objetivo-jugador1").value;
        let porcentaje = document.getElementById("selec-opciones").value;
        let probabilidad;

        if (objetivo == 2 && vida_restante_jugador_2 == 0){
            mostrarMensaje("El jugador 2 ya esta eliminado, elige otro oponente");
            return
        }
        if (objetivo == 3 && vida_restante_jugador_3 == 0){
            mostrarMensaje("El jugador 3 ya esta eliminado, elige otro oponente");
            return
        }

        switch (porcentaje) {
            case "porcentaje-60":
                probabilidad = 0.6;
                break;
            case "porcentaje-80":
                probabilidad = 0.8;
                break;
            case "porcentaje-100":
                probabilidad = 1;
                break;
        }
            if ( ataque < probabilidad) {
                elegirJugador(objetivo);
                let vivos = contarJugadoresVivos();
                if(vivos > 1){
                    comprobarTurno(1);
                    mostrarMensaje("El jugador 1 ha eliminado a su objetivo");
                }
            } else {
                pasarAtaque1();
            }
        }
```
<p>Para que un jugador pueda pasar su ataque, básicamente primero comprobamos si el jugador 2 sigue vivo. Si es así, se muestra un mensaje en el recuadro de resultado indicando que es su turno y desabilitamos todos los botones, menos el del jugador al que le posee el turno.</p>

```JavaScript 
function pasarAtaque1() {
        if (vida_restante_jugador_2 == 1) {
            mostrarMensaje("El jugador ha fallado o pasado su ataque, es turno del jugador 2");
            document.getElementById("Atacar-1").disabled = true;
            document.getElementById("Atacar-2").disabled = false;
            document.getElementById("Atacar-3").disabled = true;
            document.getElementById("Pasar-1").disabled = true;
            document.getElementById("Pasar-2").disabled = false;
            document.getElementById("Pasar-3").disabled = true;
            document.getElementById("objetivo-jugador1").disabled = true;
            document.getElementById("objetivo-jugador2").disabled = false;
            document.getElementById("objetivo-jugador3").disabled = true;
            document.getElementById("selec-opciones").disabled = true;
        } else {
            pasarAtaque2();
        }
    }
  ```
<p>Para cambiar el estado, básicamente agarramos el id de la p donde indica el estado y cada vez que un jugador se elimina, cambia el estado a Eliminado </p>

```JavaScript
function cambiarEstado1() {
        document.getElementById("estado-jugador1").innerHTML = "Eliminado";
    }
```

<h2>Acerca de: </h2>
<ul>
  <li>Juego creado por: Jorge Carrillo.</li>
  <li>Para: complacer a todas las personas que quieres disfrutar de este juego dopaminoso.</li>
  <li>Dedicatoria: David Cánovas(TheGrefg)</li>
</ul>
