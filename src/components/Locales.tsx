import { useEffect, useState } from "react";
import { IntlProvider, MessageFormatElement } from "react-intl";

type LocalesProps = {
    children: React.ReactNode;
}
export default function Locales({children}: LocalesProps){
    const [messages, setMessages] = useState<Record<string, string> | Record<string, MessageFormatElement[]> | undefined>()
    const loadLocaleData = () => {
                return import('../utils/locales/en.json');
    }
    useEffect(()=>{
        loadLocaleData().then((d: {default: any})=>{setMessages(d.default)});
    },[]);
    return <IntlProvider locale="en" messages={messages}>
        {children}
    </IntlProvider>
}