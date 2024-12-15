import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <div className={styles.contactIcon}>
          <span>👤</span> {name}
        </div>
        <div className={styles.contactIcon}>
          <span>📞</span> {number}
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
