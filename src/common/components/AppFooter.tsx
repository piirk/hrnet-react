import { Layout, Typography } from 'antd'

const { Footer } = Layout
const { Text } = Typography

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <Text>Copyright ©{new Date().getFullYear()} HRnet</Text>
    </Footer>
  )
}

export default AppFooter
