import { createServer } from "miragejs";

export default function () {
  // let arr = [{ id: "1", text: "helo world" }];

  createServer({
    routes() {
      this.namespace = "/fakeapi";
      this.get("/getTodo", ()=>({
        todos:[
          { id: 1, text: "Walk the dog" },
          { id: 2, text: "Take out the trash" },
          { id: 3, text: "Work out" },
        ]
      }));
     
    },
  });
}
