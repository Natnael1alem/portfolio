import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='Footer' className={styles.container}>
        <p>
            &copy; 2025 Natnael Alem. <br />
            All rights reserved.
        </p>

    </section>
  );
}

export default Footer