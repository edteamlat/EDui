import React from "react";
import { Card, EDgrid } from "../src";

export default {
	title: "Card"
};

export const DefaultCard = () => (
	<EDgrid small={1} medium={3} large={4} gap={2} rowsGap>
		<Card>
			<Card.Body>
				<Card.Header image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/figma-desde-cero-poster.png" />
				<Card.Content>
					<Card.Title>Figma Desde Cero</Card.Title>
					<p className="small s-mb-0">
						Aprende a diseñar interfaces de usuario interactivas e impactantes
					</p>
				</Card.Content>
			</Card.Body>
			<Card.Footer>
				<p className="s-mb-0">Álvaro Felipe</p>
				<div className="s-to-right color first-color s-cross-center">
					<b>$ 20 USD</b>
				</div>
			</Card.Footer>
		</Card>

		<Card>
			<Card.Body>
				<Card.Header>
					<div className="img-container s-ratio-16-9">
						<img
							src="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png"
							className="s-radius-tl-1 s-radius-tr-1"
							alt="Adobe XD"
						/>
					</div>
				</Card.Header>
				<Card.Content>
					<Card.Title>Adobe Xd Desde Cero</Card.Title>
					<p className="small s-mb-0">
						Sé el flowmaster de los prototipos en la nube
					</p>
				</Card.Content>
			</Card.Body>
			<Card.Footer>
				<p className="s-mb-0">Álvaro Felipe</p>
				<div className="s-to-right color first-color s-cross-center">
					<b>$ 40 USD</b>
				</div>
			</Card.Footer>
		</Card>
	</EDgrid>
);

export const HorizontalCard = () => (
	<EDgrid medium={2} gap={2} rowsGap>
		<Card horizontal>
			<Card.Body>
				<Card.Header image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/figma-desde-cero-poster.png" />
				<Card.Content>
					<Card.Title>Figma Desde Cero</Card.Title>
					<p className="small s-mb-0">
						Aprende a diseñar interfaces de usuario interactivas
					</p>
				</Card.Content>
			</Card.Body>
			<Card.Footer>
				<p className="s-mb-0">Álvaro Felipe</p>
				<div className="s-to-right color first-color s-cross-center">
					<b>$ 20 USD</b>
				</div>
			</Card.Footer>
		</Card>
		<Card horizontal>
			<Card.Body>
				<Card.Header image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png" />
				<Card.Content>
					<Card.Title>Adobe Xd Desde Cero</Card.Title>
					<p className="small s-mb-0">
						Sé el flowmaster de los prototipos en la nube
					</p>
				</Card.Content>
			</Card.Body>
			<Card.Footer>
				<p className="s-mb-0">Álvaro Felipe</p>
				<div className="s-to-right color first-color s-cross-center">
					<b>$ 40 USD</b>
				</div>
			</Card.Footer>
		</Card>
	</EDgrid>
);
