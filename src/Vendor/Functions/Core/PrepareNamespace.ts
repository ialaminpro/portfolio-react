export function PrepareNamespace(namespace: string, keyword: string): string {
    return (namespace + '/' + keyword).toString();
}