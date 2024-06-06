import axios from "axios"

async function ddos() {
    while (0<1) {
        await axios.get("http://localhost:8080/products/option?productId=57", {
            headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzE3MzQxMjk1LCJleHAiOjE3MTc5NDYwOTV9.4thXIxPXyvtklKPQoDZ6MIP6038kcMG_y51sE6WzaDS17DJJclJC1wgfNyQ-uwFToNCvGnmFGnKKuKfvnAnzVg"
            }
        })
    }
}

ddos()