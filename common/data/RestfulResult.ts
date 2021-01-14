export default interface RestfulResult<D = void> {
    data: D;
    status: number;
    message: string;
}
export function ok<D>(data: D): RestfulResult<D> {
    return build(data, null, 200);
}
export function internalServerError(cause: any): RestfulResult<null> {
    return build(null, cause + "", 500)
}
export function accessDenied(cause: any): RestfulResult<null> {
    return build(null, cause + "", 403)
}
export function build<D>(data: D, message: string, status: number) {
    return {
        data,
        message,
        status
    }
}