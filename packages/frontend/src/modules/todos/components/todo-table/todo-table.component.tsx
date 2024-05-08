import { Button, HTMLTable } from '@blueprintjs/core';
import React from 'react';
import {
	actionsColumnStyles,
	descriptionColumnStyles,
	tableStyles,
	titleColumnStyles,
} from './todo-table.styles';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import DeleteButton from '../todo-delete-button/todo-delete-button.component';
import { truncateText } from '~shared/utils/truncate-text';
import TodoCheckbox from '../todo-switch/todo-switch.component';
import TodoAddSection from '../todo-add-section/todo-add-section.component';

export default function TodoTable({ todos }): React.JSX.Element {
	return (
		<>
			<TodoAddSection>
				<HTMLTable className={tableStyles} bordered compact striped>
					<thead>
						<tr>
							<th>Todo Title</th>
							<th>Description</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => (
							<tr key={todo.id}>
								<td className={titleColumnStyles}>
									{todo.title}
								</td>
								<td className={descriptionColumnStyles}>
									{truncateText(todo?.description, 30)}
								</td>
								<td>
									<div className={actionsColumnStyles}>
										<Link
											to={`${ROUTER_KEYS.TODOS}/${todo.id}`}
										>
											<Button>Edit</Button>
										</Link>
										<TodoCheckbox id={todo.id} />
										<DeleteButton
											id={todo.id}
										></DeleteButton>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</HTMLTable>
			</TodoAddSection>
		</>
	);
}
