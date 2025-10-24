import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Lazy-load all non-home pages to shrink the homepage JS
const Company = lazy(() => import("./pages/Company"));
const Consultants = lazy(() => import("./pages/Consultants"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const Trust = lazy(() => import("./pages/Trust"));
const BookACall = lazy(() => import("./pages/BookACall"));

// If you don't have a NotFound page, either create it or comment this route out
let NotFound: React.ComponentType | undefined;
try {
  // optional: only if the file exists
  NotFound = lazy(() => import("./pages/NotFound"));
} catch (_e) {
  NotFound = undefined as any;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/book-a-call" element={<BookACall />} />
          {NotFound ? <Route path="*" element={<NotFound />} /> : <Route path="*" element={<div />} />}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
