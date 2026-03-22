import { useEffect } from "react";
/*===================================================================
Скролл на начало страницы - для избранных
====================================================================*/

export function useScrollToTop() {
  // Одиночный скролл наверх
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return null;
}