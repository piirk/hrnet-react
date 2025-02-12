import { ReactNode } from 'react'
import { Layout } from 'antd'
import Header from './Header'
import AppFooter from './AppFooter'

const { Content } = Layout

interface LayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content>{children}</Content>
      <AppFooter />
    </Layout>
  )
}

export default AppLayout
