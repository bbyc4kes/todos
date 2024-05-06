import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { sliderStyles } from './todo-slider.styles';

import 'swiper/css';
import 'swiper/css/navigation';

import TodoDetails from '../todo-details/todo-details.component';
import TodoAddSection from '../todo-add-section/todo-add-section.component';

export default function TodoSlider({ todos }): React.JSX.Element {
	return (
		<>
			<TodoAddSection>
				<Swiper
					pagination={{
						type: 'fraction',
					}}
					slidesPerView={1.2}
					className={sliderStyles}
					navigation={true}
					modules={[Pagination, Navigation]}
				>
					{todos?.map((todo) => (
						<SwiperSlide key={todo.id}>
							<TodoDetails {...todo} />
						</SwiperSlide>
					))}
				</Swiper>
			</TodoAddSection>
		</>
	);
}
