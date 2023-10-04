import CardDoctor from '../CardDoctor/CardDoctor';
import './FirstScreen.scss';
import PillsHelp from '../PillsHelp/PillsHelp';
import PillsAdvantage from '../PillsAdvantage/PillsAdvantage';

export default function FirstScreen() {
  return (
    <div className="firstScreen">
      <h1>Полипилл — кринж* или тренд?</h1>
      <CardDoctor />
      <PillsAdvantage />
      <PillsHelp />
    </div>
  );
}
