import React, { useState } from "react";
import {
  Book,
  Wallet,
  TrendingUp,
  ArrowRight,
  User,
  Home,
  PieChart,
  Play,
  X,
  DollarSign,
  Target,
  Bookmark,
  Bell,
} from "lucide-react";

const styles = {
  "@media (min-width: 1024px)": {
    container: {
      padding: "40px",
    },
    appWrapper: {
      maxWidth: "1200px",
      display: "grid",
      gridTemplateColumns: "250px 1fr",
      gap: "30px",
    },
    sideNav: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      position: "sticky",
      top: "20px",
      height: "fit-content",
    },
    bottomNav: {
      display: "none",
    },
    dashboardGrid: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    courseGrid: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  container: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    padding: "0",
  },
  appWrapper: {
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f3f4f6",
  },
  sideNav: {
    display: "none",
  },
  contentSection: {
    marginBottom: "80px",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "24px",
    transition: "transform 0.2s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-2px)",
  },
  headerCard: {
    background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
    color: "white",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "24px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#7c3aed",
  },
  balanceText: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "16px 0",
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    marginBottom: "24px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#f3e8ff",
    color: "#7c3aed",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  buttonHover: {
    backgroundColor: "#ede9fe",
  },
  transactionItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    marginBottom: "12px",
    transition: "background-color 0.2s",
  },
  courseCard: {
    position: "relative",
    overflow: "hidden",
  },
  videoModal: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
  },
  videoContent: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "800px",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "none",
    border: "none",
    color: "#6b7280",
    cursor: "pointer",
  },
  progressBar: {
    height: "6px",
    backgroundColor: "#e5e7eb",
    borderRadius: "3px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#7c3aed",
    transition: "width 0.3s ease",
  },
  notificationBar: {
    backgroundColor: "#7c3aed",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [balance, setBalance] = useState(5000);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [savedAmount, setSavedAmount] = useState(1200);
  const [savingGoal, setSavingGoal] = useState(5000);
  const [showNotification, setShowNotification] = useState(true);

  const courses = [
    {
      id: 1,
      title: "Financial Independence 101",
      description: "Learn the basics of personal finance and investment",
      duration: "4 weeks",
      videoUrl: "/api/placeholder/640/360",
      content:
        "Master the fundamentals of personal finance including budgeting, saving, and investing.",
      instructor: "Jane Smith",
      progress: 45,
    },
    {
      id: 2,
      title: "Investment Strategies",
      description: "Advanced investment techniques and portfolio management",
      duration: "6 weeks",
      videoUrl: "/api/placeholder/640/360",
      content:
        "Deep dive into various investment vehicles and risk management strategies.",
      instructor: "Michael Johnson",
      progress: 30,
    },
    {
      id: 3,
      title: "Digital Banking Mastery",
      description: "Understanding modern banking and fintech",
      duration: "4 weeks",
      videoUrl: "/api/placeholder/640/360",
      content:
        "Explore the latest in digital banking, cryptocurrency, and online security.",
      instructor: "Sarah Lee",
      progress: 60,
    },
  ];

  const transactions = [
    {
      id: 1,
      type: "credit",
      amount: 1000,
      description: "Salary",
      date: "2024-03-01",
      category: "Income",
    },
    {
      id: 2,
      type: "debit",
      amount: 200,
      description: "Shopping",
      date: "2024-03-02",
      category: "Shopping",
    },
    {
      id: 3,
      type: "credit",
      amount: 500,
      description: "Freelance",
      date: "2024-03-03",
      category: "Income",
    },
  ];

  const VideoModal = ({ course, onClose }) => (
    <div style={styles.videoModal}>
      <div style={styles.videoContent}>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        <h2 style={styles.title}>{course.title}</h2>
        <img
          src={course.videoUrl}
          alt="Course video"
          style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
        />
        <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
          Instructor: {course.instructor}
        </h3>
        <p style={{ marginBottom: "16px", color: "#4b5563" }}>
          {course.content}
        </p>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${course.progress}%`,
            }}
          />
        </div>
        <p style={{ textAlign: "right", color: "#6b7280", marginTop: "8px" }}>
          Progress: {course.progress}%
        </p>
      </div>
    </div>
  );

  const SideNav = () => (
    <div style={styles.sideNav}>
      <button
        onClick={() => setActiveTab("home")}
        style={{
          ...styles.button,
          backgroundColor: activeTab === "home" ? "#7c3aed" : "#f3e8ff",
          color: activeTab === "home" ? "white" : "#7c3aed",
        }}
      >
        <Home size={20} />
        Home
      </button>
      <button
        onClick={() => setActiveTab("education")}
        style={{
          ...styles.button,
          backgroundColor: activeTab === "education" ? "#7c3aed" : "#f3e8ff",
          color: activeTab === "education" ? "white" : "#7c3aed",
        }}
      >
        <Book size={20} />
        Learn
      </button>
      <button
        onClick={() => setActiveTab("wallet")}
        style={{
          ...styles.button,
          backgroundColor: activeTab === "wallet" ? "#7c3aed" : "#f3e8ff",
          color: activeTab === "wallet" ? "white" : "#7c3aed",
        }}
      >
        <Wallet size={20} />
        Wallet
      </button>
    </div>
  );

  const HomeSection = () => (
    <div style={styles.contentSection}>
      {showNotification && (
        <div style={styles.notificationBar}>
          <span>🎉 New course available: "Cryptocurrency Basics"</span>
          <button
            onClick={() => setShowNotification(false)}
            style={{ background: "none", border: "none", color: "white" }}
          >
            <X size={20} />
          </button>
        </div>
      )}

      <div style={styles.headerCard}>
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}
        >
          Welcome Back!
        </h1>
        <p>Your financial journey continues</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
        }}
      >
        <div style={styles.card}>
          <DollarSign size={24} color="#7c3aed" />
          <h3>Current Balance</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>${balance}</p>
        </div>
        <div style={styles.card}>
          <Target size={24} color="#7c3aed" />
          <h3>Savings Goal</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            ${savedAmount} / ${savingGoal}
          </p>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${(savedAmount / savingGoal) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h3 style={styles.title}>Financial Tips</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={styles.transactionItem}>
            <TrendingUp size={20} color="#7c3aed" />
            <span>Start an emergency fund</span>
          </div>
          <div style={styles.transactionItem}>
            <TrendingUp size={20} color="#7c3aed" />
            <span>Track your daily expenses</span>
          </div>
          <div style={styles.transactionItem}>
            <TrendingUp size={20} color="#7c3aed" />
            <span>Invest in your education</span>
          </div>
        </div>
      </div>
    </div>
  );

  const EducationSection = () => (
    <div style={styles.contentSection}>
      <h2 style={styles.title}>Learning Hub</h2>
      <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "1fr" }}>
        {courses.map((course) => (
          <div key={course.id} style={{ ...styles.card, ...styles.courseCard }}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              {course.title}
            </h3>
            <p style={{ color: "#4b5563", marginBottom: "16px" }}>
              {course.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#7c3aed", fontSize: "14px" }}>
                {course.duration}
              </span>
              <button
                onClick={() => {
                  setSelectedCourse(course);
                  setShowVideo(true);
                }}
                style={styles.button}
              >
                <Play size={16} />
                Start Learning
              </button>
            </div>
            <div style={{ marginTop: "16px" }}>
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${course.progress}%`,
                  }}
                />
              </div>
              <p
                style={{
                  textAlign: "right",
                  color: "#6b7280",
                  marginTop: "8px",
                }}
              >
                {course.progress}% Complete
              </p>
            </div>
          </div>
        ))}
      </div>
      {showVideo && selectedCourse && (
        <VideoModal
          course={selectedCourse}
          onClose={() => setShowVideo(false)}
        />
      )}
    </div>
  );

  const WalletSection = () => (
    <div style={styles.contentSection}>
      <div style={styles.card}>
        <h2 style={styles.title}>Digital Wallet</h2>
        <p style={styles.balanceText}>${balance.toLocaleString()}</p>
        <div style={styles.buttonGrid}>
          <button style={styles.button}>
            <DollarSign size={20} />
            Send
          </button>
          <button style={styles.button}>
            <DollarSign size={20} />
            Add
          </button>
          <button style={styles.button}>
            <DollarSign size={20} />
            Pay
          </button>
        </div>
      </div>
      <div style={styles.card}>
        <h3
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Recent Transactions
        </h3>
        {transactions.map((transaction) => (
          <div key={transaction.id} style={styles.transactionItem}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  backgroundColor:
                    transaction.type === "credit" ? "#dcfce7" : "#fee2e2",
                  padding: "8px",
                  borderRadius: "50%",
                }}
              >
                {transaction.type === "credit" ? (
                  <TrendingUp size={20} color="#059669" />
                ) : (
                  <TrendingUp
                    size={20}
                    color="#dc2626"
                    style={{ transform: "rotate(180deg)" }}
                  />
                )}
              </div>
              <div>
                <p style={{ fontWeight: "500" }}>{transaction.description}</p>
                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  <span style={{ fontSize: "14px", color: "#6b7280" }}>
                    {transaction.date}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      padding: "2px 8px",
                      backgroundColor: "#f3f4f6",
                      borderRadius: "12px",
                      color: "#6b7280",
                    }}
                  >
                    {transaction.category}
                  </span>
                </div>
              </div>
            </div>
            <p
              style={{
                fontWeight: "bold",
                color: transaction.type === "credit" ? "#059669" : "#dc2626",
              }}
            >
              {transaction.type === "credit" ? "+" : "-"}${transaction.amount}
            </p>
          </div>
        ))}
        <div style={{ marginTop: "20px" }}>
          <button
            style={{
              ...styles.button,
              width: "100%",
              backgroundColor: "#7c3aed",
              color: "white",
              padding: "12px",
              fontSize: "16px",
            }}
          >
            View All Transactions
          </button>
        </div>
      </div>

      <div style={styles.card}>
        <h3
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Spending Analytics
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              padding: "16px",
              backgroundColor: "#f3f4f6",
              borderRadius: "8px",
            }}
          >
            <p style={{ color: "#6b7280", marginBottom: "8px" }}>Total Spent</p>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>$1,234</p>
          </div>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#f3f4f6",
              borderRadius: "8px",
            }}
          >
            <p style={{ color: "#6b7280", marginBottom: "8px" }}>Saved</p>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>$567</p>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            Spending Categories
          </h4>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Shopping</span>
              <span style={{ fontWeight: "500" }}>35%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: "35%" }} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Bills</span>
              <span style={{ fontWeight: "500" }}>45%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: "45%" }} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Entertainment</span>
              <span style={{ fontWeight: "500" }}>20%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: "20%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.appWrapper}>
        <SideNav />
        {activeTab === "home" && <HomeSection />}
        {activeTab === "education" && <EducationSection />}
        {activeTab === "wallet" && <WalletSection />}

        <div style={styles.bottomNav}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "12px",
              backgroundColor: "white",
              borderTop: "1px solid #e5e7eb",
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <button
              onClick={() => setActiveTab("home")}
              style={{
                border: "none",
                background: "none",
                color: activeTab === "home" ? "#7c3aed" : "#6b7280",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Home size={24} />
              <span style={{ fontSize: "12px" }}>Home</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              style={{
                border: "none",
                background: "none",
                color: activeTab === "education" ? "#7c3aed" : "#6b7280",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Book size={24} />
              <span style={{ fontSize: "12px" }}>Learn</span>
            </button>
            <button
              onClick={() => setActiveTab("wallet")}
              style={{
                border: "none",
                background: "none",
                color: activeTab === "wallet" ? "#7c3aed" : "#6b7280",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Wallet size={24} />
              <span style={{ fontSize: "12px" }}>Wallet</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
