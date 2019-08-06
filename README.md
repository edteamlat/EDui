# EDui

Libreria de componentes para React siguiendo la [Guia de estilos de EDteam](https://ux.ed.team/)

## Instalación
Para poder usar EDui primero se deben de tener instaladas las librerías [React](https://github.com/facebook/react) y [Styled Components](https://github.com/styled-components/styled-components), una vez instaladas estas librerías se puede instalar EDui
```bash
npm install @edteam/edui --save
or
yarn add @edteam/edui
```

## Uso
Para que la librería funcione de manera normal en el componente principal del proyecto se debe incluir el componente `GlobalStyles`
```javascript
import { GlobalStyles } from '@edteam/edui';

function App() {
	return (
		<>
			<GlobalStyles />
			{/**Contenido de la aplicación**/}
		</>
	)
}
```
## Componentes
Actualmente se tienen construidos los siguientes componentes
- EDgrid
- EDcontainer
- EDitem
- Banner
- Topbar
- Button
- Table
- Modal
- Input
- TextArea
- Select
- Label

Y en proceso están los componentes de:
- Tabs

## [Colores](https://ux.ed.team/colores.html)
Algunos componentes reciben como propiedad el color del que será su fondo, esos posibles colores son:
- first-color
- second-color
- third-color
- accent-color
- dark-color

`Nota`: En caso de recibir un valor incorrecto o no recibir ningún valor se tomara como valor por defecto `first-color`. Para más información visitar la [Guía de estilos](https://ux.ed.team/colores.html)

### [EDgrid](https://ed-grid.com/)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| gap      			| Number 				| Valor del gap que tendrá el grid, acepta valores entre 0 y 4
| rowGap      | bool      |   Indica si las filas del grid van a tener un gap entre ellas |
| full | bool      | Indica si el contenedor del grid va a ocupar todo el ancho disponible     |
| center | bool      | Indica si el contenedor del grid va a estar centrado|
| right | bool      | Indica si el contenedor del grid va a estar alineado a la derecha     |
| left | bool      | Indica si el contenedor del grid va a estar alineado a la izquierda     |
| s | Number      | Indica el numero de columnas que va tener el grid en pantallas pequeñas |
| m | Number      | Indica el numero de columnas que va tener el grid en pantallas medianas |
| l | Number      | Indica el numero de columnas que va tener el grid en pantallas grandes |
| lg | Number      | Indica el numero de columnas que va tener el grid en pantallas extra grandes|

**Ejemplo**
```javascript
	import { EDgrid } from '@edteam/edui'
	//...
	const MyComponent = () => (
		<EDgrid s={1} m={4} gap={2} rowGap>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
		</EDgrid>
	);
```

### [EDcontainer](https://ed-grid.com/documentacion/layout-flexbox.html#ed-container-y-ed-item)
**Ejemplo:**
```javascript
	import { EDcontainer } from '@edteam/edui'
	//...
	const MyComponent = () => (
		<EDcontainer>
		{/**Hijos, que deberian ser EDitem**/}
		</EDcontainer>
	);
```

### [EDitem](https://ed-grid.com/documentacion/layout-flexbox.html#ed-container-y-ed-item)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| formItem      			| bool 				| Indica si el elemento será un item del formulario, esto agrega separación vertical entre los elementos
| s      | Number      | Indica el porcentaje del contenedor que ocupara el elemento en pantallas pequeñas, recibe los múltiplos de 5 del 0 al 100 |
| m      | Number      | Indica el porcentaje del contenedor que ocupara el elemento en pantallas mediana, recibe los múltiplos de 5 del 0 al 100 |
| l      | Number      | Indica el porcentaje del contenedor que ocupara el elemento en pantallas grandes, recibe los múltiplos de 5 del 0 al 100 |
| lg      | Number      | Indica el porcentaje del contenedor que ocupara el elemento en pantallas extra grandes, recibe los multiplos de 5 del 0 al 100 |
**Ejemplo:**
```javascript
	import { EDcontainer, EDitem } from '@edteam/edui'
	//...
	const MyComponent = () => (
		<EDcontainer>
			<EDitem s={100} m={50}>
				<p>
					En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
adarga antigua, rocín flaco y galgo corredor.
				</p>
			</EDitem>
			<EDitem s={100} m={50}>
				<p>
					En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
adarga antigua, rocín flaco y galgo corredor.
				</p>
			</EDitem>
			<EDitem s={100} m={50}>
				<p>
					En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
adarga antigua, rocín flaco y galgo corredor.
				</p>
			</EDitem>
		</EDcontainer>
	);
```

### [Banner](https://ux.ed.team/banner.html)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| diagonal      			| bool 				| Indica  si se le agregara diagonal al final del contenedor |
| imageContainer      			| bool 				| Indica  si se le agregara foto de fondo al contenedor, esta foto será agregada en el marcado del componente |

**Ejemplo:**
```javascript
import { Banner, EDgrid } from '@edteam/edui';

const MyComponent = () => (
	<Banner diagonal imageContainer>
		<EDgrid m={6}>
			<div className="s-cols-4 s-x-2">
				<img src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
					className="main-banner__img"
					alt="banner picture" />
				<div class="main-banner__data">
					<h2>Contenido</h2>
				</div>
			</div>
		</EDgrid>
		</Banner>
);
```

### [Topbar](https://ux.ed.team/topbar.html)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| color      			| string 				| Indica color del topbar, recibe valores siguiendo los [colores de EDteam](https://ux.ed.team/colores.html)|
| visible      			| bool 				| Indica  si el topbar estará visible o no |

**Ejemplo:**
```javascript
import React,{ useState } from 'react';
import { Topbar, Button } from '@edteam/edui';

function MyComponent() {
	const [visible, setVisible] = useState(true)

	function toggleTopbar() {
		setVisible(!visible)
	}

	return (
		<div>
			<Topbar visible={visible}>
				Contenido
			</Topbar>
			{/**Definicion de este componente más abajo en el README **/}
			<Button onClick={toggleTopbar}>
				{visible ? 'Ocultar' : 'Mostrar'}
			</Button>
		</div>
	)
}
```
### [Button](https://ux.ed.team/botones.html)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| color      			| string 				| Indica color del botón, recibe valores siguiendo los [colores de EDteam](https://ux.ed.team/colores.html)|
| tiny      			| bool 				| Indica  si el botón será de tipo tiny |
| micro      			| bool 				| Indica  si el botón será de tipo micro |
| full      			| bool 				| Indica  si el botón ocupara todo el ancho disponible |
| ghost      			| bool 				| Indica  si el botón será de fondo transparente, y solo consta de borde y texto. |

### [Table](https://ux.ed.team/tablas.html)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| type      			| string 				| Indica color principal de la tabla|

**Colores:**
- secondary
- tertiary
- accent
- dark
- default (`first-color`)
**Ejemplo:**
```javascript
import { Table, TableContainer } from '@edteam/edui';

const MyComponent = () => (
	<TableContainer>
		<Table type='tertiary'>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Email</th>
				<th>Acciones</th>
			</tr>
			<tr>
				<td>1</td>
				<td>Alejandro</td>
				<td>alejogs4@gmail.com</td>
				<td>Aqui las acciones</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Alejandro</td>
				<td>alejogs4@gmail.com</td>
				<td>Aqui las acciones</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Alejandro</td>
				<td>alejogs4@gmail.com</td>
				<td>Aqui las acciones</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Alejandro</td>
				<td>alejogs4@gmail.com</td>
				<td>Aqui las acciones</td>
			</tr>
		</Table>
	</TableContainer>
);
```

`Nota`: TableContainer es indispensable para que la tabla sea responsive.

### [Modal](https://ux.ed.team/modal.html)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| open      			| bool 				| Indica si el modal va estar abierto|
| close      			| func 				| Función que cierra el modal |

**Ejemplo:**

```javascript
import React,{ useState } from 'React';
import { Modal, Button } from '@edteam/edui';

function MyComponent() {
	const [open, setOpen] = useState(false);

	function closeModal() {
		setOpen(false)
	}

	function openModal() {
		setOpen(true)
	}

	return (
		<>
			<Modal open={open} close={closeModal}>
				<h2>EDmodal</h2>
			</Modal>
			<Button onClick={openModal}>Abrir modal</Button>
		</>
	)
}
```

### Elementos del formulario
Tanto Select, los inputs, el textarea funcionan de manera normal como cualquier elemento html.
**Ejemplo:**
```javascript

const Form = () => (
		<form>
			<EDcontainer>
				<EDitem s={100} m={50} formItem>
					<Input placeholder="Name" />
				</EDitem>
				<EDitem s={100} m={50} formItem>
					<Input placeholder="Email" type="email" />
				</EDitem>
				<EDitem s={100} m={50} formItem>
					<Input placeholder="Password" type="password" />
				</EDitem>
				<EDitem s={100} m={50} formItem>
					<Input placeholder="Repeat Password" type="password" />
				</EDitem>
			<EDitem formItem>
					<Select>
						<option>Colombia</option>
						<option>Bolivia</option>
						<option>Argentina</option>
						<option>Peru</option>
						<option>Mexico</option>
					</Select>
				</EDitem>
				<EDitem formItem>
					<TextArea placeholder="Biography" />
				</EDitem>
				<EDitem formItem>
					<Button type="submit" full>Register</Button>
				</EDitem>
			</EDcontainer>
		</form>
);
```
`Nota:` El mismo ejemplo puede ser desarrollado usando el componente `EDgrid`
