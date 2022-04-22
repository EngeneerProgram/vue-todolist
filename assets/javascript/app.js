const app = new Vue(
    {
        el : "#app",
        
        data:{
           
            
            tasks:[
                {
                    text: "Fare la spesa",
                    done: true
                },

                {
                    text: "Visita medica",
                    done: false
                },

                {
                    text: "Pulire casa",
                    done: false
                },

                {
                    text: "Cucinare",
                    done: true
                },
            ],

        },
        methods:{
            delete_todo(i){
                console.log("task da eliminare")
                this.tasks.splice(this.tasks,1)
                
            },
            new_task(){
                console.log("nuova task")
                
            },
            task_done(i){
                this.tasks[i].done = !this.tasks[i].done;
            }
        }
    }
)