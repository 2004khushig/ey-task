import styles from "./DashboardCards.module.css";
import calendarIcon from "../../assets/calendar.svg";

const meetings = [
  { 
    avatar: "https://i.pravatar.cc/36?img=1", 
    name: "Call with Woods", 
    tag: "Business" 
  },
  { 
    avatar: "https://i.pravatar.cc/36?img=2", 
    name: "Call with Hilda", 
    tag: "Meditation" 
  },
  { 
    avatar: "https://i.pravatar.cc/36?img=3", 
    name: "Conference call", 
    tag: "Dinner" 
  },
  { 
    avatar: "https://i.pravatar.cc/36?img=4", 
    name: "Meeting with Mark", 
    tag: "Meetup" 
  },
  { 
    avatar: "https://i.pravatar.cc/36?img=5", 
    name: "Meeting in Oakland", 
    tag: "Dinner" 
  },
  { 
    avatar: "https://i.pravatar.cc/36?img=6", 
    name: "Meeting with Carl", 
    tag: "Business" 
  },
];

export default function MeetingScheduleCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Meeting Schedule</h3>
        <span className={styles.menu}>⋮</span>
      </div>

      {meetings.map((m, i) => (
        <div key={i} className={styles.meetingRow}>
          <div className={styles.meetingLeft}>
            <img 
              src={m.avatar} 
              alt={m.name} 
              className={styles.avatar}
            />
            <div className={styles.meetingContent}>
              <p className={styles.bold}>{m.name}</p>
              <div className={styles.timeRow}>
                <span className={styles.calendar}>
                    <img src={calendarIcon} alt="calendar" />
                </span>
                <span className={styles.muted}>21 Jul | 08:20-10:30</span>
              </div>
            </div>
          </div>
          <span className={`${styles.tag} ${styles[`tag${m.tag}`]}`}>
            {m.tag}
          </span>
        </div>
      ))}
    </div>
  );
}
