import React from "react";
import ProfileTable from "@/src/components/ProfileTable";
import UpComponent from "@/src/components/UpComponent";

function page() {
  return (
    <>
      <div>
        <h1>welcome to home page</h1>
        <UpComponent />
        <ProfileTable />
      </div>
    </>
  );
}

export default page;
