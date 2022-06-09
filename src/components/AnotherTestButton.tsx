export type TPropTestButton = {
  children: React.ReactNode
}

const AnotherTestButton = ({ children }: TPropTestButton): JSX.Element => {
  return (
    <button
      className='bg-light border rounded-md cursor-pointer bg-gray-200 border-gray-700 text-black text-xl py-2 px-4'
      onClick={() => alert('This is an alert')}
    >
      {children}
    </button>
  )
}

export default AnotherTestButton
