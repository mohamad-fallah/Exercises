import React from "react";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Shop Page",
//   description: "Website Shop",
// };

//
export default function ItemLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Shop Item</header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
}

