import { Link } from 'react-router-dom'
import { Layout, Typography } from 'antd'

const { Header } = Layout
const { Title } = Typography

const AppHeader = () => {
  return (
    <Header>
      <Link to="/">
        <Title level={1}>HRnet</Title>
      </Link>
    </Header>
  )
}

export default AppHeader
