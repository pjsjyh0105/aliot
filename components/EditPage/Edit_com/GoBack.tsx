import IconButton from "@mui/material/IconButton";

export const GoBack = ({ isSHow, onClick }) => {
  return (
    <IconButton
      aria-label="back"
      onClick={onClick}
      style={{ visibility: isSHow ? "visible" : "hidden" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M23 13L16 20L23 27"
          stroke="#4D4D4D"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconButton>
  );
};
