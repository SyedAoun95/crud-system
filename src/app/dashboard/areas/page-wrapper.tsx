// src/app/areas/page-wrapper.tsx
import dynamic from "next/dynamic";

const AreasPage = dynamic(() => import("./page"), {
  ssr: false, // disable server-side rendering
});

export default AreasPage;
