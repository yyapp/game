/** public/ 폴더 파일의 URL (GitHub Pages base 경로 대응). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
