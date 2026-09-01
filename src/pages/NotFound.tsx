import { Container } from '../components/ui/Container'
import { buttonClasses } from '../components/ui/Button'
import { AppLink } from '../lib/nav'

export function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-5xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="mt-2 text-sm text-ink-muted">주소가 변경되었거나 삭제된 페이지입니다.</p>
      <AppLink to="/" className={buttonClasses('primary', 'md', 'mt-6')}>
        홈으로 가기
      </AppLink>
    </Container>
  )
}
