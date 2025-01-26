import React from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import AppLayout from '@common/components/AppLayout'

const Error: React.FC = () => {
  return (
    <>
      <AppLayout>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Link to="/">
              <Button type="primary">Back to Create Employee</Button>
            </Link>
          }
        />
      </AppLayout>
    </>
  )
}

export default Error
