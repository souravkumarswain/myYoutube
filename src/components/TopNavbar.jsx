import { useState } from "react";

function TopNavbar() {
  const [selected, setSelected] = useState(0)
  const options = [
    { id: 0, option: "All" },
    { id: 1, option: "Music" },
    { id: 2, option: "Podcast" },
    { id: 3, option: "Satsang" },
    { id: 4, option: "Indian pop music" },
    { id: 5, option: "Indian classical Music" },
    { id: 6, option: "Live" },
    { id: 7, option: "Ghazal" },
    { id: 8, option: "Self-Confidence" },
    { id: 9, option: "Chants" }
  ]
  const onClickNavOption = (id) => {
    setSelected(id)
  }
  return (
    <div className=" fixed top-16 left-30 flex gap-3 py-2 overflow-x-auto">
      {
        options.map((eachOption) =>
          <div key={eachOption.id} onClick={() => onClickNavOption(eachOption.id)} 
            className={`rounded-lg text-sm font-medium py-1.5 px-3 cursor-pointer transition-colors duration-200 ${selected === eachOption.id ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
            {eachOption.option}
          </div>
        )
      }

    </div>
  )
}

export default TopNavbar;