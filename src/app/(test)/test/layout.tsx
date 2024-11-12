import React from "react";

interface DashboardLayoutProps {
  parallel1: React.ReactNode;
  parallel2: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  parallel1,
  parallel2,
}) => {
  return (
    <div>
      <section>page 2{parallel2}</section>
      <hr />
      <section>page 1{parallel1}</section>
      <hr />
      <h2>Both on the same page</h2>
    </div>
  );
};

export default DashboardLayout;
