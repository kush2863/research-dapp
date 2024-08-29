import DotPattern1 from '../components/HomePageBackground'
import { Button } from '../components/ui/button'
import React from 'react'

const page = () => {
  return (
    <>

    <div className='flex justify-end mr-5 mt-5'>
      <Button> SignIn/SignUp   </Button>
    </div>
    <div>
    <DotPattern1 />
    </div>
    </>
  )
}

export default page