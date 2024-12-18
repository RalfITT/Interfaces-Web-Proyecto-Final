export const CarIcon = ({ size = 10, strokeWidth = 1.5, width, height, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width || size} height={height || size} stroke-width="2">
            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
        </svg>
    );
};


export const SUVIcon = ({ size = 10, strokeWidth = 1.5, width, height, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width || size} height={height || size} stroke-width="2">
            <path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
            <path d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3"></path>
            <path d="M10 9v-4"></path>
            <path d="M2 7v4"></path>
            <path d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003"></path>
            <path d="M5 12v-3h13"></path>
        </svg>
    );
};

export const PickupIcon = ({ size = 10, strokeWidth = 1.5, width, height, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width || size} height={height || size} stroke-width="2">
            <path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5"></path>
            <path d="M12 18v-11h3"></path>
            <path d="M3 17l0 -5l9 0"></path>
            <path d="M3 9l18 -6"></path>
            <path d="M6 12l0 -4"></path>
        </svg>
    );
};

export const MinivanIcon = ({ size = 10, strokeWidth = 1.5, width, height, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width={width || size} height={height || size} stroke-width="2">
            <path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8"></path>
            <path d="M16 5l1.5 7l4.5 0"></path>
            <path d="M2 10l15 0"></path>
            <path d="M7 5l0 5"></path>
            <path d="M12 5l0 5"></path>
        </svg>
    );
};