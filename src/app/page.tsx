'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

const MyWallet = dynamic(() => import('@/components/MyWallet'), { ssr: false })

export default function Home() {

    const [preferenceId, setPreferenceId] = useState()

    useEffect(() => {
        const getPreferenceId = async () => {
            let resp = await fetch('http://localhost:3000/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            let preferenceId = await resp.json()

            setPreferenceId(preferenceId)
        }

        getPreferenceId()
    }, [])


    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Pagemento</h1>

            {
                preferenceId ?
                    <MyWallet preferenceId={preferenceId} />
                    :
                    <h1>Carregando...</h1>
            }

        </div>
    );
}
