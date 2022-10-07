import scss from "./App.module.scss"
import ImageSearch from "./ImageSearch";

export const App = () => {
  return (
    <div
    className={scss.App}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ImageSearch />
    </div>
  );
};
