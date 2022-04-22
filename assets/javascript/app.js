const app = new Vue(
    {
        el : "#app",
        
        data:{
           new_todo:"",
            
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
                this.tasks.splice(i,1);
                
            },
            new_task(){
                console.log("nuova task")
                console.log(this.new_todo);
                
                this.tasks.push({
                    text: this.new_todo ,
                    done: false})
             },       
                    
                
            
            task_done(i){
                this.tasks[i].done = !this.tasks[i].done;
            }
        }
    }
    
)