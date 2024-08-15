
import css from '../Description/Description.module.css';

export default function Description() {
  return (
    <div className={css.descriptionContainer}>
      <h1 className={css.appTitle}>Sip Happens Café</h1>
      <p className={css.description}>
        Please leave your feedback about our service by selecting one of the options below.
      </p>
    </div>
  );
}
