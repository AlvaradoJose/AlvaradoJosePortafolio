(() => {
    "use strict";

    function primeraFuncion(primeraFuncion, numero) {
        (null == numero || numero > primeraFuncion.length) && (numero = primeraFuncion.length);
        for (var definiendo = 0, creando = new Array(numero); definiendo < numero; definiendo++) creando[definiendo] = primeraFuncion[definiendo];
        return creando
    }

    function numero(numero) {
        return function(numero) {
            if (Array.isArray(numero)) return primeraFuncion(numero)
        }(numero) || function(primeraFuncion) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(primeraFuncion)) return Array.from(primeraFuncion)
        }(numero) || function(numero, definiendo) {
            if (numero) {
                if ("string" == typeof numero) return primeraFuncion(numero, definiendo);
                var creando = Object.prototype.toString.call(numero).slice(8, -1);
                return "Object" === creando && numero.constructor && (creando = numero.constructor.name), "Map" === creando || "Set" === creando ? Array.from(numero) : "Arguments" === creando || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(creando) ? primeraFuncion(numero, definiendo) : void 0
            }

        }(numero) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()

    }

    var definiendo = "hamburguer-menu-animation-view",
        creando = (document.getElementsByClassName("listaEncabezado-item"), document.getElementById("pitcher")),
        encabezado = document.getElementById("Encabezado"),
        menu = document.getElementsByClassName("menuActivador-linea"),
        lista = document.getElementById("listaEncabezado");
    creando.addEventListener("click", (function(primeraFuncion) {
        !lista.classList.contains(definiendo) && creando.checked && lista.classList.add(definiendo), lista.classList.contains(definiendo) && !creando.checked && lista.classList.remove(definiendo)
    })), window.onscroll = function(primeraFuncion) {
        var definiendo, creando;
        definiendo = menu, creando = encabezado.offsetTop, numero(definiendo).forEach((function(primeraFuncion) {
            creando > 0 && (primeraFuncion.style.backgroundColor = "white"), 0 === creando && (primeraFuncion.style.backgroundColor = "black")
        })), encabezado.offsetTop > 0 ? encabezado.classList.add("cambioMenu") : encabezado.classList.remove("cambioMenu")
    }

})();