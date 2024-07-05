import { useRecoilValue } from "recoil"
import { cardTitleState, cardDescriptionState, cardLinkNameState } from "@/hooks/cardAtom"

const Card = () => {
  const cardTitle: string = useRecoilValue(cardTitleState)
  const cardDescription: string = useRecoilValue(cardDescriptionState)
  const cardLinkName: string = useRecoilValue(cardLinkNameState)

  return (
    //  <div className="bg-white shadow-md rounded-lg p-4">
    //    <h2 className="text-xl font-bold">{cardTitle}</h2>
    //   <p>{cardDescription}</p>
    //   <a href="#" className="text-blue-500">{cardLinkName}</a>   
    //   </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
      <div className="inline-block align-bottom bg-red-600 h-2/3 mr-96 rounded-lg px-4 pt-5 pb-4 text-left overflow shadow-xl sm:my-8 sm:align-top sm:max-w-6xl sm:w-full sm:p-6 z-50">
 <div className=" bg-slate-200 flex flex-col justify-center align-middle items-center p-5">
        <h2 className="text-4xl font-bold">{cardTitle}</h2>
       <p>{cardDescription}</p>
       <a href="#" className="text-blue-500">{cardLinkName}</a>   
    </div>
      </div></span>
  
  )
}

export default Card
