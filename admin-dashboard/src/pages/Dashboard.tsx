import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Footer from "../components/layout/Footer/Footer";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import TransactionsCard from "../components/dashboard/TransactionsCard";
import UpgradePlanCard from "../components/dashboard/UpgradePlanCard";
import MeetingScheduleCard from "../components/dashboard/MeetingScheduleCard";
import CafeBadilico from "../components/dashboard/CafeBadilico";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <div className={styles.main}>
        <Header />

        {/* 👇 SINGLE content wrapper */}
        <div className={styles.content}>
          <div className={styles.cardsGrid}>
            <TransactionsCard />
            <UpgradePlanCard />
            <MeetingScheduleCard />
          </div>
          <div style={{ marginTop: "24px" }} className={styles.bottomGrid}>
            <ActivityTimeline />
            <CafeBadilico />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
