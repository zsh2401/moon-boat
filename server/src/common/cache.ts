const map: { [key: string]: any } = {};
export default function cache<T>(key: string, factory: () => T): T {
    let v = map[key]
    if (v === undefined) {
        v = factory();
        map[key] = v;
    }
    return v;
}