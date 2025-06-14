import Annoucements from "@/components/Annoucements"
import EventCalender from "@/components/EventCalender"

const StudentPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <EventCalender/>
      <Annoucements/>
      </div>

    </div>
  )
}

export default StudentPage