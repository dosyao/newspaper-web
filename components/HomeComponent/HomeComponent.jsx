import Header from "../UI/Header";
import dynamic from "next/dynamic";
import styles from "./HomeComponent.module.css";
import cards from "./cards.json";
import MainLayout from "../../layouts/MainLayout";

const Card = dynamic(() => import("../UI/Card"));

const HomeComponent = () => {
    return (
        <MainLayout>
            <section className="justify-center items-center flex h-[250px] lg:h-[400px]">
                <h1 className={styles.title}>
                    Always be<br /> aware of events.
                </h1>
            </section>
            <section className={styles.blackSection}>
                <div className={styles.blackWrapper}>
                    <h3 className={styles.label}>
                        Fresh News
                    </h3>
                    <p className={styles.text}>
                        Here you will always be up to date with the latest events and news in the world. We constantly filter and select only true information.
                    </p>
                </div>
            </section>
            <section className={styles.cardsSection}>
                <h3 className={styles.label}>
                    Latest News
                </h3>
                <div className={styles.cards}>
                    {cards.map(card => <Card key={card.title} card={card} />)}
                </div>
            </section>
            <section className={styles.blackSection}>
                <div className={styles.blackWrapper}>
                    <h3 className={styles.label}>
                        Buy and Sell
                    </h3>
                    <p className={styles.text}>
                        Here you can always buy or sell something that you are tired of, or post your ad or news. We provide the opportunity to sell and buy goods from other similar sellers.
                    </p>
                </div>
            </section>
            <section className={styles.cardsSection}>
                <h3 className={styles.label}>
                    Hot Advertisements
                </h3>
                <div className={styles.cards}>
                    {cards.map(card => <Card key={card.title} card={card} />)}
                </div>
            </section>
            <section className={styles.blackSection}>
                <div className={styles.blackWrapper}>
                    <h3 className={styles.label}>
                        Security
                    </h3>
                    <p className={styles.text}>
                        We always monitor every ad or news for authenticity, so you should not be afraid that you may be deceived. Payment for goods is made on the Stripe platform, which guarantees the security of your payments.
                    </p>
                </div>
            </section>
            <section className={styles.cardsSection}>
                <h3 className={styles.label}>
                    The Best Vacancies
                </h3>
                <div className={styles.cards}>
                    {cards.map(card => <Card key={card.title} card={card} />)}
                </div>
            </section>
        </MainLayout>
    );
}

export default HomeComponent;
