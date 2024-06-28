import { bg_Image } from "../utils/constants"

const BgImage = () => {
  return (
    <>
    <img
        className="inset-0 w-full h-full object-cover"
        src={bg_Image}
        alt="Background"
      />
    </>
  )
}

export default BgImage