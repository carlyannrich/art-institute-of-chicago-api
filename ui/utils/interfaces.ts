export interface FullResult {
	_score: number;
	medium_display: string;
	artist_display: string;
	date_display: string;
	id: number;
	image_id: string;
	title: string;
	place_of_origin: string;
	image_url: string;
}

export interface Data {
	data: FullResult[];
}
