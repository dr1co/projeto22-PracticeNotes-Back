export default function handleError(code: string) {
    switch (code) {
        case "EmailUsed":
            return 401;
        case "ServerError":
            return 500;
        default:
            return 418;
    }
}