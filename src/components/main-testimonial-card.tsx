import '@smastrom/react-rating/style.css'
import { Rating, RoundedStar } from '@smastrom/react-rating'

export default function MainTestimonialCard({ rating }: { rating: number }) {
  return (
    <div
      className='backdrop-blur-lg bg-white/10 flex font-display items-center justify-center px-8 py-[60px] rounded-4xl'>
      <div className='flex flex-col items-center justify-center'>
        <span className="font-[700] text-[60px] text-white">4.5</span>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Rating
            style={{ maxWidth: 192 }}
            readOnly
            orientation="horizontal"
            value={rating}
            itemStyles={{
              itemShapes: RoundedStar,
              activeFillColor: '#f59e0b',
              inactiveFillColor: "transparent"
            }}
          />
          <span className='text-[14px] text-white md:text-[16px]'>(40+ reviews)</span>
        </div>

        <h5 className='font-[700] my-10 text-[16px] text-center text-white md:text-[20px]'>Helping world-class company by creative design.</h5>
      </div>
    </div>
  )
}