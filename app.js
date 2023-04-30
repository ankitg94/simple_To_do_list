const item=document.querySelector("#item")
const todoBox=document.querySelector("#to-do-box")


item.addEventListener(
	"keyup",
	function(event){
		if (event.key =="Enter") {
			addTodo(this.value)
			this.value =""
		}
		
	}
)

const addTodo =(item) =>{
	const lisItem=document.createElement("li");
	lisItem.innerHTML=`
     ${item}
     <i class="fas fa-times"></i>
	`;


	lisItem.addEventListener(
		"click",
		function(){
			this.classList.toggle("done");
		}
	)
	lisItem.querySelector("i").addEventListener(
          "click",
          function(){
          	lisItem.remove()
          }
		)
	todoBox.appendChild(lisItem)
}