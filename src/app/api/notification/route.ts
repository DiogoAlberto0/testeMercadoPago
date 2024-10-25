

export async function POST(req: Request) {


    const res = await req.json()
    const { type, data } = res;

    console.log({
        data,
        type
    })

    return Response.json({
        message: 'Foi'
    })


}