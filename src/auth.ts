// Simple auth utility
export function isAuthenticated(): boolean {
    // Replace with your real auth logic
    return Boolean(localStorage.getItem("authToken"));
}
