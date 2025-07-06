import { useSelector } from "react-redux";
import type { Mainstate } from "../Store/Store"


const Review = () => {

  const userdata = useSelector((state: Mainstate) => state.user)
  return (
    <>
      <section className="w-full min-h-screen bg-gradient-to-tr from-blue-200 to-green-200 flex flex-col justify-center items-center px-4 py-10">
  <div className="w-full max-w-md bg-gray-300 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-md flex flex-col items-start gap-4">
    <h1 className="text-2xl sm:text-3xl font-bold text-purple-700 w-full text-center mb-4">
      Review Details
    </h1>

          <p className="text-lg text-gray-800">
            <strong className="text-gray-600">Name:</strong> {userdata.name}
          </p>

          <p className="text-lg text-gray-800">
            <strong className="text-gray-600">Password:</strong> {userdata.password}
          </p>
        </div>
      </section>

    </>
  )
}
export default Review;