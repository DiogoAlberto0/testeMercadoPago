'use client'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useEffect, useState } from 'react';
initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY || '');

export default function Home() {

    const [preferenceId, setPreferenceId] = useState('')

    useEffect(() => {

        fetch('http://localhost:4000/create-checkout-session', {
            method: 'POST'
        })
            .then((response) => {
                if (!response.ok) throw new Error('Erro na requisicao')

                return response.json()
            })
            .then((data) => {
                setPreferenceId(data.id)
            })
            .catch(error => console.log(error))

    }, [])
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Pagemento</h1>

            <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
        </div>
    );
}
