export default function Form() {
	return (
		<section
			id='card'
			className='bg-accent min-h-auto -mt-24 overflow-hidden pb-[100px] relative !rounded-se-[100px] !rounded-ss-[100px]'>
			<div className='absolute bg-black/60 h-full top-0 w-full'></div>
			<div className='mx-auto max-w-[1054px] py-[100px] relative w-full'>
				<h3 id="target" className='font-[700] font-display text-[53px] text-white w-fit'>
					<span>Let's work</span>
					<span className='block'>together</span>
				</h3>

				<div className='mt-20'>
					<form action='/' className='font-display'>
						<div className=' gap-x-6 gap-y-20 grid grid-cols-2'>

							<div className='col-span-1 relative'>
								<input type='text' id='firstName' name='firstName' className='block border-b border-white mt-1 pl-2 py-4 text-white w-full focus:outline-none focus:ring-0 placeholder:text-white' placeholder='First Name *' />
							</div>
							<div className='col-span-1 relative'>
								<input type='text' id='lastName' name='lastName' className='block border-b border-white mt-1 pl-2 py-4 text-white w-full focus:outline-none focus:ring-0 placeholder:text-white' placeholder='Last Name *' />
							</div>
							<div className='col-span-1 relative'>
								<input type='text' id='email' name='email' className='block border-b border-white mt-1 pl-2 py-4 text-white w-full focus:outline-none focus:ring-0 placeholder:text-white' placeholder='Email Address *' />
							</div>
							<div className='col-span-1 relative'>
								<input type='text' id='companyName' name='companyName' className='block border-b border-white mt-1 pl-2 py-4 text-white w-full focus:outline-none focus:ring-0 placeholder:text-white' placeholder='Company Name *' />
							</div>

							<div className='col-span-2 relative'>
								<textarea id='message' name='message' rows={2} className='block border-b border-white mt-1 pl-2 py-4 text-white w-full focus:outline-none focus:ring-0 placeholder:text-white' placeholder='Message *'></textarea>
							</div>
						</div>

						<div className="mt-[94px] text-center">
							<button type='submit' className='bg-white cursor-pointer duration-300 mx-auto py-[14px] px-[60px] rounded-full w-fit hover:bg-white/80'>
								Let's Connect
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>

	)
}


