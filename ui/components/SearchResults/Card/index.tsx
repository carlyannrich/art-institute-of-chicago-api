import * as I from '../../../utils/interfaces';

const Card = ({ data }: I.Data) => {
	return (
		<div>
			{data?.map((artwork: I.FullResult) => (
				<div
					className='bg-gray-800 w-5/6 mx-auto rounded-xl my-20'
					key={artwork.id}
				>
					<div className='flex text-center text-white items-center justify-center'>
						<div className='w-[400px]'>
							<p>{artwork.artist_display}</p>
							<p>{artwork.date_display}</p>
							<p>{artwork.medium_display}</p>
							<p>{artwork.place_of_origin}</p>
							<p>{artwork.title}</p>
						</div>
						<img
							className='m-2'
							width='500'
							src={artwork.image_url}
							alt={`image ${artwork.title}`}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Card;
