import PropTypes from 'prop-types';
import stat from './Statistics.module.css';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, label, percentage }) => (
    <li
      className={stat.item}
      key={id}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={stat.label}>{label}</span>
      <span className={stat.percentage}>{percentage}%</span>
    </li>
  ));
  return (
    <section className={stat.statistics}>
      {title && <h2 className={stat.tile}>{title}</h2>}

      <ul className={stat.statList}>{elements}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
