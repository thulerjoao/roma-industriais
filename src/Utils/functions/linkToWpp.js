    export function handleWhatsAppRedirect () {
        console.log("to aquiii")
        const phoneNumber = 5522988774726
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
        window.open(url, '_blank');
    }

