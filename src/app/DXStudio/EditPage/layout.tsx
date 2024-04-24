const ContainedLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        background: "#F6F6F6",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default ContainedLayout;
