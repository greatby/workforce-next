"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    setModalRoot(document.getElementById("modal-root"));
    setMounted(true);
  }, []);

  if (!mounted || !modalRoot) return null;
  return createPortal(children, modalRoot);
}
