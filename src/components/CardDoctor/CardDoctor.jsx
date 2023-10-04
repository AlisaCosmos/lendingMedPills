import './CardDoctor.scss';
//import Doctor from '../../assets/img/photoDoctor2@_desk_comres.jpg';

export default function CardDoctor() {
  return (
    <div className="cardDoctor">
      <div className="cardDoctor__info">
        <div className="cardDoctor__content">
          <div className="cardDoctor__info_img">
            <img className="info_img" />
          </div>
          <div className="cardDoctor__info_name">Ротарь Оксана Петровна,</div>
          <div className="cardDoctor__info_office">
            главный научный сотрудник НИЛ эпидемиологии неинфекционных заболеваний ФГБУ «Научный
            медицинский исследовательский центр им. В.А. Алмазова» Минздрава РФ:
          </div>
          <div className="cardDoctor__info_quote">
            «Согласно статистике, в России 67,4% пациентов, нуждающихся в комбинированной
            антигипертензивной терапии, остаются на монотерапии<sup>1</sup>»
          </div>
        </div>
      </div>
    </div>
  );
}
