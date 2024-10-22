import style from '../styles/Button.css';

function Button({ reload }) {
  return (
    <button type="button" id='button-reload' onClick={reload}>
      Actualizar Lista
    </button>
  );
}

export default Button;
