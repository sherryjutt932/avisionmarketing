import React from "react";
import App from "./App.jsx";
import favicon from "./favicon.ico"

// const Hero = dynamic(() => import("@/components/Hero"), {});

export const metadata = {
  title: 'Avision Marketing',
  description: 'Avision Marketing portfolio in NextJS',
  keywords: 'HTML, CSS, JavaScript, NextJS',
  author: 'Sheharyar Saeed',
}
 

export default function Home() {
  
  return (
    <main className="main">
     
     <React.StrictMode>
      <App/>
  </React.StrictMode>
    </main>
  );
}
