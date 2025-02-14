import { Icon } from 'astro-icon/components';
import InvertedRadCard from '@components/inverted-rad-card.astro';

export default function Form() {
	return (
		<section
			id='card'
			className='bg-accent min-h-auto -mt-24 overflow-hidden pb-[100px] relative !rounded-se-[100px] !rounded-ss-[100px]'>
			<div className='absolute bg-black/60 h-full top-0 w-full'></div>
			<div className='mx-auto max-w-[1054px] py-[100px] relative w-full'>
				<h3 className='font-[700] font-display text-[53px] text-white'>
					<span>Let's work</span>
					<span className='block'>together</span>
				</h3>

				<div className='mt-20'>
					<form action='/' className='font-display'>
						<div className=' gap-x-6 gap-y-20 grid grid-cols-2'>

							<div className='col-span-1 relative'>
								<input type='text' id='firstName' name='firstName' className='pt-4 peer mt-1 block border-b border-white text-white w-full z-10 relative pl-2 !focus:ring-0' placeholder=' ' />
								<label htmlFor='firstName' className='absolute left-2 -top-2.5 text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white peer-focus:-top-8 peer-focus:text-[14px] peer-focus:text-white'>First Name</label>
							</div>
							<div className='col-span-1 relative'>
								<input type='text' id='lastName' name='lastName' className='pt-4 peer mt-1 block border-b border-white text-white w-full z-10 relative pl-2 !focus:ring-0' placeholder=' ' />
								<label htmlFor='lastName' className='absolute left-2 -top-2.5 text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white peer-focus:-top-8 peer-focus:text-[14px] peer-focus:text-white'>Last Name</label>
							</div>
							<div className='col-span-1 relative'>
								<input type='email' id='email' name='email' className='pt-4 peer mt-1 block border-b border-white text-white w-full z-10 relative pl-2 !focus:ring-0' placeholder=' ' />
								<label htmlFor='email' className='absolute left-2 -top-2.5 text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white peer-focus:-top-8 peer-focus:text-[14px] peer-focus:text-white'>Email Address</label>
							</div>
							<div className='col-span-1 relative'>
								<input type='text' id='companyName' name='companyName' className='pt-4 peer mt-1 block border-b border-white text-white w-full z-10 relative pl-2 !focus:ring-0' placeholder=' ' />
								<label htmlFor='companyName' className='absolute left-2 -top-2.5 text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white peer-focus:-top-8 peer-focus:text-[14px] peer-focus:text-white'>Company Name</label>
							</div>

							<div className='col-span-2 relative'>
								<textarea id='message' name='message' rows={4} className='pt-4 peer mt-1 block border-b border-white text-white w-full z-10 relative pl-2 !focus:ring-0' placeholder=' '></textarea>
								<label htmlFor='message' className='absolute left-2 -top-2.5 text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-white peer-focus:-top-8 peer-focus:text-[14px] peer-focus:text-white'>Message</label>
							</div>
						</div>

						<div className="mt-[94px] text-center">
							<button type='submit' className='bg-white mx-auto py-[14px] px-[60px] rounded-full w-fit'>
								Let's Connect
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>

	)
}


