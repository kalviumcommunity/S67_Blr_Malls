import Proptypes from 'prop-types';

function MallCard({info}) {
  return (
    <div className="mall-card">
      <h3>{info.name}</h3>
      <p>{info.location}</p>
    </div>
  );
}

MallCard.propTypes = {
  info: Proptypes.shape({
    name: Proptypes.string.isRequired,
    location: Proptypes.string.isRequired,
  }).isRequired,
};

export default MallCard;