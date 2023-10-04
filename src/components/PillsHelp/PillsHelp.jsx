import { ReactComponent as Doctor } from '../../assets/img/doctor_clip_art.svg';
import './PillsHelp.scss';

export default function PillsHelp() {
  return (
    <div className="pillsHelp">
      <div className="pillsHelp__title subTitle">
        На помощь врачу может прийти политаблетка — фиксированная комбинация (ФК) нескольких
        действующих веществ в одном препарате<sup>2</sup>.
      </div>
      <div className="pillsHelp__text_inner">
        <div className="pillsHelp__text_wrapper">
          <div className="pillsHelp__text_item">
            В проект клинических рекомендаций по лечению артериальной гипертензии (АГ) включен новый
            раздел о применении политаблетки. Она может стать привычным инструментом снижения
            сердечно-сосудистого риска<sup>2</sup>.
          </div>
          <div className="pillsHelp__text_item">
            Рассмотрим 2 клинические ситуации, когда назначение полипилла может быть оптимальным
            решением.
          </div>
        </div>
        <div className="pillsHelp__text_wrapper">
          <Doctor />
        </div>
      </div>
    </div>
  );
}
