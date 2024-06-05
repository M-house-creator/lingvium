import { useCallback, useEffect, useState } from "react";
import config from "../../params/config";
import "./style.css";

export default function Tarifs() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        header: [],
        data: [],
        sim: []
    });

    const fetchTable = useCallback(async () => {
        setLoading(true);
        const response = await fetch(config.api + "get/tarifs/");
        const answer = await response.json();

        setData(answer);

        setLoading(false);
    }, []);

    useEffect(() => {
        fetchTable();
    }, [fetchTable]);

    return (
        <>
            <h1></h1>
            {
                !loading && <div>
                    {
                        data.data.map(item => (
                            <>
                            <span>{item.TITLE}</span>
                            </>
                        ))
                    }
                </div>

            }
            <div className="tarifs">
            <hr className="line" />
            <p>1 тариф (эконом -)
 Стредние время для связи с вами 4 часа 
 качество установки умного дома 2/10
 описание тарифа: тариф предназначен для однокомнатных квартир
 и для тех у кого маленький бюджет</p>
<p>
 2 тариф (Эконом +)
 средние время для связи с вами 3 часа  
 средние качество  установки 3/10 
тариф для людей с приличным бюджетом </p>

<p>
 3 тариф (средний класс)
 средние время для связи с вами 2 часа 
 среднее качество установки 6/10
 тариф для людей с хорошим бюджетом </p>

<p>
 4 тариф (продвинутый)
средние время для связи с вами 2 часа 
 средние качество установки 8/10
тариф для богатых людей </p>
<p>
 5 тариф (VIP)
 Средние время для связи с вами 1 час
 средние качество установки 9/10
 тариф для мажоров</p>
<p>
 6 тариф -VIP
 Средние время для связи с вами 1 час
 средние качество установки 11/10
 тариф для Меллстроя 
 БОНУС ПРИ ОФОРМЛЕНИЕ ЗАКАЗА!! </p>
<p>
  подробнее можно узнать в телеграмм канале, 
который находится
 в вкладке 'о нас'</p>
            </div>
        </>
    );
}

    