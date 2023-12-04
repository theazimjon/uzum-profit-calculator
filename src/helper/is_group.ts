
export default function(type: string) : boolean {
    switch (type) {
        case "group":
        case "supergroup":
            return true;
        default:
            return false;
    }
}
