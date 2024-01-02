import { SignIn } from "@clerk/clerk-react"
function UserSignIn() {
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center flex-wrap'>
      <SignIn />
    </div>
  )
}
 
export default UserSignIn