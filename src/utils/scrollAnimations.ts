import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export class ScrollAnimations {
    static init(scroller?: string | HTMLElement) {
        this.revealUp(scroller);
        this.revealDown(scroller);
        this.revealLeft(scroller);
        this.revealRight(scroller);
        this.fadeIn(scroller);
        this.zoomIn(scroller);
        this.rise(scroller);
    }

    // ==================== ВЫСОТА СНИЗУ ====================
    static revealUp(scroller?: string | HTMLElement) {
        gsap.utils.toArray<HTMLElement>(".gsap-up").forEach(el => {
            const offset = el.dataset.offset ?? "50";
            gsap.fromTo(el,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: `top bottom-=${offset}`,
                        end: "top center",
                        toggleActions: "play none none none",
                        markers: false
                    }
                }
            );
        });
    }

    // ==================== ВЫСОТА СВЕРХУ ====================
    static revealDown(scroller?: string | HTMLElement) {
        gsap.utils.toArray<HTMLElement>(".gsap-down").forEach(el => {
            const offset = el.dataset.offset ?? "50";
            const delay = parseFloat(el.dataset.delay ?? "0");
            gsap.fromTo(el,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.6,
                    ease: "power4.out",
                    delay,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: `top bottom-=${offset}`,
                        end: "top center",
                        toggleActions: "play none none none",
                        markers: false
                    }
                }
            );
        });
    }

    // ==================== СЛЕВА ====================
    static revealLeft(scroller?: string | HTMLElement) {
        gsap.utils.toArray<HTMLElement>(".gsap-left").forEach(el => {
            const offset = el.dataset.offset ?? "50";
            gsap.fromTo(el,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                duration: 1.0,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: `top bottom-=${offset}`,
                        end: "top center",
                        toggleActions: "play none none none",
                        markers: false
                    }
                }
            );
        });
    }

    // ==================== СПРАВА ====================
    static revealRight(scroller?: string | HTMLElement) {
        gsap.utils.toArray<HTMLElement>(".gsap-right").forEach(el => {
            const offset = el.dataset.offset ?? "50";
            gsap.fromTo(el,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                duration: 1.0,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: `top bottom-=${offset}`,
                        end: "top center",
                        toggleActions: "play none none none",
                        markers: false
                    }
                }
            );
        });
    }

    // ==================== FADE IN ====================
    static fadeIn(scroller?: string | HTMLElement) {
        gsap.utils.toArray<HTMLElement>(".gsap-fadein").forEach(el => {
            const offset = el.dataset.offset ?? "50";
            gsap.fromTo(el,
                { opacity: 0 },
                {
                    opacity: 1,
                duration: 1.0,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: `top bottom-=${offset}`,
                        end: "top center",
                        toggleActions: "play none none none",
                        markers: false
                    }
                }
            );
        });
    }

    // ==================== ZOOM IN ====================
    static zoomIn(scroller?: string | HTMLElement) {
        gsap.utils.toArray<HTMLElement>(".gsap-zoomin").forEach(el => {
            const offset = el.dataset.offset ?? "50";
            gsap.fromTo(el,
                { scale: 0.85, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                duration: 1.0,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: `top bottom-=${offset}`,
                        end: "top center",
                        toggleActions: "play none none none",
                        markers: false
                    }
                }
            );
        });
    }

    // ==================== RISE ====================
    static rise(scroller?: string | HTMLElement) {
        gsap.utils.toArray<HTMLElement>(".gsap-rise").forEach(el => {
            const offset = el.dataset.offset ?? "50";
            gsap.fromTo(el,
                { y: 90, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.0,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: `top bottom-=${offset}`,
                        end: "top center",
                        toggleActions: "play none none none",
                        markers: false
                    }
                }
            );
        });
    }
}