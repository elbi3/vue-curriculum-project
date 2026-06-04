import { ref, onMounted, onUnmounted } from "vue";

export function useWindowSize(){
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    const updateSize = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }

// onMounted runs once when the component mounts, so the event listener is only
// attached once. Skipping the onUnmounted cleanup would cause the listener to
// persist after the component is gone, leading to memory leaks.

    onMounted(() => {
        window.addEventListener("resize", updateSize);
    });

    onUnmounted(() => {        
        window.removeEventListener("resize", updateSize);
    });

    return { width, height }

};