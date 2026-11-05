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
        

    function jugador2ataca(){
        let ataque = Math.random();
        let objetivo = document.getElementById("objetivo-jugador2").value;

        if (objetivo == 1 && vida_restante_jugador_1 == 0){
            mostrarMensaje("El jugador 1 ya esta eliminado, elige otro oponente");
            return
        }
        if (objetivo == 3 && vida_restante_jugador_3 == 0){
            mostrarMensaje("El jugador 3 ya esta eliminado, elige otro oponente");
            return
        }

        if (ataque < 0.9){
            elegirJugador(objetivo)
            let vivos = contarJugadoresVivos();
            if(vivos > 1){
                comprobarTurno(2);
                mostrarMensaje("El jugador 2 ha eliminado a su objetivo");
            }
        } else {
            pasarAtaque2();
        }
    }

    function jugador3ataca(){
        let ataque = Math.random();
        let objetivo = document.getElementById("objetivo-jugador3").value;
        if (objetivo == 2 && vida_restante_jugador_2 == 0){
            mostrarMensaje("El jugador 2 ya esta eliminado, elige otro oponente");
            return
        }
        if (objetivo == 1 && vida_restante_jugador_1 == 0){
            mostrarMensaje("El jugador 1 ya esta eliminado, elige otro oponente");
            return
        }

        if (ataque < 0.7){
            elegirJugador(objetivo)
            let vivos= contarJugadoresVivos();
            if(vivos > 1){
                comprobarTurno(3);
                mostrarMensaje("El jugador 3 ha eliminado a su oponente");
            }
        } else {
            pasarAtaque3();
        }
    }

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

    function pasarAtaque2() {
        if (vida_restante_jugador_3 == 1) {
            mostrarMensaje("El jugador ha fallado o pasado su ataque, es turno del jugador 3");
            document.getElementById("Atacar-1").disabled = true;
            document.getElementById("Atacar-2").disabled = true;
            document.getElementById("Atacar-3").disabled = false;
            document.getElementById("Pasar-1").disabled = true;
            document.getElementById("Pasar-2").disabled = true;
            document.getElementById("Pasar-3").disabled = false;
            document.getElementById("objetivo-jugador1").disabled = true;
            document.getElementById("objetivo-jugador2").disabled = true;
            document.getElementById("objetivo-jugador3").disabled = false;
            document.getElementById("selec-opciones").disabled = true;
        } else {
            pasarAtaque3();
        }
    }

    function pasarAtaque3() {
        if (vida_restante_jugador_1 == 1) {
            mostrarMensaje("El jugador ha fallado o pasado su ataque, es turno del jugador 1");

            document.getElementById("Atacar-1").disabled = false;
            document.getElementById("Atacar-2").disabled = true;
            document.getElementById("Atacar-3").disabled = true;
            document.getElementById("Pasar-1").disabled = false;
            document.getElementById("Pasar-2").disabled = true;
            document.getElementById("Pasar-3").disabled = true;
            document.getElementById("objetivo-jugador1").disabled = false;
            document.getElementById("objetivo-jugador2").disabled = true;
            document.getElementById("objetivo-jugador3").disabled = true;
            document.getElementById("selec-opciones").disabled = false;
        } else {
            pasarAtaque1();
        }
    }

    function terminarPartida() {
        document.getElementById("Atacar-1").disabled = true;
        document.getElementById("Atacar-2").disabled = true;
        document.getElementById("Atacar-3").disabled = true;  
        document.getElementById("Pasar-1").disabled = true;
        document.getElementById("Pasar-2").disabled = true;
        document.getElementById("Pasar-3").disabled = true;
        document.getElementById("objetivo-jugador1").disabled = true;
        document.getElementById("objetivo-jugador2").disabled = true;
        document.getElementById("objetivo-jugador3").disabled = true;
        document.getElementById("selec-opciones").disabled = true;  
    
    } 

    function cambiarEstado2() {
        document.getElementById("estado-jugador2").innerHTML = "Eliminado";
    }

    function cambiarEstado1() {
        document.getElementById("estado-jugador1").innerHTML = "Eliminado";
    }

    function cambiarEstado3() {
        document.getElementById("estado-jugador3").innerHTML = "Eliminado";
    }

    function elegirJugador(objetivo) {
        switch(objetivo){
            case "1":
                vida_restante_jugador_1 = 0;
                cambiarEstado1();
                break;
            case "2":
                vida_restante_jugador_2 = 0;
                cambiarEstado2();
                break;
            case "3": 
                vida_restante_jugador_3 = 0;
                cambiarEstado3();
                break;
        }
    }

    function contarJugadoresVivos(){
        let jugadores_vivos = 0;

        if (vida_restante_jugador_1 == 1) {
            jugadores_vivos++;
        }
        if (vida_restante_jugador_2 == 1) {
            jugadores_vivos++;
        }
        if (vida_restante_jugador_3 == 1) {
            jugadores_vivos++;
        }

        if (jugadores_vivos == 1) {
            terminarPartida();
            if (vida_restante_jugador_1 == 1){
            mostrarMensaje("El jugador 1 gana la partida");
            } else if (vida_restante_jugador_2 == 1){
            mostrarMensaje("El jugador 2 gana la partida");
            }else if (vida_restante_jugador_3 == 1){
            mostrarMensaje("El jugador 3 gana la partida");
            }
        }
        return jugadores_vivos;

    }

    function comprobarTurno(jugador){
        if (jugador == 1){
            if (vida_restante_jugador_2 == 1){
                pasarAtaque1();
            }else {
                pasarAtaque2();
                comprobarTurno(2);
            }

        }else if (jugador == 2){
            if (vida_restante_jugador_3 == 1){
                pasarAtaque2()
            }else {
                pasarAtaque3();
                comprobarTurno(3);
            }

        }else if( jugador == 3){
            if (vida_restante_jugador_1 == 1){
            pasarAtaque3();
        }else {
            pasarAtaque1();
            comprobarTurno(1);
        }
        }
    }

    function mostrarMensaje(mensaje) {
        let resultado = document.querySelector(".contenedor-resultado");
        resultado.innerHTML = "<p>" + mensaje + "</p>"
    }
