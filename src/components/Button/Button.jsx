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

export function SubmitBnt ({text, onClick}) {
  return (
    <button 
    onClick={onClick}
    type="submit" 
    className={scss.button}>
      <span className={scss.buttonLabel}>{text}</span>
    </button>
  ) 
}