const app = new Vue(
    {
        el : "#app",
        data:{
            new_todo:"",

            tasks:[
                {
                    text: "Fare la spesa",
                    done : true
                },
                {
                    text: "Andare dal dentista",
                    done : false
                },
                
                {
                    text: "Visita veterinario",
                    done : false
                },
            ]
        },
        methods:{
            task_done(i){
               console.log(this.tasks)
               this.tasks[i].done = !this.tasks[i].done;
            },
            delete_todo(i){
                this.tasks.splice(i, 1);
            },
            new_task(){
                
                console.log("nuova task");
                this.tasks.push({
                    text:this.new_todo,
                    done:false
                    
                })
                this.new_todo = ""
                
            }
        }
    }
)


//data

let date = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let day = days[date.getDay()];
console.log(day)

document.getElementById("day").innerHTML = day;

//date corrente

let gg, mm, aaaa;
gg = date.getDate() + "/";
mm = date.getMonth() + 1 + "/";
aaaa=date.getFullYear();
document.getElementById("full_data").innerHTML = gg + mm + aaaa;