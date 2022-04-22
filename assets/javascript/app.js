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




            ]
        },
        methods:{
            delete_todo(i){
                console.log("ok funge")
                this.tasks.splice(this.tasks,1)
            },
            new_task(){
                console.log("nuova task")
            }
        }
    }
)