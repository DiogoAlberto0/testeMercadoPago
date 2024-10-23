import MercadoPagoConfig, { Preference } from "mercadopago";

const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_TEST || '' })

export async function POST(request: Request) {

    const preference = new Preference(client)

    const response = await preference.create({
        body: {
            items: [
                {
                    id: '123',
                    title: 'Meu produto',
                    quantity: 1,
                    unit_price: 25
                }
            ],
        }
    })

    return Response.json({ ...response })
}