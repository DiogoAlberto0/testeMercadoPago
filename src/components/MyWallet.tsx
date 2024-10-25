'use client'
import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const YourComponent = ({ preferenceId }: { preferenceId: string }) => {
    useEffect(() => {
        initMercadoPago('APP_USR-ea1d2c0b-1e3b-48fc-8dc1-f4ffb3f9d002', { locale: 'pt-BR', advancedFraudPrevention: false, trackingDisabled: true });
    }, []);

    return (
        <div>
            <Wallet initialization={{ preferenceId }} />
        </div>
    );
};

export default YourComponent;