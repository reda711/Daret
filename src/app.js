const circlename = document.getElementById("nom-cercle");
const nameerror = document.getElementById("nom-cercle-erreur");
const nameregex = /^(?=.*\p{L})[\p{L}0-9 -]{3,40}$/u;
const montant = document.getElementById("cotisation");
const montanterror = document.getElementById("cotisation-erreur");
const date = document.getElementById("date-debut");
const dateerror = document.getElementById("date-debut-erreur");
let genererbtn = document.getElementById("generer");

circlename.addEventListener("input", () => {
  const value = circlename.value;
  if (value.length === 0) {
    nameerror.style.display = "none";
  } else if (value.length > 40) {
    nameerror.style.display = "block";
    nameerror.textContent = "Too long";
  } else if (value.length < 3) {
    nameerror.style.display = "block";
    nameerror.textContent = "Too short";
  } else if (!nameregex.test(value)) {
    nameerror.style.display = "block";
    nameerror.textContent = "Invalid Input";
  } else {
    nameerror.style.display = "none";
  }
});

montant.addEventListener("input", () => {
  const value = Number(montant.value);
  if (montant.value === "") {
    montanterror.textContent = "Please enter a number";
    montanterror.style.display = "block";
  } else if (!Number.isInteger(value)) {
    montanterror.textContent = "Please enter a decimal amount";
    montanterror.style.display = "block";
  } else if (value < 100) {
    montanterror.textContent = "Minimum is 100 MAD";
    montanterror.style.display = "block";
  } else if (value > 50000) {
    montanterror.textContent = "You exceeded the limit of 50,000 MAD";
    montanterror.style.display = "block";
  } else {
    montanterror.style.display = "none";
  }
});

date.addEventListener("input", () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const userDate = new Date(date.value + "T00:00:00");

  if (!date.value || userDate < today) {
    dateerror.textContent = "Please choose a valid date";
    dateerror.style.display = "block";
  } else {
    dateerror.textContent = "";
    dateerror.style.display = "none";
  }
});

/* us-02  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const liste = document.getElementById("participants-liste");
const addbtn = document.getElementById("ajouter-participant");
const partcount = document.getElementById("participants-compteur");
const parterror = document.getElementById("participants-erreur");
let users = partcount.textContent.split(" ");
let usersnum = Number(users[0]);
const min = Number(liste.dataset.min);
const max = Number(liste.dataset.max);

function createparticipant() {

  if (liste.children.length < max) {
    parterror.style.display = "none";
    const li = document.createElement("li");
    const input = document.createElement("input");
    const removebtn = document.createElement("button");
    liste.appendChild(li);
    li.appendChild(input);
    li.appendChild(removebtn);
    removebtn.textContent = "Remove";
    removebtn.type = "button"
    input.placeholder = "Enter participant name"
    removebtn.addEventListener("click", () => {
      if (liste.children.length > min) {
        removebtn.parentElement.remove();
        parterror.style.display = "none";
        partcount.textContent = `${liste.children.length} ${users[1]}`;
      } else {
        parterror.style.display = "block";
        parterror.textContent = `You cannot have less than ${min} participants`;
      }
    });
    li.classList += " flex justify-between";
    input.style.paddingRight = "90px";
    input.classList = "w-9/10 border rounded";
    removebtn.classList = " w-1/10 border rounded";
    partcount.textContent = `${liste.children.length} ${users[1]}`;
  } else {
    parterror.style.display = "block";
    parterror.textContent = `You cannot add more than ${max} participants`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  (createparticipant(), createparticipant(), createparticipant());
});

addbtn.addEventListener("click", () => {
  createparticipant();
}); 




/* us-03  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    function calculer(montantvalue , nombreParticipants) {
        return montantvalue * nombreParticipants
    }

function calculerTotalCycle(montantvalue , nombreTours){
    return montantvalue * nombreTours
}
    
function calculerNombreTours(nombreParticipants) {
    return nombreParticipants;
}

const montantvalue = Number(document.querySelector("#cotisation").value);
const nombreParticipants = document.querySelector("#participants-liste").children.length;

const nombreTours = calculerNombreTours(nombreParticipants);
const cagnotte = calculer(montantvalue, nombreParticipants);
const totalCycle = calculerTotalCycle(montantvalue, nombreTours);

console.log(cagnotte);
console.log(totalCycle);
console.log(nombreTours);


const resume = document.getElementById("resume-cagnotte")
    resume.style.display = ("block")
    resume.textContent = "djaja"
    