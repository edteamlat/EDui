# EDui

Libreria de componentes para React siguiendo la [Guia de estilos de EDteam](https://ux.ed.team/)

## Instalación
Para poder usar EDui primero se deben de tener instaladas las librerías [node-sass](https://www.npmjs.com/package/node-sass?activeTab=versions), [ed-grid](https://www.npmjs.com/package/ed-grid) y [edteam-style-guides](https://www.npmjs.com/package/edteam-style-guides), una vez instaladas estas librerías se puede instalar EDui
```bash
npm install node-sass ed-grid edteam-style-guides @edteam/edui --save
or
yarn add node-sass ed-grid edteam-style-guides @edteam/edui
```
Se instalan ed-grid y edteam-style-guides para que la libreria se independiente de la versión actual de la guia de estilos y de EDgrid, es decir que la libreria en su bundle no incluye ninguna hoja css.

## Uso en proyectos React
Primero se debe de crear un archivo sass donde se importen la guia de estilos y EDgrid
```css
  // styles.scss
  //----- Importación de EDgrid y guía de estilos -----//
  @import '~ed-grid/ed-grid';
  @import '~edteam-style-guides/edteam-style-guides';
```
Y ahora se importa esta hoja de estilos en el archivo principal de la aplicación.
```javascript
import React from "react"
import "./styles.scss" // La ruta donde esta la hoja de estilos

function App() {
	return (
		<>
			{/**Contenido de la aplicación**/}
		</>
	)
}
```

## Uso en proyectos Nextjs
Se debe de instalar [@zeit/next-sass](https://www.npmjs.com/package/@zeit/next-sass) para configurar sass en proyectos de Nextjs y configurar este plugin en el `next.config.js`
```javascript
  // next.config.js
  const withSass = require('@zeit/next-sass')
  module.exports = withSass()
```
En el archivo `styles.scss` se pone el mismo contenido que en el ejemplo pasado
```css
  // styles.scss
  //----- Importación de EDgrid y guía de estilos -----//
  @import '~ed-grid/ed-grid';
  @import '~edteam-style-guides/edteam-style-guides';
```
Y se puede importar esta hoja de estilos normalmente en nuestras paginas de Nextjs
```javascript
  import React, {Component} from 'react'
  import "../styles/styles.scss"

  export default class extends Component {
    render() {
      return(
        <div className="ed-container">
          <h1>My fisrt page with Next.js and EDgrid</h1>
        </div>
      )
    }
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
- FormItem
En Progreso
- Card
- Tabs
- Carousel

## Generalidades
Todos los componentes reciben todas las propiedades válidas que se le puedan dar a los elementos HTML que renderizan, por ejemplo al componente `Button` se le puede pasar de manera normal propiedades como `id`, `onClick`, entre otras.
Además que a todos se les puede pasar la propiedad `ref` para dar valor a alguna referencia de React.
**Ejemplo**
```javascript
const SampleComponent = () => (
  <>
    <Button onClick={/**Funcion*/} id="my-button" ref={myRef} className="content"></Button>
    <Form onSubmit={/*Funcion*/} ref={formRef}></Form>
    <Modal id="my-modal" ></Modal>
  </>
)
```
Y de esta manera con todos los componentes.

## [Colores](https://ux.ed.team/colores.html)
Algunos componentes reciben como propiedad el color del que será su fondo, esos posibles colores son:
- first
- second
- third
- accent
- dark

`Nota`: En caso de recibir un valor incorrecto o no recibir ningún valor se tomara como valor por defecto `first`. Para más información visitar la [Guía de estilos](https://ux.ed.team/colores.html)

### [EDgrid](https://ed-grid.com/)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| gap      			| Number 				| Valor del gap que tendrá el grid, acepta valores entre 0 y 4
| rowsGap      | bool      |   Indica si las filas del grid van a tener un gap entre ellas |
| as      | string      |   Indica que etiqueta HTML va a renderizar el EDgrid, por defecto es un `div` |
| small | Number      | Indica el numero de columnas que va tener el grid en pantallas pequeñas |
| medium | Number      | Indica el numero de columnas que va tener el grid en pantallas medianas |
| large | Number      | Indica el numero de columnas que va tener el grid en pantallas grandes |

**Ejemplo**
```javascript
	import { EDgrid } from '@edteam/edui'
	//...
	const MyComponent = () => (
		<EDgrid small={1} medium={4} gap={2} rowsGap as="article">
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
| small      | Number      | Indica el porcentaje del contenedor que ocupara el elemento en pantallas pequeñas, recibe los múltiplos de 5 del 0 al 100 |
| medium      | Number      | Indica el porcentaje del contenedor que ocupara el elemento en pantallas mediana, recibe los múltiplos de 5 del 0 al 100 |
| large     | Number      | Indica el porcentaje del contenedor que ocupara el elemento en pantallas grandes, recibe los múltiplos de 5 del 0 al 100 |

`Nota: ` Las propiedades `small`, `medium` y `large` tambien soportan definiciones por fracciones recibiendo el objeto de la forma { numerator: number, denominator: number } y además por defecto `small` tiene valor de `100` y tanto `medium` como `large` reciben el valor del último breakpoint declarado, por defecto `medium` tendrá el valor de `small` y `large` el valor que tenga `medium`.

**Ejemplo:**
```javascript
	import { EDcontainer, EDitem } from '@edteam/edui'
	//...
	const MyComponent = () => (
		<EDcontainer>
			<EDitem small={100} medium={50}>
				<p>
					En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
          no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
          adarga antigua, rocín flaco y galgo corredor.
				</p>
			</EDitem>
			<EDitem small={100} medium={25}>
				<p>
					En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
          no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero,
          adarga antigua, rocín flaco y galgo corredor.
				</p>
			</EDitem>
      <EDitem small={100}
        medium={{ numerator: 1, denominator: 4 }}
      >
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
| color      			| string 				| Indica  el color del banner, por defecto es `first` |
| diagonal      			| bool 				| Indica  si se le agregara diagonal al final del contenedor |
| image      			| string 				| Url de imagen de fondo del banner |
| imageAlt      			| string 				| Propiedad alt de la imagen de fondo |

**Ejemplo:**
```javascript
import { Banner } from '@edteam/edui';

const MyComponent = () => (
	<Banner
    color="dark"
    image="https://images.pexels.com/photos/1981043/pexels-photo-1981043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    imageAlt="Test picture"
    diagonal
  >
    <h1>Banner</h1>
  </Banner>
);
```

### [Topbar](https://ux.ed.team/topbar.html)
#### Props
| Nombre        | Tipo           | Descripción  |
| ------------- |:-------------:| -----:|
| color      			| string 				| Indica color del topbar, recibe valores siguiendo los [colores de EDteam](https://ux.ed.team/colores.html)|

**Ejemplo:**
```javascript
import React from 'react';
import { Topbar } from '@edteam/edui';

const MyComponent = () => (
  <Topbar color="dark">
		Contenido
	</Topbar>
)
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
| responsive      			| bool 				| Indica si la tabla va a ser responsive, por defecto el valor es `true`|

**Colores:**
- secondary
- tertiary
- accent
- dark
- default (`first`)
**Ejemplo:**
```javascript
import { Table } from '@edteam/edui';

const MyComponent = () => (
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
);
```

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

const FormSample = () => (
  <Form>
    <Form.FormItem>
      <Form.Input type="text" placeholder="Input your name" id="name" />
    </Form.FormItem>
    <Form.FormItem as="article">
      <Form.Input type="email" placeholder="Input your email" />
    </Form.FormItem>
    <Form.FormItem>
      <Form.Input type="password" placeholder="Input your password" />
    </Form.FormItem>
    <Button full type="submit">
      Submit
    </Button>
  </Form>
);
```
`Nota:` El mismo ejemplo puede ser desarrollado usando el componente `EDgrid` y al igual que el EDgrid `FormItem`, puede recibir la props `as` para indicar la etiqueta HTML que va a representar, la cual sera por defecto `div`.

```javascript
const FormSample = () => (
  <Form>
    <EDgrid small={1} medium={2} gap={2} rowsGap>
      <Form.Input type="text" placeholder="Input your name" id="name" />
      <Form.Input type="text" placeholder="Input your lastname" id="lastname" />
      <Form.Input type="text" placeholder="Input your city" id="city" />
      <Form.Input type="text" placeholder="Input your country" id="country" />
      <Form.Select>
        <option>America</option>
        <option>Europe</option>
      </Form.Select>
      <Form.TextArea
        placeholder="Input your biography"
        className="s-cols-1 m-cols-2"
      />
      <Button full type="submit" className="s-cols-1 m-cols-2">
        Submit
      </Button>
    </EDgrid>
  </Form>
);
```
