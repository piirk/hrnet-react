import { ReactNode } from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Footer from './Footer'

const { Content } = Layout

interface LayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}

export default AppLayout
