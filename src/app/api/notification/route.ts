import { MercadoPagoConfig, Preference } from "mercadopago";
import { type NextRequest } from 'next/server'

export async function POST(req: NextRequest) {

    const client = new MercadoPagoConfig({ accessToken: process.env.ACCESS_TOKEN_TEST || '' })

    const mercadopago = new Preference(client)

    const res = await req.json()
    const { type, data } = res;

    const preference = mercadopago.get({ preferenceId: data.id })

    console.log({
        preference,
        data,
        type
    })

    return Response.json({
        message: 'Foi'
    })


}