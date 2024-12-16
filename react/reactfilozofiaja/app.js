const btn = document.getElementById('button');


btn.onclick=function(){
    alert("Klikk eseménx történt");
}
btn.innerHTML = "Gomb";

document.getElementById("nativ-button-container").appendChild(btn);

const gomb = React.createElement("button",
    "button",
{
    onclick: function(){
        alert("Klikk esemény történt");
    }
},
  "Gomb2"
)

ReactDOM.render(gomb, document.getElementById("react-button-container"));
