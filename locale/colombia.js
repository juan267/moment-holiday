(function () {
  var moment =
    typeof require !== "undefined" && require !== null && !require.amd
      ? require("moment")
      : this.moment;

  moment.holidays.colombia = {
    "Día de los Reyes Magos": {
      date: "1/9",
      keywords: ["reyes magos"],
    },
    "Día de San José": {
      date: "3/20",
      keywords: ["Día del hombre"],
    },
    "Domingo de ramos": {
      date: "4/2",
    },
    "Jueves santo": {
      date: "4/6",
    },
    "viernes santo": {
      date: "4/7",
    },
    "domingo resureccion": {
      date: "4/9",
    },
    "dia de trabajo": {
      date: "5/1",
    },
    "dia de la ascencion": {
      date: "5/22",
    },
    "corpus crit": {
      date: "6/12",
    },
    "sagrado corazon": {
      date: "6/19",
    },
    "san pedro": {
      date: "7/3",
    },
    independencia: {
      date: "7/20",
    },
    independencia: {
      date: "8/7",
    },
    raza: {
      date: "10/16",
    },
    santos: {
      date: "11/6",
    },
    cartagena: {
      date: "11/13",
    },
    concepcion: {
      date: "12/8",
    },
    navidad: {
      date: "12/25",
    },
  };
  if (
    (typeof module !== "undefined" && module !== null
      ? module.exports
      : void 0) != null
  ) {
    module.exports = moment;
  }
}.call(this));
