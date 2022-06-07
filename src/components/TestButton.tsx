import 'virtual:windi.css'

export type TPropTestButton = {
  children: React.ReactNode
}

const TestButton = ({ children }: TPropTestButton): JSX.Element => {
  return (
    <button
      className='bg-light border rounded-md cursor-pointer bg-gray-200 border-gray-700 text-black text-xl py-2 px-4'
      dark='text-white bg-gray-700 border-gray-200'
      onClick={() => alert('This is an alert')}
    >
      {children}
    </button>
  )
}

export default TestButton
