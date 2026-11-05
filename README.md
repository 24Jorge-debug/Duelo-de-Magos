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
<img width="747" height="517" alt="image" src="https://github.com/user-attachments/assets/c94b6cbb-068a-4445-8951-29a891046c30" />
<img width="627" height="558" alt="image" src="https://github.com/user-attachments/assets/6853407f-9407-42a8-b41a-bb9e48579e65" />

<h2>3. Explicación del código JS</h2>
<p>En cuanto al código, he declarado las variables que queria que tuvieran ese valor desde el inicio, básicamente todo reiniciado y desactivado, para que hasta que no le diera al botoón empezar, no se pueda hacer nada.</p> 
<img width="640" height="346" alt="image" src="https://github.com/user-attachments/assets/ea809dd9-c3a2-488c-a521-c30a87a75900" />

<p>Una vez, clickamos el botón de empezar, habilitamos solamente al jugador 1 para que pueda empezar a jugar, al resto nada, porque aún no es su turno.</p>








