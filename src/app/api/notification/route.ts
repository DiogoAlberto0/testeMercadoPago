import { MercadoPagoConfig, Payment } from "mercadopago";

export async function POST(request: Request) {
    const res = await request.json()


    const client = new MercadoPagoConfig({ accessToken: 'APP_USR-561934009385227-102314-47f8b8a153264c10af90297c67ef5ca7-2055254442' })

    console.log(res)
    switch (res.type) {
        case 'payment':
            const payment = await new Payment(client).get({ id: res.data.id })
            console.log('Pagamento recebido:', payment);
            break;

        case 'plan':
            console.log('Plano encontrado:');
            break;

        case 'subscription':
            console.log('Assinatura encontrada:');
            break;

        case 'invoice':
            console.log('Fatura encontrada:');
            break;

        case 'point_integration_wh':
            // `req.body` contém as informações relacionadas à notificação
            console.log('Notificação de ponto de integração:');
            break;

        default:
            console.log('Tipo de notificação não reconhecido');
    }

    return new Response('', {
        status: 200
    })
}