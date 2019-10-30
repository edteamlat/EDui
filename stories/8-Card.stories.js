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

export const HorizontaltCard = () => (
	<EDgrid medium={2} gap={2} rowsGap>
		<Card>
			<Card.Body horizontal>
				<Card.Header
					horizontal
					image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/figma-desde-cero-poster.png"
				/>
				<Card.Content horizontal>
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
		<Card>
			<Card.Body horizontal>
				<Card.Header
					horizontal
					image="https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png"
				/>
				<Card.Content horizontal>
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
