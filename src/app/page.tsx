import dynamic from "next/dynamic";

// Dynamically import the entire page as a client component
// This prevents SSR issues with ThemeProvider/useTheme context
const HomePage = dynamic(() => import("@/components/HomePage"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0D0D0D",
        color: "#FF2E2E",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: 40,
            height: 40,
            border: "3px solid rgba(255, 46, 46, 0.2)",
            borderTop: "3px solid #FF2E2E",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 16px",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ fontSize: 14, opacity: 0.7 }}>Loading...</p>
      </div>
    </div>
  ),
});

export default function Page() {
  return <HomePage />;
}
