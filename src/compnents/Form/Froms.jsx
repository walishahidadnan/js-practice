import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Froms() {
  return (
    <form>
      <div className="space-y-12 bg-white mx-auto p-5 text-white">
        <div className="border-b border-gray-900/10 pb-12 text-white w-3/6 mx-auto"> 
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 ">
                Username
              </label>
              <div className="mt-2">
                <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md border-2 border-blue-300">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-white"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <div className="flex shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 border-2 border-blue-300">
                  <input
                    type="password"
                    name="password"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 bg-white " 
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
            
          </div>
          <button className='rounded p-4 mt-4 bg-blue-800 hover:bg-blue-500'>Submit</button>
        </div>
      </div>
    </form>
  )
}