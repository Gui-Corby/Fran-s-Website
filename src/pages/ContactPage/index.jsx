import { Header } from "../../components/Header";
import styles from "./styles.module.scss";

export const Contact = () => {
  return (
    <>
      <main>
        <section className={styles.contact_page_section}>
          <Header />
          <div className={styles.contact_page_container}>
            <p>francorbyceschin@gmail.com</p>
          </div>
        </section>
      </main>
    </>
  );
};

{
  /* <div className={styles.contact_middle}>
            <div className={styles.middle_left}>
              <p>Commercials + Music videos</p>
              <p className={styles.middle_name}>Francis Ceschin</p>
              <p>example@email.com</p>
            </div>

            <div className={styles.middle_right}>
              <p>Film & Television</p>
              <p>"Diff Person"</p>
            </div>
          </div>
        </section> */
}
