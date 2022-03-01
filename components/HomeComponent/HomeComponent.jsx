import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "./HomeComponent.module.css";
import MainLayout from "../../layouts/MainLayout";
import useHome from "../../hooks/useHome";

const Card = dynamic(() => import("../UI/Card"));

const HomeComponent = () => {
    const { posts } = useHome();

    return (
        <MainLayout>
            <Head>
                <title>The main and latest news of the day in the world | Newspaper</title>
                <meta name="description" content="All the news for the last day. The latest news online, science, health, politics, astrology and sports on the Newspaper Web" />
                <meta name="keywords" content="news, news Newspaper, world news, latest news, news of the day, world news today" />
            </Head>
            <section className="justify-center items-center flex h-[250px] lg:h-[400px]">
                <h1 className={styles.title}>
                    Always be<br /> aware of events.
                </h1>
            </section>
            <section className={styles.blackSection}>
                <div className={styles.blackWrapper}>
                    <h2 className={styles.label}>
                        Fresh News
                    </h2>
                    <p className={styles.text}>
                        Here you will always be up to date with the latest events and news in the world. We constantly filter and select only true information.
                    </p>
                </div>
            </section>
            {posts?.length && (
                <section className={styles.cardsSection}>
                    <h2 className={styles.label}>
                        Latest News
                    </h2>
                    <div className={styles.cards}>
                        {posts.map(post => <Card key={post.title} card={post} />)}
                    </div>
                </section>
            )}
            <section className={styles.blackSection}>
                <div className={styles.blackWrapper}>
                    <h2 className={styles.label}>
                        Job search
                    </h2>
                    <p className={styles.text}>
                        Are you looking for or offering a job? You can register as a worker or company and find a job.
                    </p>
                </div>
            </section>
            {/* TODO: add best vacancies */}
            {/* <section className={styles.cardsSection}>
                <h2 className={styles.label}>
                    The Best Vacancies
                </h2>
                <div className={styles.cards}>
                    {cards.map(card => <Card key={card.title} card={card} />)}
                </div>
            </section> */}
            <section className={styles.blackSection}>
                <div className={styles.blackWrapper}>
                    <h2 className={styles.label}>
                        Security
                    </h2>
                    <p className={styles.text}>
                        We always monitor every ad or news for authenticity, so you should not be afraid that you may be deceived. Payment for goods is made on the Stripe platform, which guarantees the security of your payments.
                    </p>
                </div>
            </section>
        </MainLayout>
    );
}

export default HomeComponent;
