import { useEffect } from "react";
import { ScrollAnimations } from "@/utils/scrollAnimations";

export const useScrollAnimations = (scroller?: string | HTMLElement) => {
    useEffect(() => {
        ScrollAnimations.init(scroller);
    }, [scroller]);
};