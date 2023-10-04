import './PillsAdvantage.scss';

export default function PillsAdvantage() {
  return (
    <div className="pillsAdvantage">
      <ul className="pillsAdvantage__items">
        <li className="pillsAdvantage__item subTitle">
          Каждая дополнительная таблетка значимо снижает приверженность пациентов лечению
          <sup>1</sup>:
          <ul className="pillsAdvantage__item__list">
            <li className="pillsAdvantage__item__listItem">боятся «лишней нагрузки на печень»</li>
            <li className="pillsAdvantage__item__listItem">
              не желают принимать «препараты горстями»
            </li>
          </ul>
        </li>
        <li className="pillsAdvantage__item subTitle">
          Чего мы ждем от политаблетки?
          <ul className="pillsAdvantage__item__list">
            <li className="pillsAdvantage__item__listItem">
              хорошо изученного действия компонентов
            </li>
            <li className="pillsAdvantage__item__listItem">
              не желают принимать «препараты горстями»
            </li>
            <li className="pillsAdvantage__item__listItem">
              cинергичного снижения риска сердечно-сосудистых осложнений
            </li>
          </ul>
        </li>
      </ul>
      <div className="PillsHelp"></div>
    </div>
  );
}
