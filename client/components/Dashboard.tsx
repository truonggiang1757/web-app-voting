import BarChart from "./BarChart"

const Dashboard = () => {
  return (
    <div className="flex-auto">
        <div className="flex flex-col">
            <div className="flex flex-col bg-white h-24 p-2 drop-shadow-2xl">
            <div className="flex flex-row space-x-3">

                <h4 className="font-bold p-1 text-3xl">Statistic for 'Government election'</h4>

            </div>
                <p className="p-1">From: 30th October 2022 | Until: 1st March 2023</p>
            </div>

            <div className="min-h-screen bg-blue-400">
                
                <div className="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols-2 p-4">
                    <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                        <div>
                            <div className="text-sm text-gray-400 ">Total votes</div>
                            <div className="flex items-center pt-1">
                            <div className="text-3xl font-medium text-gray-600 ">15,245</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                        <div>
                            <div className="text-sm text-gray-400 ">Views</div>
                            <div className="flex items-center pt-1">
                            <div className="text-3xl font-medium text-gray-600 ">54,623</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
                        <div>
                            <div className="text-sm text-gray-400 ">Rating</div>
                            <div className="flex items-center pt-1">
                            <div className="text-3xl font-medium text-gray-600 ">4.5/5</div>
                            </div>
                        </div>
                    </div>
                </div>
                <BarChart />
            </div>
        </div>
    </div>
  )
}

export default Dashboard