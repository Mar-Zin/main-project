import { FunctionComponent } from "react";
import style from './index.module.scss'

interface AeropressProps {
    
}
 
const Aeropress: FunctionComponent<AeropressProps> = () => {
    return ( <><div className={style.header}> 
        <h1>Руководство по приготовлению кофе в аэропрессе</h1>
        <p>Аэропресс — это метод, при котором вода проходит через кофе под давлением руки. Рассказываем об этом подробнее.</p>
    </div>
    <div className={style.Main_img} style={{backgroundImage:`url(https://coffee-static.storage.yandexcloud.net/files/shares/data/blog/guide-aeropress/new/main.jpg)`}}></div>
    <div className={style.text}> 
    
    
        <p >Главная особенность аэропресса в том, что при заваривании проходит через кофе под небольшим давлением, которое создаётся при нажатии рукой на поршень. Благодаря бумажному фильтру напиток получается чистым и прозрачным, а благодаря давлению — более плотным, чем капельные методы заваривания. Существует два способа приготовления кофе в аэропрессе: прямой и перевернутый. Но в нашем руководстве мы разберем только прямой метод. </p>
        <p>Перед приготовлением кофе рекомендуем узнать об основных факторах, которые влияют на вкус кофе вне зависимости от способа приготовления.</p>
        <h4>Что понадобится</h4>
        <p>Обязательно:</p>
        <p>1. Кофе в зернах или молотый.</p>
        <p>2. Аэропресс.</p>
        <p>3. Бумажные фильтры.</p>
        <p>4. Горячая вода.</p>
        <p>Желательно: </p>
        <p>1. Весы.</p>
        <p>2. Кофемолка.</p>
        <p>3. Таймер.</p>
        <h4>Степень помола</h4>
    
    <div className={style.img} style={{backgroundImage:`url(https://coffee-static.storage.yandexcloud.net/files/shares/data/blog/guide-aeropress/new/image1.jpg)`}}></div>
    <p>Помол для аэропресса нужен чуть мельче среднего — по виду он должен быть между помолами для эспрессо и пуровера. Тем не менее, аэропресс больше других методов позволяет экспериментировать с помолом, поэтому в зависимости от результата, можно его подстраивать, меняя таким образом вкус.</p>
    <h4>Дозировка кофе</h4>
    <p>Оптимальная дозировка кофе — 18 г. Вы можете экспериментировать, пробовать разные варианты и ориентироваться на вкус.</p>
    <h4>Температура воды</h4>
    <div className={style.img} style={{backgroundImage:`url(https://coffee-static.storage.yandexcloud.net/files/shares/data/blog/guide-aeropress/new/image2.jpg)`}}></div>
    <p>Оптимальная температура для приготовления кофе в аэропрессе — 90 °С. Для этого можно довести воду до кипения, а затем дать ей остыть в течение одной-двух минут. Здесь нужно отметить, что Алан Адлер, изобретатель аэропресса, рекомендует использовать воду температурой 80 °С. Но в большинстве случаев все-таки используют температуру 90 °С.</p>
    <h4>Вливание воды</h4>
    <div className={style.img} style={{backgroundImage:`url(https://coffee-static.storage.yandexcloud.net/files/shares/data/blog/guide-aeropress/new/image4.jpg)`}}></div>
    <p>Перед тем, как установить сетку с бумажным фильтром в аэропресс, пролейте через фильтр немного горячей воды, чтобы избавиться от возможного привкуса бумаги, а затем засыпьте молотый кофе в аэропресс.</p>
    <p>Для более полной экстракции мы рекомендуем вливать воду в два этапа.</p>
    <div className={style.img} style={{backgroundImage:`url(https://coffee-static.storage.yandexcloud.net/files/shares/data/blog/guide-aeropress/new/image5.jpg)`}}></div>
    <p>Сначала влить треть от всего объема воды по отношению кофе, то есть на 18 г кофе можно взять 50–60 мл воды и подождать 30 секунд, а затем залить оставшуюся воду. Если общий объем воды равен 180 мл, то нужно влить остаток — 120–130 мл воды и установить поршень сверху на место, но сделать небольшое обратное вытягивающее движение, чтобы вода не протекала через фильтр вниз. В таком положении аэропресс нужно оставить еще на 40 секунд.</p>
    <h4>Давление на поршень</h4>
    <div className={style.img} style={{backgroundImage:`url(https://coffee-static.storage.yandexcloud.net/files/shares/data/blog/guide-aeropress/new/image6.jpg)`}}></div>
    <p>После окончания предсмачивания и заваривания снимите поршень и перемешайте кофе, а затем установите его обратно и, сохраняя постоянное давление, плавно опускайте поршень в течение 20-30 секунд, пока вся вода не попадает в чашку.</p>
    <p>В самом конце нужно выкинуть использованный фильтр с кофе и наслаждаться напитком!</p>
    </div></> );
}
 
export default Aeropress;