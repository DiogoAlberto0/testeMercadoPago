import MercadoPagoConfig, { Preference } from "mercadopago";

const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_TEST || '' })

export async function GET() {

    const preference = new Preference(client)

    return preference.create({
        body: {
            items: [
                {
                    id: '123',
                    title: 'Meu produto',
                    quantity: 1,
                    unit_price: 25
                }
            ],
            back_urls: {
                "success": "http://localhost:3000/feedback",
                "failure": "http://localhost:3000/feedback",
                "pending": "http://localhost:3000/feedback"
            },
            auto_return: "approved",
            notification_url: "https://teste-mercado-pago.vercel.app/api/notification"
        }
    })
        .then((response) => {
            return Response.json(response.init_point)
        })
        .catch((error) => Response.json({ message: error.message }))

}