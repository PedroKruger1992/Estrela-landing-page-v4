import React from 'react';
import BotaoWhatsApp from './BotaoWhatsApp';

function WhatsAppFlutuante() {
    return (
        <div className="fixed bottom-5 right-5 z-40 md:hidden">
            <BotaoWhatsApp apenasIcone variante="flutuante" className="shadow-xl" />
        </div>
    );
}

export default WhatsAppFlutuante;