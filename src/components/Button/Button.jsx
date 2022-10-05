import scss from "./Button.module.scss"
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button 
    className={scss.ButtonLoadMore}
    type="button" 
    onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};