export async function GET(){
    let res = {
        products: [
            {"id": 1, "title": "iphone 9", "description": "An apple mobile watch" },
            {"id": 2, "title": "Samsung 9", "description": "An samsung mobile watch" }
        ]
    }
    return Response.json(res)
}

export function PUSH() {
    
}